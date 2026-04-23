import type { FastifyEnvOptions } from "@fastify/env";
import type { DeploymentEnvironment } from "@repo/shared/sharedTypes";
import type { FastifyInstance } from "fastify";

export type BackendEnv = {
	ENVIRONMENT: DeploymentEnvironment;
	PORT: number;
};

export const fastifyEnvOptions: FastifyEnvOptions = {
	dotenv: true,
	schema: {
		type: "object",
		required: ["ENVIRONMENT", "PORT"],
		properties: {
			ENVIRONMENT: {
				type: "string",
				enum: ["development", "production"],
			},
			PORT: {
				type: "integer",
			},
		},
	},
};

export const getEnv = (fastify: FastifyInstance): BackendEnv => {
	return fastify.getEnvs<BackendEnv>();
};
