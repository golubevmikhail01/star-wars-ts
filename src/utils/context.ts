import {createContext} from "react";

interface SWContextType {
    page: string;
    changePage: (page: string) => void;
}

export const SWContext = createContext<SWContextType>({} as SWContextType);