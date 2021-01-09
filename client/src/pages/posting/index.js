import React, { useCallback, useState } from "react";
import ProductUpload from './../../components/ProductUpload'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { saveProduct } from '../../utils/ProductAPI';
import { Alert, Fade } from "reactstrap";

import "../../styles/upload.css"
import { Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";

const useStyles = makeStyles((theme) => ({

	root: {
		display: 'flex',
		marginLeft: "auto",
		marginRight: "auto",
		textAlign: "center",
		boxSizing: "border-box",
		backgroundColor: "white",
		border: "10%",
		borderRadius: "10%",
		padding: "10%",
		fontFamily: "Arial, Helvetica"


	},
	input: {
		width: "100%"
	}
}))

export const Posting = (props) => {
	const [productPost, setProductPost] = useState({});
	const [messages, setMessages] = useState([]);

	const classes = useStyles();

	const messagesView = messages.map((message) => (
		<Fade>
			<Alert color={message.type === "error" ? "secondary" : "primary"}>
				{message.prompt}
			</Alert>
		</Fade>
	))

	const resetMessages = () => setTimeout(() => setMessages([]), 5000)

	const handleSubmit = async () => {
		const response = await saveProduct(productPost)
		setMessages([{
			prompt: response.data.message.content
		}])
		resetMessages()
		setProductPost({
			productName: "",
			description: "",
			price: "",
			category: "",
			image: [""]

		})
	}

	return (
		<>
			<div className={classes.root}>
				<Form>
					{messagesView}
					<FormGroup row>
						<Label>Product Name:</Label>
						<Input
							type="text"
							className={classes.input}
							value={productPost.productName}
							onChange={e => setProductPost({ ...productPost, productName: e.target.value })}
						/>
					</FormGroup>
					<FormGroup row>
						<Label>Selling Price:</Label>
						<Input
							type="text"
							className={classes.input}
							value={productPost.price}
							onChange={e => setProductPost({ ...productPost, price: e.target.value })}
						/>
					</FormGroup>
					<FormGroup row>
						<Label>Product Category:</Label>
						<Input
							type="select"
							className={classes.input}
							value={productPost.category}
							onChange={e => setProductPost({ ...productPost, category: e.target.value })}
						>
							<option selected value="select-category">Select Category</option>
							<option value="electronics">Electronics</option>
							<option value="appliances">Appliances</option>
							<option value="lawn-and-garden">Lawn and Garden</option>
							<option value="furniture">Furniture</option>
							<option value="auto-parts">Auto Parts</option>
							<option value="tools">Tools</option>
							<option value="video-games">Video Games</option>
						</Input>
					</FormGroup>
					<FormGroup row>
						<Label>Product Description:</Label>
						<Input
							type="textarea"
							className={classes.input}
							value={productPost.notes}
							onChange={e => setProductPost({ ...productPost, notes: e.target.value })}
						/>
					</FormGroup>
					<FormGroup row>
						<ProductUpload />
					</FormGroup>
				</Form>
			</div>
		</>)

}
