import React from 'react';
import "../../App.css"
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset } from "../../redux/action/index"
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram'

import ReplayIcon from '@material-ui/icons/Replay';

export const Cardd = () => {
    let Opt = useSelector((state) => state.NumCounter);
    const dispatch = useDispatch();
    const Inc = () => {
        dispatch(Increment())
    }
    const Dec = () => {
        dispatch(Decrement())
    }

    const Ress = () => {
        dispatch(Reset())
    }


    return (
        <div className="main">

            <h1 className="switch">Redux Counter</h1>

            <div className="card">

                <h1 className="btn btn1" onClick={() => Dec()}>-</h1>
                <h1 className="opt">{Opt}</h1>
                <h1 className="btn btn2" onClick={() => Inc()}>+</h1>

            </div>
            <button className="reset" onClick={() => Ress()}><ReplayIcon />Reset</button>
            <h3 className="credit">Made by <a style={{ textDecoration: "none", cursor: "pointer", color: "yellow" }} href="https://www.linkedin.com/in/ahmadraza100/" target="blank">Ahmad Raza</a></h3>
            <div className="contact">
            <a href="https://github.com/ahmadraza100" target="blank"><GitHubIcon style={{fontSize:"2em"}}className="icons"/></a>
            <a href="https://linkedin.com/in/ahmadraza101" target="blank"><LinkedInIcon style={{fontSize:"2em"}} className="icons"/></a>
            <a href="https://instagram.com/iam_ahmademi" target="blank"><InstagramIcon style={{fontSize:"2em"}} className="icons"/></a>
            </div>
        </div>
    );
}
