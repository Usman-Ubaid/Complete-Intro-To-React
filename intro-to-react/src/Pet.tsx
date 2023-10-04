import { Link } from "react-router-dom";
import { Animal } from "./APIResponsesTypes";

interface PetProps {
  name: string;
  animal: Animal;
  breed: string;
  location: string;
  images: string[];
  id: number;
}

const Pet = ({ name, animal, breed, location, images, id }: PetProps) => {
  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }
  return (
    <Link className="pet" to={`/details/${id}`}>
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>
          {animal} - {breed} - {location}
        </h2>
      </div>
    </Link>
  );
};

export default Pet;
