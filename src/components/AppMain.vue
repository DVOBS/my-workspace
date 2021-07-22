<template>
  <div class="AppMain">
    <div
      class="header"
      v-if="currentWorkGroup"
      :style="{
        color: currentWorkGroup.color
      }"
    >
      <span>{{currentWorkGroup.name}}</span>
      <span v-if="currentWorkProject"> - </span>
      <span v-if="currentWorkProject">{{currentWorkProject.name}}</span>
    </div>
    <div
      v-else
      class="header"
    ></div>
    <div v-if="currentWorkProject" class="content">
      <component :is="component" v-bind="currentWorkProject.attrs"></component>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { WorkGroup, WorkProject } from '../interfaces'

@Component
export default class AppMain extends Vue {
  @Prop({ required: true, type: Object })
  private currentWorkGroup!: WorkGroup | null

  @Prop({ required: true, type: Object })
  private currentWorkProject!: WorkProject | null

  private get component() {
    return this.currentWorkProject?.component
  }
}
</script>
<style scoped lang="scss">
.AppMain {
  .header {
    height: 60px;
    line-height: 30px;
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0,0,0,.65);
  }
  .content {
    height: calc(100% - 60px);
    padding: 10px 20px;
    border-radius: 5px;
    overflow-y: auto;
  }
}
</style>
