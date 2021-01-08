import React, {useCallback, useState} from "react";
import ProductUpload from './../../components/ProductUpload'
import {makeStyles, useTheme} from '@material-ui/core/styles';

import "../../styles/upload.css"
import {Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem} from "reactstrap";

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
	const classes = useStyles();


	return (
		<>
			<div className={classes.root}>
<ProductUpload />
			</div>
		</>)

}
