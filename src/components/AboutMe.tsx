import {characters, THIRTY_DAYS, baseURL} from "../utils/constants.ts";
import {useEffect, useState} from "react";
import {isFresh} from "../utils/functions.ts";
import Guard from "./Guard.tsx";
import {useHeroFromRoute} from "../hooks/useHeroFromRoute.ts";

interface Hero {
    name: string;
    birth_year: string;
    gender: string;
    height: string;
    mass: string;
    homeworld: string;
    lastUpdateData: number;
}

const AboutMe = () => {
    // const {heroId = defaultHero} = useParams();
    // const {changeHero} = useContext(SWContext);

    const {validationHeroId} = useHeroFromRoute();
    const heroId = validationHeroId.heroId;

    const [hero, setHero] = useState<Hero | null>(() => {
        if (!validationHeroId.isValidHeroId) {
            return null;
        }

        const item = localStorage.getItem(heroId);
        const localHero = item ? JSON.parse(item) : null;

        if (localHero && isFresh(localHero, THIRTY_DAYS)) {
            return localHero;
        }
        return null;
    });

    useEffect(() => {
        if (!validationHeroId.isValidHeroId || hero) {
            return;
        }

        const loadData = async () => {
            try {
                const res = await fetch(`${characters[heroId].url}`);
                const data = await res.json();

                const planetRes = await fetch(`${baseURL}/v1/planets/${data.homeworld}`);
                const planet = await planetRes.json();

                const newData = {
                    ...data,
                    homeworld: planet.name,
                    lastUpdateData: Date.now()
                };

                setHero(newData);
                localStorage.setItem(heroId, JSON.stringify(newData));

            } catch {
                setHero(null);
            }
        };

        void loadData();
    }, [heroId, hero, validationHeroId.isValidHeroId]);

    return (
        <Guard when={validationHeroId.isValidHeroId}>
            {!hero ? (
                <div>Loading...</div>
            ) : (
                <div className={'grid grid-cols-10 my-2 gap-4'}>
                    <img className={'col-span-3 w-full shadow-hero'}
                         src={characters[heroId].img} alt={hero.name}/>
                    <p className={'col-span-7 col-start-4 text-3xl text-justify leading-normal tracking-widest'}>
                        <b>Name: {hero.name}</b><br/>
                        Birth Year: {hero.birth_year}<br/>
                        Gender: {hero.gender}<br/>
                        Height: {hero.height}cm<br/>
                        Mass: {hero.mass}kg<br/>
                        Homeworld: {hero.homeworld}
                    </p>
                </div>
            )}
        </Guard>
    );

};

export default AboutMe;