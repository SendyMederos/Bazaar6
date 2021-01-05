import React, { useEffect, useState } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';


export const Wanted = (props) => {
    return (
        <Grid container spacing={3}>
        <Grid item xs={12}>
<form>
  <label>
    Name:
    <input type="text" name="name" />
  </label><br />
  <input type="submit" value="Submit" />
</form>
</Grid>
</Grid>
    )
}