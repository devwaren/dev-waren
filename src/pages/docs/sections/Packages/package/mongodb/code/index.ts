export const block = [
	{
		id: "01",
		label: "Installation",
		desc: "Install MongoDB and Zod using your preferred package manager.",
		file: "terminal",
		code: `npm install @dev-waren/mongodb zod`,
	},

	{
		id: "02",
		label: "Define Your Configuration",
		desc: "Create a server-side MongoDB connection using your environment configuration.",
		file: "server/db/mongo.ts",
		code: `import { mongo, setEnv } from "@dev-waren/mongodb";

export const mongodb = await mongo.create({
	uri: setEnv("MONGO_URI"),
	database: setEnv("MONGO_DATABASE_NAME"),
	message: {
		success: "MongoDB Connected Successfully.",
		failure: "MongoDB Connection Failed.",
	},
});`,
	},

	{
		id: "03",
		label: "Define the Collection Schema",
		desc: "Define the fields that are allowed to be returned by the collection.",
		file: "schemas/movie.ts",
		code: `import { z } from "zod";

export const movieSchema = z.object({
	title: z
		.string()
		.min(1),

	description: z
		.string()
		.min(1),

	year: z
		.number()
		.int()
		.min(1900),

	genres: z
		.array(z.string())
		.min(1),
});`,
	},

	{
		id: "04",
		label: "Configure the Collection",
		desc: "Create a typed collection using a Zod schema. Only fields declared by the schema are returned from MongoDB.",
		file: "collection.ts",
		code: `import { mongodb } from "./mongo";
import { movieSchema } from "./schemas/movie";

export const collection = {
	movies: mongodb.collection({
		name: "movies",
		schema: movieSchema,
	}),
};`,
	},

	{
		id: "05",
		label: "Get All Movies using TanStack Start",
		desc: "Retrieve movies from the collection with sorting and a result limit.",
		file: "services/get-all.ts",
		code: `import { createServerOnlyFn } from "@tanstack/react-start";
import { collection } from "./collection";

export const getAllMovies = createServerOnlyFn(async () => {
	return collection.movies.all({
		sortBy: "year",
		order: -1,
		limit: 10,
	});
});`,
	},

	{
		id: "06",
		label: "Get a Movie by ID",
		desc: "Retrieve a single movie using a filter.",
		file: "services/get-by-id.ts",
		code: `import { createServerOnlyFn } from "@tanstack/react-start";
import { collection } from "./collection";

export const getMovieById = createServerOnlyFn(
	async (id: string) => {
		return collection.movies.findOne({
			_id: id,
		});
	},
);`,
	},

	{
		id: "07",
		label: "Create a Movie",
		desc: "Insert a new movie into the collection using the typed movie schema.",
		file: "services/create.ts",
		code: `import { createServerOnlyFn } from "@tanstack/react-start";
import { collection } from "./collection";
import type { MovieSchema } from "./schemas/movie";

export const createMovie = createServerOnlyFn(
	async (data: MovieSchema) => {
		return collection.movies.create(data);
	},
);`,
	},

	{
		id: "08",
		label: "Find and Update a Movie",
		desc: "Find a movie by its identifier and update its fields in a single operation.",
		file: "services/update.ts",
		code: `import { createServerOnlyFn } from "@tanstack/react-start";
import { collection } from "./collection";
import type { MovieSchema } from "./schemas/movie";

export const updateMovie = createServerOnlyFn(
	async (
		id: string,
		data: Partial<MovieSchema>,
	) => {
		return collection.movies.findOneAndUpdate(
			{ _id: id },
			{
				$set: data,
			},
		);
	},
);`,
	},

	{
		id: "09",
		label: "Delete a Movie",
		desc: "Remove a movie from the collection using its unique identifier.",
		file: "services/delete.ts",
		code: `import { createServerOnlyFn } from "@tanstack/react-start";
import { collection } from "./collection";

export const deleteMovie = createServerOnlyFn(
	async (id: string) => {
		return collection.movies.deleteOne({
			_id: id,
		});
	},
);`,
	},

	{
		id: "10",
		label: "Use with Node.js",
		desc: "Use the server-only MongoDB utility directly in a Node.js application.",
		file: "server.ts",
		code: `import { mongo, setEnv } from "@dev-waren/mongodb";
import { z } from "zod";

const mongodb = await mongo.create({
	uri: setEnv("MONGO_URI"),
	database: setEnv("MONGO_DATABASE_NAME"),
});

const movieSchema = z.object({
	title: z.string(),
	description: z.string(),
	year: z.number(),
	genres: z.array(z.string()),
});

const movies = mongodb.collection({
	name: "movies",
	schema: movieSchema,
});

const results = await movies.all({
	sortBy: "year",
	order: -1,
	limit: 10,
});

console.log(results);`,
	},

	{
		id: "11",
		label: "Node.js CRUD",
		desc: "Perform common MongoDB operations directly from a Node.js server.",
		file: "server.ts",
		code: `import { mongo, setEnv } from "@dev-waren/mongodb";
import { z } from "zod";

const mongodb = await mongo.create({
	uri: setEnv("MONGO_URI"),
	database: setEnv("MONGO_DATABASE_NAME"),
});

const movieSchema = z.object({
	title: z.string(),
	description: z.string(),
	year: z.number(),
	genres: z.array(z.string()),
});

const movies = mongodb.collection({
	name: "movies",
	schema: movieSchema,
});

// Create
const movie = await movies.create({
	title: "Interstellar",
	description: "A science fiction film about space and time.",
	year: 2014,
	genres: ["Sci-Fi", "Drama"],
});

// Get by ID
const foundMovie = await movies.findOne({
	_id: movie._id,
});

// Update
const updatedMovie = await movies.findOneAndUpdate(
	{ _id: movie._id },
	{
		$set: {
			title: "Interstellar: Updated",
		},
	},
);

// Delete
await movies.deleteOne({
	_id: movie._id,
});

console.log({
	movie,
	foundMovie,
	updatedMovie,
});`,
	},

	{
		id: "12",
		label: "Use with Next.js",
		desc: "Use the server-only MongoDB utility in a Next.js server environment.",
		file: "lib/mongodb.ts",
		code: `import { mongo, setEnv } from "@dev-waren/mongodb";

export const mongodb = await mongo.create({
	uri: setEnv("MONGO_URI"),
	database: setEnv("MONGO_DATABASE_NAME"),
	message: {
		success: "MongoDB Connected Successfully.",
		failure: "MongoDB Connection Failed.",
	},
});`,
	},

	{
		id: "13",
		label: "Configure the Collection",
		desc: "Create a typed MongoDB collection using a Zod schema.",
		file: "lib/collection.ts",
		code: `import { mongodb } from "./mongodb";
import { movieSchema } from "@/schemas/movie";

export const collection = {
	movies: mongodb.collection({
		name: "movies",
		schema: movieSchema,
	}),
};`,
	},

	{
		id: "14",
		label: "Create a Server Action",
		desc: "Run MongoDB operations securely on the server using a Next.js Server Action.",
		file: "app/actions/movies.ts",
		code: `"use server";

import { collection } from "@/lib/collection";
import type { MovieSchema } from "@/schemas/movie";

export async function getMovies() {
	return collection.movies.all({
		sortBy: "year",
		order: -1,
		limit: 10,
	});
}

export async function getMovieById(id: string) {
	return collection.movies.findOne({
		_id: id,
	});
}

export async function createMovie(data: MovieSchema) {
	return collection.movies.create(data);
}

export async function updateMovie(
	id: string,
	data: Partial<MovieSchema>,
) {
	return collection.movies.findOneAndUpdate(
		{ _id: id },
		{
			$set: data,
		},
	);
}

export async function deleteMovie(id: string) {
	return collection.movies.deleteOne({
		_id: id,
	});
}`,
	},

	{
		id: "15",
		label: "Use the Server Action",
		desc: "Call your server-side database operations from a Next.js server component.",
		file: "app/movies/page.tsx",
		code: `import {
	getMovies,
	getMovieById,
} from "@/app/actions/movies";

export default async function MoviesPage() {
	const movies = await getMovies();

	return (
		<main>
			<h1>Movies</h1>

			{movies.map((movie) => (
				<article key={movie._id}>
					<h2>{movie.title}</h2>
					<p>{movie.description}</p>
				</article>
			))}
		</main>
	);
}`,
	},
];
