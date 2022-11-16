import './Settings.css';




function settings() {
    return (
        <>

            <div class="grid-container">

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


        </>
    )
}



export default settings;