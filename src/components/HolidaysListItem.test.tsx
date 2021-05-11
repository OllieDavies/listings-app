import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { HolidaysListItem, composePartyBreakdown } from "./HolidaysListItem";
import { Holiday } from "../types";

const mockHoliday: Holiday = {
  id: "00001",
  hotelName: "Mock Hotel",
  location: "Princess Street, Manchester",
  price: 1,
  overview: "A mock overview",
  departureAirport: "Mock Airport",
  departureDate: "3rd July 2019",
  rating: 5,
  duration: "7 days",
  imageUrl: "/mock-image.png",
  party: {
    adults: 2
  }
}

test("renders the overview after Read More is clicked", () => {
  render(<HolidaysListItem holiday={mockHoliday} />);
  expect(screen.queryByText(/A mock overview/i)).not.toBeInTheDocument()
  const button = screen.getByText(/Read more/i);
  fireEvent.click(button);
  expect(screen.queryByText(/A mock overview/i)).toBeInTheDocument()
});

test("composePartyBreakdown matches snapshot", () => {
  expect(composePartyBreakdown({ adults: 2, children: 1 })).toMatchSnapshot();
})
