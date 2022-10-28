export interface Experience {
  title: string;
  company: string;
  description: string;
  year: string;
  end: string;
  // csv export specific properties
  from: string;
  to: string;
  keywords: string;
}

const today =
  new Date().getDate().toString().padStart(2, '0') +
  '-' +
  (new Date().getMonth() + 1).toString().padStart(2, '0') +
  '-' +
  new Date().getFullYear().toString();

export const experience: Experience[][] = [
  [
    {
      title: 'Senior Software Engineer',
      company: 'Normative',
      description:
        'My role is to maintain and update carbon calculation software, and to ensure its reliability and scalability as the company is scaling up and maturing.',
      year: '2021',
      end: 'April',

      from: '01-04-2021',
      to: today,
      keywords: 'Python, React, Docker, AWS',
    },
    {
      title: 'Software Engineer',
      company: 'Dawn Health',
      description:
        'I was building software to measure patient health using Six Minute Walk Test measurements, as well as updating software for existing MotivO solution to bring it to new markets in APAC.',
      year: '2021',
      end: 'January to March 2021',

      from: '01-01-2021',
      to: '31-03-2021',
      keywords: 'iOS, Go, IoT, ReactNative',
    },
  ],
  [
    {
      title: 'Senior Software Engineer',
      company: 'Tradeshift',
      description:
        'Tradeshift Frontiers is the emerging technology department of Tradeshift, which does R&amp;D in all things that has to do with IoT, blockchain, and AI. My role is that of researching, prototyping, and demonstrating uses for emerging technologies, especially with a focus on IoT. On a daily basis I work with LoRa, Bluetooth, and development of mobile, web, and backend solutions.',
      year: '2018',
      end: 'July to December 2020',

      from: '01-07-2018',
      to: '31-12-2020',
      keywords: 'Java, Gradle, Docker, Jenkins, AWS, IoT, Blockchain, React',
    },
    {
      title: 'CTO',
      company: 'KlikKit',
      description:
        'My role was leading a small team of 3 developers, developing the iOS BLE stack, and a backend service, as well as defining the product and managing external contractors handling Android BLE stack and hardware development. Ultimately the team wasn’t able to find funding and we had to move on.',
      year: '2017',
      end: 'June to June 2018',

      from: '01-06-2017',
      to: '31-06-2018',
      keywords:
        'BLE, Node, iOS, Android, MongoDB, Docker, ReactNative, AWS, Design',
    },
  ],
  [
    {
      title: 'Scrum Master',
      company: 'Shootr',
      description:
        'Shootr is building an application that solves the issue of people switching their attention to the “second screen” - the mobile phone - when there is a commercial break in the TV show they are watching. I worked as a Scrum Master to improve both the application quality and the team process. Sadly my tenure there was cut short by personal life events that forced me to move back to Denmark.',
      year: '2016',
      end: 'June to May 2017',

      from: '01-06-2016',
      to: '31-05-2017',
      keywords: 'Scrum, Management',
    },
    {
      title: 'iOS Software Director',
      company: 'Athos',
      description:
        'As the director I have rebuilt the user experience and the engineering process from an internal prototype built by interns into a mature and well architected product built by a team of engineers using proper QA and project management procedures.',
      year: '2014',
      end: 'June to May 2016',

      from: '01-06-2014',
      to: '31-05-2016',
      keywords: 'Mobile, BLE, Architecture',
    },
  ],
  [
    {
      title: 'iOS Software Lead',
      company: 'Lumo Body Tech',
      description:
        'I worked at Lumo Body Tech as a the iOS software lead and was responsible for building their Lumo Lift app which was their flagship product up until they were aquired by Seismic.',
      year: '2011',
      end: 'November to May 2014',

      from: '01-11-2011',
      to: '31-05-2014',
      keywords: 'BLE, iOS, Android',
    },
    {
      title: 'Senior Software Engineer',
      company: 'Epic Think Media',
      description:
        'My first assignment was creating a movie review app for <a href="https://pluggedin.com" target="_blank">PluggedIn</a>. It was described by company management as “more pixel perfect than any of our previous apps” and “a benchmark for future Brushfire apps.” My next assignment was the “Tiger Woods: My Swing” golf swing analyzer app which was named top 3 Best App of the Year in New York Times.',
      year: '2010',
      end: 'August to October 2011',

      from: '01-08-2010',
      to: '31-10-2011',
      keywords: 'Mobile, Design, Embedded, Performance optimisation ',
    },
  ],
  [
    {
      title: 'iOS Software Manager',
      company: 'Vodafone',
      description:
        'With Vodafone I was head of the iOS application development department. I started out in ZYB before it was <a target="_blank" href="https://techcrunch.com/2008/05/16/danish-mobile-social-network-zyb-acquired-by-vodafone-for-e315-million/">acquired by Vodafone</a>. While in ZYB I made the first version of the social networking and synchronization application. After Vodafone acquired ZYB, I became software manager for a team of 5 developers and 2 testers working on developing iOS software for Vodafones new social services.',
      year: '2008',
      end: 'Septemper to July 2010',

      from: '01-09-2008',
      to: '31-07-2010',
      keywords: 'Management, Mobile',
    },
    {
      title: 'Senior Software Engineer',
      company: 'Zmags',
      description:
        '<a href="https://zmags.com" target="_blank">Zmags</a> builds software which can convert PDF files into flash based online publications. One month before I started in Zmags their only full time developer had stopped. I ensured that proper development, test, and release procedures were established for the development department which employed 10 developers by the time I left.',
      year: '2006',
      end: 'December to August 2008',

      from: '01-12-2006',
      to: '31-08-2008',
      keywords: 'Java, PDF parsing, Architecture, SDLC',
    },
  ],
];
