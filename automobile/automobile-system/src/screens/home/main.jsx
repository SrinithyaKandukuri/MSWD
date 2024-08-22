import { Card } from "../../components/cards/style";
import { MainContainer } from "../../globalStyle";

const Main = () => {
  return (
    <MainContainer className="h-screen p-20 flex items-center">
      <div className="bg-white rounded-xl p-2"> 
        <p className="text-2xl"> About </p>
        <p className="text-xl">
          Automobile, a self-propelling vehicle may differ in context to design,
          power, acceleration, measurements, weight, purpose, load capacity, etc
          but they all have something in common, and it is how to they actually
          work or the basic idea behind an automobile remains the same. The
          basic idea behind the working of an automobile remains the same i.e.,
          an automobile consists of a frame or a body to which all the systems
          and subsystems attach, an engine, also called as the heart of the
          automobile that produces power to propel the vehicle, a transmission
          system to transmit the power to the axle, which delivers the power to
          the wheels various Automobile Systems: The Frame, The Engine, The
          Transmission System, The Exhaust System, The Cooling System, The
          Suspension System.
        </p>
      </div>
    </MainContainer>
  );
};

export default Main;
