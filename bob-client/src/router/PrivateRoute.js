// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import Loader from '../components/Loader';

// const PrivateRoute =  ({ component: Component, isAuthenticate,role, loading , ...rest }) => (
//     <Route {...rest} render={props =>  {
//         if (loading) return <Loader />;
//             return( (isAuthenticate && role)
//                 ? <Component {...props} />
//                 : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
//         )}} />
// )

// const mapStateToProps = state => ({
//     isAuthenticate: state.userReducer.length !== 0 && state.userReducer.hasOwnProperty('email'),
//     role: state.userReducer.role !== "AUDITOR",
//     loading: state.userReducer.loading
// });


// export default connect(mapStateToProps)(PrivateRoute);