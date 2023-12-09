import { useUser } from "@auth0/nextjs-auth0";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { render, screen, act } from "@testing-library/react";
import { ContextProvider } from "../../context/ContextProvider";
import Home from "../../pages/index";

jest.mock("@auth0/nextjs-auth0");

describe("Home page", () => {
  afterEach(() => jest.clearAllMocks());

  it("renders correctly with fetched data", async () => {
    await act(async () => {
      await useUser.mockReturnValue({ user: null, isLoading: false });

      render(
        <UserProvider>
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
        </UserProvider>
      );
    });

    expect(screen.getByTestId("hero-section")).toBeInTheDocument();
    expect(screen.getByTestId("charts-section")).toBeInTheDocument();
  });
});
