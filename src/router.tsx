import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { setupRouterSsrQueryIntegration } from "@tanstack/react-router-ssr-query";
import { routeTree } from "./gen";
import { getContext } from "./integrations/tanstack-query/root-provider";
import { generateTokens } from "./libs/server/gen";
import { token } from "./libs/server/token";

export async function getRouter() {
	const { queryClient } = getContext();

	const tokens = await generateTokens();

	if (!tokens) {
		throw new Error("Failed to generate tokens.");
	}

	token.setState(tokens);

	const router = createTanStackRouter({
		routeTree,
		context: {
			queryClient,
			tokens,
		},
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		ssr: {
			nonce: tokens.nonce,
		},
	});

	setupRouterSsrQueryIntegration({ router, queryClient });

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
