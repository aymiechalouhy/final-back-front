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
import SessionContext from "./sessions/SessionContext";
import Prof from "../Pages/Prof/Prof";
import Footer from "../Components/Footer/Footer"; 
import Category from "../Pages/Category/Category";

import ListPostVisitor from "../Pages/ListPostVisitor";


function PrivateRouteAdmin({ user, component: Comp, ...props }) {
    return (
        <Route {...props} render={props => (user.token && user.role == "admin") ?
            <Comp {...props} /> :
            <Redirect {...props} to="/" />
        } />
    )
}

function PrivateRouteUser({ user, component: Comp, ...props }) {
    return (
        <Route {...props} render={props => (user.token && user.role == "user") ?
            <Comp {...props} /> :
            <Redirect {...props} to="/" />
        } />
    )
}

function PrivateRoute({ user, component: Comp, ...props }) {
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
            <Redirect {...props} to={user.role == "admin" ? "/list" :user.role=="user"?"/Category":null} /> :
            <Comp {...props} />
        } />
    )
}



export default function Routes(props) {
    let { session: { user } } = useContext(SessionContext);

    return (
        <Switch>
            <Route path="/" component={HomePage} exact {...props} />

            <Route path="/listpostvisitor" component={ListPostVisitor} exact {...props} />

            <PublicRoute user={user} path="/login" component={LoginPage} {...props} />
            <PublicRoute user={user} path="/footer" component={Footer} {...props} />
            {/* <PublicRoute user={user} path="/Category" component={Category} {...props} /> */}
            {/* <PublicRoute user={user} path="/prof" component={Prof} {...props} /> */}


            <PrivateRouteAdmin user={user} path="/listContact" component={ListContats} {...props} />
            
            <PrivateRouteAdmin user={user} path="/prof" component={Prof} {...props} />

            <PrivateRouteAdmin user={user} path="/list" component={ListShops} {...props} />
            <PrivateRouteAdmin user={user} path="/addShops" component={InputShops} {...props} />
            <PrivateRouteAdmin user={user} path="/editShops/:id" component={UpdateShops} {...props} />
            


            <PrivateRouteUser user={user} path="/add/Post" component={AddPost} {...props} />
            <PrivateRouteUser user={user} path="/listPost" component={ListPost} {...props} />
            <PrivateRouteUser user={user} path="/editPost/:id" component={EditPost} {...props} />

            <PrivateRouteUser user={user} path="/Category" component={Category} {...props} />

            {/* <PublicRoute user={user} path="/add/rate" component={AddRate} {...props} /> */}
            {/* <PublicRoute user={user} path="/listRate" component={ListRate} {...props} /> */}
            
            <PrivateRouteUser user={user} path="/listDevices" component={Devices} {...props} />

        </Switch>
    )
}