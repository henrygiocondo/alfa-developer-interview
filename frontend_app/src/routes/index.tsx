
import React from 'react';
// eslint-disable-next-line
import { Switch , Route } from 'react-router-dom';


import Dashboard from '../pages/Dashboard';
import People from '../pages/CreatePeople';
import Airports from '../pages/Airports';
import Delete from '../pages/DeletePeople';

const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact  component={Dashboard} />
        <Route path="/CreatePeople"  component={People} />
        <Route path="/SearchAirports"  component={Airports} />
        <Route path="/Delete"  component={Delete} />
    </Switch>
)

export default Routes;

