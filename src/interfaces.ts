import Vue from "vue";

export interface WorkGroup {
  name: string;
  color: string;
  workProjects: WorkProject[]
}

export interface WorkProject {
  name: string;
  component: Vue.VueConstructor;
  attrs: unknown;
}