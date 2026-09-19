import { Mapper } from "@dev-waren/react-form-kit";
import { timeline } from "./constants";

export default function WorkingExperience() {
	return (
		<section className="min-h-[26em] space-y-8  pb-8 flex items-center">
			<div className="space-y-8">
				<h2 className="text-2xl lg:text-4xl">
					Work <span className="text-gray-500">Experience</span>
				</h2>

				<Mapper
					listFor="working experience"
					items={timeline}
					className="space-y-8 md:space-y-16"
				>
					{(item) => (
						<li className="flex flex-col space-y-4 md:flex-row justify-between md:items-center">
							<div className="flex-2">
								<p>{item.company}</p>
								<p className="text-sm text-gray-600">{item.year}</p>
							</div>
							<div className="text-left flex-1 space-y-2">
								<h2>Position: {item.role}</h2>
								<p className="text-sm leading-6 text-gray-500">{item.desc}</p>
							</div>
						</li>
					)}
				</Mapper>
			</div>
		</section>
	);
}
