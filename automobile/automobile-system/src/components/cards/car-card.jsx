import { Icon } from "@iconify/react";
import { Card } from "./style";
import { useState } from "react";
import { deleteCar, setFavorite } from "../utils/api";
import { useNavigate } from "react-router-dom";
const CarCard = ({ car, handledeleteCar }) => {
  const [liked, setLiked] = useState(car.isFav);
  const navigate = useNavigate();
  const handleFav = async (id) => {
    setLiked(!liked);
    console.log(await setFavorite({ car_id: id }));
  };
  

  return (
    <Card>
      <div className="flex items-center w-full justify-between p-2">
        <p className="text-1xl">{car.title}</p>
        {localStorage.getItem("role") !== "admin" ? (
          liked ? (
            <Icon
              onClick={() => handleFav(car._id)}
              icon={"mdi:cards-heart"}
              color="#F84F56"
              fontSize={"24px"}
            />
          ) : (
            <Icon
              icon={"mdi:cards-heart-outline"}
              color="#A4A5A6"
              fontSize={"24px"}
              onClick={() => handleFav(car._id)}
            />
          )
        ) : (
          <div className="flex gap-2">
            <Icon icon={"solar:pen-bold"} onClick={() => navigate(`/add?query=edit&id=${car._id}`)} fontSize={"24px"} color="#000" />
            <Icon
              icon={"ic:baseline-delete"}
              onClick={() => handledeleteCar(car._id)}
              fontSize={"24px"}
              color="red"
            />
          </div>
        )}
      </div>
      <div>
        <img
          src={car.images[0]}
          alt={car.title}
          width={"100%"}
          height={"100%"}
        />
      </div>
      <div className="flex self-center ">
        <p>
          Brand:{" "}
          <span style={{ color: "#72767C" }} className="ml-6">
            {car.brand}
          </span>{" "}
        </p>
      </div>
      <div className="flex self-center ">
        <p>
          Fuel:{" "}
          <span style={{ color: "#72767C" }} className="ml-6">
            {car.fuelType}
          </span>{" "}
        </p>
      </div>
      <div className="flex self-center ">
        <p>
          Year:{" "}
          <span style={{ color: "#72767C" }} className="ml-6">
            {car.year}
          </span>{" "}
        </p>
      </div>
      <div className="flex self-center ">
        <p>
          Price:{" "}
          <span style={{ color: "#72767C" }} className="ml-6">
            {car.price}
          </span>{" "}
        </p>
      </div>
    </Card>
  );
};

export default CarCard;
