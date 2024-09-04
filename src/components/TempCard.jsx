import { useRecoilValue } from "recoil"
import { tempUnitAtom, weatherAtom } from "../atoms/weatherAtom"

export function TempCard(){
    const tempUnit = useRecoilValue(tempUnitAtom);
    const weather = useRecoilValue(weatherAtom);
    const imguri =  weather.weather[0].icon === "00a" ? 'https://www.pngall.com/wp-content/uploads/14/White-Star-PNG-Photos.png' : `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
    let K = weather.main.temp;
    let tempC = (K-273).toFixed(2) + " °C";
    let tempF = (((K-273.15)*1.8)+32).toFixed(2) + " °F";
    return (
        <div className="relative z-20 h-2/3 flex justify-center items-center">
            <div className="bg-white/10 backdrop-blur-sm h-60 w-60 flex flex-col justify-end items-center text-3xl text-sage font-medium p-12 rounded-lg">
                <div className="justify-self-center">
                    <img
                        src={imguri}
                        alt="Weather icon"
                        className="w-32 h-32 object-cover justify-self-center"
                    />
                </div>
                <div className="justify-self-center items-center hover:scale-125"> 
                    {tempUnit? tempC: tempF}
                </div>
            </div>
        </div>
    )
}