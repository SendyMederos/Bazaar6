import React, { useState } from 'react';
import axios from 'axios';
import dotenv from 'dotenv'
import { Button } from "reactstrap";



function ProductUpload() {

	const config = {
		headers: { "X-Requested-With": "XMLHttpRequest" }
	}
	const [imageSelected, setImageSelected] = useState("")

	const uploadImage = (req, res, files) => {
		const formData = new FormData()
		formData.append("file", imageSelected)
		formData.append("upload_preset", "bazaarimages")

		console.log(imageSelected)
		try {
			axios.post(`https://api.cloudinary.com/v1_1/bazaar6/image/upload`, formData, config)
		} catch {
			res.status(400).send({ message: { content: "Please upload a valid image" } })
			console.log(res)
		}
	}
	
	return (
		<div>
			<input
				type="file"
				onChange={(event) => {
					setImageSelected(event.target.files[0])
				}}
			/>
			<Button onClick={uploadImage}>Upload Image</Button>
		</div>
	);
}
export default ProductUpload;