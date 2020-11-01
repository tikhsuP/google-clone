import React, { Component } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <div className="header-left">
            <Link to='/about'>About</Link>
            <Link to='/store'>Store</Link>
          </div>
          <div className="header-right">
            <Link to='/gmail'>Gmail</Link>
            <Link to='/images'>Images</Link>
            <AppsIcon></AppsIcon>
            <Avatar></Avatar>
          </div>
        </div>

        <div className="home-body">
          <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></img>
          <div className="home-input-container">
            <Search hideButtons></Search>
          </div>
        </div>
      </div>
        )
    }
}

export default Home
