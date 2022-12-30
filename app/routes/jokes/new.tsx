import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { db } from "~/utils/db.server";

export async function action({ request }: ActionArgs) {
  const form = await request.formData();
  const name = form.get("name");
  const content = form.get("content");

  if (typeof name !== "string" || typeof content !== "string")
    throw new Error("Form not submitted correctly.");

  const fileds = { name, content };

  const joke = await db.joke.create({
    data: fileds,
  });

  return redirect(`/jokes/${joke.id}`);
}

export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
