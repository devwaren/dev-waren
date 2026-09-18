import {
	About,
	GetInTouch,
	Hero,
	NpmPackages,
	SelectedProjects,
	Technologies,
} from "./sections";

export default function HomePage() {
	return (
		<div className="space-y-8 pt-4">
			<Hero />
			<SelectedProjects />
			<NpmPackages />
			<Technologies />
			<About />
			<GetInTouch />
		</div>
	);
}
