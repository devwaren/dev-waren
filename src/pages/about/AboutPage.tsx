import { Hero, WorkingExperience } from "./sections";

export default function AboutPage() {
	return (
		<div>
			<Hero />
			<div className="w-full h-px bg-gray-100"></div>
			<WorkingExperience />
		</div>
	);
}
