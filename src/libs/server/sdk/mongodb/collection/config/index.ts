import { mongo, setEnv } from "@dev-waren/mongodb";
import { createServerOnlyFn } from "@tanstack/react-start";

export const createMongo = createServerOnlyFn(async () => {
	return mongo.create({
		uri: setEnv("MONGO_URI"),
		database: setEnv("MONGO_DB"),
	});
});
