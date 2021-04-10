import React from 'react'
import "./Mail.css"

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import MarkunreadIcon from '@material-ui/icons/Markunread';
import SnoozeIcon from '@material-ui/icons/Snooze';
import QueueIcon from '@material-ui/icons/Queue';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';

import { IconButton } from '@material-ui/core';

export default function Mail() {
	return (
		<div className="mail">
			<div className="mail__tools">
				<div className="mail__toolsLeft">

					<IconButton>
						<ArrowBackIcon />
					</IconButton>

					<IconButton>
						<ArchiveIcon />
					</IconButton>

					<IconButton>
						<ReportIcon />
					</IconButton>

					<IconButton>
						<MarkunreadIcon />
					</IconButton>

					<IconButton>
						<SnoozeIcon />
					</IconButton>

					<IconButton>
						<QueueIcon />
					</IconButton>

					<IconButton>
						<LabelIcon />
					</IconButton>

					<IconButton>
						<MoreVertIcon />
					</IconButton>

				</div>
				<div className="mail__toolsRight">

			     	<IconButton>
						<ChevronLeftIcon />
					</IconButton>

					<IconButton>
						<ChevronRightIcon />
					</IconButton>

					<IconButton>
						<KeyboardHideIcon />
					</IconButton>

				</div>
			</div>

			<div className="mail__body">
				<div className="mail__bodyHeader">
					<h2>Subject</h2>
					<p className="mail__bodyHeaderTitle">Title</p>
					<p className="mail__time">10am</p>
				</div>

				<div className="mail__message">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, soluta? Ipsum id dolore ex animi facere mollitia nulla iusto, inventore nostrum. Omnis, impedit! Facere earum velit hic, laudantium illum dolorum.
				</div>
			</div>
		</div>
	)
}
