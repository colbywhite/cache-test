import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import tailwindStylesheetUrl from "~/tailwind.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: tailwindStylesheetUrl }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Cache test",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en" className="h-full w-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="h-full bg-[#e4d8b4]">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
