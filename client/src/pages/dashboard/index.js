import React, { useEffect, useState, useContext } from "react";
import { UserIdContext } from '../../utils/Store';
import MiniDrawer from '../../components/MiniDrawer/index';
import Paper from '@material-ui/core/Paper';
import { Grid, Container, Button } from '@material-ui/core/';
import ApexChart from '../../components/BudgetChart'
import OrdersList from '../../components/OrdersList'
import UserAPI from '../../utils/UserAPI'

function Dashboard(props) {

    const [budget, setBudget] = useState()
    const [spent, setSpent] = useState()
    const [userId, setUserId] = useContext(UserIdContext)

    // useEffect(() => {
    //     getBudget()
    // }, [])

    const getBudget = () => {
        console.log("get budget is working")
        UserAPI.getBudget()
    }

    const updateBudget = () => {
        console.log("update budget ran")
        UserAPI.updateBudget({ "budget": 500 })
    }

    return (
            <MiniDrawer>
                <Container maxWidth="xl">
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={12} sm={4} lg={4}>
                            <Paper>
                                <ApexChart
                                    amount={75}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} sm={8} lg={8}>
                            <Paper>
                                <OrdersList />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5}>
                        <Grid item xs={12} md={12} sm={8} lg={8}>
                            <Paper>
                                <OrdersList />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={12} sm={4} lg={4}>
                            <Paper>
                                <ApexChart
                                    amount={75}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                    <button onClick={() => getBudget()}>Get Budget</button>
                    <button onClick={() => updateBudget()}>Update Budget</button>
                </Container>
            </MiniDrawer>
    );
}


export default Dashboard;