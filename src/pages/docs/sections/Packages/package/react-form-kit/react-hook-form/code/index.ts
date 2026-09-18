export const block = [
	{
		id: "01",
		label: "Installation",
		desc: "Install React Form Kit using your preferred package manager.",
		file: "terminal",
		code: `npm install @dev-waren/react-form-kit`,
	},
	{
		id: "02",
		label: "Define Your Schema",
		desc: "Create a type-safe validation schema for your form fields.",
		file: "validation/login-schema.ts",
		code: `import { z } from "@dev-waren/react-form-kit";

export const schema = {
  login: z.object({
    email: z.string().email(),
    password: z.string().min(8),
  }),
};`,
	},
	{
		id: "03",
		label: "Configure the Form",
		desc: "Initialize the form with validation, default values, and submission behavior.",
		file: "hooks/useLoginForm.ts",
		code: `import { useFormSettings } from "@dev-waren/react-form-kit/hook-form";
import { schema } from "../validation/login-schema";

export const useLoginForm = () => {
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
};`,
	},
	{
		id: "04",
		label: "Define Form Fields",
		desc: "Describe your fields in a reusable configuration list.",
		file: "fields.ts",
		code: `export const fields = [
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
];`,
	},
	{
		id: "05",
		label: "Create a Reusable Input",
		desc: "Connect each input to the form state and display validation errors.",
		file: "components/Input.tsx",
		code: `import type { ComponentProps } from "react";
import { useInput } from "@dev-waren/react-form-kit/hook-form";
import type { Path } from "@dev-waren/react-form-kit";

type InputProps<T extends object> = ComponentProps<"input"> & {
  name: Path<T>;
};

export default function Input<T extends object>({
  name,
  ...props
}: InputProps<T>) {
  const { register, isError, error } = useInput(name);

  return (
    <div className="space-y-2">
      <input {...register} {...props} />

      {isError && (
        <p className="text-red-600">{error}</p>
      )}
    </div>
  );
}`,
	},
	{
		id: "06",
		label: "Build the Form",
		desc: "Combine the form provider, field mapper, and reusable input component.",
		file: "Login.tsx",
		code: `import { Mapper } from "@dev-waren/react-form-kit";
import { Form } from "@dev-waren/react-form-kit/hook-form";

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
}`,
	},
];
