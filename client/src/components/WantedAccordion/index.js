import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'
import './style.css'


export default function WantedAccordion({ wantedAds }) {

  console.log(wantedAds)
  return (
    <div id="root">
       <h1 id="title"> Wanted Ads </h1> 
        {wantedAds.map((wanteds, i) => {
          return ( <div className="mb-2">
            <Accordion key={i} id="heading">
              <AccordionSummary
                aria-controls={"panel" + i + "a-content"}
                id={"panel" + i + "a-header"}
              >
                <div className="row">
                  <div className="col-4">

                    <h2> <b>{moment(wanteds.createdAt).format("MMM")}</b></h2>
                    <h1><b>{moment(wanteds.createdAt).format("DD")}</b></h1>

                  </div>
                  <div className="col-4">
                    <h3>{wanteds.productName} </h3>
                  </div>
                  <div className="col-4">
                    <h4>posted by  or contact buyer </h4>
                  </div>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <b>
                    Max Price: $ {wanteds.price} <br />
                Category: {wanteds.category}<br />
                Description: {wanteds.notes}<br />
                  </b>
                </Typography>
              </AccordionDetails>
            </Accordion>
            </div>)
        })}
      </div>
  );
}