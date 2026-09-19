export type TokenState = {
	nonce: string;
	hmac256: string;
	hmac512: string;

	setNonce: (nonce: string) => void;
	setHmac256: (hmac256: string) => void;
	setHmac512: (hmac512: string) => void;
};
