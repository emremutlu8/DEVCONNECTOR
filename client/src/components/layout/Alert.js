import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = (props) => {
  return <div></div>;
};

Alert.propTypes = {};

const mapStateToProps = (state) => ({
  alerts: state.alert,
}); // Mapping the redux state to a prop in this component in case we have an access to it

export default connect()(Alert);
