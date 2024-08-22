import { useEffect, useState } from "react";
import {
  Button,
  FormField,
  Input,
  LoginContainer,
  Text,
} from "../../components/login/style";
import { createCar, fetchCarById, updateCar } from "../../components/utils/api";
import { useLocation, useNavigate } from "react-router-dom";

const AddCar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  let mode = location.search.split("=")[1];
  let carId = location.search.split("=")[2];
  console.log(carId);
  const [form, setForm] = useState({
    title: "",
    model: "",
    year: "",
    fuelType: "",
    brand: "",
    images: "",
    price: 0,
    onRoadPrice: 0,
  });

  const [error, setError] = useState({});

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(form);

    let response = mode
      ? await updateCar({ ...form, images: [form.images] })
      : await createCar({ ...form, images: [form.images] });
     response.error ?  setError(response.error) : navigate("/home");
  };

  const handleChangeField = (value, field) => {
    console.log(value, field);
    setForm({ ...form, [field]: value });
  };

  useEffect(() => {
    console.log(mode);
    const fetchCar = async () => {
      if (mode) {
        const response = await fetchCarById(carId);
        console.log(response);
        setForm({
          ...response.data,
          images: response.data.images[0],
        });
      }
    };
    carId && fetchCar();
  }, []);

  return (
    <div className="m-4">
      <p className="text-2xl">Add Car</p>
      <div className="flex justify-center">
        <div>
          <LoginContainer>
            <form onSubmit={handleFormSubmit} method="POST">
              <div className="flex gap-4">
                <div>
                  <FormField>
                    <Text>Title</Text>
                    <Input
                      type="text"
                      onChange={(e) =>
                        handleChangeField(e.target.value, "title")
                      }
                      value={form.title}
                      name="title"
                      required
                      placeholder="Enter Title"
                    />
                  </FormField>
                  <FormField>
                    <Text>Model</Text>
                    <Input
                      type="text"
                      onChange={(e) =>
                        handleChangeField(e.target.value, "model")
                      }
                      value={form.model}
                      name="model"
                      required
                      placeholder="Enter Model"
                    />
                  </FormField>
                  <FormField>
                    <Text> Year </Text>
                    <Input
                      type="text"
                      onChange={(e) =>
                        handleChangeField(e.target.value, "year")
                      }
                      value={form.year}
                      name="year"
                      required
                      placeholder="Enter Year"
                    />
                  </FormField>
                  <FormField>
                    <Text> Brand </Text>
                    <Input
                      type="text"
                      onChange={(e) =>
                        handleChangeField(e.target.value, "brand")
                      }
                      value={form.brand}
                      required
                      name="brand"
                      placeholder="Enter Brand"
                    />
                  </FormField>
                </div>
                <div>
                  <FormField>
                    <Text> Price </Text>
                    <Input
                      type="number"
                      onChange={(e) =>
                        handleChangeField(e.target.value, "price")
                      }
                      value={form.price}
                      required
                      name="price"
                      placeholder="Enter Price"
                    />
                  </FormField>
                  <FormField>
                    <Text> On Road Price </Text>
                    <Input
                      type="number"
                      onChange={(e) =>
                        handleChangeField(e.target.value, "onRoadPrice")
                      }
                      value={form.onRoadPrice}
                      required
                      name="onprice"
                      placeholder="Enter On Road Price"
                    />
                  </FormField>
                  <FormField>
                    <Text> Fuel Type </Text>
                    <Input
                      type="text"
                      onChange={(e) =>
                        handleChangeField(e.target.value, "fuelType")
                      }
                      value={form.fuelType}
                      required
                      name="fueltype"
                      placeholder="Enter Fuel Type"
                    />
                  </FormField>
                  <FormField>
                    <Text> Images Url</Text>
                    <Input
                      type="url"
                      onChange={(e) =>
                        handleChangeField(e.target.value, "images")
                      }
                      value={form.images}
                      required
                      name="urls"
                      placeholder="Enter Images"
                    />
                  </FormField>
                </div>
              </div>
              <p className="text-red-500"> {error.message} </p>
              <Button>{mode ? "Update" : "Add"}</Button>
            </form>
          </LoginContainer>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
