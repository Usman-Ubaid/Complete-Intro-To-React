import { useState, lazy } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "./adoptedPetHooks";
import { useGetPetQuery } from "./petApiService";
import { adopt } from "./adoptedPetSlice";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";

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
  const { isLoading, data: pet } = useGetPetQuery(id);

  const pets = pet?.pets[0];

  if (isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">Data Loading...</h2>
      </div>
    );
  }

  if (!pets) {
    throw new Error("No pet lol.");
  }

  return (
    <div className="details">
      <Carousel images={pets.images} />
      <div>
        <h1>{pets.name}</h1>
        <h2>
          {pets.animal} - {pets.breed} - {pets.city}, {pets.state}
        </h2>
        <button onClick={() => setShowModal(true)}>Adopt {pets.name}</button>
        <p>{pets.description}</p>
        {showModal ? (
          <Modal>
            <div>
              <h1>Would you like to adopt {pets.name}</h1>
              <div className="buttons">
                <button
                  onClick={() => {
                    dispatch(adopt(pets));
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
