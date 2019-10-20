import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, MenuItem } from "@material-ui/core";
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from "@material-ui/core/Typography";

import ThemeContext from "../Context/ThemeContext";
import { UserConsumer } from "../Context/UserContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  nav_title: {
    flexGrow: 1,
  },
  bg: {
    background: "#FF7701",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function Header() {
  const classes = useStyles();
  const { toggle } = useContext(ThemeContext);

  return (
    <UserConsumer>
      {({ userContext }) => {
        return (
          <div className={classes.root}>
            <AppBar position="static" className={classes.bg}>
              <Toolbar variant="dense">
                <Typography
                  variant="h6"
                  color="inherit"
                  className={classes.nav_title}
                >
                  Qoala Test
                </Typography>
                <MenuItem onClick={() => toggle()}>Theme</MenuItem>
                <MenuItem onClick={() => userContext.filterCity()}>City</MenuItem>
                <MenuItem onClick={() => userContext.filterUsers()}>Color</MenuItem>
              </Toolbar>
            </AppBar>
          </div>
        );
      }}
    </UserConsumer>
  );
}
