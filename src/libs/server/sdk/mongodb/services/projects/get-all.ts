import { createServerOnlyFn } from "@tanstack/react-start";
import { collections } from "../../collection";

const getAll = createServerOnlyFn(async () => {
	const project = collections.projects;

	const results = await project.all({
		limit: 12,
		sortBy: "created_at",
	});

	const sortedResults = results.map(
		({ _id, created_at, updated_at, ...project }) => project,
	);

	return sortedResults;
});

export { getAll };
