import ErrorPage from "./ErrorPage.tsx";
import * as React from "react";

type GuardProps = {
    when: boolean;
    children: React.ReactNode;
    fallback?: React.ReactNode;
};

const Guard = ({when, children, fallback = <ErrorPage/>}: GuardProps) => {
    if (!when) {
        return fallback;
    }

    return children;
};

export default Guard;