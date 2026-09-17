import { ExternalLink } from "lucide-react";

const CodeBlock = ({ file, children }: { file: string; children: string }) => {
	return (
		<div className="mt-5 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-950 dark:border-neutral-800">
			<div className="flex items-center border-b border-white/10 px-4 py-2.5">
				<span className="font-mono text-[11px] text-neutral-500">{file}</span>
			</div>

			<pre className="overflow-x-auto p-5 font-mono text-sm leading-7 text-neutral-300">
				<code className="text-gray-400">{children}</code>
			</pre>
		</div>
	);
};

export default function ReactFormKit() {
	return (
		<section className="mx-auto max-w-4xl px-6 py-24">
			{/* Header */}
			<header className="mb-16">
				<p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
					Package Documentation
				</p>

				<h1 className="text-4xl font-medium tracking-[-0.045em] text-neutral-950 sm:text-5xl dark:text-white">
					Get Started with React Form Kit
				</h1>

				<p className="mt-5 max-w-2xl text-base leading-7 text-neutral-500">
					Simple, reusable form utilities for building type-safe, maintainable
					React forms.
				</p>

				<div className="mt-7 flex flex-wrap items-center gap-4">
					<span className="rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 font-mono text-xs text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400">
						@dev-waren/react-form-kit
					</span>

					<a
						href="https://www.npmjs.com/package/@dev-waren/react-form-kit"
						target="_blank"
						rel="noreferrer"
						className="inline-flex items-center gap-1.5 text-sm text-neutral-500 transition hover:text-neutral-950 dark:hover:text-white"
					>
						View on npm
						<ExternalLink size={13} />
					</a>
				</div>
			</header>

			<div className="space-y-16">
				{/* Installation */}
				<section>
					<div className="mb-5">
						<p className="mb-2 font-mono text-xs text-neutral-400">01</p>

						<h2 className="text-xl font-medium tracking-tight text-neutral-950 dark:text-white">
							Installation
						</h2>

						<p className="mt-2 text-sm leading-6 text-neutral-500">
							Install the package using your preferred package manager.
						</p>
					</div>

					<CodeBlock file="terminal">
						{"npm install @dev-waren/react-form-kit"}
					</CodeBlock>
				</section>

				{/* Quick Start */}
				<section>
					<div className="mb-8">
						<p className="mb-2 font-mono text-xs text-neutral-400">02</p>

						<h2 className="text-xl font-medium tracking-tight text-neutral-950 dark:text-white">
							Quick Start
						</h2>

						<p className="mt-2 text-sm leading-6 text-neutral-500">
							Build a validated form using schemas, reusable fields, and the
							provided form utilities.
						</p>
					</div>

					<div className="space-y-6">
						<CodeBlock file="login-schema.ts">
							{`import { z } from "@dev-waren/react-form-kit";

const schema = {
  login: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
};`}
						</CodeBlock>

						<CodeBlock file="useLoginForm.ts">
							{`import { useFormSettings } from "@dev-waren/react-form-kit/hook-form";
import { schema } from "./validation/login-schema.ts"

const useLoginForm = () => {
  const form = useFormSettings({
    schema: schema.login,
    defaultValues: {
      email: "",
      password: "",
    },
    clearFields: ["email", "password"],
    onSubmit: (data) => {
      console.log("Submitted data:", data);
    },
  });

  return { form };
};`}
						</CodeBlock>

						<CodeBlock file="fields.ts">
							{`export const fields = [
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    name: "password",
    placeholder: "Enter password",
    type: "password",
  },
];`}
						</CodeBlock>

						<CodeBlock file="components/Input.tsx">
							{`import type { ComponentProps } from "react";
import { useInput } from "@dev-waren/react-form-kit/hook-form"

type Props = ComponentProps<"input">;

export default function Input(props: Props) {
  const { register } = useInput(props.name);

  return <input {...register} {...props} />;
}`}
						</CodeBlock>

						<CodeBlock file="Login.tsx">
							{`import {
  Form,
  Mapper,
} from "@dev-waren/react-form-kit";

import Input from "./components/Input";
import { fields } from "./fields";
import { useLoginForm } from "./hooks/useLoginForm";

export default function LoginForm() {
  const { form } = useLoginForm();

  return (
    <Form {...form}>
      <Mapper
        listFor="login form"
        items={fields}
        className="space-y-2"
      >
        {(field) => <Input {...field} />}
      </Mapper>

      <button type="submit">
        Login
      </button>
    </Form>
  );
}`}
						</CodeBlock>
					</div>
				</section>
			</div>
		</section>
	);
}
