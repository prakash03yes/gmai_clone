import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import Mail from './Components/Mails/Mail/Mail';
import EmailList from './Components/Mails/EmailList/EmailList';
import SendMail from './Components/Mails/Mail/SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useSelector } from 'react-redux'
function App() {

	const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

	return (
		<div className="App">
			<Router>
				<Header />

				<div className="app__body">
					<Sidebar />

					<Switch>
						<Route path="/mail">
							<Mail />
						</Route>
						<Route path="/">
							<EmailList />
						</Route>
					</Switch>

					{sendMessageIsOpen && <SendMail />}

				</div>

			</Router>
		</div>
	);
}

export default App;
