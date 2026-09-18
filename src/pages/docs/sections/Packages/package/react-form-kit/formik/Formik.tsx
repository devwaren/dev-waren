import { Mapper } from "@dev-waren/react-form-kit";
import { CodeBlock } from "#/shared/components/index.ts";
import { block } from "./code";

export function Formik() {
	return (
		<Mapper listFor="terminals" items={block} className="space-y-14">
			{(item) => (
				<li key={item.id}>
					<div className="mb-7">
						<div className="mb-3 flex items-center gap-3">
							<span className="font-mono text-xs text-neutral-400">
								{item.id}
							</span>

							<span className="h-px w-8 bg-neutral-200 dark:bg-neutral-800" />
						</div>

						<h2 className="text-xl font-medium tracking-tight text-neutral-950 dark:text-white">
							{item.label}
						</h2>

						<p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
							{item.desc}
						</p>
					</div>

					<CodeBlock file={item.file}>{item.code}</CodeBlock>
				</li>
			)}
		</Mapper>
	);
}
