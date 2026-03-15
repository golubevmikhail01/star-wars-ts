import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";
import ErrorPage from "./ErrorPage.tsx";
import {useHeroFromRoute} from "../hooks/useHeroFromRoute.ts";
import Guard from "./Guard.tsx";

const StarWars = () => {

    const {validationHeroId} = useHeroFromRoute();

    return (
        <Guard when={validationHeroId.isValidHeroId}>
            <Text text={starWarsInfo}/> : <ErrorPage/>
        </Guard>
    )
};

export default StarWars;