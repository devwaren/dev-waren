import { MoveRight } from "lucide-react";
import { assets } from "#/assets/index.ts";

export default function Hero() {
	return (
		<div className="min-h-[30em] overflow-hidden flex items-center ">
			<div className="flex-1 space-y-8">
				<div className="max-w-[90%] text-gray-400 text-5xl leading-[1.2em]">
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
				<p className="text-gray-500 text-xl">
					Full Stack Developer focused on scalable web applications, backend
					systems, and high-performance client–server architectures.
				</p>

				<div className="grid grid-cols-2 w-1/2 h-12 gap-4">
					<button
						type="button"
						className="bg-black text-white rounded-md flex items-center justify-center gap-4"
					>
						View My Work <MoveRight />
					</button>
					<button type="button" className="border border-gray-300 rounded-md">
						Get in Touch
					</button>
				</div>
			</div>
			<div className="flex-1 rounded-b-4xl overflow-hidden ">
				<img src={assets.devwaren} alt="dev-waren" />
			</div>
		</div>
	);
}
