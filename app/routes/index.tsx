import type { HeadersFunction, LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { DATE_FORMATTER } from "~/utils";

export const loader: LoaderFunction = async () => {
  // wait 5 seconds to simulate work
  await new Promise(resolve => {
    setTimeout(resolve, 5000)
  })
  const date = new Date();
  console.log("Built page at", date);
  return json({ date: date.toISOString() });
};

export const headers: HeadersFunction = () => {
  const cacheInit: HeadersInit = {
    "Cache-Control": "max-age=10",
  };
  return new Headers(cacheInit);
};

export default function Index() {
  const { date } = useLoaderData<typeof loader>();
  return (
    <main className="prose mx-auto flex min-h-screen items-center justify-center text-center">
      <dl>
        <dt className="font-bold">Build time</dt>
        <dd>
          <time dateTime={date}>{DATE_FORMATTER.format(new Date(date))}</time>
        </dd>
      </dl>
    </main>
  );
}
