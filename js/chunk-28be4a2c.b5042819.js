(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28be4a2c"],{"0817":function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var o=r("1da1"),a=(r("96cf"),r("99af"),r("b0c0"),r("2423")),l=r("ff41"),n=r.n(l),i=(r("2f2f"),{data:function(){return{ruleForm:{title:"",tags:[],content:"",categoryId:void 0,type:"1",cover:"",articleUrl:""},fileList:[],coverType:"默认",contentEditor:{},options:[],rules:{title:[{required:!0,message:"请输入话题名称",trigger:"blur"},{min:1,max:25,message:"长度在 1 到 25 个字符",trigger:"blur"}],categoryId:[{required:!0,message:"请选择分类",trigger:"change"}]},showUrl:!1}},computed:{getRadio:function(){return this.ruleForm.type}},watch:{getRadio:function(e){this.showUrl="0"===e}},methods:{renderMarkdown:function(e){this.contentEditor=new n.a("vditor",{height:500,placeholder:"此处为话题内容……",theme:"classic",value:e,counter:{enable:!0,type:"markdown"},preview:{delay:0,hljs:{style:"native",lineNumber:!1}},tab:"\t",typewriterMode:!0,cache:{enable:!1},upload:{fieldName:"file",handler:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var o,l;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(a["n"])(e[0]);case 2:o=r.sent,l="",t.contentEditor&&"wysiwyg"===t.contentEditor.vditor.currentMode?l+="\n <img alt=".concat(e[0].name,' src="').concat(o.data,'">'):l+="\n![".concat(e[0].name,"](").concat(o.data,")"),document.execCommand("insertHTML",!1,l);case 6:case"end":return r.stop()}}),r)})))()},accept:"image/*,.mp3, .wav, .rar"}})},getCategory:function(){var e=this;Object(a["e"])().then((function(t){e.options=t.data}))},coverUpload:function(e){var t=this;Object(a["n"])(e.file).then((function(e){t.ruleForm.cover=e.data}))},submitForm:function(e,t){var r=this;this.ruleForm["draft"]=t,this.$refs[e].validate((function(e){return e?1===r.contentEditor.getValue().length||null==r.contentEditor.getValue()||""===r.contentEditor.getValue()?(r.$message({type:"warning",message:"话题内容不可为空"}),r.contentEditor.focus(),!1):(r.ruleForm.content=r.contentEditor.getValue(),r.showUrl&&""===r.ruleForm.articleUrl?(r.$message({type:"warning",message:"转载请注明出处"}),void r.$refs.type.focus()):void r.handle(r.ruleForm)):(console.log("error submit!!"),r.$refs.title.focus(),!1)}))},resetForm:function(e){this.$refs[e].resetFields(),this.contentEditor.setValue(""),this.ruleForm.tags=[],this.ruleForm.cover=""}}})},7801:function(e,t,r){"use strict";r("bb3c")},"910f":function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"columns"},[r("div",{staticClass:"column is-full"},[r("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[r("div",[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules}},[r("el-form-item",{attrs:{prop:"title"}},[r("el-input",{ref:"title",attrs:{placeholder:"输入主题名称"},model:{value:e.ruleForm.title,callback:function(t){e.$set(e.ruleForm,"title",t)},expression:"ruleForm.title"}})],1),r("el-form-item",{attrs:{prop:"categoryId"}},[r("el-select",{attrs:{placeholder:"请选择分类"},model:{value:e.ruleForm.categoryId,callback:function(t){e.$set(e.ruleForm,"categoryId",t)},expression:"ruleForm.categoryId"}},e._l(e.options,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{prop:"content"}},[r("div",{attrs:{id:"vditor"}})]),r("b-taginput",{ref:"tagInput",staticClass:"my-3",attrs:{maxlength:"5",maxtags:"5",ellipsis:"",type:"is-info",placeholder:"请输入主题标签，限制为 5 个字符和 5 个标签"},model:{value:e.ruleForm.tags,callback:function(t){e.$set(e.ruleForm,"tags",t)},expression:"ruleForm.tags"}}),r("div",{staticClass:"cover-upload"},[r("div",{staticClass:"cover_upload_selectType"},[r("el-radio-group",{model:{value:e.coverType,callback:function(t){e.coverType=t},expression:"coverType"}},[r("el-radio-button",{attrs:{label:"默认"}}),r("el-radio-button",{attrs:{label:"外链"}})],1)],1),"默认"===e.coverType?r("div",{staticClass:"cover_up"},[r("el-upload",{attrs:{drag:"",action:"#","http-request":e.coverUpload,"file-list":e.fileList,disabled:""!==e.ruleForm.cover}},[r("i",{staticClass:"el-icon-upload"}),r("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),r("em",[e._v("点击上传")])])]),r("div",{staticClass:"cover_up_preview"},[r("el-image",{staticStyle:{width:"100%",height:"180px"},attrs:{src:e.ruleForm.cover}})],1)],1):r("div",[r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.cover,callback:function(t){e.$set(e.ruleForm,"cover",t)},expression:"ruleForm.cover"}}),r("el-image",{staticClass:"cover_in",staticStyle:{width:"360px",height:"180px"},attrs:{src:e.ruleForm.cover}})],1)]),r("div",{staticClass:"type"},[r("el-radio",{attrs:{label:"1"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[e._v("原创")]),r("el-radio",{attrs:{label:"0"},model:{value:e.ruleForm.type,callback:function(t){e.$set(e.ruleForm,"type",t)},expression:"ruleForm.type"}},[e._v("转载")]),r("el-input",{directives:[{name:"show",rawName:"v-show",value:e.showUrl,expression:"showUrl"}],ref:"type",staticStyle:{"margin-top":"2px"},attrs:{placeholder:"请输入内容"},model:{value:e.ruleForm.articleUrl,callback:function(t){e.$set(e.ruleForm,"articleUrl",t)},expression:"ruleForm.articleUrl"}})],1),r("el-form-item",{staticClass:"post_button"},[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm",!1)}}},[e._v("发布 ")]),r("el-button",{attrs:{type:"success"},on:{click:function(t){return e.submitForm("ruleForm",!0)}}},[e._v("草稿 ")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)])],1)])},a=[],l=(r("a9e3"),r("2423")),n=r("0817"),i={name:"Update",data:function(){return{}},mixins:[n["a"]],props:{articleId:{required:!0,type:Number}},created:function(){this.getCategory()},mounted:function(){var e=this;this.$nextTick((function(){e.getUpdateArticle()}))},methods:{getUpdateArticle:function(){var e=this;Object(l["h"])(this.articleId).then((function(t){e.ruleForm=t.data,e.renderMarkdown(t.data.content)}))},handle:function(e){var t=this;Object(l["j"])(e).then((function(e){200===e.code&&(t.$message({type:"success",message:"发布成功!"}),t.resetForm("ruleForm"))}))}}},s=i,c=(r("7801"),r("2877")),u=Object(c["a"])(s,o,a,!1,null,null,null);t["default"]=u.exports},bb3c:function(e,t,r){}}]);