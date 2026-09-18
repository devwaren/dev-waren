export const block = [
	{
		id: "01",
		label: "Installation",
		desc: "Install MongoDB and React Form Kit using your preferred package manager.",
		file: "terminal",
		code: `npm install @dev-waren/mongodb
npm install @dev-waren/react-form-kit`,
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
		label: "Configure the Collection Schema",
		desc: "Define the schema structure and validation rules for your MongoDB collections.",
		file: "schemas/movie.ts",
		code: `import { z, sanitize } from "@dev-waren/react-form-kit";

export const schema = {
	movies: z.object({
		title: z
			.string()
			.min(1, { message: "Title is required" })
			.transform(sanitize),

		description: z
			.string()
			.min(1, { message: "Description is required" })
			.transform(sanitize),

		year: z
			.number()
			.int()
			.min(1900)
			.transform(sanitize),

		genres: z
			.array(z.string())
			.min(1)
			.transform(sanitize),
	}),
};

export type MovieSchema = z.infer<typeof schema.movies>;`,
	},
	{
		id: "04",
		label: "Configure Collection",
		desc: "Create a typed collection that maps your schema to MongoDB.",
		file: "collection.ts",
		code: `import { mongodb } from "./mongo.ts";
import { schema, type MovieSchema } from "./schema/movies.ts";

export const collection = {
	movies: mongodb.collection<MovieSchema>("movies"),
};`,
	},
	{
		id: "05",
		label: "Get All Movies using Tanstack/start",
		desc: "Retrieve movies from the collection with sorting and a result limit.",
		file: "services/get-all.ts",
		code: `import { createServerOnlyFn } from "@tanstack/react-start";
import { collection } from "./collection.ts";

export const getAllMovies = createServerOnlyFn(async () => {
	const movies = collection.movies;

	const results = await movies.all({
		sortedBy: "created_at",
		limit: 10,
	});

	return results;
});`,
	},
	{
		id: "06",
		label: "Get a Movie by ID",
		desc: "Retrieve a single movie using its unique identifier.",
		file: "services/get-by-id.ts",
		code: `import { createServerOnlyFn } from "@tanstack/react-start";
import { collection } from "./collection.ts";

export const getMovieById = createServerOnlyFn(async (id: string) => {
	const movies = collection.movies;

	const movie = await movies.findOne({
		_id: id,
	});

	return movie;
});`,
	},
	{
		id: "07",
		label: "Create a Movie",
		desc: "Insert a new movie into the collection using the validated movie schema.",
		file: "services/create.ts",
		code: `import { createServerOnlyFn } from "@tanstack/react-start";
import { collection } from "./collection.ts";
import type { MovieSchema } from "./schema/movies.ts";

export const createMovie = createServerOnlyFn(
	async (data: MovieSchema) => {
		const movies = collection.movies;

		const movie = await movies.create(data);

		return movie;
	},
);`,
	},
	{
		id: "08",
		label: "Find and Update a Movie",
		desc: "Find a movie by its identifier and update its fields in a single operation.",
		file: "services/update.ts",
		code: `import { createServerOnlyFn } from "@tanstack/react-start";
import { collection } from "./collection.ts";
import type { MovieSchema } from "./schema/movies.ts";

export const updateMovie = createServerOnlyFn(
	async (id: string, data: Partial<MovieSchema>) => {
		const movies = collection.movies;

		const movie = await movies.findOneAndUpdate(
			{ _id: id },
			{
				$set: data,
			},
		);

		return movie;
	},
);`,
	},
	{
		id: "09",
		label: "Delete a Movie",
		desc: "Remove a movie from the collection using its unique identifier.",
		file: "services/delete.ts",
		code: `import { createServerOnlyFn } from "@tanstack/react-start";
import { collection } from "./collection.ts";

export const deleteMovie = createServerOnlyFn(async (id: string) => {
	const movies = collection.movies;

	const result = await movies.delete({
		_id: id,
	});

	return result;
});`,
	},
	{
		id: "10",
		label: "Use with Node.js",
		desc: "Use the server-only MongoDB utility directly in a Node.js application without a frontend framework.",
		file: "server.js",
		code: `import { mongo, setEnv } from "@dev-waren/mongodb";

const mongodb = await mongo.create({
	uri: setEnv("MONGO_URI"),
	database: setEnv("MONGO_DATABASE_NAME"),
	message: {
		success: "MongoDB Connected Successfully.",
		failure: "MongoDB Connection Failed.",
	},
});

const movies = mongodb.collection("movies");

const results = await movies.all({
	sortedBy: "created_at",
	limit: 10,
});

console.log(results);`,
	},
	{
		id: "11",
		label: "Node.js CRUD",
		desc: "Perform common MongoDB operations directly from a Node.js server.",
		file: "server.js",
		code: `import { mongo, setEnv } from "@dev-waren/mongodb";

const mongodb = await mongo.create({
	uri: setEnv("MONGO_URI"),
	database: setEnv("MONGO_DATABASE_NAME"),
});

const movies = mongodb.collection("movies");

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
await movies.delete({
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
		desc: "Create a typed MongoDB collection that can be used by your Next.js server code.",
		file: "lib/collection.ts",
		code: `import { mongodb } from "./mongodb";
import type { MovieSchema } from "@/schemas/movie";

export const collection = {
	movies: mongodb.collection<MovieSchema>("movies"),
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
	const movies = collection.movies;

	return movies.all({
		sortedBy: "created_at",
		limit: 10,
	});
}

export async function getMovieById(id: string) {
	const movies = collection.movies;

	return movies.findOne({
		_id: id,
	});
}

export async function createMovie(data: MovieSchema) {
	const movies = collection.movies;

	return movies.create(data);
}

export async function updateMovie(
	id: string,
	data: Partial<MovieSchema>,
) {
	const movies = collection.movies;

	return movies.findOneAndUpdate(
		{ _id: id },
		{
			$set: data,
		},
	);
}

export async function deleteMovie(id: string) {
	const movies = collection.movies;

	return movies.delete({
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
