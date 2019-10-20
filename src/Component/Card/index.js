import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ClassIcon from "@material-ui/icons/Class";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

// import ThemeContext from "../Context/ThemeContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  outer: {
    padding: theme.spacing(1),
  },
  details: {
    padding: theme.spacing(2),
  },
  name: {
    verticalAlign: "top",
    display: "inline-block",
    width: "100%",
    wordBreak: "break-all",
  },
  location: {
    padding: "0 16px",
  },
  image: {
    height: 60,
    width: 60,
    display: "inline-block",
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  card: {
    maxWidth: "auto",
    minWidth: "auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: 350,
      minWidth: 350,
    },
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [day, month, year].join("-");
}

export default function UserCard(props) {
  const classes = useStyles();
  const user = props.value;
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.outer}>
      <Card className={classes.card}>
        {/* <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar} src={user.picture.large}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        /> */}
        <Hidden smDown>
          <CardContent style={{ textAlign: "center" }}>
            <img src={user.picture.large} />
          </CardContent>

          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {user.name.title + ". " + user.name.first + " " + user.name.last}
            </Typography>
          </CardContent>
        </Hidden>

        <Hidden mdUp>
          <div className={classes.root}>
            <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <Avatar
                    aria-label="recipe"
                    className={classes.image}
                    src={user.picture.large}
                  >
                    {user.name.title +
                      ". " +
                      user.name.first +
                      " " +
                      user.name.last}
                  </Avatar>
                </Grid>
                <Grid item xs={9}>
                  <CardContent className={classes.clearfix}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.name}
                    >
                      {user.name.title +
                        ". " +
                        user.name.first +
                        " " +
                        user.name.last}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.name}
                    >
                      {user.dob.age + "y.o "}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.name}
                    >
                      {user.email}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12} style={{ paddingTop: 0 }}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.location}
                  >
                    {user.location.city +
                      ", " +
                      user.location.state +
                      ", " +
                      user.location.postcode}
                  </Typography>
                </Grid>
              </Grid>
            </div>
          </div>
        </Hidden>

        <CardActions disableSpacing>
          <IconButton aria-label="show more">
            <ClassIcon
              style={{
                color:
                  user.dob.age <= 21
                    ? "red"
                    : user.dob.age > 21 && user.dob.age < 56
                    ? "green"
                    : user.dob.age >= 56
                    ? "blue"
                    : "white",
              }}
            />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse
          in={expanded}
          timeout="auto"
          unmountOnExit
          style={{ textAlign: "left" }}
        >
          <div className={classes.details}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Born:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {formatDate(user.dob.date)}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Gender:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.gender}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Cell:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.cell}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Phone:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.phone}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Full Address:
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {user.location.street.number +
                    " " +
                    user.location.street.name +
                    ", " +
                    user.location.city +
                    ", " +
                    user.location.state +
                    ", " +
                    user.location.country +
                    ", " +
                    user.location.postcode}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </Collapse>
      </Card>
    </div>
  );
}
