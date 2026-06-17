import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

test("renders hero image title", () => {
  render(
    <HeroImage
      src="https://via.placeholder.com/800x300"
      alt="Hero"
      title="Hero Image"
    />
  );

  expect(screen.getByText("Hero Image")).toBeInTheDocument();
});

export {};