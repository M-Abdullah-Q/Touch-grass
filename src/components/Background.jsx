import React from "react";
import { useRecoilValue } from "recoil"
import { weatherAtom } from "../atoms/weatherAtom"

export function Background(){
    const weather = useRecoilValue(weatherAtom);
    const desc = weather.name+"-park-"+weather.weather[0].description.replace(/ /g, "-") + "-weather";
    const [imgSrc,setImgSrc] = React.useState('');
    React.useEffect(() => {
        const fetchImage = async () => {
            try {
                setImgSrc(`https://image.pollinations.ai/prompt/${desc}`)
            } catch (error) {
                console.error("Error fetching image from Unsplash:", error);
            }
        };

        fetchImage();
    }, [desc]);
    return (
        <div className="absolute z-0 h-screen w-full">
            <img 
                src={imgSrc}
                alt="Background Image"
                className="w-full h-screen z-10"
            />
        </div>
    )
}