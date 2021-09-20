import React, { useContext } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from "../Pages/HomePage/HomePage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import ListShops from "../Pages/ListShops/ListShops";
import InputShops from "../Pages/ManageShop/InputShops";
import UpdateShops from "../Pages/ManageShop/UpdateShops";
import ListContats from "./Footer/ListContacts";
import AddPost from "../Pages/ManagePost/AddPost";
import ListPost from  "../Pages/ManagePost/ListPost";
import EditPost from  "../Pages/ManagePost/EditPost";
import AddRate from "../Components/ManageRate/AddRate";
import ListRate from "../Components/ManageRate/ListRate"; 
import Devices from "../Pages/Devices/Devices";



// import Register from "../pages/Home/Register";

// import User_Panel from '../pages/User_Panel/User_Panel';
// import Admin_Panel from '../pages/Admin_Panel/Admin_Panel';

// import Add_Post from '../pages/User_Panel/Manage_posts/Add_Post';
// import List_Post from '../pages/User_Panel/Manage_posts/List_Posts';

import SessionContext from "./sessions/SessionContext";
// import Edit_Post from "../pages/User_Panel/Manage_posts/Edit_Post";


function PrivateRouteAdmin({ user, component: Comp, ...props }) {
    return (
        <Route {...props} render={props => (user.token && user.role_id !== "admin") ?
            <Comp {...props} /> :
            <Redirect {...props} to="/" />
        } />
    )
}

function PrivateRouteUser({ user, component: Comp, ...props }) {
    return (
        <Route {...props} render={props => (user.token || user.role_id == "user") ?
            <Comp {...props} /> :
            < Redirect {...props} to="/" />
        } />
    )
}


function PrivateRoute({ user, component: Comp, ...props }) {
    console.log(user);
    return (
        <Route {...props} render={props => (!user.token) ?
            <Redirect to='/' /> :
            <Comp {...props} />
        } />
    )
}

function PublicRoute({ user, component: Comp, ...props }) {
    return (
        <Route {...props} render={props => user.token ?
            <Redirect {...props} to={user.role_id == "admin" ? "/admin/panel" : "/user/panel"} /> :
            <Comp {...props} />
        } />
    )
}

export default function Routes(props) {
    let { session: { user } } = useContext(SessionContext);
    return (
        <Switch>
            <PublicRoute user={user} path="/" component={HomePage} exact {...props} />
            <PublicRoute user={user} path="/login" component={LoginPage} {...props} />
            <PublicRoute user={user} path="/list" component={ListShops} {...props} />
            <PublicRoute user={user} path="/addShops" component={InputShops} {...props} />
            <PublicRoute user={user} path="/editShops/:id" component={UpdateShops} {...props} />
            <PublicRoute user={user} path="/listContact" component={ListContats} {...props} />

            

            <PublicRoute user={user} path="/add/Post" component={AddPost} {...props} />
            <PublicRoute user={user} path="/listPost" component={ListPost} {...props} />
            <PublicRoute user={user} path="/editPost/:id" component={EditPost} {...props} />4

            <PublicRoute user={user} path="/add/rate" component={AddRate} {...props} />

            <PublicRoute user={user} path="/listRate" component={ListRate} {...props} />
            
            <PublicRoute user={user} path="/listDevices" component={Devices} {...props} />
            {/* <PublicRoute user={user} path="/register" component={Register} {...props} />

            <PrivateRouteAdmin user={user} path="/admin/panel" component={Admin_Panel} {...props} />

            <PrivateRouteUser user={user} path="/user/panel" component={User_Panel} {...props} />

            <PrivateRoute user={user} path="/add/post" component={Add_Post} {...props} />
            <PrivateRoute user={user} path="/list/post" component={List_Post} {...props} />
            <PrivateRoute user={user} path="/edit/post" component={Edit_Post} {...props} /> */}
            {/* <PrivateRouteAdmin user={user} path="/adminn" component={ManageShops} {...props} /> */}
        </Switch>
    )
}