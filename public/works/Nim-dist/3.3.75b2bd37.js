webpackJsonp([3],{261:function(t,e,a){a(262);var i=a(11)(a(264),a(265),"data-v-363b72fc",null);t.exports=i.exports},262:function(t,e,a){var i=a(263);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);a(9)("6fe0f8fb",i,!0)},263:function(t,e,a){e=t.exports=a(8)(),e.push([t.id,".renderer[data-v-363b72fc]{width:100%;height:100%}.block[data-v-363b72fc]{padding:5px 4px;overflow:hidden;border-bottom:1px solid #eff2f6}.block[data-v-363b72fc]:last-child{border-bottom:none}.block>span[data-v-363b72fc]{font-size:14px;color:#8492a6;line-height:44px}.block>.input[data-v-363b72fc]{float:right;width:70%;margin-right:20px}",""])},264:function(t,e){t.exports={name:"SphereGeometryTest",data:function(){return{radius:1,widthSegments:8,heightSegments:6,phiStart:0,phiLength:2*Math.PI,thetaStart:0,thetaLength:Math.PI,wireframe:!1}},methods:{alert:function(t){console.log(t)}}}},265:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticStyle:{height:"100%"}},[a("el-col",{staticStyle:{height:"100%",padding:"10px"},attrs:{span:12}},[a("renderer",{staticClass:"renderer"},[a("perspective-camera-control",{attrs:{positionZ:"10",positionY:"10"}}),t._v(" "),a("scene",[a("mesh",[a("sphere-geometry",{attrs:{radius:t.radius,widthSegments:t.widthSegments,heightSegments:t.heightSegments,phiStart:t.phiStart,phiLength:t.phiLength,thetaStart:t.thetaStart,thetaLength:t.thetaLength}}),t._v(" "),a("mesh-basic-material",{attrs:{wireframe:t.wireframe}})],1),t._v(" "),a("grid-helper",{attrs:{size:100,divisions:100}})],1)],1)],1),t._v(" "),a("el-col",{staticStyle:{height:"100%",padding:"10px"},attrs:{span:12}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"block"},[a("span",[t._v("radius")]),t._v(" "),a("el-slider",{staticClass:"input",model:{value:t.radius,callback:function(e){t.radius=e},expression:"radius"}})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-checkbox",{staticClass:"input-inline",model:{value:t.wireframe,callback:function(e){t.wireframe=e},expression:"wireframe"}},[t._v("wireframe")])],1),t._v(" "),t.wireframe?a("div",{staticClass:"block"},[a("span",[t._v("widthSegments")]),t._v(" "),a("el-slider",{staticClass:"input",model:{value:t.widthSegments,callback:function(e){t.widthSegments=e},expression:"widthSegments"}})],1):t._e(),t._v(" "),t.wireframe?a("div",{staticClass:"block"},[a("span",[t._v("heightSegments")]),t._v(" "),a("el-slider",{staticClass:"input",model:{value:t.heightSegments,callback:function(e){t.heightSegments=e},expression:"heightSegments"}})],1):t._e(),t._v(" "),t.wireframe?a("div",{staticClass:"block"},[a("span",[t._v("phiStart")]),t._v(" "),a("el-slider",{staticClass:"input",attrs:{min:0,max:2*Math.PI,step:Math.PI/180},model:{value:t.phiStart,callback:function(e){t.phiStart=e},expression:"phiStart"}})],1):t._e(),t._v(" "),t.wireframe?a("div",{staticClass:"block"},[a("span",[t._v("phiLength")]),t._v(" "),a("el-slider",{staticClass:"input",attrs:{min:0,max:2*Math.PI,step:Math.PI/180},model:{value:t.phiLength,callback:function(e){t.phiLength=e},expression:"phiLength"}})],1):t._e(),t._v(" "),t.wireframe?a("div",{staticClass:"block"},[a("span",[t._v("thetaStart")]),t._v(" "),a("el-slider",{staticClass:"input",attrs:{min:0,max:2*Math.PI,step:Math.PI/180},model:{value:t.thetaStart,callback:function(e){t.thetaStart=e},expression:"thetaStart"}})],1):t._e(),t._v(" "),t.wireframe?a("div",{staticClass:"block"},[a("span",[t._v("thetaLength")]),t._v(" "),a("el-slider",{staticClass:"input",attrs:{min:0,max:Math.PI,step:Math.PI/180},model:{value:t.thetaLength,callback:function(e){t.thetaLength=e},expression:"thetaLength"}})],1):t._e()])],1)],1)},staticRenderFns:[]}}});