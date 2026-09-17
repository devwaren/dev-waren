import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "#/pages/index.ts";

export const Route = createFileRoute("/about/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <AboutPage />;
}
