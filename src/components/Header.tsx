import Navigation from "./Navigation.tsx";
import {SWContext} from "../utils/context.ts";
import {useContext} from "react";
import {characters} from "../utils/constants.ts";

const Header = () => {

    const {hero} = useContext(SWContext);

    return (
        <header className={'rounded-t-3xl bg-gray'}>
            <Navigation/>
            <h1 className={'text-center text-4xl py-6'}>{hero ? characters[hero].name : 'Error'}</h1>
        </header>
    );
};

export default Header;