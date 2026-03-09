import Elysia from "elysia";
import authRoutes from "./auth/auth.route";

export default function ListRoutes(): Elysia {
  return new Elysia()
    .use(authRoutes)
}