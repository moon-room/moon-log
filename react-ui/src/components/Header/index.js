import React, { Component } from 'react';
import logo from "./logo.png"
import avatar from "./avatar.png"
import learn from "./learn.png"
import settings from "./settings.png"
import './index.css'

class Header extends Component {
    render() {
        const { toggleModal } = this.props
        return (
            <div className="header">
                <div className="logo-container">
                    <img className="icon" src={logo} alt="a moon" />
                    <div className="title">
                        <h1>MOON LOG</h1>
                        <h2>Trade, reflect, learn, grow.</h2>
                    </div>
                </div>
                <div className="settings-container">
                    <button className="menu-item" onClick={() => toggleModal('learn')}>
                        <img className="icon small" src={learn} alt="learning" />
                    </button>
                    <button className="menu-item" onClick={() => toggleModal('settings')}>
                        <img className="icon small" src={settings} alt="a machine cog" />
                    </button>
                    <button className="menu-item" onClick={() => toggleModal('profile')}>
                        <img className="icon small" src={avatar} alt="a moon" />
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;