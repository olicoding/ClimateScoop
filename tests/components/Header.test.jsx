import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useUser } from "@auth0/nextjs-auth0";
import { render, screen, act, fireEvent } from "@testing-library/react";
import Header from "../../components/Header";

jest.mock("@auth0/nextjs-auth0");

describe("Header", () => {
  afterEach(() => jest.clearAllMocks());

  it("renders correctly, hides on scroll down and shows on scroll up", async () => {
    await act(async () => {
      await useUser.mockReturnValue({ user: null, isLoading: false });

      render(
        <UserProvider>
          <Header />
        </UserProvider>
      );
    });

    expect(screen.getByTestId("header")).toBeInTheDocument();
    fireEvent.scroll(window, { target: { scrollY: 500 } });
    expect(screen.getByTestId("header")).toHaveClass("hide");
    fireEvent.scroll(window, { target: { scrollY: 0 } });
    expect(screen.getByTestId("header")).not.toHaveClass("hide");
  });
});
