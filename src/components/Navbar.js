import React, {Fragment} from 'react'
import {NavLink} from 'react-router-dom'

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    
    render() {
        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Кликер</NavLink>
                    <button className="navbar-toggler" type="button" id="menu-button" data-bs-toggle="collapse"
                        data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false"
                        aria-label="Toggle navigation" onClick={this.handleClick}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${this.state.isToggleOn ? 'collapse' : ''} navbar-collapse`} id="navbarColor01">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/" exact>Главная</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/leaders" exact>Рейтинг</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about" exact>Информация</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/profile" exact>Профиль</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar