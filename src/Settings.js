import avatar from "./img/avatar.jpg";
import house from "./img/house.jpg";
import './Settings.css';
import { HjemKnap } from "./HjemKnap";

export function Settings() {
    return (
        <>

            {/* ACCOUNT */}


            {/* Wrapper-2 */}


            <div className="grid-container-2 bg-color-white">
                {/* Sprog */}
                <div className="grid-item-settings bg-color-white">
                    <h2 className="bg-color-white">Sprog</h2>
                    <h3 className="bg-color-white">Dansk / Engelsk</h3>
                </div>

                <label className="switch grid-item-settings bg-color-white">
                    <input className="bg-color-white" type="checkbox" />
                    <span className="slider round labels"></span>
                </label>

                {/* Applikationlyde */}
                <div className="grid-item-settings bg-color-white">
                    <h2 className="bg-color-white">Applikationlyde</h2>
                    <h3 className="bg-color-white">xxx</h3>
                </div>

                <label className="switch grid-item-settings bg-color-white">
                    <input  type="checkbox" />
                    <span className="slider round labels"></span>
                </label>

                {/* E-mail-kvittering */}
                <div className="grid-item-settings bg-color-white">
                    <h2 className="bg-color-white">E-mail-kvittering</h2>
                    <h3 className="bg-color-white">xxx</h3>
                </div>

                <label className="switch grid-item-settings bg-color-white">
                    <input type="checkbox" />
                    <span className="slider round labels"></span>
                </label>

                {/* Dark mode */}
                <div className="grid-item-settings bg-color-white">
                    <h2 className="bg-color-white">Dark mode</h2>
                    <h3 className="bg-color-white">xxx</h3>
                </div>

                <label className="switch grid-item-settings bg-color-white">
                    <input type="checkbox" />
                    <span className="slider round labels"></span>
                </label>

            </div>

            {/* Hjem knap */}
            <HjemKnap />






        </>
    )
}



