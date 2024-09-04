import { atom } from "recoil";

export const weatherAtom = atom({
    key : "weatherAtom",
    default : {
        name : "Stars",
        weather : [
            {
                id : "000",
                icon : "00a",
                description: "Outer space",
            }
        ],
        main : {
            temp : 2.7
        }
    }
})

export const tempUnitAtom = atom({
    key : "tempUnitAtom",
    default : true
})