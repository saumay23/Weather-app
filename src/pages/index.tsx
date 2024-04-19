import SearchBar from "@/components/SearchBar";
import Weather from "@/components/Weather";
import axios from "axios";
import { Poppins } from "next/font/google";
import {
  useEffect,
  useState,
} from "react";

const inter =
  Poppins(
    {
      subsets:
        [
          "latin",
        ],
      weight:
        "500",
    }
  );
export default function Home() {
  const [
    search,
    setSearch,
  ] =
    useState<string>(
      ""
    );
  const [
    weather,
    setWeather,
  ] =
    useState(
      []
    );
  const searchWeatherHandler =
    () => {
      if (
        search !==
        ""
      ) {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=398e35c54ecd2a0f30d3f613c2211878&units=metric`
          )
          .then(
            (
              response
            ) => {
              setWeather(
                response.data
              );
            }
          )
          .catch(
            (
              error
            ) => {
              console.log(
                error
              );
            }
          );
      }
    };
  useEffect(() => {
    searchWeatherHandler();
  }, [
    search,
  ]);
  return (
    <div
      className={`w-screen flex flex-col h-screen max-w-[1240px] mx-auto mt-10 p-10"  ${inter.className}`}
    >
      <div>
        <SearchBar
          selected={
            search
          }
          setSelected={
            setSearch
          }
        />
      </div>
      <div className="flex-1 flex items-center ">
        <Weather
          weatherData={
            weather
          }
        />
      </div>
    </div>
  );
}
