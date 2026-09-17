import { createFileRoute } from "@tanstack/react-router";
import { DocumentationPage } from "#/pages/index.ts";

export const Route = createFileRoute("/docs/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <DocumentationPage />;
}
