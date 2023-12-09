import { render, screen, act } from "@testing-library/react";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { useUser } from "@auth0/nextjs-auth0";
import NavBar from "../../components/NavBar";

jest.mock("@auth0/nextjs-auth0");

describe("NavBar", () => {
  afterEach(() => jest.clearAllMocks());

  it("When user is not authenticated, renders login but not profile nav link", async () => {
    await act(async () => {
      await useUser.mockReturnValue({ user: null, isLoading: false });

      render(
        <UserProvider>
          <NavBar />
        </UserProvider>
      );
    });

    expect(screen.getByText("LOGIN")).toBeInTheDocument();
    expect(screen.queryByText("PROFILE")).not.toBeInTheDocument();
  });
});
