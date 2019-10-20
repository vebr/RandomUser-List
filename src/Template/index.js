import React from "react";
import PropTypes from "prop-types";
// import { Container, Row, Col } from 'reactstrap';
import { Helmet } from "react-helmet";
import Container from "@material-ui/core/Container";
import Header from "../Component/Partials/Header";
import BottomNavbar from "../Component/Partials/BottomNavigation";
import Hidden from "@material-ui/core/Hidden";

const Template = ({ pageTitle, children }) => (
  <div>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <Hidden smDown>
      <Header />
    </Hidden>

    <Hidden mdUp>
      <BottomNavbar />
    </Hidden>
    
    <Container maxWidth="lg">{children}</Container>
  </div>
);

Template.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Template.defaultProps = {
  pageTitle: "React App",
};

export default Template;
