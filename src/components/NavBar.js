import React, {useState} from 'react';
import '../styles/NavBar.css'
import  logo_text from '../assets/logo_text.png'
import LoginModel from './models/LoginModel';

function NavBar() {

    const [isLoginModalOpen, setLoginModal] = useState(false);

    const openLoginModal = () => setLoginModal(true);
    const closeLoginModal = () => setLoginModal(false);

    return (
        <nav className="navbar">
            <div className="logo"><img src={logo_text} alt='REDBERRY'/></div>
            <button className="button" onClick={openLoginModal}>შესვლა</button>
            <LoginModel isOpen={isLoginModalOpen} onClose={closeLoginModal}/>
        </nav>
    );
  }
  
  
  export default NavBar;