import {characters} from "../utils/constants.ts";
import {useContext} from "react";
import {SWContext} from "../utils/context.ts";

interface FriendProps {
    friend: string;
    pos: number;
}

const Friend = ({friend, pos}: FriendProps) => {
    const {changeHero} = useContext(SWContext);

    let styles = 'w-full';
    if (pos === 9) {
        styles += ' rounded-br-3xl'
    }
    if (pos === 7) {
        styles += ' rounded-bl-3xl'
    }
    return (
        <button onClick={() => changeHero(friend)} className={'cursor-pointer'}>
            <img className={styles} src={characters[friend].img} alt={characters[friend].name}/>
        </button>
    );
};

export default Friend;