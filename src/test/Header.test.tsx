import Header from "../components/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
    it("should render correctly", () => {
        render(<Header />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });
});
