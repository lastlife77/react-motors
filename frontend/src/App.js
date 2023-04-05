import "./App.scss";
import AutoCard from "./components/autoCard/AutoCard";
import AutoPage from "./components/autoPage/AutoPage";
import Filter from "./components/filter/Filter";
import CheckBox from "./UI_Library/Atoms/CheckBox/CheckBox";
import DropDown from "./UI_Library/Atoms/DropDown/DropDown";
import Slider from "./UI_Library/Atoms/Slider/Slider";
import auto1 from "./UI_Library/img/auto1.jpg";
import auto2 from "./UI_Library/img/auto2.jpg";
import auto3 from "./UI_Library/img/auto3.jpg";

function App() {
  let items = [
    "bmw",
    "audi",
    "porsche",
    "bmw",
    "audi",
    "porsche",
    "bmw",
    "audi",
    "porsche",
    "bmw",
    "audi",
    "porsche",
  ];

  let images = [auto1, auto2, auto3];

  return (
    <div className="App">
      <Filter></Filter>
      <AutoCard
        image="auto1.jpg"
        name="Hyundai PALISADE"
        price="6 532 420"
        characteristics="АКПП, полный привод, 3.5 л., бензиновый, 2022 г.в., внедорожник"
      ></AutoCard>
      <AutoPage
        title="Москвич 3 M03-1A-E1-G01-C0-F-5"
        images={images}
      ></AutoPage>
    </div>
  );
}

export default App;
