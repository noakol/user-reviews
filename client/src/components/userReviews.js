
import React, {Component} from 'react'
import ReactDOM from "react-dom";
import Message from './userReviews.message';
import {BaseApi, Services, Actions} from '../sdk';

export default class Chatroom extends Component {
    constructor(props) {
        super(props);
        this.api = new BaseApi();
        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        this.getReviews();
    }

    getReviews = async () => {
        try {
            const data = await Actions.getReviewList(this.api, Services.getReviewListUrl);
            this.setState({
                data
            });
        } catch(err) {
            console.log(err);
        }
    }

    componentDidUpdate() {
        this.scrollToLastMessage();
    }

    scrollToLastMessage() {
        ReactDOM.findDOMNode(this.refs.reviews).scrollTop = ReactDOM.findDOMNode(this.refs.reviews).scrollHeight;
    }

    switchToEditMode = () => {
        this.setState({
            ...this.state,
            mode: 'edit'
        });
    }

    handleMessageEdit = async (messageId, messageText) => {

    }

    handleMessageDelete = async (messageId) => {
        try {
            const updatedData = await Actions.removeReview(messageId);
            this.setState({
                data: updatedData
            });
        } catch(err) {
            console.log(err);
        }
    }

    handleMessageSubmit = async (event) => {
        event.preventDefault();

        const text = ReactDOM.findDOMNode(this.refs["msg-text"]).value;
        const username = ReactDOM.findDOMNode(this.refs["msg-username"]).value;

        if (text.length || username.length) { 
            const payload = {username, text};
            try {
                const newData = await Actions.addReview(this.api, Services.addToListUrl, payload);
                this.setState({
                    data: newData
                });
            } catch (err) {
                console.log(err);
            } finally {
                ReactDOM.findDOMNode(this.refs["msg-text"]).value = "";
                ReactDOM.findDOMNode(this.refs["msg-username"]).value = "";
            }
        }  
    };

    render() {
        return (
            <div className="ur-view">
                <div className="ur-banner">
                    <h3>User Reviews</h3>
                </div>
                <ul className="reviews" ref="reviews">
                    {
                        this.state.data && this.state.data.map((message) => 
                            <Message 
                                {...message}
                                mode={this.state.mode}
                                handleMessageDelete={this.handleMessageDelete}
                                handleMessageEdit={this.handleMessageEdit}
                                switchToEditMode={this.switchToEditMode}
                            />
                        )
                    }
                </ul>
                {!this.state.mode && 
                <form className="ur-input" onSubmit={this.handleMessageSubmit}>
                    <input type="text" name="username" ref="msg-username" />
                    <textarea rows="5" type="text" ref="msg-text" />
                    <input type="submit" value="Submit" />
                </form>}
            </div>
        );
    }
}
