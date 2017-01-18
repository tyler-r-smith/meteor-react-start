import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { ReactiveVar } from 'meteor/reactive-var'
import { Template } from 'meteor/templating'
import { Blaze } from 'meteor/blaze'

export default class BlazeTemplate extends Component {
    render() { return <div ref="blazeContainer"></div> }

    componentDidMount() {
        const container = ReactDOM.findDOMNode(this.refs.blazeContainer);
        const {name, data} = this.props;

        this.reactiveData = new ReactiveVar(data);
        this.componentWillReceiveProps(this.props);
        this.blazeView = Blaze.renderWithData(
            Template[name],
            () => this.reactiveData.get(),
            container
        )
    }

    componentWillUnmount() {
        Blaze.remove(this.blazeView)
    }

    componentWillReceiveProps(nextProps) {
        const {data} = nextProps;
        this.reactiveData.set(data)
    }

    shouldComponentUpdate() { return false }
}