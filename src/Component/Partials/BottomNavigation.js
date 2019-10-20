import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RefreshIcon from "@material-ui/icons/Refresh";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import ThemeContext from "../Context/ThemeContext";
import { UserConsumer } from "../Context/UserContext";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    zIndex: 1,
  },
  btnBottom: {
    color: "white",
  },
});

export default function BottomNavbar(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const { dark, toggle } = useContext(ThemeContext);
  // const { filterUsers } = useContext(UserContext);
  // console.log(userContext)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <UserConsumer>
      {({userContext}) => {
        return (
          <BottomNavigation
            value={value}
            onChange={handleChange}
            className={classes.root}
          >
            <BottomNavigationAction
              className={classes.btnBottom}
              label={!dark ? "Light" : "Dark"}
              onClick={() => toggle()}
              value="theme"
              icon={!dark ? <Brightness7Icon /> : <Brightness4Icon />}
            />
            <BottomNavigationAction
              className={classes.btnBottom}
              label="Color"
              value="color"
              onClick={() => userContext.filterUsers()}
              icon={<ColorLensIcon />}
            />
            {/* <h3>Qoala Test</h3> */}
            <BottomNavigationAction
              className={classes.btnBottom}
              label="City"
              value="city"
              onClick={() => userContext.filterCity()}
              icon={<LocationCityIcon />}
            />
            <BottomNavigationAction
              className={classes.btnBottom}
              label="Refresh"
              value="refresh"
              onClick={() => {
                window.location.reload();
              }}
              icon={<RefreshIcon />}
            />
          </BottomNavigation>
        );
      }}
    </UserConsumer>
  );
}
