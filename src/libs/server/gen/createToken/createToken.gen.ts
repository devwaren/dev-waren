import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { createServerOnlyFn } from "@tanstack/react-start";

type TokenFactoryOptions = {
	secret: string;
};

const createTokenFactory = createServerOnlyFn(
	({ secret }: TokenFactoryOptions) => {
		function generate(fingerprint: string) {
			const nonce = randomBytes(32).toString("hex");

			const signature = createHmac("sha256", secret)
				.update(`${fingerprint}:${nonce}`)
				.digest("hex");

			return `${nonce}.${signature}`;
		}

		function verify(token: string, fingerprint: string): boolean {
			const [nonce, signature] = token.split(".");

			if (!nonce || !signature) {
				return false;
			}

			const expected = createHmac("sha256", secret)
				.update(`${fingerprint}:${nonce}`)
				.digest("hex");

			try {
				const actualBuffer = Buffer.from(signature, "hex");
				const expectedBuffer = Buffer.from(expected, "hex");

				if (actualBuffer.length !== expectedBuffer.length) {
					return false;
				}

				return timingSafeEqual(
					actualBuffer,
					expectedBuffer,
				);
			} catch {
				return false;
			}
		}

		return {
			generate,
			verify,
		};
	},
);

export { createTokenFactory };