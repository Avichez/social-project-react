import React from "react";
import PreloaderImage from './../../../assets/images/preloader.svg'

const Preloader = () => {
    return (
        <div>
            <img style={{ margin: "0 auto", display: "block" }} src={PreloaderImage} />
        </div>
    )


}

export default Preloader;