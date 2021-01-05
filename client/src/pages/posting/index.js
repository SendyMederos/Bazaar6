import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

import "../../styles/upload.css"

const uploadAddress = "http://localhost:8080/upload"

export const Posting = (props) => {

	// Maintains state for error messages from the API service
	const [ errorMessage, setErrorMessage ] = useState("")

	// Maintains state for whether or not the file was successfully uploaded
	const [ uploaded, setUploaded ] = useState(false)

	// Maintains state for whether or not 'fetch' is currently uploading
	const [ uploading, setUploading ] = useState(false)

	// Define the 'onDrop' event handler to handle user file drops
	// NOTE: Must be named 'onDrop' to work with Dropzone
	const onDrop = useCallback(async (acceptedFiles) => {

		// Ensure we actually received drops from the event
		// or quietly return this function
		if (acceptedFiles == null || acceptedFiles.length <= 0)
			return

		// Pull the first file from the array
		let file = acceptedFiles[0]

		// Convert the file into an array buffer
		let payload = await file.arrayBuffer()

		// Clear out any old error message and set
		// the component to 'uploading' state before
		// performing a fetch
		setErrorMessage("")
		setUploading(true)

		// Assemble the request to the API and wait for
		// a response back
		let response = await fetch(uploadAddress, {
			method: "POST",
			body: payload,
			headers: {
				"Content-Type": "application/octet-stream",
				"X-Bazaar-Filename": file.name
			}
		})

		// If we didn't receive a response from
		// the API immediately throw an error
		if (response == null)
			throw Error("Did not receive a response from the API during file upload")

		// Grab the HTTP Status Code from the response
		let responseStatus = response.status

		// Grab the JSON Body from the response
		let apiResponse = await response.json()

		// Ensure we successfully completed our HTTP request
		// before temporarily changing this component to a success
		// state
		//
		// If for some reason the HTTP request wasn't successful,
		// grab the reason from the JSON Response Body and display
		// it in the web application
		if (responseStatus === 200 || responseStatus === 204) {

			// Successful Event Handler
			setUploaded(true)
			setTimeout(() => {
				setUploaded(false)
			}, 5000)

		} else {
			// Unsuccessful Event Handler
			setErrorMessage(apiResponse.reason)
		}

		// Wait a couple seconds before resetting
		// the component to base state
		setTimeout(() => {
			setUploading(false)
		}, 2000)

	}, [])

	// Prepare Dropzone and grab our helpers from the initialization
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onDrop })

	// If we wanna display the files that were currently
	// uploaded we can utilize this variable below.
	const files = acceptedFiles.map(file => (
		<li key={file.path}>
			{file.path} - {file.size} bytes
		</li>
	))

	// Define the base view for upload receipts
	const waitingForUploadView = (
		<>
			<input name="file-uploader" {...getInputProps()} />
			<label htmlFor="file-uploader">
				<strong>Choose a file</strong>
				<span> or drag it here</span>
			</label>
		</>
	)

	// Define the view for in-flight HTTP requests
	const currentlyUploadingView = (
		<>
			<strong>Uploading...</strong>
		</>
	)

	return (
		<section style={{ maxWidth: "680px", width: "100%" }}>

			<div className="box has-advanced-upload">
				<div className="box-input" {...getRootProps({className: "dropzone" })}>
					<svg className="icon" xmlns="http://www.w3.org/2000/svg" width="50" height="43"
					     viewBox="0 0 50 43">
						<path d="M48.4 26.5c-.9 0-1.7.7-1.7 1.7v11.6h-43.3v-11.6c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v13.2c0 .9.7 1.7 1.7 1.7h46.7c.9 0 1.7-.7 1.7-1.7v-13.2c0-1-.7-1.7-1.7-1.7zm-24.5 6.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l10-11.6c.7-.7.7-1.7 0-2.4s-1.7-.7-2.4 0l-7.1 8.3v-25.3c0-.9-.7-1.7-1.7-1.7s-1.7.7-1.7 1.7v25.3l-7.1-8.3c-.7-.7-1.7-.7-2.4 0s-.7 1.7 0 2.4l10 11.6z"/>
					</svg>
					<div style={{ textAlign: "center" }}>

						{ uploading ? currentlyUploadingView : waitingForUploadView }

						{ uploaded && (<>
							<br/>
							<strong>Your image was successfully uploaded!</strong>
						</>) }

						{ errorMessage.length > 0 && (<>
							<br/>
							<strong>{ errorMessage }</strong>
						</>) }

					</div>
				</div>
			</div>
		</section>
	)

}
