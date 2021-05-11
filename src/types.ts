export type Holiday = {
  id: string
  hotelName: string
  location: string
  price: number
  overview: string
  departureAirport: string
  departureDate: string
  rating: number
  duration: string
  imageUrl: string
  party: Party
}

export type Party = {
  children?: number
  adults?: number
  infants?: number
}
