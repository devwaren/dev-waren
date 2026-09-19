import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";
import { assets } from "#/assets/index.ts";
import { useHeroGSAP } from "./hooks";

export default function Hero() {
	const { heroRef, contentRef, descriptionRef, actionsRef, portraitRef } =
		useHeroGSAP();

	return (
		<div
			ref={heroRef}
			className="flex min-h-[30em] flex-col items-center overflow-hidden md:flex-row"
		>
			<div ref={contentRef} className="flex-1 space-y-8">
				<div className="hero-heading max-w-[90%] text-xl leading-[1.2em] text-gray-400 lg:text-5xl">
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
					className="text-sm text-gray-500 md:text-base lg:text-xl"
				>
					Full Stack Developer focused on scalable web applications, backend
					systems, and high-performance client–server architectures.
				</p>

				<div
					ref={actionsRef}
					className="grid gap-2 text-sm md:grid-cols-2 lg:h-12 lg:w-1/2 lg:gap-4 lg:text-base"
				>
					<button
						type="button"
						className="flex items-center justify-center gap-4 rounded-md bg-black py-2 text-white"
					>
						View My Work <MoveRight />
					</button>

					<Link
						to="/get-in-touch"
						className="rounded-md border border-gray-300 py-2 flex items-center justify-center"
					>
						Get in Touch
					</Link>
				</div>
			</div>

			<div
				ref={portraitRef}
				className="flex-1 overflow-hidden rounded-b-4xl relative"
			>
				<img
					src={assets.devwaren}
					alt="dev-waren"
					width={120}
					height={120}
					loading="lazy"
				/>
			</div>
		</div>
	);
}
