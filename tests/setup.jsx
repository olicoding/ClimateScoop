import "@testing-library/jest-dom/extend-expect";

jest.mock("@vercel/analytics/react", () => ({
  Analytics: jest.fn().mockImplementation(() => null),
}));

jest.mock("next/router", () => ({
  useRouter: () => ({
    asPath: "/",
  }),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => <img src="/default-profile.jpg" alt="default-profile" />,
}));

jest.mock("@auth0/nextjs-auth0", () => ({
  useUser: jest.fn().mockReturnValue({ user: { name: "Mock User" } }),
  UserProvider: jest.fn(({ children }) => <div>{children}</div>),
  getAccessToken: () => "access_token",
  withApiAuthRequired: (handler) => handler,
  withPageAuthRequired: (page) => () => page(),
}));

afterEach(() => {
  jest.clearAllMocks();
});
