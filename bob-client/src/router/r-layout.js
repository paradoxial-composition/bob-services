import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../components/Layout';

import Dashboard from '../components/Dashboard';
import Asks from '../components/Asks';
import Jobs from '../components/Jobs';

export default ({ match }) => {
    return (
        <Layout >
            <Route exact path={`${match.url}`} component={Dashboard} />
            <Route exact path={`${match.url}asks`} component={Asks} />
            <Route exact path={`${match.url}jobs`} component={Jobs} />
        </Layout>
    );
}