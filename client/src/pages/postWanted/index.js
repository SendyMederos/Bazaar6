import React, { useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { saveWanted } from '../../utils/WantedAPI';
import { Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import { Alert, Fade } from "reactstrap";

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

export function PostWanted(props) {
  const [wantedAd, setWantedAd] = useState({});
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
    const response = await saveWanted(wantedAd)
    setMessages([{
      prompt: response.data.message.content
    }])
    resetMessages()
    setWantedAd({ productName: "", price: "", category: "", notes: "" })
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
              value={wantedAd.productName}
              onChange={e => setWantedAd({ ...wantedAd, productName: e.target.value })}
            />
          </FormGroup>
          <FormGroup row>
            <Label>Targeted Price:</Label>
            <Input
              type="text"
              className={classes.input}
              value={wantedAd.price}
              onChange={e => setWantedAd({ ...wantedAd, price: e.target.value })}
            />
          </FormGroup>
          <FormGroup row>
            <Label>Product Category:</Label>
            <Input
              type="select"
              className={classes.input}
              value={wantedAd.category}
              onChange={e => setWantedAd({ ...wantedAd, category: e.target.value })}
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
            <Label>Add Note for Sellers:</Label>
            <Input
              type="textarea"
              className={classes.input}
              value={wantedAd.notes}
              onChange={e => setWantedAd({ ...wantedAd, notes: e.target.value })}
            />
          </FormGroup>
          <FormGroup row style={{ marginTop: "30px" }}>
            <Button color="primary" style={{ width: "100%" }} onClick={handleSubmit}>Submit</Button>
          </FormGroup>
        </Form>
      </div>
    </>
  );
}