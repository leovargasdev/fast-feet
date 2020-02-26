import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import DeliveryList from '~/pages/Delivery/List';
import DeliverymenList from '~/pages/Deliverymen/List';
import RecipientList from '~/pages/Recipient/List';
import DeliveryProblemList from '~/pages/DeliveryProblem/List';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/deliveries" isPrivate component={DeliveryList} />
      <Route path="/deliverymen" isPrivate component={DeliverymenList} />
      <Route path="/recipients" isPrivate component={RecipientList} />
      <Route
        path="/delivery-problems"
        isPrivate
        component={DeliveryProblemList}
      />
    </Switch>
  );
}
