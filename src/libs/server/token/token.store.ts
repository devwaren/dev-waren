import { createStore } from "zustand/vanilla";
import type { TokenState } from "./types";

const token = createStore<TokenState>((set) => ({
	nonce: "",
	hmac256: "",
	hmac512: "",

	setNonce: (nonce) => set({ nonce }),
	setHmac256: (hmac256) => set({ hmac256 }),
	setHmac512: (hmac512) => set({ hmac512 }),
}));

export { token };
