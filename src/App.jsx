import { useState } from "react";
import "./App.css";

function App() {
  const [toggleState, setToggleState] = useState(false);

  /* data */
  const data__packageArr = [
    {
      title: "Basic",
      annual: "$199.99",
      monthly: "$19.99",
      storage: "500 GB Storage",
      users: "2 Users Allowed",
      send: "Send up to 3 GB",
    },
    {
      title: "Professional",
      annual: "$249.99",
      monthly: "$24.99",
      storage: "1 TB Storage",
      users: "5 Users Allowed",
      send: "Send up to 10 GB",
    },
    {
      title: "Master",
      annual: "$399.99",
      monthly: "$39.99",
      storage: "2 TB Storage",
      users: "10 Users Allowed",
      send: "Send up to 20 GB",
    },
  ];

  /* item creation */
  const createPricingItems = () => {
    return data__packageArr.map((data, index) => {
      return (
        <div
          key={`pricingItem${index}`}
          className={
            `pricing__item pricing__item--${index}` +
            (index % 2 === 1 ? " pricing__item--dark" : "")
          }
        >
          <h2
            className={
              "pricing__title" + (index % 2 === 1 ? " pricing__text--dark" : "")
            }
          >
            {data.title}
          </h2>
          <p
            className={
              "pricing__price" + (index % 2 === 1 ? " pricing__text--dark" : "")
            }
          >
            {toggleState ? data.annual : data.monthly}
          </p>
          <p className={index % 2 === 1 ? " pricing__text--dark" : ""}>
            {data.storage}
          </p>
          <p className={index % 2 === 1 ? " pricing__text--dark" : ""}>
            {data.users}
          </p>
          <p className={index % 2 === 1 ? " pricing__text--dark" : ""}>
            {data.send}
          </p>
          <button className={index % 2 === 1 ? " pricing__button--light" : ""}>
            learn more
          </button>
        </div>
      );
    });
  };

  return (
    <>
      <header className="header">
        <h1 className="header__h1">Our Pricing</h1>
        <div className="header__toggle-container">
          <p className="text--clr-light">Annually</p>
          <div
            className={"toggle" + (toggleState ? " toggle--annual" : "")}
            onClick={() => setToggleState(!toggleState)}
          >
            <div className="toggle__circle"></div>
          </div>
          <p className="text--clr-light">Monthly</p>
        </div>
      </header>

      <main className="main">{createPricingItems()}</main>

      <footer className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </footer>
    </>
  );
}

export default App;
