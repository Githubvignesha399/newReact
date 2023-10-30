import React from "react";
import Garage from "./Garage";
import Header from "./Header";
import Style from './Header.module.css'


class Car extends React.Component {
  arr = ["vignesh", "section", "fruit", "energy"];
  value;
  n = 0;
  constructor(props) {
    super(props);
    this.state = {
      brand: "Ford",
      model: "Mustang",
      color: "red",
      year: 1964,
      pro: "brand!*",
      person: this.props.person,
    };
  }
  changeColor = () => {
    if (this.n % 2 === 0) {
      this.setState({ color: "blue" });
    } else {
      this.setState({ color: "red" });
    }
    this.nmount();
    this.n++;
  };
  window = () => {
    return "This is Text from CAR! from fuction!";
  };
  nmount() {
    if (this.n % 2 === 0) {
      this.value = <Garage />;
    } else {
      let temp = "Called from Car mounted in Garage";
      this.value = "" + temp;
      console.log(
        this.state.person.map((e) =>
          typeof e == "object" ? Object.entries(e).map((e) => e[1].taluk) : e
        )
      );
    }
  }
  forIn(e) {
    let element = [];
    console.log(e);
    for (const key in e) {
      console.log(e[key]);
      element.push(key);
      element.push(e[key]);
    }
    console.log(element);
    return element;
  }
  render() {
    return (
      <>
        <h1>Hellow how are you! </h1>
        <p>{this.window()}</p>
        <p> value Variable : {this.value}</p>
        <p>
          state Variable : {this.state.color} {this.props.brand}
        </p>
        <ul>
          {this.state.person.map((e,index) =>
            typeof e == "object" ? (
              e
                .map((e) => this.forIn(e))
                .map((a) =><>
                   {a.map((v, i) =>
                    <li key={index}>{(i % 2) === 0 ? v :  v }</li>
                  )}</>
                )
            ) : (
              <li key={index}>{e}</li>
            )
          )}
        </ul>
        {/* */}
        <button type="button" className={Style.btnClass} onClick={this.changeColor}>
          click me
        </button>
        <Header/>
      </>
    );
  }
}

// eslint-disable-next-line no-undef
export default Car;
