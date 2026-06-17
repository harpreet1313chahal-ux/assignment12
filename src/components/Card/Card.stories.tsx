import { Card } from "./Card";

const meta = {
  title: "Components/Card",
  component: Card,
};

export default meta;

export const Default = () => (
  <Card
    title="Card Title"
    description="This is a sample card description."
  />
);

export const AnotherCard = () => (
  <Card
    title="Another Card"
    description="Another example description."
  />
);
export {};