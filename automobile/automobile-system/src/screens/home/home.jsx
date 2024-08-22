import { useEffect, useState } from "react";
import CarCard from "../../components/cards/car-card";
import { deleteCar, fetchCars } from "../../components/utils/api";
import Header from "../../components/header/header";
import { Icon } from "@iconify/react";
import { Radio } from "../../components/login/style";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [fav, setFav] = useState(false);
  const [reload, setReload] = useState(false);
  const handledeleteCar = async (car_id) => {
    let ans = window.confirm("Are you sure you want to delete this car?");
    ans ? await deleteCar(car_id) : console.log("not deleted");
    setReload(!reload);
  };
  useEffect(() => {
    async function getCars() {
      const data = await fetchCars();
      fav ? setCars(data.filter((item) => item.isFav)) : setCars(data);
    }
    getCars();
  }, [fav, reload]);

  return (
    <div className="m-4 mt-20">
      <div className="flex items-center justify-between   mb-4">
        <h1 className="text-3xl font-bold text-center w-full">Cars</h1>
        {localStorage.getItem("role") === "admin" && (
          <NavLink to={"/add"}>
            <Icon
              className="text-3xl"
              color="#A162F7"
              icon={"material-symbols:add-box-rounded"}
            />
          </NavLink>
        )}
        {localStorage.getItem("role") !== "admin" && (
          <p>
            Favourite Cars:{" "}
            <Radio
              type="checkbox"
              checked={fav}
              onChange={() => setFav(!fav)}
            />{" "}
          </p>
        )}
      </div>

      <div className="grid grid-cols-3 gap-4 ml-7">
        {cars.map((car) => (
          <CarCard key={car._id} car={car} handledeleteCar={handledeleteCar} />
        ))}
      </div>
    </div>
  );
};

export default Home;
