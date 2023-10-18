import { useState, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "./adoptedPetHooks";
import { all } from "./searchParamsSlice";
import fetchSearch from "./fetchSearch";
import useBreedList from "./useBreedList";
import Results from "./Results";
import { Animal, BreedListAPIResponse } from "./APIResponsesTypes";
import { useAppSelector } from "./adoptedPetHooks";

const ANIMALS: Animal[] = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [animal, setAnimal] = useState("" as Animal);
  const searchParams = useAppSelector((state) => state.all.value);
  const results = useQuery(["search", searchParams], fetchSearch);
  const adoptedPet = useAppSelector((state) => state.adoptedPet.value);
  const dispatch = useAppDispatch();

  const pets = results?.data?.pets ?? [];

  const { data } = useBreedList(animal);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const obj = {
            animal:
              (formData.get("animal")?.toString() as Animal) ?? ("" as Animal),
            breed: formData.get("breed")?.toString() ?? "",
            location: formData.get("location")?.toString() ?? "",
          };
          dispatch(all(obj));
        }}
      >
        {adoptedPet ? (
          <div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
          </div>
        ) : null}
        <label htmlFor="location">
          Location
          <input id="location" name="location" placeholder="Location" />
        </label>
        <label htmlFor="animal">Animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value as Animal);
          }}
        >
          <option />
          {ANIMALS.map((animal) => (
            <option key={animal}>{animal}</option>
          ))}
        </select>
        <label htmlFor="breed">Breed</label>
        <select id="breed" name="breed" disabled={!data?.breeds.length}>
          <option />
          {data?.breeds &&
            data.breeds.map((breed: string) => (
              <option key={breed}>{breed}</option>
            ))}
        </select>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
