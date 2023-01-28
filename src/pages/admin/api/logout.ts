import type { APIRoute } from "astro";

export const post: APIRoute = async ({ cookies, redirect }) => {
  cookies.delete("admin", {
    path: "/admin",
  });
  return redirect("/admin/login", 302);
};
