import { z } from "astro/zod";
import type { APIRoute } from "astro";
import { supabase } from "../server/supabase";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1),
});

export const post: APIRoute = async ({ request, redirect }) => {
  const data = Object.fromEntries(await request.formData());

  const result = schema.safeParse(data);

  if (!result.success) {
    return new Response(JSON.stringify(result.error.flatten()), {
      status: 400,
    });
  }

  const { name, email, message } = result.data;

  await supabase.from("contact_form").insert({
    name,
    email,
    message,
  });

  return redirect("/", 302);
};
