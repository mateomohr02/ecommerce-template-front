import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import OptionLogged from './OptionLogged';
import OptionsAnonimous from './OptionsAnonimous';
import { logout } from '../../redux/actions/user/logout';

const ExpandOptions = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout)
        localStorage.setItem("loggedIn", "false");
        navigate("/store");
    }

  return (

    <div>
        {localStorage.getItem("loggedIn") === "true"  ? 
        <OptionLogged handleLogout={handleLogout}/>
        : <OptionsAnonimous/> 
        }
        
    </div>
  )
}

export default ExpandOptions