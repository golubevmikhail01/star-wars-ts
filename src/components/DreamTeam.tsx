import Friend from "./Friend.tsx";
import {friends} from "../assets";

const DreamTeam = () => {
    return (
        <section className="float-right w-1/2 border rounded-b-3xl grid grid-cols-3 gap-1.5 mt-2 ml-2">
            <h2 className="col-span-3 text-center text-2xl">Dream team</h2>
            {friends.map((friend, index) =>
                <Friend friend={friend} pos={index + 1} key={friend}/>
            )}
        </section>
    );
};

export default DreamTeam;