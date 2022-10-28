import React, { Component } from 'react';
import Title from './title';
import './about.styl';
import { Experience, experience } from '../lib/experience';

interface AboutProps {
  animated: boolean;
  closeAbout: Function;
}

export default class About extends Component<AboutProps, AboutProps> {
  constructor(props) {
    super(props);
    this.renderExperienceRows = this.renderExperienceRows.bind(this);
    this.rollup = this.rollup.bind(this);
    this.state = {
      animated: props.animated,
      closeAbout: props.closeAbout,
    }
  }

  componentDidMount() {
    if (this.state.animated) {
      const el = document.getElementById('about');
      if (!el) { return; }
      el.classList.add('initial');
      el.classList.add('movein');
    }
  }

  renderExperienceCell(cell: Experience) {
    return (
      <div className="position">
        <h2>{ cell.title }</h2>
        <h3>{ cell.company }</h3>
        <p dangerouslySetInnerHTML={{__html: cell.description}}></p>
        <div className="year">
          <h2 className="position-year">{ cell.year }</h2>
          <h3 className="position-end">{ cell.end }</h3>
        </div>
      </div>
    )
  }

  renderIndividualExperienceRow(row: Experience[]) {
    return row.map((cell) => {
      return (<td>{ this.renderExperienceCell(cell) }</td>)
    });
  }

  renderExperienceRows() {
    return experience.map((row) => {
      return (<tr>{ this.renderIndividualExperienceRow(row) }</tr>)
    });
  }

  rollup(event) {
    if (this.state.animated) {
      event.preventDefault();
      const el = document.getElementById('about');
      if (!el) { return; }
      el.classList.add('moveout');
      this.state.closeAbout();
    } else {
      document.location.href = '/';
    }
  }

  render() {
    return (
      <div id="about">
        <div className="column">
          <table className="about-intro">
            <tr>
              <td>
                <picture>
                  <source srcSet="/portrait-darkmode.png" media="(prefers-color-scheme: dark)" />
                  <img src="/portrait.jpg" alt="" />
                </picture>
              </td>
              <td>
                <h1>about me</h1>
                <div className="subtitle-divider"></div>
                <p className="subtitle">who am i</p>
                <p>
                  I am a software engineer, a designer and an entrepreneur. I have
                  worked in software engineering for 20 years and have over 7 years
                  of management experience. I moved from Denmark to America in 2010,
                  lived in Spain for a short while around 2016 and moved back to
                  Denmark { new Date().getFullYear() - 2017 } years ago. 
                  I am currently self-employed, working as a consultant.
                </p>
              </td>
            </tr>
          </table>
          <Title heading="experience" subHeading="involvement" blockStyle={{ width: '320px' }}></Title>
          <p className="experience">
            My work experience can be seen below, but it is also available as 
            a <a href="/cv">pdf</a> for offline viewing. I did spend a lot of time
            desiging that resume layout and I really appreciate it if that is what
            you reference, but if you are a recruiter and just want to import my data
            in your database, then it is available as 
            a <a href="/csv">spreadsheet</a> too.
          </p>
          <table className="experience">
            { this.renderExperienceRows() }
          </table>
          <Title heading="early experience" subHeading="long ago" blockStyle={{ marginLeft: '20px', width: '440px' }}></Title>
          <p className="early">
            My earlier work experience includes NeoConsult (2005 - 2006),
            ComX Networks (2002 - 2005) and Netropolis (1998 - 2002). Please feel
            free to ask if you want to know more about my earlier work experience.
          </p>
          <Title heading="interests" subHeading="hobbies" blockStyle={{ width: '280px' }}></Title>
          <table className="interests">
            <tr>
              <td>
                <picture>
                  <source srcSet="/interests/bike-darkmode.png" media="(prefers-color-scheme: dark)" />
                  <img src="/interests/bike.png" alt="" />
                </picture>
                <p>biking</p>
              </td>
              <td>
                <picture>
                  <source srcSet="/interests/yoga-darkmode.png" media="(prefers-color-scheme: dark)" />
                  <img src="/interests/yoga.svg" alt="" />
                </picture>
                <p>yoga</p>
              </td>
              <td>
                <picture>
                  <source srcSet="/interests/vegan-darkmode.png" media="(prefers-color-scheme: dark)" />
                  <img src="/interests/vegan.png" alt="" />
                </picture>
                <p>vegan food</p>
              </td>
              <td>
                <picture>
                  <source srcSet="/interests/puppies-darkmode.png" media="(prefers-color-scheme: dark)" />
                  <img src="/interests/puppies.png" alt="" />
                </picture>
                <p>puppies</p>
              </td>
            </tr>
          </table>
          <p className="interests">
            On weekends, when the weather is nice, I like to go on bike rides. I
            will usually go up to Helsing&oslash;r and back (a 90k ride) if I can
            get away long enough. It's an excellent opportunity to clear my mind
            of all the distractions of everyday life. When I'm riding a bike I
            cannot check my mail or respond to a Slack notification.
          </p>
          <p className="interests">
            I tend to do yoga in the morning, not necessarily every morning or for
            very long. Just the asanas which I have been finding particularly
            challenging lately, or the ones which my body calls for. I also teach yoga
            at work once a week to my coworkers.
          </p>
          <p className="interests">
            There are many reasons why one can choose to be vegan. Some do it for
            the animals or for their own personal health. I count myself among those
            who do it for the environment. Along the way, I found that not eating
            meat makes me more mindful, less drowsy after eating, and gives me
            more energy.
          </p>
          <p className="interests">
            Finally, we have a dog named Penny. She's a King Charles Spaniel. She's
            cute and cuddly and makes everyones day just a little better.
          </p>
          <div style={{ height: '100px' }}></div>
        </div>
        <div className="close">
          <a href="/" onClick={ this.rollup } ><img src="/x.svg" alt="x" /></a>
        </div>
      </div>
    );
  }
}
