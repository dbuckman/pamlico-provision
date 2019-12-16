<template>
      <v-container fluid>
        <v-row justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4 black--text">Overview</h1>
          </v-col>          
        </v-row>
        <v-row justify="center">
          <v-col class="text-center" cols="6">
            <p class="text-justify">
              Pamlico Provision Company is driven by a passion to create quality products that are made in the USA.
            </p>
            <p class="text-justify">
              Pamlico Provision Company was started in 2006.  We started out selling outdoor gear on our website mostly focusing on knives and cutlery.  We did pretty good at it and enjoyed what we were doing.  We only stocked top quality products and were proud of what we sold.  As time moved on the bulk of online retail moved to one location and we had no interest in trying to compete there.  That market place rewards selling the lowest cost products with the fastest turnaround.  It just wasn't a fit.
            </p>
            <p class="text-justify">
              Pamlico Provision Company looked at the market and looked at our strengths.  We realized we have a passion to make quality products that we are proud to put our name on and you will be proud to use every time you pick them up.  So we stopped selling other peoples products and started making our own gear.
            </p>
          </v-col>          
        </v-row>
        
      <v-parallax :src="require('@/assets/images/photo-51.jpg')" height="400">
        <v-row
          justify="center"
          align="center"
        >
        </v-row>
      </v-parallax>

        <v-row justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4 black--text">What does Pamlico mean?</h1>
          </v-col>          
        </v-row>
        <v-row justify="center">
          <v-col class="text-center" cols="6">
            <p class="text-justify">
              The Pamlico River is a tidal river that flows into Pamlico Sound, in North Carolina.  We have deep roots with that part of North Carolina and draw our name from our love of the river. 
            </p>
          </v-col>          
        </v-row>

      <v-parallax :src="require('@/assets/images/7058771_medium_1557953554.jpg')" height="400">
        <v-row
          justify="center"
          align="center"
        >
        </v-row>
      </v-parallax>

        <v-row justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4 black--text">Our mission</h1>
          </v-col>          
        </v-row>
        <v-row justify="center">
          <v-col class="text-center" cols="6">
            <p class="text-justify">
              Our mission is to make products that you will be proud to own.
            </p>
            <p class="text-justify">
              We source the best components for everything we make.<br>
              We design products that we would love to use, then we use them.<br>
              All our products are hand crafted in North Carolina.<br>
              We provide ways to customize our products on the website.  It you have custom options reach out and let us know what you are looking for.
            </p>
            <p class="text-justify">
              We hope you like our mission and we hope you like our products. If you have ideas for us we would love to hear them. 
            </p>
          </v-col>          
        </v-row>
      </v-container>

</template>


<script>
export default {
  data: () => ({
    parallax1: require('@/assets/images/7058775_large_1557953883.jpg')
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
