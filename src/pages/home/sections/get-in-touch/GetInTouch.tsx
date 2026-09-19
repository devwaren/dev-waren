import { Link } from "@tanstack/react-router";
import { MoveRight } from "lucide-react";
import { PiPaperPlaneDuotone } from "react-icons/pi";
import { useGetInTouchGSAP } from "./hooks";

export default function GetInTouch() {
	const {
		sectionRef,
		labelRef,
		titleRef,
		descriptionRef,
		buttonRef,
		planeRef,
		glowRef,
	} = useGetInTouchGSAP();

	return (
		<section
			ref={sectionRef}
			className="relative overflow-hidden border-t border-gray-200 py-20"
		>
			<div
				ref={glowRef}
				className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200/70 blur-3xl"
			/>

			<div className="relative flex flex-col justify-between gap-10 md:flex-row md:items-end">
				<div className="max-w-2xl space-y-5">
					<p
						ref={labelRef}
						className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400"
					>
						Let's work together
					</p>

					<h2
						ref={titleRef}
						className="text-4xl font-medium tracking-tight text-gray-900 sm:text-5xl"
					>
						Have a project in mind?
					</h2>

					<p
						ref={descriptionRef}
						className="max-w-lg text-base leading-7 text-gray-500"
					>
						I'm open to freelance work, full-time opportunities, or just a
						thoughtful conversation about building something great.
					</p>
				</div>

				<div className="relative">
					<div
						ref={planeRef}
						className="pointer-events-none absolute left-[-60%] top-[-150%] z-[-1] text-gray-300"
					>
						<PiPaperPlaneDuotone size={250} />
					</div>

					<Link
						ref={buttonRef}
						to="/get-in-touch"
						className="group relative inline-flex w-fit items-center gap-3 rounded-full bg-gray-900 px-6 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-700"
					>
						Get in touch
						<MoveRight
							size={18}
							className="transition-transform duration-300 group-hover:translate-x-1"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
}
