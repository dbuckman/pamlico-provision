<template> 
<div id="app">
  <v-app id="inspire">
    <v-content class="pa-0">
      <HelloWorld/>
    </v-content>
  </v-app>
</div>
</template>
<script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?14642257&data_platform=code&data_date=2019-12-13" charset="utf-8"></script>
<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap');
logo {
  font-family: 'Handlee', cursive;
}
</style>
