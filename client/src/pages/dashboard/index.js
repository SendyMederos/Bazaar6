import React, { useEffect, useState } from "react";
import MiniDrawer from '../../components/MiniDrawer/index';
import Paper from '@material-ui/core/Paper';
import { Grid, Container } from '@material-ui/core/';
import BudgetForm from '../../components/BudgetForm'
import BudgetInfo from '../../components/BudgetInfo'
import OrdersList from '../../components/OrdersList';
import UserAPI from '../../utils/UserAPI';
import GaugeChart from 'react-gauge-chart';

function Dashboard(props) {

    const [budget, setBudget] = useState(0)
    const [spent, setSpent] = useState(0)
    const [wishlist, setWishlist] = useState([])
    const [products, setProducts] = useState([])
    let inputBudget = ""

    useEffect(() => {
        getBudget()
    }, [])

    const getBudget = () => {
        UserAPI.getUser()
            .then(res => {
                setBudget(res.data.budget)
                setSpent(res.data.amountSpent)
                setWishlist(res.data.wishList)
                setProducts(res.data.products)
            })
            .catch(err => console.log(err.message))
    }

    const updateUser = (budget) => {
        UserAPI.updateUser({ "budget": parseInt(budget) })
    }

    const handleInputChange = (event) => {
        inputBudget = event.target.value
    };

    const handleFormSubmit = async () => {
        await updateUser(inputBudget)
        getBudget()
    }
    
    return (
            <Container maxWidth="xl">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={12} sm={4} lg={4}>
                        {budget === 0 ?
                            <BudgetForm
                                onClick={handleFormSubmit}
                                onChange={handleInputChange}
                            />
                            :
                            <Paper align="center">
                                <GaugeChart
                                    id="gauge-chart5"
                                    percent={spent / budget}
                                    textColor="black"
                                    nrOfLevels={5}
                                />
                                <BudgetInfo
                                    budget={budget}
                                    spent={spent}
                                    remaining={budget - spent}
                                />
                            </Paper>
                        }
                    </Grid>
                    <Grid item xs={12} md={12} sm={8} lg={8}>
                        <Paper>
                            <OrdersList 
                                wishlist={wishlist}
                            />
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
                        <BudgetForm />
                    </Grid>
                </Grid>
            </Container>
    );
}


export default Dashboard;
