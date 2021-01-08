import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    height: 421,
    maxHeight: 421
  },
  button: {
    color: "forestgreen",
    backgroundColor: "black",
  }
});

export default function OrdersList({ wishlist, title }) {
  const classes = useStyles();

  console.log(wishlist)

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">{title}</StyledTableCell>
            <StyledTableCell align="center">Item Name</StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="center"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {wishlist.map((row) => (
              <StyledTableRow key={row._id}>
                <StyledTableCell align="center" ><img src={row.image[0]} style={{ width: "100px" }}/></StyledTableCell>
                <StyledTableCell align="center">{row.productName}</StyledTableCell>
                <StyledTableCell align="center">${row.price}</StyledTableCell>
                <StyledTableCell align="center"><Link to={"/product/" + row._id}><Button className={classes.button}>View Item</Button></Link></StyledTableCell>
              </StyledTableRow>
            
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}