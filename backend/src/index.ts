import { Elysia } from "elysia";
import ListRoutes from "./routes/routes";

const app = new Elysia()
  .use(ListRoutes())
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
