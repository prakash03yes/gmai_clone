import { Checkbox, IconButton } from '@material-ui/core'

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RedoIcon from '@material-ui/icons/Redo';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import InboxIcon from '@material-ui/icons/Inbox';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';

import React from 'react'
import './EmailList.css'
import Section from './Section';
import EmailRow from './EmailRow';

export default function EmailList() {
	return (
		<div className="emailList">
			<div className="emailList__settings">
				<div className="emailList__settingsLeft">
					<Checkbox />
					<IconButton>
						<ArrowDropDownIcon />
					</IconButton>

					<IconButton>
						<RedoIcon />
					</IconButton>

					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>

				<div className="emailList__settingsRIg">
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>

					<IconButton>
						<ChevronRightIcon />
					</IconButton>

					<IconButton>
						<KeyboardHideIcon />
					</IconButton>

					<IconButton>
						<SettingsIcon />
					</IconButton>
				</div>
			</div>

            <div className="emailList__sections">
				<Section Icon={InboxIcon} title="Inbox" color="red" selected  />
				<Section Icon={PeopleIcon} title="Social" color="orange" />
				<Section Icon={LocalOfferIcon} title="Promotions" color="green" />
			
			</div>

			<div className="emailList__list">
				<EmailRow
					id="twi"
					title="Mail"
					subject="Give me Photo"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eveniet necessitatibus, tempore dolore suscipit error ex libero mollitia nesciunt accusamus nihil adipisci quasi. Doloremque saepe dolores porro quis eos voluptate!"
					time="10am"
				/>

				<EmailRow
					id="twi"
					title="Mail"
					subject="adad"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos eveniet necessitatibus, tempore dolore suscipit error ex libero mollitia nesciunt accusamus nihil adipisci quasi. Doloremque saepe dolores porro quis eos voluptate!"
					time="10am"
				/>


				<EmailRow
					id="twi"
					title="Mail"
					subject="adad"
					description="asd"
					time="10am"
				/>

				<EmailRow
					id="twi"
					title="Mail"
					subject="adad"
					description="asd"
					time="10am"
				/>
			</div>
			

		</div>
	)
}
