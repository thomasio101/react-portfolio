import { Grid, List, ListItem, ListItemText, Paper } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Grid item>
        <List component={Paper}>
          <ListItem button component={Link} to="/experience">
            <ListItemText>
              Werkervaring
            </ListItemText>
          </ListItem>
          <ListItem button component={Link} to="/skills">
            <ListItemText>
              Vaardigheden
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </>
  );
}
