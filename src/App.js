import Car from "./Components/car";
import "./App.css";
function App(props) {
  let value = "Car window";
  let person = [
    "vignesh",
    23,
    "male",
    [{
        doorNo: 13,
        street: "palotu",
        village: "BDY",
        taluk: "PRPTY",
        district: "DPJ",
      }],
    
  ];
  //
  return (
    <>
      <Car brand={"val " + value} person={person} />
    </>
  );
}

export default App;
