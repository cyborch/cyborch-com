<template>
  <home></home>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Home from '@/components/Home.vue'; // @ is an alias to /src

@Component({
  components: {
    home: Home,
  },
})
export default class HomePage extends Home {}
</script>
