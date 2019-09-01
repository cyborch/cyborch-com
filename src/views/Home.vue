<template>
  <div id="home">
    <div class="link-container">
      <a href="/about" @click.prevent="about()" to="/about" class="main-link" id="about-link">about</a>
    </div>
    <div class="link-container contact-link-container">
      <a href="/contact" @click.prevent="contact()" to="/contact" class="main-link" id="contact-link">contact</a>
    </div>
    <div id="main-background">
      <img src="/background.jpg">
    </div>
    <div class="backgroundclip">
      <h1>I<span class="accent">&#96;</span>m<br>Anders<br>Borch</h1>
    </div>
    <about animateIn="true" v-if="aboutClicked"></about>
    <contact animateIn="true" v-if="contactClicked"></contact>
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
  background: url('/background-dark.jpg') -200px -100px no-repeat;
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

small-screen-h1-color = #555555

@media only screen and (max-width: 1140px) {
  .backgroundclip h1 {
    position absolute
    top 320px
    left 30px
    background: none !important
    color: small-screen-h1-color
    background-color: rgba(0,0,0,0) !important
    font-size 70pt
    line-height 70pt
  }

  .accent {
    letter-spacing: -20px
  }
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) {
  .backgroundclip h1 {
    position absolute
    top 280px
    left 30px
    background: none !important
    color: small-screen-h1-color
    background-color: rgba(0,0,0,0) !important
    font-size 50pt
    line-height 50pt
  }
}

@media only screen and (max-width: 320px) {
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
    font-size 40pt
    line-height 40pt
  }

}

</style>
