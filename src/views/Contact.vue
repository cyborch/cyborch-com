<template>
  <contact></contact>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Contact from '@/components/Contact.vue'; // @ is an alias to /src

@Component({
  components: {
    contact: Contact,
  },
})
export default class ContactPage extends Vue {}
</script>
