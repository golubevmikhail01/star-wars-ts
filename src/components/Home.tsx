import Hero from "./Hero.tsx";
import DreamTeam from "./DreamTeam.tsx";
import OpeningCrawl from "./OpeningCrawl.tsx";
import Guard from "./Guard.tsx";
import {useHeroFromRoute} from "../hooks/useHeroFromRoute.ts";

const Home = () => {

    const {validationHeroId} = useHeroFromRoute();

    return (
        <Guard when={validationHeroId.isValidHeroId}>
            <main>
                <Hero/>
                <DreamTeam/>
                <OpeningCrawl/>
            </main>
        </Guard>
    )
};

export default Home;