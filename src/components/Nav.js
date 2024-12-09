import React, { useState } from "react";
import "./Nav.css"

export default function Nav() {

    const [show, handleShow] = useState(false);
    
    useState(()=>{
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll", ()=>{});
        };
    });

    return <nav className= {`nav ${show && "nav__black"}`}>
        <img
            alt = 'Netflix logo'
            src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
            className='nav__logo'
            onClick={() => window.location.reload()}
        />
        <img
            alt="user logged"
            src="https://occ-0-1360-2218.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABSfdyKnR44EvxpADLZ-rcBJzK4WyF6KDq-zx8E5EP_2YnybfdtixJy3ip0s16PUDsNm746HaEw1uKK8ezWPtSMgyqBLQ14U.png?r=8e0"
            className="nav__avatar"
        />
    </nav>;
};