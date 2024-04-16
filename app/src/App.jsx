import React, { useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import "./App.css";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  const [filterData, setFilterData] = useState(data);
  const [inputdata, setInputData] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log(status)
      try {
        setStatus("Loading");
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setStatus("Loaded");
        setData(json);
        setFilterData(json);
        console.log(json);
      } catch (error) {
        setStatus("error");
      }
    };
    fetchData();
  }, []);

  const Filterfood = (type) => {
    if (type === "all") {
      setFilterData(data);
    } else {
      const filteredData = data?.filter((food) =>
        food.type.toLowerCase().includes(type.toLowerCase())
      );
      setFilterData(filteredData);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputData(inputValue);
    console.log(inputValue);
    const filteredData = data?.filter((food) =>
      food.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilterData(filteredData);
    inputRef.current.focus();
  };

  return (
    <>
      <Header
        OnChange={handleChange}
        InputData={inputdata}
        Filtercheck={Filterfood}
        inputRef={inputRef}
      />
      <HeroSection Data={filterData} />
    </>
  );
}

export default App;
