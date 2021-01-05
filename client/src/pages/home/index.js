import React from "react";
//import MiniDrawer from '../../components/MiniDrawer/index';
// import {makeStyles} from '@material-ui/core/styles';
//import JumboAd from '../../components/Jumbotron'
import Grid from '@material-ui/core/Grid';
import {GridCarousel} from "../../components/GridCarousel";

const listData = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		flexGrow: 1,
// 	},
// 	imgCarousel: {
// 		padding: theme.spacing(0),
// 		justifyContent: 'center',
// 		textAlign: 'center',
// 		color: theme.palette.text.secondary,
// 	},
// }));

export default function HomePage() {
	
	return (
		<>
            <Grid item xs={12}>

            </Grid>
            <Grid item xs={12}>
                <GridCarousel items={listData}/>
            </Grid>
            <Grid item xs={12}>
                <GridCarousel items={listData}/>
            </Grid>
            <Grid item xs={12}>
                <GridCarousel items={listData}/>
            </Grid>
            <Grid item xs={12}>
                <GridCarousel items={listData}/>
            </Grid>
            <Grid item xs={12}>
                <GridCarousel items={listData}/>
            </Grid>
		</>
	)
}