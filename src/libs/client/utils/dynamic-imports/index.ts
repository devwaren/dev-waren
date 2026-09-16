import { type ComponentType, lazy } from "react";

// biome-ignore lint/suspicious/noExplicitAny: requires any
const dynamic = <T extends ComponentType<any>>(
	loader: () => Promise<{ default: T }>,
) => {
	return lazy(loader);
};

export { dynamic };
