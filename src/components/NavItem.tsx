import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {defaultHero} from "../utils/constants.ts";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {hero} = useContext(SWContext);

    return (
        <NavLink to={`/${itemTitle.toLowerCase()}/${hero || defaultHero}`}>
            <Button text={itemTitle}/>
        </NavLink>
    );
};

export default NavItem;