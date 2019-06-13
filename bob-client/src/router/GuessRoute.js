// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

// import Loader from '../components/Loader';

// const GuessRoute =  ({ component: Component, isAuthenticate,role, loading , ...rest }) => (
//     <Route {...rest} render={props =>  {
//         if (loading) return <Loader />;
//             return(!isAuthenticate
//                 ? <Component {...props} />
//                 : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
//         )}} />
// )

// const mapStateToProps = state => ({
//     isAuthenticate: state.userReducer.length !== 0 && state.userReducer.hasOwnProperty('email'),
//     loading: state.userReducer.loading
// });


// export default connect(mapStateToProps)(GuessRoute);