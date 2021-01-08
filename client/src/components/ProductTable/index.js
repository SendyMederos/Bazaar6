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


function createData(name, price, id) {
  return { name, price, id };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
    height: 418,
    maxHeight: 421
  },
  button: {
    padding: "0.6rem",
    outline: 'none',
    border: "none",
    borderRadius: "3px",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "0.4s ease",
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
        <TableBody style={{ }}>
          {wishlist.map((row) => (
            <StyledTableRow key={row._id} >
              <StyledTableCell align="left"><img src={row.image[0]} style={{width:"80px"}} alt="" /></StyledTableCell>
              <StyledTableCell align="center">{row.productName}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="center"><Link to={"/product/" + row._id}><button className={classes.button}
              onMouseEnter={(e) => { e.target.style.background = "darkolivegreen"; e.target.style.color = "white"}}
              onMouseLeave={(e) => { e.target.style.background = "black"; e.target.style.color = "forestgreen"}}
              >View Item</button></Link></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}