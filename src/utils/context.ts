import {createContext} from "react";
import {defaultHero} from "./constants.ts";

export const SWContext = createContext({
    hero: defaultHero,
    changeHero: (hero: string) => console.log(hero)
});