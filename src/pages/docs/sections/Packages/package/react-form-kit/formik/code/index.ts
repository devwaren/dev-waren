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
		code: `import { z, sanitize } from "@dev-waren/react-form-kit";

export const schema = {
  login: z.object({
    email: z.string()
            .email({ message: "email is required" })
            .transform(sanitize),
    password: z.string()
            .min(8,{ message: "password must be atleast 8 characters long." })
            .transform(sanitize),
  }),
};`,
	},
	{
		id: "03",
		label: "Configure the Form",
		desc: "Initialize the Formik form with validation, default values, and submission behavior.",
		file: "hooks/useLoginForm.ts",
		code: `import { useFormikFormSettings } from "@dev-waren/react-form-kit/formik";
import { schema } from "../validation/login-schema";

export const useLoginForm = () => {
  const form = useFormikFormSettings({
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
		desc: "Describe your form fields using a reusable configuration list.",
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
		desc: "Connect each input to Formik state and display validation errors after submission.",
		file: "components/Input.tsx",
		code: `import type { ComponentProps } from "react";
import { useInput } from "@dev-waren/react-form-kit/formik";
import type { Path } from "@dev-waren/react-form-kit";

type InputProps<T extends object> = ComponentProps<"input"> & {
  name: Path<T>;
};

export default function Input<T extends object>({
  name,
  ...props
}: InputProps<T>) {
  const { register, isError, error } = useInput<T>(name);

  return (
    <div className="space-y-2">
      <input {...props} {...register} />

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
		desc: "Combine the Formik provider, field mapper, and reusable input component.",
		file: "Login.tsx",
		code: `import { Mapper } from "@dev-waren/react-form-kit";
import { Form, useFormikFormSettings } from "@dev-waren/react-form-kit/formik";

import Input from "./components/Input";
import { fields } from "./fields";
import { schema } from "./validation/login-schema";
import { useLoginForm } from "./hooks/useLoginForm"

type LoginForm = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const { form } = useLoginForm()

  return (
    <Form {...form}>
      <Mapper
        listFor="login form"
        items={fields}
        className="space-y-2"
        as="div"
      >
        {(field) => (
          <Input {...field} />
        )}
      </Mapper>

      <button type="submit">
        Login
      </button>
    </Form>
  );
}`,
	},
];
