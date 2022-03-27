import React, { Component } from 'react';
import About from './about';
import Contact from './contact';
import './home.styl';

interface HomeState {
  aboutClicked: Boolean;
  contactClicked: Boolean;
}

export default class Home extends Component<{}, HomeState> {
  constructor(props: any) {
    super(props);
    this.aboutClicked = this.aboutClicked.bind(this);
    this.contactClicked = this.contactClicked.bind(this);
    this.closeAbout = this.closeAbout.bind(this);
    this.closeContact = this.closeContact.bind(this);
    this.state = {
      aboutClicked: false,
      contactClicked: false,
    }
  }

  componentDidMount() {
    window.addEventListener('popstate', (event) => {
      this.setState((state) => {
        return {
          ...state,
          aboutClicked: false,
          contactClicked: false,
        }
      });
    });
  }

  aboutClicked(event) {
    event.preventDefault();
    this.setState((state) => {
      return {
        ...state,
        aboutClicked: true,
      }
    });
    window.history.pushState({ pushed: true }, '', '/about');
  }

  renderAbout() {
    if (this.state.aboutClicked) {
      return (<About animated={true} closeAbout={ this.closeAbout }></About>)
    }
  }

  renderContact() {
    if (this.state.contactClicked) {
      return (<Contact animated={true} closeContact={ this.closeContact }></Contact>);
    }
  }

  closeAbout() {
    setTimeout(() => {
      this.setState((state) => {
        return {
          ...state,
          aboutClicked: false,
        };
      });
      window.history.replaceState({}, '', '/');
    }, 500);
  }

  closeContact() {
    setTimeout(() => {
      this.setState((state) => {
        return {
          ...state,
          contactClicked: false,
        };
      });
      window.history.replaceState({}, '', '/');
    }, 500);
  }


  contactClicked(event) {
    event.preventDefault();
    this.setState((state) => {
      return {
        ...state,
        contactClicked: true,
      }
    });
    window.history.pushState({ pushed: true }, '', '/contact');
  }

  render() {
    return (
      <div id="home">
        <div className="link-container">
          <a 
            href="/about" 
            onClick={ this.aboutClicked }
            className="main-link" 
            id="about-link">about</a>
        </div>
        <div className="link-container contact-link-container">
          <a 
            href="/contact" 
            onClick={ this.contactClicked }
            className="main-link" 
            id="contact-link">contact</a>
        </div>
        <picture id="main-background">
          <source 
            srcSet="/background-darkmode.png" 
            media="(prefers-color-scheme: dark)" />
          <img src="/background.jpg" alt="" />
        </picture>
        <div className="backgroundclip">
          <h1 id="hero">I<span className="accent">&#96;</span>m<br />Anders<br />Borch</h1>
        </div>
        { this.renderAbout() }
        { this.renderContact() }
        <div className="preload-images"></div>
      </div>
    )
  }
}
