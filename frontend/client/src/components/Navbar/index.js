import React from 'react';
import classes from './style.module.css';
import logoTechnospeed from '../../assets/images/logoTechnospeed.png';

const Navbar = ({ escuro, onClick }) => {
    const iconColor = escuro ? '#FFF' : '#111';
    const textColor = escuro ? '#FFF' : '#111';

    return (
        <header className={classes.container} style={{ color: textColor }}>
            <img src={logoTechnospeed} alt="Logo Technospeed" />

            <div className={classes.div_status}>
                <div className={classes.ball_offline} style={{ color: textColor }}>
                    <p>offline</p>
                </div>
                <div className={classes.ball_online} style={{ color: textColor }}>
                    <p>online</p>
                </div>
                <div className={classes.ball_lentidao} style={{ color: textColor }}>
                    <p>lentidão</p>
                </div>
            </div>
            <a
                href="https://tecnospeed.com.br/boleto/?utm_source=googleads&utm_medium=cpa&utm_campaign=brand-dinamica&utm_term=hotsite&gad_source=1&gclid=CjwKCAiAxKy5BhBbEiwAYiW--z7gfWH2V4UDURsIQz98hmDjGA4ttaRXPZEJ1hP8hvd5-dKiUc5vVxoC5NsQAvD_BwE"
                target="_blank"
                rel="noreferrer"
                className={classes.btn_servicos}
                style={{ color: textColor }}
            >
                Nossos Serviços
            </a>
            <button onClick={onClick} style={{ backgroundColor: 'transparent', border: 'none', maxWidth: '100px' }}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={iconColor}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    width="30px"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                    />
                </svg>
            </button>
        </header>
    );
};

export default Navbar;
