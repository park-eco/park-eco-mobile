import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import SideBar from "./screens/sidebar";
import Login from "./screens/login";
import LiveTracking from "./screens/liveTracking";


// init DrawerNavigator
const Drawer = DrawerNavigator(
    {
        LiveTracking: { screen: LiveTracking },
    },
    {
        initialRouteName: "LiveTracking",
        contentOptions: {
            activeTintColor: "e91e63"
        },
        contentComponent: props => <SideBar {...props} />
    }
);

// init StackNavigator
const AppNavigator = StackNavigator(
    {
        Drawer: { screen: Drawer },
        Login: { screen: Login },
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
);


export default () =>
    <Root>
        <AppNavigator />
    </Root>;
