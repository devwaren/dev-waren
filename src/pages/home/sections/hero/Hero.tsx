import { MoveRight } from "lucide-react";
import { assets } from "#/assets/index.ts";

export default function Hero() {
	return (
		<div className="min-h-[30em] overflow-hidden flex flex-col md:flex-row items-center">
			<div className="flex-1 space-y-8">
				<div className="max-w-[90%] text-gray-400 text-xl lg:text-5xl leading-[1.2em]">
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
				<p className="text-gray-500 text-sm md:text-base lg:text-xl">
					Full Stack Developer focused on scalable web applications, backend
					systems, and high-performance client–server architectures.
				</p>

				<div className="grid md:grid-cols-2 lg:w-1/2 lg:h-12 gap-2 lg:gap-4 text-sm lg:text-base my-4 md:my-0">
					<button
						type="button"
						className="bg-black text-white rounded-md flex items-center justify-center gap-4 py-2"
					>
						View My Work <MoveRight />
					</button>
					<button
						type="button"
						className="border border-gray-300 rounded-md py-2"
					>
						Get in Touch
					</button>
				</div>
			</div>
			<div className="flex-1 rounded-b-4xl overflow-hidden relative">
				<img src={assets.devwaren} alt="dev-waren" />
			</div>
		</div>
	);
}
