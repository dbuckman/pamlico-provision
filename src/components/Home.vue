<template>
  <div>
    <div>
      <v-parallax src="http://www.hsc.edu/images/News/2018/Kayak.jpg" height="300">
        <v-row
        >
          <v-toolbar class="transparent" flat dark>
            <v-toolbar-title><v-btn flat to="/" text>Pamlico Provision</v-btn></v-toolbar-title>
        
            <v-spacer></v-spacer>
        
            <v-toolbar-items>
              <v-btn text href="http://localhost:8080#!/Bags/c/41583657/offset=0">Shop</v-btn>
              <v-btn text>Blog</v-btn>
              <v-btn text>Our Story</v-btn>
              <v-btn icon>
                <div class="ec-cart-widget"></div>
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
        </v-row>
        
        <v-row
          justify="center"
        >
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">ADVENTURE IS CALLING</h1>
            <h4 class="subheading">We have the gear to help</h4>
          </v-col>  
        </v-row>
      </v-parallax>
    </div>

    <div>
      <v-container fluid>
        <v-row justify="center">
          <v-col cols="3" align="center">
            <v-avatar size="180">
              <img
                src="https://images.pexels.com/photos/3329292/pexels-photo-3329292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="John"
              >
            </v-avatar>
            <div class="headline">Premium Quality</div>
            <v-divider></v-divider>
            <div class="body-2">
              We source the highest quality components for everything we make.
            </div>
          </v-col>
          <v-col cols="3" align="center">
            <v-avatar size="180">
              <img
                src="https://images.pexels.com/photos/547766/pexels-photo-547766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="John"
              >
            </v-avatar>
            <div class="headline">Classic Design</div>
            <v-divider></v-divider>
            <div class="body-2">
              Each product is designed to be timeless.
            </div>
          </v-col>
          <v-col cols="3" align="center">
            <v-avatar size="180">
              <img
                src="https://images.pexels.com/photos/1535244/pexels-photo-1535244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="John"
              >
            </v-avatar>
            <div class="headline">Unbeatable Value</div>
            <v-divider></v-divider>
            <div class="body-2">
              Hand made products at an affordable price.
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    
    <div>
      <v-parallax src="http://pics4.city-data.com/cpicc/cfiles27055.jpg" height="400">
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">ROOTS IN THE PAMLICO</h1>
          </v-col>  
        </v-row>
      </v-parallax>
    </div>

    <div>
      <v-container fluid>
        <v-row justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4 black--text">EXPLORE YOUR WORLD</h1>
          </v-col>          
        </v-row>
      </v-container>
    </div>
    
    <div>
      <v-parallax src="https://images.pexels.com/photos/2916819/pexels-photo-2916819.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" height="400">
        <v-row
          justify="center"
          align="center"
        >
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">BUILT FOR ADVENTURE</h1>
          </v-col>  
        </v-row>
      </v-parallax>
    </div>
    
    <div>
      <v-container fluid>
        <v-row justify="center">
          <v-col class="text-center" cols="12">
            <div id="my-store-14642257"></div>
          </v-col>          
        </v-row>
      </v-container>
    </div>
  </div>
</template>


<script>
export default {
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
  }
}
</script>
