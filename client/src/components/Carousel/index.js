import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid, Container, Button } from '@material-ui/core'

const useStyles = makeStyles({
    paper: {
        height: 300,
    },
});

function ImgCarousel(props) {

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
        <Carousel >
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    const classes = useStyles();
    return (

        <Paper className={classes.paper}>
            <Container>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <h2>{props.item.name}</h2>
                        <p>{props.item.description}</p>
                    </Grid>
                    <Grid item xs={12}>
                        <Button className="CheckButton" style={{marginBottom: 1}}>
                            Check it out!
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </Paper>

    )
}

export default ImgCarousel;