import "./App.css";
import rocketImg from "./assets/rocket.png";
import { Signup } from "./components/Signup";
import Validation from "./components/Validation/Validation";

function App() {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-3">
            <Validation />
          </div>
          <div className="col-md-3">
            <Signup />
          </div>
          <div className="col-md-6 my-auto">
            <img className="img-fluid w-100" src={rocketImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
