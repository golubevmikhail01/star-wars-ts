import * as React from "react";
import ErrorPage from "./ErrorPage.tsx";

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