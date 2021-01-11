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
import ClearIcon from '@material-ui/icons/Clear';

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
    minWidth: 100,
    height: 405,
    maxHeight: 405
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

export default function WantedAdList({ wantedAd, title, onClick }) {
  const classes = useStyles();

  const deleteItem = (id) => {

  }

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center"><h3><b>{title}</b></h3></StyledTableCell>
            <StyledTableCell align="center">Price</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ }}>
          {wantedAd.map((row) => ( 
            <StyledTableRow key={row._id}>
              <StyledTableCell align="center">{row.productName}</StyledTableCell>
              <StyledTableCell align="center">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{<ClearIcon style={{fill: "red"}} onClick={onClick(row._id)}/>}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}