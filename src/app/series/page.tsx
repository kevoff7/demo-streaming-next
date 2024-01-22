import Card from "../ui/card";
import SubHeader from "../ui/subheader";

export default async function page() {
  return (
    <section className="grid gap-2">
      <SubHeader title="series" />
      <Card programTypeValue="series" />
    </section>
  );
}
