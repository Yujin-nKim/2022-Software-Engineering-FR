import "./header.css"
import { useNavigate,useLocation } from 'react-router-dom';
import {useState, useEffect} from "react"


export const Header = () => {
    const navigate = useNavigate();
    const buttonText=sessionStorage.getItem("Logined");

    const moveToLogin =() => {
        navigate('/login');
    }
    const movemyPage =() => {
        navigate('/myPage');
    }

    return (
        <div id ="header_div">
            <div id="logo_div">logo</div>
            <div id="space_div"></div>
            <div id="btn_div"><button id="btn_moveToLogin" onClick ={moveToLogin}>{buttonText}</button></div>
            <div id="myPage_div" onClick={movemyPage}>UserImg</div>
        </div>
    );
}

export default Header;
