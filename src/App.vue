<template>
  <div id="app">
    <AppAside
      class="aside"
      :workGroups="workGroups"
      :currentWorkGroup.sync="currentWorkGroup"
      :currentWorkProject.sync="currentWorkProject"
    ></AppAside>
    <AppMain
      class="main"
      :currentWorkGroup.sync="currentWorkGroup"
      :currentWorkProject.sync="currentWorkProject"
    ></AppMain>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { WorkGroup, WorkProject } from './interfaces'
import AppAside from './components/AppAside.vue'
import AppMain from './components/AppMain.vue'
import IframeContent from './components/content/IframeContent.vue'

@Component({
  components: {
    AppAside,
    AppMain
  },
})
export default class App extends Vue {

  private workGroups: WorkGroup[] = []

  private currentWorkGroup: WorkGroup | null = null

  private currentWorkProject: WorkProject | null = null

  private registWorkGroup(name: string, color: string) {
    const group = {
      name,
      color,
      workProjects: []
    }
    this.workGroups.push(group)
    return this.workGroups[this.workGroups.length - 1]
  }

  private created() {
    let group
    group = this.registWorkGroup('数据可视化', '#ff4b4b')

    group.workProjects.push({
      name: '时间轴',
      component: IframeContent,
      attrs: { url: '/works/MyTimerShaft/index.html' }
    })

    group.workProjects.push({
      name: '可视化大屏',
      component: IframeContent,
      attrs: { url: '/works/Media data visualization/index.html' }
    })

    // group.workProjects.push({
    //   name: '可视化大屏-2',
    //   component: IframeContent,
    //   attrs: { url: '/works/Media data visualization v0.03/index.html' }
    // })

    group = this.registWorkGroup('THREE JS', '#ff8f42')

    group.workProjects.push({
      name: '3D饼图',
      component: IframeContent,
      attrs: { url: '/works/DesignSketch/pie.html' }
    })

    group.workProjects.push({
      name: '3D饼图-悬浮',
      component: IframeContent,
      attrs: { url: '/works/DesignSketch/pie-suspend.html' }
    })

    group.workProjects.push({
      name: '3D饼图-动态数据',
      component: IframeContent,
      attrs: { url: '/works/QCharts/test/index.html' }
    })

    group.workProjects.push({
      name: '3D柱形图',
      component: IframeContent,
      attrs: { url: '/works/QCharts/test/bar.html' }
    })

    group.workProjects.push({
      name: '3D柱形图-2',
      component: IframeContent,
      attrs: { url: '/works/QCharts/test/bar-2.html' }
    })

    group.workProjects.push({
      name: '3D柱形图-3',
      component: IframeContent,
      attrs: { url: '/works/QCharts/test/bar-3.html' }
    })

    group.workProjects.push({
      name: 'NIM 3D 原型',
      component: IframeContent,
      attrs: { url: '/works/Nim-dist/index.html' }
    })

    group = this.registWorkGroup('工具', '#ffc730')

    group.workProjects.push({
      name: 'CSS 颜色主题提取',
      component: IframeContent,
      attrs: { url: '/works/color-theme-extractor-dist/index.html' }
    })

    group.workProjects.push({
      name: '自定义公式解析原型',
      component: IframeContent,
      attrs: { url: '/works/arithmetic/rnp.html' }
    })

    group.workProjects.push({
      name: 'Mani编辑器-原型',
      component: IframeContent,
      attrs: { url: '/works/mani-dist/index.html' }
    })


    console.log(group)

    this.currentWorkGroup = this.workGroups[0]
    this.currentWorkProject = this.currentWorkGroup.workProjects[0]
  }
}
</script>

<style lang="scss">
html,
body,
#app {
 height: 100%;
 margin: 0;
}

#app {
  display: flex;
  background-color: #252423;
}

.aside {
  width: 240px;
  height: 100%;
  border-right: 1px solid rgba(0,0,0,.65);
}

.main {
  flex-grow: 1;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

*::-webkit-scrollbar {
  display: block;
  width: 2px;
  height: 2px;
}

*::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.25);
  border-radius: 2px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-corner {
  background: transparent;
}
</style>
