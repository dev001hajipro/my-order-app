import React, { useEffect } from "react";

import { firebaseApp } from "../FirebaseInit"

import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

import { getAuth, EmailAuthProvider } from "firebase/auth";
import { Config } from "@testing-library/react";


/**
 * SignIn/Login form.
 * 
 * @see https://firebase.google.com/docs/auth/web/start
 * @returns 
 */
export const SignIn: React.FC = () => {

    useEffect(() => {
        const ui = firebaseui.auth.AuthUI.getInstance()
            || new firebaseui.auth.AuthUI(getAuth(firebaseApp))
        ui.start('#firebaseui-auth-container', {
            callbacks: {
                signInSuccessWithAuthResult: function(authResult, redirectUrl) {
                    return true
                },
                uiShown: function() {
                    //document.getElementById('loader')?.style.display = 'none'
                }
            },
            signInFlow : 'popup',
            signInSuccessUrl: '/home',

            signInOptions: [
                EmailAuthProvider.PROVIDER_ID
            ],
            // Other config options...
        })
    })

    return (
        <div>
            <div id="firebaseui-auth-container"></div>
        </div>
    )
}