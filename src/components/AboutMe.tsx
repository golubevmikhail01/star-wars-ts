import {defaultHero, characters, THIRTY_DAYS, baseURL} from "../utils/constants.ts";
import {useContext, useEffect, useState} from "react";
import {isFresh} from "../utils/functions.ts";
import {useParams} from "react-router";
import ErrorPage from "./ErrorPage.tsx";
import {SWContext} from "../utils/context.ts";

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
    const {heroId = defaultHero} = useParams();
    const {changeHero} = useContext(SWContext);

    const [hero, setHero] = useState<Hero | null>(() => {
        if (!(heroId in characters)) {
            return null;
        }

        const item = localStorage.getItem(heroId);
        const localHero = item ? JSON.parse(item) : null;

        if (localHero && isFresh(localHero, THIRTY_DAYS)) {
            return localHero;
        }
        return null;
    });

    changeHero(heroId);

    useEffect(() => {
        if (!(heroId in characters) || hero) {
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
    }, [heroId, hero]);

    if (!(heroId in characters)) {
        return <ErrorPage/>;
    }

    if (!hero) {
        return <div>Loading...</div>;
    }

    return (
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
    );

};

export default AboutMe;