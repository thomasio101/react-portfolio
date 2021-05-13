import { Container, Grid, Typography } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";

export default function App() {
  return (
    <Container>
      <Router>
        <Grid container spacing={2} direction="column">
          {/** Heading */}
          <Grid item>
            <Typography variant="h1">CV</Typography>
          </Grid>
          <Switch>
            <Route path="/skills" component={Skills} />
            <Route component={Home} />
          </Switch>
        </Grid>
      </Router>
    </Container>
  );
}
