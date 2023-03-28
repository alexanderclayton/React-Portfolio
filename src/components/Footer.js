import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin } from 'react-icons/ai';
import '../styles/Footer.css';




function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <AiOutlinePhone />
            <a href="mailto:alexander.clayton.email@gmail.com"> <AiOutlineMail /> </a>
            <a href="https://github.com/alexanderclayton"> <GoMarkGithub /> </a>
            <a href="https://www.linkedin.com/in/alexander-clayton-64766090/"> <AiFillLinkedin /></a>
        </div>
        <p>This page was developed by Alex Clayton as part of the KU Coding Bootcamp Module 20 React Challenge</p>
    </div>
  )
}

export default Footer