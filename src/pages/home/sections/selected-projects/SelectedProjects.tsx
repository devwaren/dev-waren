import { Mapper } from "@dev-waren/react-form-kit";
import { Link } from "@tanstack/react-router";
import useEmblaCarousel from "embla-carousel-react";
import { MoveRight } from "lucide-react";
import { assets } from "#/assets/index.ts";

const projects = [
	{
		title: "Magic 89.9",
		description:
			"A full-featured radio station platform with live streaming, show schedules, news publishing, interactive polls, and a dynamic content experience.",
		image: assets.magic,
		url: "https://magic899.com",
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
		url: "https://dogranch.vercel.app",
		technologies: ["Vanilla TS", "TypeScript", "TanStack Query", "MongoDB"],
	},
	{
		title: "TFlix",
		description:
			"A lightweight movie discovery platform featuring movie details, latest releases, and a clean, responsive browsing experience.",
		image: assets.movie,
		url: "https://movie-app-mtdb.vercel.app/",
		technologies: ["Vanilla TS", "Zustand", "Tailwind CSS"],
	},
];

export default function SelectedProjects() {
	const [emblaRef] = useEmblaCarousel({
		loop: true,
		align: "start",
	});

	return (
		<section className="relative space-y-8 bg-gray-100 py-8">
			<div
				aria-hidden="true"
				className="absolute inset-y-0 -left-24 -right-24 -z-10 bg-gray-100"
			/>

			{/* Header */}
			<div className="space-y-4">
				<div className="flex items-center justify-between">
					<p className="text-sm uppercase tracking-wide text-gray-600">
						Selected Work
					</p>

					<Link
						to="/projects"
						className="group flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-black"
					>
						View Projects
						<MoveRight
							size={18}
							className="transition-transform duration-200 group-hover:translate-x-1"
						/>
					</Link>
				</div>

				<div className="space-y-4">
					<h2 className="text-4xl font-medium tracking-tight">
						Digital Products,{" "}
						<span className="text-gray-500">Thoughtfully Engineered</span>
					</h2>

					<p className="max-w-2xl leading-7 text-gray-500">
						A selection of digital products designed with purposeful interfaces,
						thoughtful visual systems, and polished user experiences.
					</p>
				</div>
			</div>

			{/* Carousel */}
			<div ref={emblaRef} className="overflow-hidden">
				<Mapper
					listFor="carousel"
					items={projects}
					className="-ml-3 flex items-stretch"
				>
					{(project) => (
						<div className="min-w-0 flex-[0_0_100%] pl-3 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className="group grid h-full grid-rows-[auto_1fr] overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
							>
								<div className="overflow-hidden">
									<img
										src={project.image}
										alt={project.title}
										className="aspect-video w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
									/>
								</div>

								<div className="grid grid-rows-[auto_auto_1fr] gap-3 p-5">
									<h3 className="text-xl font-semibold">{project.title}</h3>

									<p className="text-sm leading-6 text-gray-500">
										{project.description}
									</p>

									<div className="flex flex-wrap content-end gap-1.5">
										{project.technologies.map((technology) => (
											<span
												key={technology}
												className="h-fit rounded-full border border-gray-200 px-2.5 py-1 text-[11px] text-gray-500"
											>
												{technology}
											</span>
										))}
									</div>
								</div>
							</a>
						</div>
					)}
				</Mapper>
			</div>
		</section>
	);
}
