import React from 'react'
import './Header.css'

import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


import { IconButton } from '@material-ui/core';
import logoImg from '../../Assets/images/gmail_logo.jpg';

export default function Header() {
	return (
		<div className="header">

			<div className="header__left">
				<IconButton>
					<MenuIcon />
				</IconButton>
				<img className="header__left_GmailLogo" src={logoImg} />
			</div>

			<div className="header__middle">
				<SearchIcon />
				<input type="text" placeholder="Search mail" />
				<ArrowDropDownIcon className="header__inputCaret" />
			</div>

			<div className="header__right">
				<IconButton>
					<AppsIcon />
				</IconButton>

				<IconButton>
					<NotificationsIcon />
				</IconButton>
	
				<IconButton>
			        <AccountCircleIcon />
				</IconButton>
				
			</div>
		</div>
	)
}
