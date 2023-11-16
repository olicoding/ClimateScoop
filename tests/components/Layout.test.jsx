import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../../components/Layout";

describe("Layout", () => {
  it("should render children without crashing", () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
