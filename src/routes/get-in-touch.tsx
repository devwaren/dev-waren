import { createFileRoute } from "@tanstack/react-router";
import { GetInTouch } from "#/pages";

export const Route = createFileRoute("/get-in-touch")({
	component: RouteComponent,
});

function RouteComponent() {
	return <GetInTouch />;
}
