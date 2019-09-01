<template>
  <div class="title">
    <div :style="blockStyle">
      <h1>{{ heading }}</h1>
      <div class="subtitle-divider"></div>
      <p class="subtitle">{{ subHeading }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})

// Vue: Do not use reserved words like, title, header, heading, caption...
export default class Appelation extends Vue {
  @Prop()
  public heading: string | undefined;

  @Prop()
  public subHeading: string | undefined;

  @Prop()
  public blockStyle: number | undefined;
}
</script>
<style lang="stylus">
div.title
  display: flex
  justify-content: center
  h1
    color black
    text-transform uppercase
    font-size 30pt
    font-weight 600
    margin-bottom -15px
  .subtitle
    float clear
    color #c600ff !important
    text-transform uppercase
    font-weight 600 !important
    font-size 12pt !important
  .subtitle-divider
    background-color black
    display inline-block
    float left
    width 170px
    height 2px
    margin-top 24px
    margin-right 10px
</style>
