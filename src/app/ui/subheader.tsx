export default function SubHeader({title}: {title: string}) {
  return (
    <article className="flex h-12  items-center bg-slate-900">
      <h2 className="mx-auto w-full max-w-sm font-medium capitalize md:max-w-screen-xl">
        Popular {title}
      </h2>
    </article>
  );
}
