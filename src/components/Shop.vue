<template>  
        <v-row>
          <v-col>
            <div id="my-store-14642257"></div>
          </v-col>
        </v-row>
</template>


<script>
export default {
  data: () => ({
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
  }
}
</script>
