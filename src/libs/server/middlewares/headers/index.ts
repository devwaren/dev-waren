export function headers() {
    return {
        "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",

        "Cross-Origin-Opener-Policy": "same-origin",
        "Cross-Origin-Embedder-Policy": "unsafe-none",
        "Cross-Origin-Resource-Policy": "same-site",
        "Origin-Agent-Cluster": "?1",

        "Referrer-Policy": "strict-origin-when-cross-origin",

        "X-Frame-Options": "DENY",

        "Permissions-Policy": "camera=(), microphone=(), geolocation=(self), autoplay=(self), usb=(), bluetooth=(), payment=(), serial=(), xr-spatial-tracking=(), fullscreen=(self)",

        "X-Content-Type-Options": "nosniff",

        "Cache-Control": "public, max-age=300, stale-while-revalidate=60",
    };
}