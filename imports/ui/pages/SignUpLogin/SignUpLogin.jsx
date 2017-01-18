import { FlowRouter } from 'meteor/kadira:flow-router';
import BlazeTemplate from '/imports/ui/components/BlazeTemplate'
import React, { Component } from 'react';

export function SignUpLogin(props) {
    return (
        <div id="signUpLogin" className="lg-col-12 row-centered">
            <div className="text-f4-p4 z-3">Welcome To Dice</div>
            <div className="text-f3-p1 z-2">
                <BlazeTemplate name="loginButtons"/>
            </div>
        </div>
    )
}