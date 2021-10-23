import React, { Component } from 'react'
import {Route,Redirect} from 'react-router-dom'
import {isAuthenticated} from "../user-pages/session";

const AdminRoute=({component:Component, ...rest})=>(
    <Route
        {...rest}
        render={props =>
            isAuthenticated() && isAuthenticated()[0]==='admin' ? (
                <Component {...props}/>
            ):(
                <Redirect
                    to={
                        {
                            pathname:'/login',
                            state:{from:props.location}
                        }
                    }
                />
            )} />
)

export  default  AdminRoute