import type { PropsWithChildren } from "react";
import { Navbar } from "./components";

type Props = PropsWithChildren;

export default function MainLayout({ children }: Props) {
	return (
		<main className="max-w-[90%] mx-auto w-full">
			<Navbar />
			{children}
		</main>
	);
}
