import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders Las Piramides Resort first when sorted by price", () => {
  render(<App />);
  const button = screen.getByText(/sort by price/i);
  fireEvent.click(button)
  const items = screen.getAllByRole("heading");
  expect(items[0]).toHaveTextContent("Las Piramides Resort");
});

test("renders Aquamarina Golf Hotel first when sorted alphabetically", () => {
  render(<App />);
  const button = screen.getByText(/sort alphabetically/i);
  fireEvent.click(button)
  const items = screen.getAllByRole("heading");
  expect(items[0]).toHaveTextContent("Aquamarina Golf Hotel");
});

test("renders Iberostar Golf Hotel first when sorted alphabetically", () => {
  render(<App />);
  const button = screen.getByText(/sort by star rating/i);
  fireEvent.click(button)
  const items = screen.getAllByRole("heading");
  expect(items[0]).toHaveTextContent("Iberostar");
});
