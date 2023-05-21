import { render, screen, waitFor } from "@testing-library/react";
import LoginForms from "../components/LoginForms";
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";
import Login from "../pages/Login";

describe("LoginForms", () => {
    it("should Login page render correctly", () => {
        render(<LoginForms />);
        expect(screen.getByText("Login")).toBeInTheDocument();
    });

    it("should Login page have a title", () => {
        render(<LoginForms />);
        expect(
            screen.getByText("Seja bem vindo ao Meu Time!"),
        ).toBeInTheDocument();
    });

    it("should Login page have a input", () => {
        render(<LoginForms />);
        expect(screen.getByPlaceholderText("API Key")).toBeInTheDocument();
    });

    it("should Login page have a button", () => {
        render(<LoginForms />);
        expect(screen.getByText("Login")).toBeInTheDocument();
    });

    it("should Login page have a label", () => {
        render(<LoginForms />);
        expect(screen.getByText("Insira sua key:")).toBeInTheDocument();
    });

    it('Test LocalStorage', () => {
        render(<Login />);
    
        localStorage.setItem('key', '98841479637f73ac2294fa9592583261');
    
        const storageValue = localStorage.getItem('key');
    
        expect(storageValue).toBe('98841479637f73ac2294fa9592583261');
      });

    it("should button on click redirect to home page", async() => {
        render(<Login />);
        const button = screen.getByRole("button", { name: "Login" });
        expect(button).toBeInTheDocument();
        const input = screen.getByRole("textbox");
        expect(input).toBeInTheDocument();

        await act(async () => {
            userEvent.type(input, "98841479637f73ac2294fa9592583261");
            userEvent.click(button);
        });

        await waitFor(() => {
            const titleSetting = screen.getByRole('heading', {
                name: /Meu time!/i,
                level: 1,
              });

            expect(titleSetting).toBeInTheDocument();
            
        });
    });
});
