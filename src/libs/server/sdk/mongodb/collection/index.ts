import type { Projects } from "#/libs/shared/types/index.js";
import { createMongo } from "./config";

const { collection } = await createMongo();

export const collections = {
	projects: collection<Projects>("projects"),
};
