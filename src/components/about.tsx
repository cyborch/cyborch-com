import React, { Component } from 'react';
import Title from './title';
import './about.styl';

interface Experience {
    title: string;
    company: string;
    description: string;
    year: string;
    end: string;
}

interface AboutProps {
  animated: boolean;
  closeAbout: Function;
}

export default class About extends Component<AboutProps, AboutProps> {

  experienceRows: Experience[][] = [
    [
      {
        title: 'Senior Software Engineer',
        company: 'Normative',
        description: 'My role is to maintain and update carbon calculation software, and to ensure its reliability and scalability as the company is scaling up and maturing.',
        year: '2021',
        end: 'April',
      },
      {
        title: 'Software Engineer',
        company: 'Dawn Health',
        description: 'I was building software to measure patient health using Six Minute Walk Test measurements, as well as updating software for existing MotivO solution to bring it to new markets in APAC.',
        year: '2021',
        end: 'January to May 2021',
      },
    ],
    [
      {
        title: 'Senior Software Engineer',
        company: 'Tradeshift',
        description: 'Tradeshift Frontiers is the emerging technology department of Tradeshift, which does R&amp;D in all things that has to do with IoT, blockchain, and AI. My role is that of researching, prototyping, and demonstrating uses for emerging technologies, especially with a focus on IoT. On a daily basis I work with LoRa, Bluetooth, and development of mobile, web, and backend solutions.',
        year: '2018',
        end: 'July to December 2020',
      },
      {
        title: 'CTO',
        company: 'KlikKit',
        description: 'My role was leading a small team of 3 developers, developing the iOS BLE stack, and a backend service, as well as defining the product and managing external contractors handling Android BLE stack and hardware development. Ultimately the team wasn’t able to find funding and we had to move on.',
        year: '2017',
        end: 'June to June 2018',
      },
    ],
    [
      {
        title: 'Scrum Master',
        company: 'Shootr',
        description: 'Shootr is building an application that solves the issue of people switching their attention to the “second screen” - the mobile phone - when there is a commercial break in the TV show they are watching. I worked as a Scrum Master to improve both the application quality and the team process. Sadly my tenure there was cut short by personal life events that forced me to move back to Denmark.',
        year: '2016',
        end: 'June to May 2017',
      },
      {
        title: 'iOS Software Director',
        company: 'Athos',
        description: 'As the director I have rebuilt the user experience and the engineering process from an internal prototype built by interns into a mature and well architected product built by a team of engineers using proper QA and project management procedures.',
        year: '2014',
        end: 'June to May 2016',
      },
    ],
    [
      {
        title: 'iOS Software Lead',
        company: 'Lumo Body Tech',
        description: 'I worked at Lumo Body Tech as a the iOS software lead and was responsible for building their Lumo Lift app which was their flagship product up until they were aquired by Seismic.',
        year: '2011',
        end: 'November to May 2014',
      },
      {
        title: 'Senior Software Engineer',
        company: 'Epic Think Media',
        description: 'My first assignment was creating a movie review app for <a href="https://pluggedin.com" target="_blank">PluggedIn</a>. It was described by company management as “more pixel perfect than any of our previous apps” and “a benchmark for future Brushfire apps.” My next assignment was the “Tiger Woods: My Swing” golf swing analyzer app which was named top 3 Best App of the Year in New York Times.',
        year: '2010',
        end: 'August to October 2011',
      },
    ],
    [
      {
        title: 'iOS Software Manager',
        company: 'Vodafone',
        description: 'With Vodafone I was head of the iOS application development department. I started out in ZYB before it was <a target="_blank" href="https://techcrunch.com/2008/05/16/danish-mobile-social-network-zyb-acquired-by-vodafone-for-e315-million/">acquired by Vodafone</a>. While in ZYB I made the first version of the social networking and synchronization application. After Vodafone acquired ZYB, I became software manager for a team of 5 developers and 2 testers working on developing iOS software for Vodafones new social services.',
        year: '2008',
        end: 'Septemper to July 2010',
      },
      {
        title: 'Senior Software Engineer',
        company: 'Zmags',
        description: '<a href="https://zmags.com" target="_blank">Zmags</a> builds software which can convert PDF files into flash based online publications. One month before I started in Zmags their only full time developer had stopped. I ensured that proper development, test, and release procedures were established for the development department which employed 10 developers by the time I left.',
        year: '2006',
        end: 'December to August 2008',
      },
    ],
  ];

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
    return this.experienceRows.map((row) => {
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
