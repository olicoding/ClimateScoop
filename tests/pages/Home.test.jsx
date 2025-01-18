import { render, screen, act } from "@testing-library/react";
import { ContextProvider } from "../../context/ContextProvider";
import Home from "../../pages/index";

describe("Home page", () => {
  it("renders correctly with fetched data", async () => {
    await act(async () => {
      render(
        <ContextProvider>
          <Home
            chartsData={{
              globalData: [{}],
              oceanData: [{}],
              arcticData: [{}],
              energyData: [{}],
            }}
          />
        </ContextProvider>
      );
    });

    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("charts-section")).toBeInTheDocument();
  });
});
