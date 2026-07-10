export interface Listing {
  id: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  location: string;
  category: string;
  description: string;
  image: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  guests: number;
  beds: number;
  baths: number;
  host: string;
  hostYears: number;
  amenities: string[];
  images: string[];
}
