import { HeroImage } from "./HeroImage";

const meta = {
  title: "Components/HeroImage",
  component: HeroImage,
};

export default meta;

export const Default = () => (
  <HeroImage
    src="https://via.placeholder.com/800x300"
    alt="Hero"
    title="Hero Image"
  />
);

export const WithoutTitle = () => (
  <HeroImage src="https://via.placeholder.com/800x300" alt="Hero" />
);
