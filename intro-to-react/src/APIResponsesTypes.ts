export type Animal = "dog" | "cat" | "reptile" | "bird" | "rabbit";

export interface Pet {
  id: number;
  name: string;
  animal: Animal;
  breed: string;
  description: string;
  images: string[];
  city: string;
  state: string;
}

export interface PetAPIResponse {
  numberOfResults: number;
  startIndex: number;
  endIndex: number;
  hasIndex: boolean;
  pets: Pet[];
}
