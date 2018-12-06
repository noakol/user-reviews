import React, {Component} from 'react';
import {UserReviews} from './components';

export default class App extends Component {
    render() {
        return (
            <div className="ur-container">
                <UserReviews />
            </div>
        );
    }
}