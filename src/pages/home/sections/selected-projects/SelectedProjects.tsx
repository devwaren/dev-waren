import { Mapper } from "@dev-waren/react-form-kit";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { MoveRight } from "lucide-react";
import { assets } from "#/assets/index.ts";

const projects = [
	{
		title: "Magic 89.9 ",
		description:
			"A full-featured radio station platform with live streaming, show schedules, news publishing, interactive polls, and a dynamic content experience.",
		image: assets.magic,
		technologies: [
			"React",
			"TanStack Start",
			"Tailwind CSS",
			"MongoDB",
			"Zustand",
		],
	},
	{
		title: "Dog Ranch",
		description:
			"A modern pet-focused web platform designed to showcase dog-related services, information, and an engaging user experience.",
		image: assets.dogranch,
		technologies: ["Vanilla-ts", "TypeScript", "TanStack Query", "MongoDB"],
	},
	{
		title: "TFlix",
		description:
			"A lightweight movie discovery platform featuring movie details, latest releases, and a clean, responsive browsing experience.",
		image: assets.movie,
		technologies: ["Vanilla-ts", "Zustand", "Tailwind CSS"],
	},
];

export default function SelectedProjects() {
	const [emblaRef] = useEmblaCarousel({
		loop: true,
		align: "start",
		active: true,
	});

	return (
		<div className="relative space-y-8 bg-gray-100 py-8">
			<div className="absolute inset-0 -left-24 -right-24 -z-1 bg-gray-100 h-full" />

			{/* Header */}
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<p className="uppercase tracking-wide text-gray-600">Selected Work</p>

					<Link to="/projects" className="flex items-center gap-2 text-sm">
						View Projects <MoveRight size={18} />
					</Link>
				</div>

				<div className="space-y-4">
					<h2 className="text-4xl">
						Digital Products,{" "}
						<span className="text-gray-500">Thoughtfully Engineered</span>
					</h2>

					<p className="max-w-2xl text-gray-500">
						A selection of digital products designed with purposeful interfaces,
						thoughtful visual systems, and polished user experiences.
					</p>
				</div>
			</div>

			{/* Carousel */}
			<div className="grid min-h-[30em] overflow-hidden" ref={emblaRef}>
				<Mapper
					listFor="carousel"
					items={projects}
					className="-ml-3 flex items-stretch"
				>
					{(project) => (
						<div className="grid min-w-0 flex-[0_0_100%] grid-rows-1 pl-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
							<div className="grid h-full grid-rows-[auto_1fr] rounded-md border bg-white shadow-sm overflow-hidden group">
								<div className="overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="aspect-video w-full object-cover group-hover:scale-110 transition duration-300 ease-in-out"
									/>
								</div>

								<div className="grid grid-rows-[auto_auto_1fr] gap-3 p-5">
									<h3 className="text-xl font-semibold">{project.title}</h3>

									<p className="text-gray-500">{project.description}</p>

									<div className="flex flex-wrap gap-1.5">
										{project.technologies.map((technology) => (
											<span
												key={technology}
												className="rounded-full border border-gray-200 px-2.5 py-1 text-[11px] text-gray-500 h-fit"
											>
												{technology}
											</span>
										))}
									</div>
								</div>
							</div>
						</div>
					)}
				</Mapper>
			</div>
		</div>
	);
}
