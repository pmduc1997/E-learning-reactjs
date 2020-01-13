/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
import React from 'react'
import HomePage from '../HomePage'
import Login from '../Login'
import CustomLayout from '../Layout/index'
export const routes = [
    {
        path: ["/","/login"],
        exact:true,
        main: () => <Login />
    },
    {
        path:"/layout",
        main: () => <CustomLayout />
    },
];