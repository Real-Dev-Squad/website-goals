import { setupServer } from "msw/node";
import handlers from "./handlers";
import { beforeAll, afterAll, afterEach } from "vitest";

const server = setupServer(...handlers);


export { server };
