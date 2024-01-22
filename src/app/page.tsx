import Link from "next/link";

import SubHeader from "./ui/subheader";

export default function Home() {
  return (
    <section>
      <SubHeader title="titles" />
      <article className="mx-auto mt-10 flex max-w-sm gap-5 md:max-w-screen-xl">
        <article className="flex flex-col gap-2">
          <Link href="/series">
            <div className="flex h-60 w-44 items-center justify-center border bg-slate-900 text-2xl font-bold">
              SERIES
            </div>
          </Link>
          <p>Popular Series</p>
        </article>
        <article className="flex flex-col gap-2">
          <Link href="/movies">
            <div className="flex h-60 w-44 items-center justify-center border bg-slate-900 text-2xl font-bold">
              MOVIES
            </div>
          </Link>
          <p>Popular Movies</p>
        </article>
      </article>
    </section>
  );
}
