import { useEffect } from "react";
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";
import Home from "./home/home";
import { Route, Routes } from "react-router-dom";
import AddCar from "./home/addcard";
import Profile from "./home/profile";
import Main from "./home/main";

const Index = () => {
  useEffect(() => {
    localStorage.getItem("userId") ?? window.location.replace("/login");
  }, []);

  return (
    <div className="grid grid-cols-12 col-auto h-full ">
      <div className="col-span-2 ">
        <Sidebar />
      </div>
      <div className="col-span-10 ">
        <div className=" h-full ">
          <Header />
          <div className="h-full">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/home" element={<Home />} />
              <Route path="/add" element={<AddCar />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
