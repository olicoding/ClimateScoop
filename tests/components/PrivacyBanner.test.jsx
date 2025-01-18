// import { render, screen, fireEvent } from "@testing-library/react";
// import PrivacyBanner from "../../components/PrivacyBanner";

// describe("PrivacyBanner", () => {
//   it("renders the privacy banner message", () => {
//     render(<PrivacyBanner />);
//     expect(
//       screen.getByText(/authentication and basic analytics/)
//     ).toBeInTheDocument();
//   });

//   it("disappears after clicking the acknowledge button", () => {
//     render(<PrivacyBanner />);
//     const acknowledgeButton = screen.getByText("okay!");
//     fireEvent.click(acknowledgeButton);
//     expect(
//       screen.queryByText(/authentication and basic analytics/)
//     ).not.toBeInTheDocument();
//   });
// });
