<template>
  <div id="home">
    <div class="link-container">
      <a href="/about" @click.prevent="about()" to="/about" class="main-link" id="about-link">about</a>
    </div>
    <div class="link-container contact-link-container">
      <a href="/contact" @click.prevent="contact()" to="/contact" class="main-link" id="contact-link">contact</a>
    </div>
    <picture id="main-background">
      <source srcset="/background-darkmode.png" media="(prefers-color-scheme: dark)">
      <img src="/background.jpg">
    </picture>
    <div class="backgroundclip">
      <h1 id="hero">I<span class="accent">&#96;</span>m<br>Anders<br>Borch</h1>
    </div>
    <about animateIn="true" v-if="aboutClicked"></about>
    <contact animateIn="true" v-if="contactClicked"></contact>
    <div class="preload-images"></div>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
import About from '@/components/About.vue'; // @ is an alias to /src
import Contact from '@/components/Contact.vue';

@Component({
  components: {
    about: About,
    contact: Contact,
  },
})
export default class Home extends Vue {
  private aboutClicked = false;
  private contactClicked = false;

  public mounted() {
    window.addEventListener('popstate', (event) => {
      this.aboutClicked = false;
      this.contactClicked = false;
    });
    const ua = window.navigator.userAgent;
    if (ua.indexOf('MSIE') > 0 || ua.indexOf('Trident') > 0) {
      const el = document.getElementById('hero');
      if (!el) { return; }
      el.style.background = 'none';
      el.style.color = '#555555';
    }
  }

  public about() {
    this.aboutClicked = true;
    history.pushState({ pushed: true }, '', '/about');
  }

  public closeAbout() {
    setTimeout(() => {
      this.aboutClicked = false;
      history.replaceState({}, '', '/');
    }, 500);
  }

  public contact() {
    this.contactClicked = true;
    history.pushState({ pushed: true }, '', '/contact');
  }

  public closeContact() {
    setTimeout(() => {
      this.contactClicked = false;
      history.replaceState({}, '', '/');
    }, 500);
  }

  public data() {
    return {
      aboutClicked: this.aboutClicked,
      contactClicked: this.contactClicked,
    };
  }
}
</script>
<style lang="stylus">

.preload-images {
  position absolute
  top 100vh
  left 100%
  width 1px
  height 1px
  background: url('/portrait.jpg'),
    url('/social/envelope.svg'),
    url('/social/facebook.svg'),
    url('/social/github.svg'),
    url('/social/keybase.svg'),
    url('/social/linkedin-in.svg'),
    url('/social/skype.svg'),
    url('/social/twitter.svg'),
    url('/social/medium-m.svg'),
    url('/social/instagram.svg'),
    url('/contact.jpg');
}

#home
  .link-container
    display: flex;
    justify-content: center;
  .contact-link-container
    height 100vh
    align-items: center;
  .main-link
    font-family 'Montserrat', sans-serif
    text-decoration none
    color black
    text-transform uppercase
    letter-spacing 0.4em
    font-weight 500


#main-background
  z-index -1
  position absolute
  top 0
  left 0
  width 100%
  height 100vh
  background: url('/background-overflow.jpg') repeat-x right top fixed;
  background-size contain
  img
    height 100%
    min-height 800px
    width auto
    float left
    margin-left -100px

.backgroundclip h1
  position absolute
  top 20vh
  left 40%
  background: url('/background-inner.jpg') -200px -100px no-repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black
  font-size 15vh
  text-align left
  line-height 13vh
  font-family 'Montserrat', sans-serif
  font-weight 700
.accent
  letter-spacing: -30px

#about-link
  display block
  position absolute
  top 20px
  text-align center
  margin-left auto
  margin-right auto

#contact-link
  display block
  transform translate(50%, 0) rotate(90deg)
  position absolute
  right 40px
  margin-top auto
  margin-bottom auto

@media (prefers-color-scheme: dark) {
  #main-background {
    background: linear-gradient(90deg, rgba(34,34,34,1) 0%, rgba(0,0,0,1) 100%);
  }

  #home {
    .main-link {
      color: #ccc;
    }
  }
}

@media only screen and (prefers-color-scheme: dark) and (max-width: 1140px) {
  .backgroundclip h1 {
    background: none !important
    color: #ccc !important
    background-color: #ccc !important
    -webkit-background-clip: none;
    -webkit-text-fill-color: #ccc !important
  }
}

small-screen-h1-color = #555555

@media only screen and (max-width: 1140px) {
  .backgroundclip h1 {
    position absolute
    top 320px
    left 30px
    background: none !important
    color: small-screen-h1-color
    background-color: rgba(0,0,0,0) !important
    -webkit-background-clip: none;
    -webkit-text-fill-color: small-screen-h1-color
    font-size 70pt
    line-height 70pt
  }

  .accent {
    letter-spacing: -20px
  }
}

@media only screen and (min-device-width: 321px) and (max-device-width: 667px) {
  .backgroundclip h1 {
    position absolute
    top 280px
    left 30px
    background: none !important
    color: small-screen-h1-color
    background-color: rgba(0,0,0,0) !important
    -webkit-background-clip: none;
    -webkit-text-fill-color: small-screen-h1-color
    font-size 50pt
    line-height 50pt
  }
}

@media only screen and (max-device-width: 320px) {
  #main-background {
    img {
      height 100%
      min-height 600px
      width auto
      float left
      margin-left -100px
    }
  }
  .backgroundclip h1 {
    position absolute
    top 220px
    left 30px
    background-image: none !important
    color: small-screen-h1-color
    background-color: rgba(0,0,0,0) !important
    -webkit-background-clip: none;
    -webkit-text-fill-color: small-screen-h1-color
    font-size 40pt
    line-height 40pt
  }

  #about-link {
    display none
  }

}

</style>
