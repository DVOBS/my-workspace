<template>
  <div class="AppAside">
    <div class="header">
      <img src="../assets/logo.png">
    </div>
    <div class="list">
      <ul
        v-for="(workGroup, index) in workGroups"
        :key="index"
        :class="{ active: isActiveGroup (workGroup) }"
        :style="{
          color: isActiveGroup (workGroup) ? workGroup.color : '',
          height: isActiveGroup (workGroup) ? (45 + workGroup.workProjects.length * 25) + 'px' : '40px'
        }"
      >
        <li
          @click="handleGroupClick(workGroup)"
        >{{workGroup.name}}</li>
        <li
          v-for="(workProject, subIndex) in workGroup.workProjects"
          :key="index + '_' + subIndex"
          :class="{ active: isActiveProject(workProject) }"
          :style="{
            color: isActiveProject (workProject) ? workGroup.color : '',
          }"
          @click="handleProjectClick(workGroup, workProject)"
        >{{workProject.name}}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { WorkGroup, WorkProject } from '../interfaces'

@Component
export default class AppAside extends Vue {
  @Prop({ required: true, type: Array })
  private workGroups!: WorkGroup[]

  @Prop({ required: true, type: Object })
  private currentWorkGroup!: WorkGroup | null

  @Prop({ required: true, type: Object })
  private currentWorkProject!: WorkProject | null

  private isActiveGroup (workGroup: WorkGroup) {
    return this.currentWorkGroup === workGroup
  }
  
  private isActiveProject (project: WorkProject) {
    return this.currentWorkProject === project
  }

  private handleGroupClick(group: WorkGroup) {
    this.$emit('update:currentWorkGroup', group)

    this.$emit('update:currentWorkProject', group.workProjects[0])
  }

  private handleProjectClick(group: WorkGroup, project: WorkProject) {
    this.$emit('update:currentWorkGroup', group)
    this.$emit('update:currentWorkProject', project)
  }
}
</script>
<style scoped lang="scss">
.AppAside {
  .header {
    height: 60px;
    padding: 15px 20px;
    border-bottom: 1px solid rgba(0,0,0,.65);
    overflow: hidden;
  }

  .header img {
    height: 95px;
    margin-top: -13px;
    margin-left: -8px;
  }

  .list {
    height: calc(100% - 60px);
    padding: 10px 0 20px 20px;
    overflow-y: auto;
  }

  ul {
    margin: 0;
    opacity: .4;
    list-style-type: none;
    padding-left: 0px;
    overflow-y: hidden;
    color: white;
    transition: all .4s ease;
    transition-delay: .0s;
  }

  ul li {
    position: relative;
    display: block;
    padding-left: 10px;
    color: white;
    text-decoration: none;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: .5px;
    color: white;
    cursor: pointer;
  }
  
  ul li::before {
    content: "";
    display: block;
    position: absolute;
    top: 4px;
    left: 1px;
    width: 1px;
    height: calc(100% - 8px);
    background-color: white;
  }

  ul.active {
    opacity: 1;
  }

  ul li.active:before {
    background-color: currentColor;
  }


  ul li:first-child {
    padding-left: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    color: currentColor;
  }

  ul li:first-child::before {
    display: none;
  }
}
</style>
