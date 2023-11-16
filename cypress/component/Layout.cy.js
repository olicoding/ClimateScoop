import React from "react";
import { mount } from "@cypress/react";
import Layout from "../../components/Layout";

describe("Layout Component", () => {
  it("renders children without crashing", () => {
    mount(
      <Layout>
        <div>Test Content</div>
      </Layout>
    );
    cy.get("div").contains("Test Content").should("be.visible");
  });
});
