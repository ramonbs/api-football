import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home", async () => {
    beforeEach(() => {
        localStorage.setItem("api_key", "98841479637f73ac2294fa9592583261");
        render(<Home />);
    });

    afterEach(() => {
        localStorage.clear();
    });

    it("should Home page have a title", async () => {
        const title = screen.getByRole("heading", {
            name: /Seja bem vindo ao Meu Time!/i,
            level: 1,
        });

        expect(title).toBeInTheDocument();
    });

    it("should Home page have selects", async () => {
        const select = screen.getByRole("combobox", { name: /País/i });
        expect(select).toBeInTheDocument();

        const select2 = screen.getByRole("combobox", { name: /temporada/i });
        expect(select2).toBeInTheDocument();
    });
});
