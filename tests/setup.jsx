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
