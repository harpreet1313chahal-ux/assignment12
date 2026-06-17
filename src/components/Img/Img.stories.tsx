import { Img } from "./Img";

const meta = {
  title: "Components/Img",
  component: Img,
};

export default meta;

export const Default = () => (
  <Img
    src="https://via.placeholder.com/200"
    alt="Placeholder"
  />
);

export const Small = () => (
  <Img
    src="https://via.placeholder.com/100"
    alt="Small"
    width={100}
    height={100}
  />
);