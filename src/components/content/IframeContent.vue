<template>
  <div class="IframeContent">
    <iframe v-if="url && show" :src="url" frameborder="0"></iframe>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component
export default class IframeContent extends Vue {
  @Prop()
  private url!: string

  private show = false

  private mounted() {
    window.setTimeout(() => {
      this.show = true
    }, 500)
  }
}
</script>
<style scoped lang="scss">
.IframeContent {
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 0px 3px 2px black;
  iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
