import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import Button from "./ui/Button.tsx";

interface NavItemProps {
    itemTitle: string;
}

const NavItem = ({itemTitle}: NavItemProps) => {
    const {changePage} = useContext(SWContext);
    const handleClick = () => changePage(itemTitle);

    return (
        <Button text={itemTitle} onClick={handleClick}/>
    );
};

export default NavItem;