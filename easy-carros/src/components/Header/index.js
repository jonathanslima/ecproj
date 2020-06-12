import React, {useState} from "react";
import { MdExitToApp } from 'react-icons/md';
import { Link } from 'react-router-dom';

import './style.scss';

function Header() {
	const [stateMenu, setStateMenu] = useState();
	
	function toggleMenu(){
		const submenu = document.querySelector(".submenu").classList;

		if(stateMenu){
			submenu.add("d-none")
			setStateMenu()
			
		}else{
			submenu.remove("d-none")
			setStateMenu('open')
			
		}
	}

  return (
    <header className="fixed-top header">
      <nav className="navbar navbar-dark bg-dark">
        <button
					id="menu"
					onClick={toggleMenu}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

				<h2 className="text-white">Veículos</h2>
      </nav>
			<ul className="list-unstyled submenu d-none">
				<li><Link to="/"><MdExitToApp />Logout</Link></li>
			</ul>
    </header>
  );
}

export default Header;
