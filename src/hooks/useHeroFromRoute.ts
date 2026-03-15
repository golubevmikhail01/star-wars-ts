import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { SWContext } from "../utils/context.ts";
import { characters, defaultHero } from "../utils/constants.ts";

interface ValidationHeroId {
    isValidHeroId: boolean;
    heroId: string;
}

export const useHeroFromRoute = () => {
    const { changeHero } = useContext(SWContext);
    const { heroId = defaultHero } = useParams();

    const validationHeroId: ValidationHeroId = {
        isValidHeroId: heroId in characters,
        heroId
    };

    useEffect(() => {
        if (validationHeroId.isValidHeroId) {
            changeHero(heroId);
        }
    }, [heroId, changeHero, validationHeroId.isValidHeroId]);

    return { validationHeroId };
};