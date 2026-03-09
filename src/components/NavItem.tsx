import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import Button from "./ui/Button.tsx";
import {NavLink} from "react-router";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {changePage} = useContext(SWContext);
    const handleClick = () => changePage(itemTitle);

    return (
        <NavLink to={`/${itemTitle.toLowerCase()}`}>
            <Button text={itemTitle} onClick={handleClick}/>
        </NavLink>
    );
};

export default NavItem;