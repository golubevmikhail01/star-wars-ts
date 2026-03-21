import Text from "./ui/Text.tsx";
import {useContext, useEffect} from "react";
import {SWContext} from "../utils/context.ts";

const ErrorPage = () => {
    const {changeHero} = useContext(SWContext);

    useEffect(() => changeHero(''), [])

    return (
        <Text text={'O-o-o-p-s! Something went wrong'}/>
    );
};

export default ErrorPage;