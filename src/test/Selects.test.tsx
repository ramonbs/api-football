import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import Selects from "../components/Selects";

describe("Selects", () => {
    beforeEach(() => {
        vi.spyOn(window.localStorage.__proto__, "getItem").mockReturnValueOnce(
            "98841479637f73ac2294fa9592583261",
        );
    });

    it("should Selects is rendered", async () => {
        render(<Selects />);

        const selectCountries = await screen.findByRole("combobox", {
            name: /País/i,
        });
        expect(selectCountries).toBeInTheDocument();
    });
});
