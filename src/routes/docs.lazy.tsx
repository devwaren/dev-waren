import { createLazyFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/docs")({
	component: RouteComponent,
});

function RouteComponent() {
	return <Outlet />;
}
