import React from "react";

const Weather = (props: { weatherData: any }) => {
  const { weatherData } = props;

  return (
    <div className=" shadow-xl w-full p-2">
      {weatherData?.length !== 0 ? (
        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <img
              src={`https://openweathermap.org/img/wn/${weatherData?.weather?.[0]?.icon}@2x.png`}
              alt=""
            />
            <h2 className="text-4xl ml-10 text-center">{weatherData?.name}</h2>
          </div>
          <div className="text-2xl flex justify-around my-2">
            <div>Max Temp: {weatherData?.main?.temp_max} deg</div>
            <div>Min Temp: {weatherData?.main?.temp_min} deg</div>
          </div>
        </div>
      ) : (
        <>
          <div className=" w-full text-center p-3 text-2xl">
            Search For a City
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
