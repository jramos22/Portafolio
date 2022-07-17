import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import BurguerButton from './BurgerButton';
export default function Header() {
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		//when it is true it turn to false
		setClicked(!clicked);
	};
	return (
		<header className="header clearfix">
			<div className="header_container">
				<div className="header_logo">
					<Link to="/home">
						<svg
							width="42"
							height="42"
							viewBox="0 0 42 42"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<circle cx="21" cy="21" r="20.5" stroke="#4892A6" />
							<path
								d="M16.0089 23.2092V14.3411H18.6368V23.2092C18.6368 24.0647 18.4493 24.8 18.0743 25.4153C17.6993 26.0246 17.1866 26.4934 16.5362 26.8215C15.8917 27.1496 15.1651 27.3137 14.3565 27.3137C13.5186 27.3137 12.7774 27.1731 12.1329 26.8918C11.4883 26.6106 10.9815 26.1799 10.6124 25.5998C10.2432 25.0139 10.0587 24.2727 10.0587 23.3762H12.7042C12.7042 23.845 12.7686 24.217 12.8975 24.4924C13.0323 24.7678 13.2227 24.9641 13.4688 25.0813C13.7149 25.1985 14.0108 25.2571 14.3565 25.2571C14.6905 25.2571 14.9805 25.178 15.2266 25.0198C15.4727 24.8616 15.6631 24.6301 15.7979 24.3254C15.9385 24.0207 16.0089 23.6487 16.0089 23.2092ZM24.8155 27.1379H22.0294L22.0469 25.0813H24.8155C25.5069 25.0813 26.0899 24.926 26.5645 24.6155C27.0391 24.2991 27.3965 23.8391 27.6368 23.2356C27.8829 22.6321 28.0059 21.9026 28.0059 21.0471V20.4231C28.0059 19.7668 27.9356 19.1897 27.795 18.6916C27.6602 18.1936 27.4581 17.7746 27.1885 17.4348C26.919 17.095 26.588 16.8401 26.1954 16.6702C25.8028 16.4944 25.3516 16.4065 24.8419 16.4065H21.9766V14.3411H24.8419C25.6973 14.3411 26.4796 14.4875 27.1885 14.7805C27.9034 15.0676 28.5215 15.4807 29.043 16.0198C29.5645 16.5588 29.9659 17.2034 30.2471 17.9534C30.5342 18.6975 30.6778 19.5266 30.6778 20.4407V21.0471C30.6778 21.9553 30.5342 22.7844 30.2471 23.5344C29.9659 24.2844 29.5645 24.9289 29.043 25.468C28.5274 26.0012 27.9092 26.4143 27.1885 26.7073C26.4737 26.9944 25.6827 27.1379 24.8155 27.1379ZM23.5235 14.3411V27.1379H20.8868V14.3411H23.5235Z"
								fill="#fff"
							/>
						</svg>
					</Link>
				</div>
				<div className="header_menu">
					<nav
						className={`header_menu_nav ${
							clicked ? 'header_menu_nav--active' : ''
						}`}
					>
						<NavLink onClick={clicked} to="/home">
							Home
						</NavLink>
						<NavLink onClick={clicked} to="/about">
							About me
						</NavLink>
						<NavLink onClick={clicked} to="/projects">
							Projects
						</NavLink>
						<a
							className="resume_button"
							href="https://drive.google.com/file/d/1G9Sc9qfX__8txxt4CJFPrfzvwbIO3sNF/view?usp=sharing"
						>
							Resume
						</a>
					</nav>
					<div className="desktop">
						<BurguerButton
							clicked={clicked}
							handleClick={handleClick}
						/>
					</div>
					<div className={`initial ${clicked ? 'active' : ''}`}></div>
				</div>
			</div>
		</header>
	);
}
