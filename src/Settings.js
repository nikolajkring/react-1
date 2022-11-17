import './Settings.css';
import avatar from "./img/avatar.jpg";
import house from "./img/house.jpg";




function settings() {
    return (
        <>

            {/* ACCOUNT */}

            <div class="grid-container-3">
                <div class="grid-item">

                    <img src={avatar} alt="avatar" height="50" />
                    <h3>Jeppe Lorentzen</h3>

                </div>

                <div class="grid-item">
                    <img src={house} alt="house logo" height="125px" />
                </div>

                <div class="grid-item">
                    <h1>Indstillinger</h1>
                </div>


            </div>


            <div class="hjem-bg wrapper-1">
                <div class="grid-container-2 bg-white wrapper-2">


                    {/* Sprog */}
                    <div class="grid-item">
                        <h2>Sprog</h2>
                        <h3>Dansk / Engelsk</h3>
                    </div>

                    <label class="switch grid-item">
                        <input type="checkbox" />
                        <span class="slider round labels"></span>
                    </label>

                    {/* Applikationlyde */}
                    <div class="grid-item">
                        <h2>Applikationlyde</h2>
                        <h3>xxx</h3>
                    </div>

                    <label class="switch grid-item">
                        <input type="checkbox" />
                        <span class="slider round labels"></span>
                    </label>

                    {/* E-mail-kvittering */}
                    <div class="grid-item">
                        <h2>E-mail-kvittering</h2>
                        <h3>xxx</h3>
                    </div>

                    <label class="switch grid-item">
                        <input type="checkbox" />
                        <span class="slider round labels"></span>
                    </label>

                    {/* Dark mode */}
                    <div class="grid-item">
                        <h2>Dark mode</h2>
                        <h3>xxx</h3>
                    </div>
                    <label class="switch grid-item">
                        <input type="checkbox" />
                        <span class="slider round labels"></span>
                    </label>


                </div>
                {/* Hjem knap */}
                <button class="hjem-knap center">Hjem</button>

            </div>


            {/* copy right */}
            <p class="center">copyright © Bookin</p>
        </>
    )
}



export default settings;