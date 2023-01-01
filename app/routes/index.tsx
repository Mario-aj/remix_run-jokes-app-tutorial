import type { LinksFunction, MetaFunction } from "@remix-run/node";

import stylesUrl from "~/styles/index.css";

export const meta: MetaFunction = () => ({
  title: "Remix: So great, it's funny!",
  description: "Remix joke app. Learn Remix and laugh at the same time!",
});

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function Home() {
  return <div>Hello Index route</div>;
}
