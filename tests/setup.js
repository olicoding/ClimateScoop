import "@testing-library/jest-dom/extend-expect";

afterEach(() => {
  jest.clearAllMocks();
  jest.restoreAllMocks();
  jest.resetModules();
});

jest.mock("next/router", () => ({
  useRouter: () => ({
    asPath: "/",
  }),
}));

jest.mock("@auth0/nextjs-auth0", () => ({
  getAccessToken: () => "access_token",
  withApiAuthRequired: (handler) => handler,
  withPageAuthRequired: (page) => () => page(),
}));
