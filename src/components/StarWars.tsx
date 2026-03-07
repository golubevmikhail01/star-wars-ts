import {starWarsInfo} from "../utils/constants.ts";
import Text from "./ui/Text.tsx";

const StarWars = () => {
    return (
        <Text text={starWarsInfo}/>
    );
};

export default StarWars;