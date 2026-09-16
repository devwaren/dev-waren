import { z } from "@dev-waren/react-form-kit";

const project = z.object({
	title: z.string().min(1, { message: "title is required" }),
	desc: z
		.string()
		.min(20, { message: "description must be atleast 20 characters long" }),
	techStacks: z.object({
		name: z.string(),
		icon: z.string(),
	}),
	created_at: z.date(),
	updated_at: z.date(),
});

export { project };
