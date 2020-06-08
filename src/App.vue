<template> 
<div id="app">
  <v-app id="inspire">
    <v-content class="pa-0">
      <v-parallax :src="headerParallax" height="400">
        <v-row>
          <v-col>
            <v-toolbar class="transparent" flat dark>
              <v-toolbar-title><v-btn to="/" text style="font-family: 'Handlee', cursive;">Pamlico Provision</v-btn></v-toolbar-title>
          
              <v-spacer></v-spacer>
          
              <v-toolbar-items>
                <v-btn text href="/shop">Shop</v-btn>
                <v-btn text>Blog</v-btn>
                <v-btn text to="/about">Our Story</v-btn>
                <v-btn icon>
                  <div class="ec-cart-widget"></div>
                </v-btn>
              </v-toolbar-items>
            </v-toolbar>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">{{ headerText }}</h1>
            <h4 class="subheading">{{ headerSubText }}</h4>
          </v-col>
        </v-row>
      </v-parallax>
      <router-view></router-view>

      <v-row justify="center">
        <v-col class="text-center" cols="12">
          <div id="my-store-14642257"></div>
        </v-col>          
      </v-row>

      <v-row>
        <v-col>

        </v-col>
      </v-row>
    </v-content>
  </v-app>
</div>
</template>
<style>
@import url('https://fonts.googleapis.com/css?family=Handlee&display=swap');
logo {
  font-family: 'Handlee', cursive;
}
</style>

<script>


export default {
  name: 'App',
  title () {
    return 'Pamlico Provision'
  },
  data: () => ({
    parallaxHome: require('@/assets/images/Kayak.jpg'),
    parallaxAbout: require('@/assets/images/7058775_large_1557953883.jpg')
  }),
  mounted () {
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    let ecwidScript = document.createElement('script')
      ecwidScript.setAttribute('src', 'https://app.ecwid.com/script.js?14642257&data_platform=code&data_date=2019-12-13')
      document.head.appendChild(ecwidScript)
    sleep(500).then(() => {
      this.loadCart()
      this.loadCatalog()
    })
  },
  methods: {
    loadCart () {
      window.Ecwid.init()
    },
    loadSearch () {
      window.xSearch("id=my-search-14642257")
    },
    loadCatalog () {
      window.xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-14642257")
    }
  },
  computed: {
    headerParallax() {
      if (this.$route['path'] == '/') { return require('@/assets/images/Kayak.jpg') }
      else if (this.$route['path'] == '/about') { return require('@/assets/images/7058775_large_1557953883.jpg') }
      else if (this.$route['path'] == '/shop') { return require('@/assets/images/pexels-photo-2170233.jpeg') }
      else return ''
    },
    headerText() {
      if (this.$route['path'] == '/') { return 'ADVENTURE IS CALLING' }
      else if (this.$route['path'] == '/about') { return 'OUR STORY' }
      else if (this.$route['path'] == '/shop') { return 'SHOP' }
      else return ''
    },
    headerSubText() {
      if (this.$route['path'] == '/') { return 'We have the gear to help' }
      else if (this.$route['path'] == '/about') { return '' }
      else return ''
    }
  }
}
</script>

