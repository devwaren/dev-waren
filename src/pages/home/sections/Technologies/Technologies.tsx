import { Link } from "@tanstack/react-router";

export default function Technologies() {
	return (
		<div>
			<div className="flex justify-between">
				<div>
					<p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-400">
						Technologies
					</p>

					<h2 className="max-w-xl text-4xl font-medium tracking-tight text-gray-900">
						Tools I{" "}
						<span className="text-gray-500">
							use to build modern web applications.
						</span>
					</h2>
				</div>
				<Link to="/">More about my stack</Link>
			</div>
		</div>
	);
}
