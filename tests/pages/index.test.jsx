import React from "react";
import { render, screen } from "@testing-library/react";

import Index from "../../pages/index";

describe("index", () => {
  it("should render without crashing", async () => {
    render(<Index />);

    expect(screen.getByText("Coming Soon!")).toBeInTheDocument();
    expect(
      screen.getByText("New project under construction.")
    ).toBeInTheDocument();
  });
});
