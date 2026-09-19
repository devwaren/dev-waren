import type { QueryClient } from "@tanstack/react-query";
import {
	createRootRouteWithContext,
	HeadContent,
	Scripts,
} from "@tanstack/react-router";
import { AnimatedCursor } from "#/shared/components";
import { MainLayout } from "#/shared/layouts";
import { assets } from "../assets/index";
import { middlewares } from "../libs/server/middlewares";
import appCss from "../styles.css?url";

interface MyRouterContext {
	queryClient: QueryClient;
	tokens: {
		nonce: string;
		hmac256: string;
		hmac512: string;
	};
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	beforeLoad: ({ context }) => {
		const { tokens } = context;

		if (!tokens) {
			throw new Error("Security tokens are not available.");
		}

		return tokens;
	},
	loader: ({ context }) => {
		return { tokens: context.tokens };
	},
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Waren.dev",
			},
			{
				name: "author",
				content: "Waren Gador",
			},
			{
				name: "description",
				content: "Waren Gador's Official Website",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "icon",
				href: assets.devlogo,
			},
		],
	}),
	shellComponent: RootDocument,
	headers: async (ctx) => {
		const tokens = ctx.loaderData?.tokens;

		if (!tokens) {
			return;
		}

		return {
			...middlewares.headers(),
			...middlewares.csp(tokens),
		};
	},
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				<MainLayout>{children}</MainLayout>
				<AnimatedCursor />
				<Scripts />
			</body>
		</html>
	);
}
