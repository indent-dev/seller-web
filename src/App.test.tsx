import React from "react";
import { render, screen } from "@testing-library/react";
import Login from "./pages/Login";

test("renders App", () => {
  render(<Login />);
  const brandElement = screen.getByText("Login Pages");
  expect(brandElement).toBeInTheDocument();
});
