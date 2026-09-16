import type { z } from "@dev-waren/react-form-kit";
import type { schema } from "../validations";

export type Projects = z.infer<typeof schema.project> & {
	_id: string;
};
