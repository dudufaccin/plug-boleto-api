import React, { useState } from 'react';
import classes from './style.module.css';
import logoTechnospeed from '../../assets/images/logoTechnospeed.png';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMenu } from 'react-icons/io5';
import { IoSearch } from 'react-icons/io5';

const Navbar = ({ escuro, onClick, onSearching }) => {
    const [width] = useState(window.innerWidth);
    const isMobilePage = width <= 768;
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen((prevEvent) => !prevEvent);
    };

    const background = escuro ? '#1B213B' : '#fff';
    const iconColor = escuro ? '#FFF' : '#111';
    const textColor = escuro ? '#FFF' : '#111';

    if (!isMobilePage) {
        return (
            <header className={classes.container} style={{ color: textColor, backgroundColor: background }}>
                <img src={logoTechnospeed} alt="Logo Technospeed" />

                <div className={classes.div_status}>
                    {/* <div className={classes.ball_offline} style={{ color: textColor }}>
                        <p>offline</p>
                    </div>
                    <div className={classes.ball_online} style={{ color: textColor }}>
                        <p>online</p>
                    </div>
                    <div className={classes.ball_lentidao} style={{ color: textColor }}>
                        <p>lentidão</p>
                    </div> */}
                    <div className={classes.filter}>
                        <input
                            type="text"
                            placeholder="Pesquisar API..."
                            onChange={(e) => onSearching(e.target.value)} // Atualiza o termo de pesquisa no Index
                            style={{
                                padding: '5px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                width: '100%',
                            }}
                        />
                        <IoSearch />
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
    } else {
        return (
            <>
                {!menuOpen && (
                    <div className={classes.menu_open_mobile}>
                        <div className={classes.filter_mobile}>
                            <input
                                type="text"
                                placeholder="Pesquisar API..."
                                onChange={(e) => onSearching(e.target.value)} // Atualiza o termo de pesquisa no Index
                                style={{
                                    padding: '5px',
                                    borderRadius: '4px',
                                    border: '1px solid #ccc',
                                    width: '100%',
                                }}
                            />
                            <IoSearch />
                        </div>
                        {!menuOpen && (
                            <button onClick={handleMenu}>
                                <IoMenu />
                            </button>
                        )}
                    </div>
                )}

                {menuOpen && (
                    <div className={classes.container_mobile}>
                        <button className={classes.close_icon} onClick={handleMenu}>
                            <AiOutlineClose />
                        </button>
                        <div className={classes.content_mobile}>
                            <div className={classes.logo_mobile}>
                                <img src={logoTechnospeed} alt="" />
                            </div>
                            <div className={classes.servicos_mobile}>
                                <a
                                    href="https://tecnospeed.com.br/boleto/?utm_source=googleads&utm_medium=cpa&utm_campaign=brand-dinamica&utm_term=hotsite&gad_source=1&gclid=CjwKCAiAxKy5BhBbEiwAYiW--z7gfWH2V4UDURsIQz98hmDjGA4ttaRXPZEJ1hP8hvd5-dKiUc5vVxoC5NsQAvD_BwE"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={classes.btn_servicos}
                                    style={{ color: textColor }}
                                >
                                    Nossos Serviços
                                </a>
                            </div>
                        </div>
                        <div className={classes.sombra}></div>
                    </div>
                )}
            </>
        );
    }
};

export default Navbar;
