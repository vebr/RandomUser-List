import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Grid,
  Hidden,
} from "@material-ui/core";
import ClassIcon from "@material-ui/icons/Class";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Skeleton from "react-loading-skeleton";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

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
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  card: {},
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

export function UserCardLoad(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div className={classes.outer}>
        <Card className={classes.card}>
          <Hidden smDown>
            <CardContent style={{ textAlign: "center" }}>
              <Skeleton width={128} height={128} />
            </CardContent>

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <Skeleton width={128} />
              </Typography>

              <Typography variant="body1" color="textSecondary" component="p">
                <Skeleton width={228} />
              </Typography>

              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                className={classes.name}
              >
                <Skeleton width={260} />
              </Typography>
            </CardContent>
          </Hidden>

          <Hidden mdUp>
            <div className={classes.root}>
              <div className={classes.root}>
                <Grid container spacing={3}>
                  <Grid item xs={3}>
                    <Avatar aria-label="Loading" className={classes.image}>
                      <Skeleton width={60} height={60} />
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
                        <Skeleton width={120} />
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.name}
                      >
                        <Skeleton width={60} />
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.name}
                      >
                        <Skeleton width={160} />
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
                      <Skeleton width={230} />
                    </Typography>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Hidden>

          <CardActions disableSpacing>
            <IconButton aria-label="show more">
              <Skeleton width={24} height={24} />
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
          ></Collapse>
        </Card>
      </div>
    </div>
  );
}

export default function UserCard(props) {
  const classes = useStyles();
  const user = props.item;
  // console.log(props)
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="sa">
      <div className={classes.outer}>
        <Card className={classes.card}>
          <Hidden smDown>
            <CardContent style={{ textAlign: "center" }}>
              <img
                alt={
                  user.name.title +
                  ". " +
                  user.name.first +
                  " " +
                  user.name.last
                }
                src={user.picture.large ? user.picture.large : <Skeleton />}
              />
            </CardContent>

            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                {user.name.title +
                  ". " +
                  user.name.first +
                  " " +
                  user.name.last}
              </Typography>

              <Typography variant="body1" color="textSecondary" component="p">
                {user.location.city +
                  ", " +
                  user.location.state +
                  ", " +
                  user.location.postcode}
              </Typography>

              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                className={classes.name}
              >
                {user.email}
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
                      alt={
                        user.name.title +
                        ". " +
                        user.name.first +
                        " " +
                        user.name.last
                      }
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
              className={`${clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })} btn__detail`}
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
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Born:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {formatDate(user.dob.date)}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Gender:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {user.gender}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Cell:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {user.cell}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Phone:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {user.phone}
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Full Address:
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
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
    </div>
  );
}
