import React, {
    Component
} from "react";

//import {Button,Card, Row, Col} from 'react-materialize';

class ToolBar extends Component {
    render() {
        return (

            <
            div class = "nav-wrapper" > < /div> <
            a href = "#"
            class = "brand-logo" > Logo < /a>

            <
            ul id = "nav-mobile"
            class = "right hide-on-med-and-down" > < /ul>

            <
            li className = "nav-item" > < /li> <
            Link to = "/"
            className = {
                location.pathname === "/" ? "nav-link active" : "nav-link"
            } >
            Home <
            /Link> <
            Link to = "/"
            className = {
                location.pathname === "/" ? "nav-link active" : "nav-link"
            } >
            About <
            /Link> <
            Link to = "/"
            className = {
                location.pathname === "/" ? "nav-link active" : "nav-link"
            } >
            Blog <
            /Link> <
            Link to = "/"
            className = {
                location.pathname === "/" ? "nav-link active" : "nav-link"
            } >
            Learn <
            /Link>

        )
    }
}