import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactLayout }   from 'meteor/kadira:react-layout';

//Layouts
import { Layout } from '/imports/ui/layouts/Layout';

//Pages
import { Home } from '/imports/ui/pages/Home/Home';
import { SignUpLogin } from '/imports/ui/pages/SignUpLogin/SignUpLogin'

FlowRouter.route('/', {
    name: 'home',
    action() {
        ReactLayout.render(Layout, {content: <Home/>});
    }
});

FlowRouter.route('/login', {
    name: 'login',
    action() {
        ReactLayout.render(Layout, {content: <SignUpLogin/>});
    }
});




//Users must be logged into the app in order to view any page except the login page.

const userLoggedIn = FlowRouter.triggers.enter([(context, redirect) => {
    if (!Meteor.user() && !Meteor.loggingIn()) {
        redirect('/login');
    }
}], {except: ['login']});
