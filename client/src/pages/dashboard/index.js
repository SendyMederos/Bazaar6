import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import Paper from '@material-ui/core/Paper';
import { Grid, Container, Button } from '@material-ui/core/';
import ApexChart from '../../components/BudgetChart'
import OrdersList from '../../components/OrdersList'
import UserAPI from '../../utils/UserAPI'

function Dashboard(props) {

    const [budget, setBudget] = useState()
    const [spent, setSpent] = useState(0)
    const [percentage, setPercentage] = useState(0)

    // useEffect(() => {
    //     getBudget()
    // }, [])

    const getBudget = () => {
        UserAPI.getUser()
            .then(res => setBudget(res.data.budget))
            .catch(err => console.log(err.message))
    }

    const updateBudget = () => {
        UserAPI.updateBudget({ "budget": 500 })
        setSpent(250)
        setPercentage(50)
    }

    const percentBudget = () => {
        console.log(spent / budget * 100)
        console.log(budget, spent, percentage)
    }

    return (
        <MiniDrawer>
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} sm={4} lg={4}>
                        <Paper>
                            <ApexChart
                                amount={percentage}
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
                <button onClick={() => percentBudget()}>Percent Budget</button>
            </Container>
        </MiniDrawer>
    );
}


export default Dashboard;
