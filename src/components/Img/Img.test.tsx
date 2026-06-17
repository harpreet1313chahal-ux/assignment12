import { render, screen } from "@testing-library/react";
import { Img } from "./Img";

test("renders image", () => {
  render(
    <Img
      src="https://via.placeholder.com/200"
      alt="Test Image"
    />
  );

  expect(screen.getByAltText("Test Image")).toBeInTheDocument();
});
export {};