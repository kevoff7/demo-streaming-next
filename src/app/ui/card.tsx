"use client";

import data from "@/sample.json";

export default function Card({programTypeValue}: {programTypeValue: string}) {
  const dataFiltered = data.entries
    .filter((peli) => peli.programType === programTypeValue && peli.releaseYear >= 2010)
    .slice(0, 21)
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="mx-auto w-full max-w-sm py-4 md:max-w-screen-xl">
      <article className="mx-auto grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-14">
        {dataFiltered.map((item) => (
          <article key={`${item.title}+${item.releaseYear}`} className="grid gap-2">
            <img
              alt={item.title}
              height={item.images["Poster Art"].height}
              src={item.images["Poster Art"].url}
              width={item.images["Poster Art"].width}
            />
            <p className="leading-5">{item.title}</p>
          </article>
        ))}
      </article>
    </div>
  );
}
