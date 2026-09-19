import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";
import { assets } from "#/assets/index.ts";
import { useHeroGSAP } from "./hooks";

export default function Hero() {
	const { heroRef, contentRef, descriptionRef, actionsRef, portraitRef } =
		useHeroGSAP();

	return (
		<section
			ref={heroRef}
			className="flex min-h-120 flex-col items-center gap-12 overflow-hidden md:flex-row md:gap-8"
		>
			<div ref={contentRef} className="w-full flex-1 space-y-8">
				<div className="hero-heading max-w-[90%] text-xl leading-[1.2] text-gray-400 lg:text-5xl">
					<p>
						<span className="text-gray-800">Designing</span> thoughtful digital
						experiences.
					</p>

					<h2>
						Scalable <span className="text-gray-800">UI/UX systems</span> and{" "}
						<span className="text-gray-800">
							high-performance SSR web applications.
						</span>
					</h2>
				</div>

				<p
					ref={descriptionRef}
					className="max-w-2xl text-sm leading-relaxed text-gray-500 md:text-base lg:text-xl"
				>
					Full Stack Developer focused on scalable web applications, backend
					systems, and high-performance client–server architectures.
				</p>

				<div
					ref={actionsRef}
					className="grid w-full max-w-md gap-2 text-sm sm:grid-cols-2 lg:h-12 lg:gap-4 lg:text-base"
				>
					<button
						type="button"
						className="flex items-center justify-center gap-3 rounded-md bg-black px-4 py-2 text-white transition-opacity hover:opacity-80"
					>
						View My Work
						<MoveRight size={18} />
					</button>

					<Link
						to="/get-in-touch"
						className="flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-50"
					>
						Get in Touch
					</Link>
				</div>
			</div>

			<div
				ref={portraitRef}
				className="relative flex w-full flex-1 items-end justify-center overflow-hidden rounded-b-[2rem] md:justify-end"
			>
				<img
					src={assets.devwaren}
					alt="Dev Waren"
					className="h-auto max-h-128 w-auto max-w-full object-contain"
					loading="eager"
				/>
			</div>
		</section>
	);
}
