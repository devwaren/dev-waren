import { createFileRoute } from "@tanstack/react-router";
import { Mongodb, ReactFormKit } from "#/pages/docs/sections/index.ts";

export const Route = createFileRoute("/docs/$")({
	component: RouteComponent,
});

function RouteComponent() {
	const { _splat } = Route.useParams();

	switch (_splat) {
		case "package=react-form-kit":
			return <ReactFormKit />;
		default:
			return <Mongodb />;
	}
}
