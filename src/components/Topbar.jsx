import React from "react";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { tempUnitAtom, weatherAtom } from "../atoms/weatherAtom";
import { CityName } from "./CityName";

const api = {
    key : '15e4cff619975ece9d6f47af2cf6e59b',
    baseUri : 'https://api.openweathermap.org/data/2.5/weather'
}


export function Topbar(){
    const [search,setSearch] = React.useState("");
    const setWeather = useSetRecoilState(weatherAtom);
    const setTempUnit = useSetRecoilState(tempUnitAtom);

    const handleInputChange = (event) => {
        setSearch(event.target.value);
    };

    const searchClick = async () => {
        //fetch the data
        const res = await axios.get(`${api.baseUri}?q=${search}&appid=${api.key}`);
        //set weather atom appropriately
        if(res.status==="404"){
            alert("City Not Found");
            return;
        }

        const data = res.data;
        setWeather(data);
        setSearch("")
    }

    const handleUnitChangetoC= () => {
        setTempUnit(true);
    }
    const handleUnitChangetoF = () => {
        setTempUnit(false);
    }

    function keyEnter (e){
        if(e.keyCode == 13){
            searchClick();
        }
    }

    return (
        <div className="z-20 h-1/6 flex justify-between justify-center items-center rounded-3xl p-3 backdrop-filter backdrop-blur-sm bg-opacity-50 mx-12">
            <CityName></CityName>
            <div className="flex-grow flex justify-center">
                <div className="relative bg-green/10 items-center rounded-xl backdrop-filter backdrop-blur-lg bg-opacity-50 flex w-full max-w-md mx-4">
                    <input
                        className="bg-transparent placeholder-sage border-none outline-white/10 focus:outline-none p-2 rounded-md w-full text-sage"
                        placeholder="Search"
                        value={search}
                        onChange={handleInputChange}
                        onKeyDown={keyEnter}
                    />
                    <button onClick={searchClick} className="ml-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#E0E5B6"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="z-20 flex justify-center items-center text-sage">
                <button 
                    className="text-2xl font-medium transition ease-out hover:scale-125"
                    onClick={handleUnitChangetoC}
                    >
                    °C
                </button>
                <p className="text-2xl font-medium mx-1">
                    |
                </p>
                <button 
                    className="text-2xl font-medium transition ease-out hover:scale-125"
                    onClick={handleUnitChangetoF}
                    >
                    °F
                </button>

            </div>
        </div>
    )
}