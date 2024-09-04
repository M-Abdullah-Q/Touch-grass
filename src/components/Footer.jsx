import { useRecoilValue } from "recoil"
import { weatherAtom } from "../atoms/weatherAtom"

export function Footer(){

    const weather = useRecoilValue(weatherAtom);

    return(
        <div className="relative z-10 h-1/6 w-full">
            <div className="absolute inset-0 bg-[url('https://www.pngall.com/wp-content/uploads/2016/03/Grass.png')] bg-repeat-x">
            </div>
            <div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage flex justify-center items-center p-2">
                Music
            </div>
        </div>
    )
}