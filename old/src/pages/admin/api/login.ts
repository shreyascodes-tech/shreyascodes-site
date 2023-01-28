import type { APIRoute } from "astro";
import { z } from "astro/zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const post: APIRoute = async ({ request, redirect, cookies }) => {
  const data = Object.fromEntries(await request.formData());

  const result = schema.safeParse(data);

  if (!result.success) {
    return redirect("/admin/login", 302);
  }

  const { email, password } = result.data;

  if (
    email !== "admin@shreyascodes.tech" ||
    password !== import.meta.env.ADMIN_PASSWORD
  ) {
    return redirect("/admin/login", 302);
  }

  cookies.set("admin", "true", {
    path: "/admin",
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "strict",
    httpOnly: true,
    expires: new Date(Date.now() + 60 * 60 * 24 * 7),
    secure: import.meta.env.PROD,
  });

  return redirect("/admin", 302);
};
