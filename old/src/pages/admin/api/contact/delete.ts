import type { APIRoute } from "astro";
import { z } from "astro/zod";
import { supabase } from "../../../../server/supabase";

const schema = z.object({
  id: z.string(),
});

export const post: APIRoute = async ({ request, redirect, cookies }) => {
  if (!cookies.get("admin").boolean()) {
    return redirect("/admin/login", 302);
  }

  const data = Object.fromEntries(await request.formData());

  const result = schema.safeParse(data);

  if (!result.success) {
    return redirect("/admin/login", 302);
  }

  const { id } = result.data;

  await supabase.from("contact_form").delete().eq("id", id);
  return redirect("/admin", 302);
};
