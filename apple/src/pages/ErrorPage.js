import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const useError = useRouteError();
    return(
        <h1>{useError.message || useError.statusText}</h1>
    );
}