import type { CryptoBase64Function, GenHash } from "./types";

const base64: CryptoBase64Function = (input) => {
	const bytes =
		input instanceof ArrayBuffer
			? new Uint8Array(input)
			: new Uint8Array(input.buffer, input.byteOffset, input.byteLength);

	return btoa(String.fromCharCode(...bytes));
};

const encoder = new TextEncoder();

const digest = async (algorithm: "SHA-256" | "SHA-512", value: string) => {
	const hash = await crypto.subtle.digest(algorithm, encoder.encode(value));

	return base64(hash);
};

const hmacKey = crypto.getRandomValues(new Uint8Array(32));

const hmac = async (algorithm: "SHA-256" | "SHA-512", value: string) => {
	const key = await crypto.subtle.importKey(
		"raw",
		hmacKey,
		{
			name: "HMAC",
			hash: algorithm,
		},
		false,
		["sign"],
	);

	const signature = await crypto.subtle.sign(
		"HMAC",
		key,
		encoder.encode(value),
	);

	return base64(signature);
};

const gen: GenHash = {
	nonce: (size = 32) => {
		const arr = new Uint8Array(size);

		crypto.getRandomValues(arr);

		return base64(arr);
	},

	sha256: (val) => digest("SHA-256", val),

	sha512: (val) => digest("SHA-512", val),

	hmac256: (val) => hmac("SHA-256", val),

	hmac512: (val) => hmac("SHA-512", val),
};

export const generateTokens = async () => {
	const nonce = gen.nonce(32);

	return {
		nonce,
		sha256: await gen.sha256(nonce),
		sha512: await gen.sha512(nonce),
		hmac256: await gen.hmac256(nonce),
		hmac512: await gen.hmac512(nonce),
	};
};
