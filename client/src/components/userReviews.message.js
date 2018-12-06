import React, {Component} from 'react';
import editIcone from '../assets/edit.jpg';
import deleteIcone from '../assets/delete.png';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode
        };
    }

    handleEditModeSwitch = () => {
        const {switchToEditMode, text} = this.props;
        if (this.props.mode !== 'edit') {
            this.setState({
                mode: 'edit',
                message: text 
            });
            switchToEditMode();
        }
    }
    
    updateMessageText = () => {
        this.setState({
            ...this.state,
            message: this.props.text
        });
    }

    handleMessageEdit = (id, text) => {
        const {handleMessageEdit} = this.props;
        // should change esit mode and submit
        handleMessageEdit(id, text);
    }

    getEditView() {
        const {
            username,
            text,
            id,
            handleMessageEdit
        } = this.props;

        return (
            <li className="cr-edit-message">
                <input 
                    type="text"
                    name="username"
                    value={username}
                    disabled />
                <textarea
                    type="text"
                    name="message"
                    rows="5"
                    id
                    value={this.state.message}
                    onChange={this.updateMessageText} />
                <button 
                    onClick={() => this.handleMessageEdit(id, this.state.value)} >
                    save
                </button>
            </li>
        );
    }

    render() {
        const {
            username,
            imgUrl = '',
            text,
            id,
            handleMessageDelete
        } = this.props;

        if (this.state.mode === 'edit') {
            return this.getEditView();
        }
        return (
            <li className="ur-message-container">
                <div className="tools">
                    <div className="delete" onClick={() => handleMessageDelete(id)}>
                        <img src={deleteIcone} alt="delete icon" />
                    </div>
                    <div className="edit" onClick={this.handleEditModeSwitch}>
                        <img src={editIcone} alt="edit icon" />
                    </div>
                </div>
                <div className="ur-message">
                    <div className="ur-avatar">
                        <img src={imgUrl} />
                    </div>
                    <div className="ur-text-container">
                        <div className="ur-username">
                            {username}
                        </div>
                        <div className="ur-message-text">
                            {text}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
};

export default Message;