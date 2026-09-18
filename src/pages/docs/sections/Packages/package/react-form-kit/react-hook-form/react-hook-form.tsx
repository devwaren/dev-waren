import { Mapper } from "@dev-waren/react-form-kit";
import { Form } from "@dev-waren/react-form-kit/hook-form";
import { Button, CodeBlock } from "#/shared/components/index.ts";
import { block } from "./code";
import { Input } from "./components";
import { fields } from "./constants";
import { useLoginForm } from "./hooks";

export function ReactHookForm() {
	const { form, output } = useLoginForm();

	return (
		<>
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
			<div className="mt-14">
				<div className="mb-7">
					<div className="mb-3 flex items-center gap-3">
						<span className="font-mono text-xs text-neutral-400">07</span>

						<span className="h-px w-8 bg-neutral-200 dark:bg-neutral-800" />
					</div>

					<h2 className="text-xl font-medium tracking-tight text-neutral-950 dark:text-white">
						Finished React Hook Form
					</h2>

					<p className="mt-2 max-w-xl text-sm leading-6 text-neutral-500">
						Congratulations! You've just created a login form.
					</p>
				</div>

				<div className="grid gap-4 lg:grid-cols-2">
					{/* Terminal */}
					<div className="overflow-hidden rounded-xl border border-[#30343b] bg-[#1e1e1e]">
						<div className="flex items-center justify-between border-b border-[#30343b] bg-[#181a1f] px-4 py-2">
							<span className="font-mono text-xs text-gray-400">terminal</span>

							<span className="text-[10px] uppercase tracking-widest text-gray-500">
								output
							</span>
						</div>

						<div className="min-h-45 px-4 py-4 font-mono text-sm">
							{output ? (
								<>
									<div className="text-gray-500">
										$ submitted react-hook-form data:
									</div>

									<pre className="mt-2 whitespace-pre-wrap text-gray-300">
										{JSON.stringify(output, null, 2)}
									</pre>

									<div className="mt-4 text-green-400">
										✓ Data Submitted Successfully.
									</div>
								</>
							) : (
								<div className="text-gray-600">
									$ Waiting for form submission...
								</div>
							)}
						</div>
					</div>

					<Form
						{...form}
						className="space-y-4 rounded-xl border border-gray-200 p-5 dark:border-gray-800"
					>
						<div>
							<h2 className="text-gray-700 dark:text-gray-200">Welcome Back</h2>

							<p className="text-sm text-gray-400">
								Please enter your credentials to login.
							</p>
						</div>

						<Mapper listFor="login-fields" items={fields}>
							{(item) => <Input {...item} />}
						</Mapper>

						<Button
							type="submit"
							variant="outline"
							className="w-full rounded-md bg-gray-600 font-normal text-white"
						>
							Login
						</Button>
					</Form>
				</div>
			</div>
		</>
	);
}
