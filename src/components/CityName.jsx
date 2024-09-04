import { useRecoilValue } from "recoil"
import { weatherAtom } from "../atoms/weatherAtom"

export function CityName(){

    const weather = useRecoilValue(weatherAtom);

    return (
        <div className="z-20 flex-shrink-0">
            <div className="text-3xl text-sage font-medium drop-shadow-xl">
                {weather.name==="Stars"? 'Touch Grass' : weather.name}
            </div>
        </div>
    )
}