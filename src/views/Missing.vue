<template>
  <div id="missing">
    <home></home>
    <div id="error404">
      <p>
        <span class="leftmost">Oh no! <code>"{{ path }}"</code> not found. </span>
        <span>
          <a :href="mailtoLink">Email me</a>
          and tell me what you were looking for, so I can help you find it.
        </span>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/components/Home.vue'; // @ is an alias to /src

@Component({
  components: {
    home: Home,
  },
})
export default class Missing extends Vue {

  public mounted() {
    const pushState = history.pushState;
    history.pushState = (data: any, title: string, url: (string | null | undefined)) => {
      const el = document.getElementById('error404');
      if (el && el.parentNode) {
        el.parentNode.removeChild(el);
      }
      history.pushState = pushState; // replace original pushState function
      pushState.apply(history, [data, title, url]); // invoke original pushState function
    };
  }

  public data() {
    const path = window.location.pathname;
    return {
      path,
      mailtoLink: 'mailto:anders@cyborch.com?subject=' + path + ' not found',
    };
  }
}
</script>
<style lang="stylus">
#missing
  #error404
    position fixed
    left 0
    right 0
    bottom 0
    min-height 50px
    background-color rgba(255,255,255, 0.9)
    a
      color #c600ff
    span
      font-weight 600
    p
      margin-left 20px
      margin-right 20px


@media (prefers-color-scheme: dark) {
  #missing {
    #error404 {
      border-top 1px solid rgba(255, 255, 255, 0.3)
      background-color rgba(0,0,0, 0.75)
    }
  }
}

</style>
