import "./Footer.css"
import React from "react"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/Footer.png)" }}>
        <div className="footerContenido">
        <div className='redes'>
            
            <a href='https://github.com/lera0220/'>
                <img src="../img/github_icon.png" alt='Github' />
            </a>
            <a href='https://pa.linkedin.com/in/luigui-rodriguez'>
                <img src="../img/linkedin_icon.png" alt='Linkedin' />
            </a>
        </div>
        <img src='/img/logo.png' alt='org' className="logofooter"/>
        <strong>Desarrollado por Luigui Rodriguez</strong>
        </div>
    </footer>
}

export default Footer