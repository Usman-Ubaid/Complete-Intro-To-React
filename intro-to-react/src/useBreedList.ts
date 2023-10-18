import { useGetBreedsQuery } from "./petApiService";
import { Animal } from "./APIResponsesTypes";

export default function useBreedList(animal: Animal) {
  const { isLoading, data: breeds } = useGetBreedsQuery(animal, {
    skip: !animal,
  });

  if (!animal) {
    return { data: undefined, isLoading: "Loaded" };
  }

  return { data: breeds, isLoading: "Loaded" };
}
