import "@testing-library/jest-dom/extend-expect";

jest.mock("@vercel/analytics/react", () => ({
  Analytics: jest.fn().mockImplementation(() => null),
}));

jest.mock("next/router", () => ({
  useRouter: () => ({
    asPath: "/",
  }),
}));
