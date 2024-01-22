import Card from "../ui/card";
import SubHeader from "../ui/subheader";

export default function page() {
  return (
    <section className="grid gap-2">
      <SubHeader title="movies" />
      <Card programTypeValue="movie" />
    </section>
  );
}
