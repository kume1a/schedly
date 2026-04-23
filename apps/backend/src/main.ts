// Require the framework and instantiate it

// ESM
import fastifyEnv from "@fastify/env";
import Fastify from "fastify";
import { fastifyEnvOptions, getEnv } from "./config/env.js";

const fastify = Fastify({ logger: true });

await fastify.register(fastifyEnv, fastifyEnvOptions);

fastify.get("/", (request, reply) => {
	reply.send({ hello: "world" });
});

const start = async () => {
	try {
		const env = getEnv(fastify);

		await fastify.listen({ port: env.PORT });
	} catch (err) {
		fastify.log.error(err);
		process.exit(1);
	}
};

start();
