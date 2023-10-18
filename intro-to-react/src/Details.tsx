import { useState, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useAppDispatch } from "./adoptedPetHooks";
import { adopt } from "./adoptedPetSlice";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import fetchPet from "./fetchPet";

const Modal = lazy(() => import("./Modal"));

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  if (!id) {
    throw new Error(
      "Why did you not give me an id? I wanted an id. I have no id."
    );
  }
  const navigate = useNavigate();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Data Loading...</h2>
      </div>
    );
  }

  const pet = results?.data?.pets[0];
  if (!pet) {
    throw new Error("No pet lol.");
  }

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h1>{pet.name}</h1>
        <h2>
          {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
        <p>{pet.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pet.name}</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    dispatch(adopt(pet));
                    navigate("/");
                  }}
                >
                  Yes
                </button>
                <button onClick={() => setShowModal(false)}>No</button>
              </div>
            </div>
          </Modal>
        ) : null}
      </div>
    </div>
  );
};

export default function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}
