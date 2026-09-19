type BufferLike = ArrayBuffer | ArrayBufferView;

type CryptoBase64Function = (val: BufferLike) => string;

export type { BufferLike, CryptoBase64Function };

export type GenHash = {
	nonce: (size?: number) => string;
	sha256: (val: string) => Promise<string>;
	sha512: (val: string) => Promise<string>;
	hmac256: (val: string) => Promise<string>;
	hmac512: (val: string) => Promise<string>;
};

export type Base64Func = (bytes: Uint8Array) => string;
