import { Link } from "react-router-dom";
import './App.css';

export function HjemKnap() {
    return (
        <>
        <Link className="bg-color-white" to="/">
        <button className="hjem-knap center ">Hjem</button>
        </Link>
        </>
    )
}
