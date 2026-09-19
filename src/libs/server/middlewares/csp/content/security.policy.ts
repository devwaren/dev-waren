import { whiteList } from "./config";
import type { CSP } from "./types";

type Token = {
	nonce: string;
	hmac256: string;
	hmac512: string;
};

const csp = (tokens: Token): CSP => {
	const { nonce, hmac256, hmac512 } = tokens;

	const isDev = process.env.NODE_ENV !== "production";

	const directives = [
		"default-src 'self'",

		// Google AdSense / Google Ads scripts
		[
			"script-src",
			"'strict-dynamic'",
			`'nonce-${nonce}'`,
			`'sha256-${hmac256}'`,
			`'sha512-${hmac512}'`,
		].join(" "),

		[
			"style-src",
			"'self'",
			`'nonce-${nonce}'`,
			whiteList.hashes,
			"https://fonts.googleapis.com",
		].join(" "),

		// Images, including AdSense
		["img-src", "'self'", "data:", "blob:", whiteList.imageDomains].join(" "),

		// Fonts
		["font-src", "'self'", "data:", whiteList.fontsDomains].join(" "),

		// API / XHR / fetch / WebSocket
		[
			"connect-src",
			"'self'",
			"blob:",
			whiteList.mediaDomains,

			...(isDev ? ["ws:", "wss:"] : []),
		].join(" "),

		// Audio / video
		["media-src", "'self'", "blob:", whiteList.mediaDomains].join(" "),

		// Prevent plugins
		"object-src 'none'",

		// Restrict <base>
		"base-uri 'self'",

		// Forms
		"form-action 'self'",

		// Prevent your site being embedded
		"frame-ancestors 'none'",

		// Google AdSense iframes
		["frame-src", "'self'", whiteList.frameDomains].join(" "),

		// Workers
		"worker-src 'self' blob:",

		// Trusted Types
		"trusted-types default tanstack goog#html ContributorServingResponseClientJs#html 'allow-duplicates'",
		"require-trusted-types-for 'script'",
	];

	return {
		"Content-Security-Policy": directives.join("; "),
	};
};

export { csp };
