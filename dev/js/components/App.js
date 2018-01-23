import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
import Incrment from "../containers/increment";

require('../../scss/style.scss');

const App = () => (
    <div>
        <div>
            <Incrment/>
        </div>
        <h2>User List</h2>
        <UserList />
        <hr />
        <h2>User Details</h2>
        <UserDetails />
    </div>
);

export default App;
