import { Fragment, useEffect, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { AiOutlineCheck, AiOutlineSearch } from "react-icons/ai";
import axios from "axios";

export default function SearchBar(props: {
  selected: string;
  setSelected: (item: string) => void;
}) {
  const { selected, setSelected } = props;
  const [query, setQuery] = useState<string>("");
  const [city, setCity] = useState<string[]>([]);

  useEffect(() => {
    const getData = setTimeout(async () => {
      const options = {
        method: "GET",
        url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
        params: {
          minPopulation: "1000000",
          namePrefix: query,
        },
        headers: {
          "X-RapidAPI-Key":
            "ea24d02877msh4c50c7906078af9p1ae428jsn96fe612fc340",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const data = await response.data.data;
        const cities = data.map((item: any) => item.city);
        setCity(cities);
      } catch (error) {
        console.error(error);
      }
    }, 1000);
    return () => clearTimeout(getData);
  }, [query]);
  return (
    <div className="w-full relative">
      <Combobox value={selected} onChange={setSelected}>
        <div>
          <div className=" w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md ">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 outline-none"
              displayValue={(city: string) => city}
              placeholder="Search for a City"
              onChange={(event) => setQuery(event.target.value)}
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <AiOutlineSearch
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {city.length === 0 && query !== "" ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                city.map((item, index) => (
                  <Combobox.Option
                    key={index}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-teal-600 text-white" : "text-gray-900"
                      }`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          >
                            <AiOutlineCheck
                              className="h-5 w-5"
                              aria-hidden="true"
                            />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
}
