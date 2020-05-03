<template>
  <div id="contact">
    <div class="column">
      <appelation heading="get in touch" subHeading="be social" blockStyle="width: 300px"></appelation>
      <div class="close-mobile" id="close-mobile">
        <a href="/" @click.prevent="close()" ><img src="/x.svg"></a>
      </div>
      <p>
        There are a number of ways to get in touch with me, ranging from the
        tried and true email, to Facebook or Twitter. You can also follow what
        I'm currently working on by looking at
        <a target="_blank" href="https://blog.cyborch.com/">my blog</a>
        or Github.
      </p>
      <table>
        <tr>
          <td>
            <a target="_blank" href="mailto:anders@cyborch.com">
              <picture>
                <source srcset="/social/envelope-darkmode.svg" media="(prefers-color-scheme: dark)">
                <img class="social" src="/social/envelope.svg">
              </picture>
            </a>
          </td>
          <td>
            <a target="_blank" href="https://www.facebook.com/anders.cyborch">
              <picture>
                <source srcset="/social/facebook-darkmode.svg" media="(prefers-color-scheme: dark)">
                <img class="social" src="/social/facebook.svg">
              </picture>
            </a>
          </td>
          <td>
            <a target="_blank" href="https://github.com/cyborch">
              <picture>
                <source srcset="/social/github-darkmode.svg" media="(prefers-color-scheme: dark)">
                <img class="social" src="/social/github.svg">
              </picture>
            </a>
          </td>
          <td>
            <a target="_blank" href="https://keybase.io/cyborch">
              <picture>
                <source srcset="/social/keybase-darkmode.svg" media="(prefers-color-scheme: dark)">
                <img class="social" src="/social/keybase.svg">
              </picture>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" href="https://linkedin.com/in/cyborch">
              <picture>
                <source srcset="/social/linkedin-in-darkmode.svg" media="(prefers-color-scheme: dark)">
                <img class="social" src="/social/linkedin-in.svg">
              </picture>
            </a>
          </td>
          <td>
            <a onclick='Skype.tryAnalyzeSkypeUri("chat", "0");' href='skype:cyborch?chat'>
              <picture>
                <source srcset="/social/skype-darkmode.svg" media="(prefers-color-scheme: dark)">
                <img class="social" src="/social/skype.svg">
              </picture>
            </a>
          </td>
          <td>
            <a target="_blank" href="https://twitter.com/cyborch">
              <picture>
                <source srcset="/social/twitter-darkmode.svg" media="(prefers-color-scheme: dark)">
                <img class="social" src="/social/twitter.svg">
              </picture>
            </a>
          </td>
          <td>
            <a target="_blank" href="https://blog.cyborch.com/">
              <picture>
                <source srcset="/social/ghost-darkmode.png" media="(prefers-color-scheme: dark)">
                <img class="social" src="/social/ghost.png" style="width: 75px">
              </picture>
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" href="https://instagram.com/cyborch">
              <picture>
                <source srcset="/social/instagram-darkmode.svg" media="(prefers-color-scheme: dark)">
                <img class="social" src="/social/instagram.svg">
              </picture>
            </a>
          </td>
          <td rowspan="3"></td>
        </tr>
      </table>
    </div>
    <div style="height: 100px"></div>
    <div class="close">
      <a href="/" @click.prevent="close()" ><img src="/x.svg"></a>
    </div>

    <div>
      <picture>
        <source srcset="/contact-darkmode.png" media="(prefers-color-scheme: dark)">
        <img id="contact-background" src="/contact.jpf">
      </picture>
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';
// @ts-ignore
import innerHeight from 'ios-inner-height';
import Home from '@/views/Home.vue';
import Appelation from '@/components/Appelation.vue';

@Component({
  components: {
    appelation: Appelation,
  },
})
export default class Contact extends Vue {
  @Prop()
  public animateIn: boolean | undefined;

  public mounted() {
    this.animateInIfNeeded();
    this.setCloseRight();
    this.resetBackgroundPosition();
    window.addEventListener('resize', this.resetBackgroundPosition);
  }

  public close() {
    if (history.state && history.state.pushed === true && (this.$parent as Home).closeContact) {
      let el = document.getElementById('contact');
      if (!el) { return; }
      el.classList.add('moveout');

      el = document.getElementById('contact-background');
      if (!el) { return; }
      el.classList.add('moveout');

      (this.$parent as Home).closeContact();
    } else {
      document.location.href = '/';
    }
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
    if (this.animateIn) {
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
}
</script>
<style lang="stylus">
#contact
  padding-top 60px
  width 100%
  height 100vh
  overflow scroll
  background-color #fafafa
  .close-mobile
    display none
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
    max-width 1400px
    margin-left auto
    margin-right auto
    position relative
    z-index 2
    p
      font-size 14pt
      font-weight 400
      color #5d5d5d
      width 80%
      margin-left auto
      margin-right auto
    img.social
      width 50px
      height auto
      margin-left auto
      margin-right auto
    table
      border none
      border-collapse collapse
      width 100%
    td
      text-align center
      height 140px

#contact-background
  position fixed
  right 0
  bottom 0
  height 30vh
  width auto
  z-index 1

#contact-background.initial
  position fixed
  right 0
  bottom 0

#contact-background.movein
  right 0
  bottom 0
  animation-name contact-background-movein
  animation-duration 0.5s

#contact-background.moveout
  right 0
  bottom 0
  animation-name contact-background-moveout
  animation-duration 0.5s

#contact.initial
  position absolute
  top 0
  left 0

#contact.movein
  left 0
  animation-name contact-movein
  animation-duration 0.5s

#contact.moveout
  left 0
  animation-name contact-moveout
  animation-duration 0.5s

@-webkit-keyframes contact-movein {
  from {left: 100%}
  to {left: 0}
}

@keyframes contact-movein {
  from {left: 100%}
  to {left: 0}
}

@-webkit-keyframes contact-moveout {
  from {left: 0}
  to {left: 100%}
}

@keyframes contact-moveout {
  from {left: 0}
  to {left: 100%}
}

@-webkit-keyframes contact-background-movein {
  from {right: -100vw}
  to {right: 0}
}

@keyframes contact-background-movein {
  from {right: -100vw}
  to {right: 0}
}

@-webkit-keyframes contact-background-moveout {
  from {right: 0}
  to {right: -100vw}
}

@keyframes contact-background-moveout {
  from {right: 0}
  to {right: -100vw}
}

@media (prefers-color-scheme: dark) {
  #contact {
    background-color: #080808;
  }
}

@media only screen and (max-device-width: 768px) {
  #contact-background {
    position relative
    bottom auto !important
    left calc(100vw - 100px)
    height auto !important
    width 100px !important
    top -50px
  }

  #contact-background.initial {
    position relative
    bottom auto !important
    left calc(100vw - 100px)
    height auto !important
    width 100px !important
    top -50px
  }
}

@media only screen and (max-device-width: 360px) {
  #contact {
    .close-mobile {
      display block !important
      width 20px
      height 20px
      margin 40px
      position relative
      top -170px
    }

    .close {
      display none !important
    }

  }
}
</style>
