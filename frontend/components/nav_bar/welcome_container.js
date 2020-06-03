import React from 'react';
import {connect} from 'react-redux';
import Welcome from './welcome';

const mapStateToProps = (state) => ({
  user: state.entities.users[state.session.id]
});

export default connect(mapStateToProps)(Welcome);