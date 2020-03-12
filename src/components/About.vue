<template>
  <div id="about">
    <div class="column">
      <table class="about-intro">
        <tr>
          <td>
            <picture>
              <source srcset="/portrait-darkmode.png" media="(prefers-color-scheme: dark)">
              <img src="/portrait.jpg">
            </picture>
          </td>
          <td>
            <h1>about me</h1>
            <div class="subtitle-divider"></div>
            <p class="subtitle">who am i</p>
            <p>
              I am a leader, a yoga teacher and a software engineer. I have worked
              in software engineering in 20 years and have over 7 years of
              management experience. I moved from Denmark to America 7 years ago,
              lived in Spain for a short while and moved back to Denmark a couple
              of years ago.
            </p>
          </td>
        </tr>
      </table>
      <appelation heading="experience" subHeading="involvement" blockStyle="width: 320px"></appelation>
      <table class="experience">
        <tr v-for="row in experienceRows">
          <td v-for="cell in row">
            <div class="position">
              <h2>{{ cell.title }}</h2>
              <h3>{{ cell.company }}</h3>
              <p v-html="cell.description"></p>
              <div class="year">
                <h2 class="position-year">{{ cell.year }}</h2>
                <h3 class="position-end">{{ cell.end }}</h3>
              </div>
            </div>
          </td>
        </tr>
      </table>
      <appelation heading="early experience" subHeading="long ago" blockStyle="margin-left: 20px;width: 440px"></appelation>
      <p class="early">
        My earlier work experience includes NeoConsult (2005 - 2006),
        ComX Networks (2002 - 2005) and Netropolis (1998 - 2002). Please feel
        free to ask if you want to know more about my earlier work experience.
      </p>
      <appelation heading="interests" subHeading="hobbies" blockStyle="width: 280px"></appelation>
      <table class="interests">
        <tr>
          <td>
            <picture>
              <source srcset="/interests/bike-darkmode.png" media="(prefers-color-scheme: dark)">
              <img src="/interests/bike.png">
            </picture>
            <p>biking</p>
          </td>
          <td>
            <picture>
              <source srcset="/interests/yoga-darkmode.png" media="(prefers-color-scheme: dark)">
              <img src="/interests/yoga.svg">
            </picture>
            <p>yoga</p>
          </td>
          <td>
            <picture>
              <source srcset="/interests/vegan-darkmode.png" media="(prefers-color-scheme: dark)">
              <img src="/interests/vegan.png">
            </picture>
            <p>vegan food</p>
          </td>
          <td>
            <picture>
              <source srcset="/interests/puppies-darkmode.png" media="(prefers-color-scheme: dark)">
              <img src="/interests/puppies.png">
            </picture>
            <p>puppies</p>
          </td>
        </tr>
      </table>
      <p class="interests">
        On weekends, when the weather is nice, I like to go on bike rides. I
        will usually go up to Helsing&oslash;r and back (a 90k ride) if I can
        get away long enough. It's an excellent opportunity to clear my mind
        of all the distractions of everyday life. When I'm riding a bike I
        cannot check my mail or respond to a Slack notification.
      </p>
      <p class="interests">
        I tend to do yoga in the morning, not necessarily every morning or for
        very long. Just the asanas which I have been finding particularly
        challenging lately, or the ones which my body calls for. I also teach yoga
        at work once a week to my coworkers.
      </p>
      <p class="interests">
        There are many reasons why one can choose to be vegan. Some do it for
        the animals or for their own personal health. I count myself among those
        who do it for the environment. Along the way, I found that not eating
        meat makes me more mindful, less drowsy after eating, and gives me
        more energy.
      </p>
      <p class="interests">
        Finally, we have a dog named Penny. She's a King Charles Spaniel. She's
        cute and cuddly and makes everyones day just a little better.
      </p>
      <div style="height: 100px"></div>
    </div>
    <div class="close">
      <a href="/" @click.prevent="close()" ><img src="/x.svg"></a>
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import Home from '@/views/Home.vue';
import Appelation from '@/components/Appelation.vue';

@Component({
  components: {
    appelation: Appelation,
  },
})
export default class About extends Vue {
  @Prop()
  public animateIn: boolean | undefined;

  public data() {
    return {
      experienceRows: [
            [
              {
                title: 'Emerging Technology Evangelist',
                company: 'Tradeshift',
                description: 'Tradeshift Frontiers is the emerging technology department of Tradeshift, which does R&amp;D in all things that has to do with IoT, blockchain, and AI. My role is that of researching, prototyping, and demonstrating uses for emerging technologies, especially with a focus on IoT. On a daily basis I work with LoRa, Bluetooth, and development of mobile, web, and backend solutions.',
                year: '2018',
                end: 'July to present day',
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
          ],

    };
  }

  public mounted() {
    if (this.animateIn) {
      const el = document.getElementById('about');
      if (!el) { return; }
      el.classList.add('initial');
      el.classList.add('movein');
    }
  }

  public close() {
    if (history.state && history.state.pushed === true && (this.$parent as Home).closeAbout) {
      const el = document.getElementById('about');
      if (!el) { return; }
      el.classList.add('moveout');
      (this.$parent as Home).closeAbout();
    } else {
      document.location.href = '/';
    }
  }
}

</script>
<style lang="stylus">
#about
  width 100%
  height 100vh
  overflow scroll
  background-color #fafafa
  .close
    width 20px
    height 20px
    margin 40px
    position absolute
    top 0
    right 0
  a
    color #c600ff
  .column
    max-width 1800px
    margin-left auto
    margin-right auto
    table.about-intro
      border none
      border-collapse collapse
      width 80%
      padding 0
      margin-left 10%
      margin-right 10%
      max-height 200px
      td
        width 50%
        padding 80px
        img
          width 100%
          height auto
          min-width 360px
    h1
      text-transform uppercase
      font-size 30pt
      font-weight 600
      margin-bottom -15px
    .subtitle-divider
      background-color black
      display inline-block
      float left
      width 170px
      height 2px
      margin-top 24px
      margin-right 10px
    p
      font-size 14pt
      font-weight 400
      color #5d5d5d
    div.title
      display: flex
      justify-content: center
    .subtitle
      float clear
      color #c600ff !important
      text-transform uppercase
      font-weight 600 !important
      font-size 12pt !important
    table.experience
      border none
      border-collapse collapse
      width 96%
      padding 0
      margin-left 2%
      margin-right 2%
      td
        vertical-align top
        width 50%
        padding-left 10px
        padding-right 10px
    td > .year
      display block
      position relative
    td:hover
      h2.position-year
        color #c600ff
    h2.position-year
      position absolute
      font-size 100pt
      display block
      top 50px
      left -280px
      background-color rgba(0,0,0,0) !important
      font-family: 'Futura BdCn BT'
      font-weight: bold
      font-style: normal
    h3.position-end
      display block
      position absolute
      top 200px
      left -260px
      color #c600ff
      font-size 20pt
      background-color rgba(0,0,0,0) !important
      font-family: 'Futura BdCn BT'
      font-weight: bold
      font-style: normal
    td > .position
      display block
      position relative
      margin-bottom 20px
      h2
        padding-top 20px
      h2, h3, p
        background-color #ddd
        padding-left 100px
        padding-right 20px
        padding-bottom 10px
        margin-left 180px
        margin-bottom 0
        margin-top 0
      p
        min-height 200px
        padding-bottom 40px
    td:hover > .position
      h2, h3, p
        background-color #f4f4f4 !important
      h2.position-year, h3.position-end
        background-color rgba(0,0,0,0) !important
    .early
      margin-left auto
      margin-right auto
      max-width 1024px
      padding-left 20px
      padding-right 20px
      padding-bottom 40px
    table.interests
      width 80%
      margin-top 40px
      margin-left auto
      margin-right auto
      margin-bottom 60px
      border-collapse collapse
      border none
      tr td
        width 20%
        text-align center
      td p
        font-weight 600
    p.interests
      margin-left auto
      margin-right auto
      max-width 1024px
      padding-left 20px
      padding-right 20px
      padding-bottom 20px


#about.initial
  position absolute
  top -100vh
  left 0

#about.movein
  top 0
  animation-name about-movein
  animation-duration 0.5s

#about.moveout
  top 0
  animation-name about-moveout
  animation-duration 0.5s

@-webkit-keyframes about-movein {
  from {top: -100vh}
  to {top: 0}
}

@keyframes about-movein {
  from {top: -100vh}
  to {top: 0}
}

@-webkit-keyframes about-moveout {
  from {top: 0}
  to {top: -100vh}
}

@keyframes about-moveout {
  from {top: 0}
  to {top: -100vh}
}

@media (prefers-color-scheme: dark) {
  #about {
    .column {
      .subtitle-divider {
        background-color: #ccc;
      }
    }

    background-color: #080808;
    table.experience {
      td > .position {
        h2, h3, p {
          background-color #111
        }
      }
      td:hover > .position {
        h2, h3, p {
          background-color #151515 !important
        }
      }
    }
  }
}

@media only screen and (max-width: 1200px) {
  #about {
    table.experience tr, table.experience td, table.about-intro tr, table.about-intro td {
      display block
      margin-left auto !important
      margin-right auto !important
    }
    table.experience td, table.about-intro td {
      padding 0 !important
      width 100% !important
      img {
        max-width 400px
      }
    }
    .column h2.position-year {
      font-size 60pt
      left -190px
    }
    .column h3.position-end {
      top 150px
      left -180px
      font-size 14pt
    }
    td > .position {
      h2, h3, p {
        padding-left 90px !important
        margin-left 110px !important
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  #about {
    overflow-x hidden
    table.about-intro td p {
      padding-right 20px
      margin-right 20px
    }

    table.experience td p {
      margin-left 0
    }
    .column h2.position-year {
      font-size 60pt
      left -205px
      top -15px
    }
    .column h3.position-end {
      top 85px
      left -190px
      font-size 14pt
    }
    td > .position {
      h2 {
        min-height 60px
      }
      h2, h3 {
        padding-left 180px !important
        margin-left 30px !important
      }
      p {
        padding-left 10px !important
        margin-left 30px !important
      }
    }
  }
}

</style>
