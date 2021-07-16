import React from "react";
import { Route } from "react-router";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import Home from '../pages/Home'
import JobForms from '../pages/JobForms'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={16}>
            <Route path="/" component={Home} exact/>
            <Route path="/jobforms" component={JobForms} exact/>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
