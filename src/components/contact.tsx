import React, { Component } from 'react';
import Title from './title';
import './contact.styl';

// @ts-ignore
import innerHeight from 'ios-inner-height';

declare var Skype: {
  tryAnalyzeSkypeUri(a: string, b: string): void;
};

interface ContactProps {
  animated: boolean;
  closeContact: Function;
}

export default class Contact extends Component<ContactProps, ContactProps> {

  constructor(props) {
    super(props);
    this.animateOutIfNeeded = this.animateOutIfNeeded.bind(this);
    this.animateInIfNeeded = this.animateInIfNeeded.bind(this);
    this.state = {
      animated: props.animated,
      closeContact: props.closeContact,
    };
  }

  componentDidMount() {
    this.animateInIfNeeded();
    this.setCloseRight();
    this.resetBackgroundPosition();
    window.addEventListener('resize', this.resetBackgroundPosition);
  }

  private resetBackgroundPosition() {
    if (!navigator.userAgent.match(/iphone|ipod|ipad/i)) { return; }
    const inner = innerHeight();
    const outer = document.documentElement.clientHeight;
    const diff = (outer - inner) * 1.5;
    const el = document.getElementById('contact-background');
    if (!el) { return; }
    el.style.top = diff + 'px';
  }

  private animateInIfNeeded() {
    if (this.state.animated) {
      let el = document.getElementById('contact');
      if (!el) { return; }
      el.classList.add('initial');
      el.classList.add('movein');

      el = document.getElementById('contact-background');
      if (!el) { return; }
      el.classList.add('initial');
      el.classList.add('movein');
    }
  }

  private setCloseRight() {
    const body = document.getElementsByTagName('body')[0];
    const x = body.clientWidth;

    if (x > 360) { return; }

    const el = document.getElementById('close-mobile');
    if (!el) { return; }

    el.style.right = '-' + (x - 80) + 'px';
  }

  animateOutIfNeeded(event: any) {
    if (this.state.animated) {
      event.preventDefault();
      let el = document.getElementById('contact');
      if (!el) { return; }
      el.classList.add('moveout');

      el = document.getElementById('contact-background');
      if (!el) { return; }
      el.classList.add('moveout');

      this.state.closeContact();
    } else {
      document.location.href = '/';
    }
  }

  render() {
    return (
      <div id="contact">
        <div className="column">
          <Title heading="get in touch" subHeading="be social" blockStyle={{width: '300px'}}></Title>
          <div className="close-mobile" id="close-mobile">
            <a href="/" onClick={ this.animateOutIfNeeded } ><img src="/x.svg" alt="x" /></a>
          </div>
          <p>
            There are a number of ways to get in touch with me, ranging from the
            tried and true email, to Facebook or Twitter. You can also follow what
            I'm currently working on by looking
            at <a target="_blank" href="https://blog.cyborch.com/">my blog</a> or
            Github.
          </p>
          <table>
            <tr>
              <td>
                <a target="_blank" href="mailto:anders@cyborch.com">
                  <picture>
                    <source srcSet="/social/envelope-darkmode.svg" media="(prefers-color-scheme: dark)" />
                    <img className="social" src="/social/envelope.svg" alt="Email" />
                  </picture>
                </a>
              </td>
              <td>
                <a target="_blank" href="https://www.facebook.com/anders.cyborch">
                  <picture>
                    <source srcSet="/social/facebook-darkmode.svg" media="(prefers-color-scheme: dark)" />
                    <img className="social" src="/social/facebook.svg" alt="Facebook" />
                  </picture>
                </a>
              </td>
              <td>
                <a target="_blank" href="https://github.com/cyborch">
                  <picture>
                    <source srcSet="/social/github-darkmode.svg" media="(prefers-color-scheme: dark)" />
                    <img className="social" src="/social/github.svg" alt="Github" />
                  </picture>
                </a>
              </td>
              <td>
                <a target="_blank" href="https://keybase.io/cyborch">
                  <picture>
                    <source srcSet="/social/keybase-darkmode.svg" media="(prefers-color-scheme: dark)" />
                    <img className="social" src="/social/keybase.svg" alt="Keybase" />
                  </picture>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a target="_blank" href="https://linkedin.com/in/cyborch">
                  <picture>
                    <source srcSet="/social/linkedin-in-darkmode.svg" media="(prefers-color-scheme: dark)" />
                    <img className="social" src="/social/linkedin-in.svg" alt="LinkedIn" />
                  </picture>
                </a>
              </td>
              <td>
                <a onClick={ () => { Skype.tryAnalyzeSkypeUri("chat", "0") } } href='skype:cyborch?chat'>
                  <picture>
                    <source srcSet="/social/skype-darkmode.svg" media="(prefers-color-scheme: dark)" />
                    <img className="social" src="/social/skype.svg" alt="Skype" />
                  </picture>
                </a>
              </td>
              <td>
                <a target="_blank" href="https://twitter.com/cyborch">
                  <picture>
                    <source srcSet="/social/twitter-darkmode.svg" media="(prefers-color-scheme: dark)" />
                    <img className="social" src="/social/twitter.svg" alt="Twitter" />
                  </picture>
                </a>
              </td>
              <td>
                <a target="_blank" href="https://blog.cyborch.com/">
                  <picture>
                    <source srcSet="/social/ghost-darkmode.png" media="(prefers-color-scheme: dark)" />
                    <img className="social" src="/social/ghost.png" style={{ width: '75px' }} alt="Blog" />
                  </picture>
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <a target="_blank" href="https://instagram.com/cyborch">
                  <picture>
                    <source srcSet="/social/instagram-darkmode.svg" media="(prefers-color-scheme: dark)" />
                    <img className="social" src="/social/instagram.svg" alt="Instagram" />
                  </picture>
                </a>
              </td>
              <td rowSpan={3} ></td>
            </tr>
          </table>
        </div>
        <div style={{height: '100px'}}></div>
        <div className="close">
          <a href="/" onClick={ this.animateOutIfNeeded } ><img src="/x.svg" alt="x" /></a>
        </div>
        <div>
          <picture>
            <source srcSet="/contact-darkmode.png" media="(prefers-color-scheme: dark)" />
            <img id="contact-background" src="/contact.jpg" alt="" />
          </picture>
        </div>
      </div>
    );
  }
}
