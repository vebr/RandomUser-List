import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ColorLensIcon from "@material-ui/icons/ColorLens";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";

import ThemeContext from "../Context/ThemeContext";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  btnBottom: {
    color: "white",
  },
});

export default function BottomNavbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const { dark, toggle } = useContext(ThemeContext);
  // console.log(useContext(ThemeContext),ThemeContext)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.btnBottom}
        label="Top"
        value="recents"
        icon={<ArrowUpwardIcon/>}
      />
      <BottomNavigationAction
        className={classes.btnBottom}
        label="Theme"
        onClick={() => toggle()}
        value="theme"
        icon={!dark ? <Brightness7Icon /> : <Brightness4Icon />}
      />
      <BottomNavigationAction
        className={classes.btnBottom}
        label="Color"
        value="favorites"
        icon={<ColorLensIcon />}
      />
      {/* <h3>Qoala Test</h3> */}
      <BottomNavigationAction
        className={classes.btnBottom}
        label="City"
        value="nearby"
        icon={<LocationCityIcon />}
      />
    </BottomNavigation>
  );
}
