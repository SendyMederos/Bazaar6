import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default function WantedAccordion( {wantedAdds} ) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {wantedAdds.map( (wanteds, i) => {
        return (
      <Accordion>
        <AccordionSummary
          aria-controls={"panel"+ i +"a-content"} 
          id={"panel"+ i +"a-header"}
        >
          <Typography className={classes.heading}>{
          // momentjs(wanteds.createddAt) 
          //  wanteds Title 
          // posted by  or contact buyer 
           }</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {
            // Wanteds Description
             }
          </Typography>
        </AccordionDetails>
      </Accordion>)})}
     
     
      <Accordion>





        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}