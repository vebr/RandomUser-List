import React from "react";
import PropTypes from "prop-types";
// import { Container, Row, Col } from 'reactstrap';
import { Helmet } from "react-helmet";
import Container from "@material-ui/core/Container";
import Header from "../Component/Partials/Header";
import BottomNavbar from "../Component/Partials/BottomNavigation";
import Hidden from "@material-ui/core/Hidden";
import UserProvider from "../Component/Context/UserContext";

const Template = ({ pageTitle, children }) => (
  <div>
    <UserProvider>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>

      <Hidden smDown>
        <Header />
      </Hidden>

      <Hidden mdUp>
        <BottomNavbar />
      </Hidden>

      <Container maxWidth="lg" className="outer-container">
        {children}
      </Container>
    </UserProvider>
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
