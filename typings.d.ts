export interface Card {
  img: string
  location: string
  distance: string
}

export interface CardMedium {
  img: string
  title: string
}

export interface QuerySearch {
  location: string
  startDate: Date | string
  endDate: Date | string
  numberOfGuests: string | number
}

export interface SearchResultStruct {
  img: string
  location: string
  title: string
  description: string
  star: number
  price: string
  total: string
  long: number
  lat: number
}