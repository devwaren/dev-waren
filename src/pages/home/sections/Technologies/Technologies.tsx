import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LogoCarousel } from "./components";

export default function Technologies() {
	return (
		<section className="relative">
			<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
				<div className="max-w-2xl">
					<div className="mb-5 flex items-center gap-3">
						<p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-400">
							Technologies
						</p>
					</div>

					<h2 className="text-4xl font-medium leading-[1.1] tracking-[-0.04em] text-gray-900 sm:text-5xl">
						Tools I <span className="text-gray-400">use to build modern </span>
						<span className="text-gray-600"> web applications.</span>
					</h2>
				</div>

				<Link
					to="/"
					className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-gray-900"
				>
					More about my stack
					<ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
				</Link>
			</div>

			<div className="mt-14">
				<LogoCarousel />
			</div>
		</section>
	);
}
