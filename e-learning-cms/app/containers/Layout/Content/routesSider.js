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
import Dashboard from '../../Dashboard'
import User from '../../User'
export const routes = [
    {
        path: "/Dashboard",
        exact:true,
        main: () => <Dashboard />
    },
    {
        path: "/User",
        exact:true,
        main: () => <User />
    },
];