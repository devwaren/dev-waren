import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
