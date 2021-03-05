import React from 'react';
import './Saved.css';
import {getCookie, setCookie} from './cookieHandler';
import Graph from './Graph';

class Saved extends React.Component {
    constructor(props) {
        super(props)

        this.list = []

        this.loadCookies();
    }

    loadCookies() {
        this.list = [];
        var cookieData = getCookie('saved');

        var xState = true;
        var yState = 4;

        if (Array.isArray(cookieData)) {
            for (var i in cookieData) {
                this.list.push(
                    <Graph parent={this.props.parent} x={xState ? '0' : '45'} y={yState.toString()} coin={cookieData[i]} days='1' />
                );

                xState = !xState;

                if (xState)
                    yState += 31;
            }
        }
    }

    render () {
        return (
            <div class="Saved">
                {this.list}
            </div>
        );
    }
}

export default Saved;