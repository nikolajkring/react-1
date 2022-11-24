import { Link, Outlet, useLocation } from "react-router-dom";
import avatar from "./img/avatar.jpg";
import house from "./img/house.jpg";
import './HomeLayout.css';


export function HomeLayout() {

    const location = useLocation();

    const getCurrentTitle = () => {
        switch (location.pathname) {
            case "/":
            default:
                return "Hjem";
            case "/Settings":
                return "Indstillinger";
            case "/Booking":
                return "Mine reservationer";
            case "/NyBooking":
                return "Ny reservation";

        }
    }

    return (
        <>
            


            <div className="grid-container-3">
                <div className="grid-item-menu">

                    <div className="grid-container-2">
                        <img className="img-fix round" src={avatar} alt="avatar" height="75" />
                        <h3>Jeppe Lorentzen</h3>
                    </div>

                </div>

                <div className="grid-item-menu">
                    <Link to="/">
                        <img src={house} alt="house logo" height="125px" />
                    </Link>
                </div>

                <div className="grid-item-menu">
                    <h1>{getCurrentTitle()}</h1>
                </div>
            </div>


            <div className="hjem-bg wrapper-1">
            
                <div className="grid-container-1 bg-white">

                    <Outlet />

                </div>
                {/* Hjem knap */}


            </div>


            {/* copy right */}
            <p className="center">copyright © Bookin</p>
        </>
    )
}

