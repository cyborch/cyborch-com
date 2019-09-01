<template>
  <about></about>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import About from '@/components/About.vue'; // @ is an alias to /src

@Component({
  components: {
    about: About,
  },
})
export default class AboutPage extends Vue {}
</script>
