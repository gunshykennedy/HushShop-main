<template>
  <section class="bg-gray-50">
    <section
      class="h-screen flex justify-center items-center bg-cover"
      style="background-image: url(/img/bg.jpg)"
    >
      <!-- SECTION: Title --->
      <h1 class="title-home">
        Hushshop: Secret shop featuring all your HQ needs
      </h1>
      <!--!SECTION: Title--->
    </section>
    <section class="grid md:grid-cols-3 gap-4 md:w-3/4 mx-auto p-8">
      <div class="w-full col-span-3 lg:col-span-1 h-96 relative">
        <!-- SECTION: Video -->
        <video class="video-home" playsinline autoplay muted loop id="bgvid">
          <source src="~assets/videos/video.mp4" type="video/mp4" /> 
        </video>
        <!-- !SECTION: Video --> 
      </div>
      <div
        class="flex items-center justify-center text-center col-span-3 lg:col-span-2 flex-col"
      >
        <h2 class="text-gray-800 text-4xl sm:text-6xl">
          The best guides available, curated and always HQ.
        </h2>
        <h3 class="text-gray-500">
          Proxies, Methods, Guides and more.
        </h3>
      </div>
      <Card
        v-for="(item, index) in products"
        :item="item"
        :key="index"
        class="col-span-3 lg:col-span-1 bg-white"
      />
    </section>
  </section>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const products = await $content('products')
      .where({ type: 'product', published: true })
      .fetch()

    return {
      products,
    }
  },
  data () {
    return {
      image: {
        src: 'https://images.unsplash.com/photo-1568659358810-bdbdb4decb5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
      alt: 'Image alt',
      },
    }
  },
}
</script>

<style>
video {
  /* Center the video */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.title-home {
  @apply text-white text-center text-4xl w-3/4 sm:text-6xl font-light;
}
.video-home {
  @apply absolute rounded-md shadow-xl w-full h-full object-cover;
}
</style>
