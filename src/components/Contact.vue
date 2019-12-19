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
        I'm currently working on by looking at Medium and Github.
      </p>
      <table>
        <tr>
          <td>
            <a target="_blank" href="mailto:anders@cyborch.com">
              <img class="social" src="/social/envelope.svg">
            </a>
          </td>
          <td>
            <a target="_blank" href="https://www.facebook.com/anders.cyborch">
              <img class="social" src="/social/facebook.svg">
            </a>
          </td>
          <td>
            <a target="_blank" href="https://github.com/cyborch">
              <img class="social" src="/social/github.svg">
            </a>
          </td>
          <td>
            <a target="_blank" href="https://keybase.io/cyborch">
              <img class="social" src="/social/keybase.svg">
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" href="https://linkedin.com/in/cyborch">
              <img class="social" src="/social/linkedin-in.svg">
            </a>
          </td>
          <td>
            <a onclick='Skype.tryAnalyzeSkypeUri("chat", "0");' href='skype:cyborch?chat'>
              <img class="social" src="/social/skype.svg">
            </a>
          </td>
          <td>
            <a target="_blank" href="https://twitter.com/cyborch">
              <img class="social" src="/social/twitter.svg">
            </a>
          </td>
          <td>
            <a target="_blank" href="https://blog.cyborch.com/">
              <img class="social" src="/social/ghost.png" style="width: 75px">
            </a>
          </td>
        </tr>
        <tr>
          <td>
            <a target="_blank" href="https://instagram.com/cyborch">
              <img class="social" src="/social/instagram.svg">
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
      <img class="background" src="/contact.jpg">
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
export default class Contact extends Vue {
  @Prop()
  public animateIn: boolean | undefined;

  public mounted() {
    this.animateInIfNeeded();
    this.setCloseRight();
  }

  public close() {
    if (history.state && history.state.pushed === true && (this.$parent as Home).closeContact) {
      const el = document.getElementById('contact');
      if (!el) { return; }
      el.classList.add('moveout');
      (this.$parent as Home).closeContact();
    } else {
      document.location.href = '/';
    }
  }

  private animateInIfNeeded() {
    if (this.animateIn) {
      const el = document.getElementById('contact');
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
  img.background
    position absolute
    right 0
    top 70vh
    height 30vh
    width auto
    z-index 1
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

    img.background {
      display none
    }
  }
}
</style>
