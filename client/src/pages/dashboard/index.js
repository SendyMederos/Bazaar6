import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import ImgCarousel from "../../components/Carousel"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Grid, Container, Button } from '@material-ui/core/';
import MediaCard from '../../components/Card';
import { createUser } from '../../services/http/authHttp';
import ApexChart from '../../components/BudgetChart'

function Dashboard() {
    return (

        <MiniDrawer>
            <Container maxWidth="xl">
                <Grid container>
                    <Grid item xs={12} sm={4}>
                        <Paper item xs={12} sm={4}>
                            <ApexChart
                                amount={75}
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper>Hello</Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    </Grid>
                </Grid>
            </Container>
        </MiniDrawer>
    );
}


export default Dashboard;