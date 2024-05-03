import { useEffect, useState } from "react";
import Weather from "./Weather";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store";
import { changeRightCity, changeWrongCity } from "../redux/features/citySlice";

const Background = () => {
  const API_KEY = "000b97b17faf082b6f5d126681deda82";

  const [icon, setIcon] = useState("");
  const dispatch = useDispatch();
  const city = useSelector((state: RootState) => state.city.right);
  const wrongCity = useSelector((state: RootState) => state.city.wrong);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    )
      .then((response) => {
        // Check if the response is ok
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        // Parse JSON
        return response.json();
      })
      .then((data) => {
        // Handle the JSON data here
        setIcon(data.weather[0].icon);
        dispatch(changeWrongCity(city));
      })
      .catch((error) => {
        // Handle errors here
        console.error("There was a problem with the fetch operation:", error);
        dispatch(changeRightCity(wrongCity));
      });
  }, [city]);

  return (
    <div className="absolute overflow-hidden top-0 h-screen z-30 left-0 right-0 pointer-events-none">
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <Weather src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
      <h1 className="absolute text-base sm:text-xl md:text-2xl capitalize top-5 left-1/2 -translate-x-1/2 ">
        {city} Weather
      </h1>
    </div>
  );
};

export default Background;
