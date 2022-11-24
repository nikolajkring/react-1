import { Link } from "react-router-dom";
import avatar from "./img/avatar.jpg";
import aktuelleBookninger from "./img/aktuelle-bookinger.PNG";
import nyBooking from "./img/ny-booking.PNG";
import dinInstillinger from "./img/dine-indstillinger.PNG";



export function Home() {
    return (
        <>


            <div className="center home-de-lift bg-color-white ">
                <img className="round" src={avatar} alt="avatar" height="75" />
                <h1 className="godmorgen bg-color-white">Godmorgen Jeppe!</h1>
            </div>

            <div className="grid-container-3 home-lift bg-color-white">
                <div className="grid-item bg-color-white">
                    <Link className="bg-color-white" to="/Booking">
                        <img className="bg-color-white" src={aktuelleBookninger} alt="aktuelleBookninger" height="150" />
                    </Link>
                </div>

                <div className="grid-item bg-color-white">
                    <Link className="bg-color-white" to="/NyBooking">
                        <img className="bg-color-white" src={nyBooking} alt="nyBooking" height="150" />
                    </Link>
                </div>

                <div className="grid-item bg-color-white">
                    <Link className="bg-color-white" to="/Settings">
                        <img className="bg-color-white" src={dinInstillinger} alt="dinInstillinger" height="150" />
                    </Link>
                </div>
            </div>





        </>
    )
}