import React from 'react'
import './SendMail.css'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useForm } from "react-hook-form";

export default function SendMail() {

	const { register, handleSubmit, watch, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);


	return (
		<div className="sendMail">
			<div className="sendMail__header">
				<h2>Send Message</h2>
				<CloseIcon className="sendMail__close" />
			</div>

			<form className="sendMail__form" onSubmit={handleSubmit(onSubmit)} >

				<input
					placeholder="To"
					type="text"
					{...register("sendMail__to", { required: true })}
				/>
				{errors.sendMail__to && <span style={{ color: "red", textAlign: "right", fontSize: '12px' }}>This field is required</span>}
				<input
					placeholder="Subject"
					type="text"
					name="sendMail__subject"
					{...register("sendMail__subject", { required: true })}
				/>
				{errors.sendMail__subject && <span style={{ color: "red", textAlign: "right", fontSize: '12px' }}>This field is required</span>}
				<input
					placeholder="Message..."
					type="text"
					name="sendMail__message"
					{...register("sendMail__message", { required: true })}
				/>
				{errors.sendMail__message && <span style={{ color: "red", textAlign: "right", fontSize: '12px' }}>This field is required</span>}
				<div className="sendMial__options">
					<Button type="submit" className="sendMaill__send">Send</Button>
				</div>

			</form>
		</div>
	)
}
