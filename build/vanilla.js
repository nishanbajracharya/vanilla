#!/usr/bin/env node
require("source-map-support/register"),module.exports=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){const o=n(2),r=n(3),i=n(4).argv,s=n(5),l=["output","jsBody","cssBody","project","htmlBody","htmlTitle"],c={jsBody:"",output:"",cssBody:"",project:"vanilla",htmlTitle:"Document",htmlBody:"<p>Vanilla Boilerplate</p>"};const u=function(e=i,t=l,n=c){const r={};for(let o=0;o<t.length;o++){const s=t[o];"project"!==props?r[s]=e[s]||n[s]:r[s]=e[s]||i._[0]||n[s]}return r.output||(r.output=process.cwd()+"/"+r.project),r.output=o.resolve(r.output),r}();s(u,function(){console.log(r.green("Successfully created project!")),console.log(u.output)},function(e){console.log(r.red("Couldn't create project.")),console.log(e.message)})},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("chalk")},function(e,t){e.exports=require("yargs")},function(e,t,n){const o=n(6),r=n(7);e.exports=function(e,t,n){const i=r.html({title:e.htmlTitle,body:e.htmlBody}),s=r.css({body:e.cssBody}),l=r.js({body:e.jsBody}),c=e.output;try{o.mkdirSync(c),o.writeFileSync(c+"/index.html",i),o.writeFileSync(c+"/.editorconfig",r.source.EDITOR_CONFIG),o.mkdirSync(c+"/css"),o.writeFileSync(c+"/css/style.css",s),o.writeFileSync(c+"/css/reset.css",r.source.RESET),o.mkdirSync(c+"/js"),o.writeFileSync(c+"/js/script.js",l),t&&t()}catch(e){n&&n(e)}}},function(e,t){e.exports=require("fs")},function(e,t,n){const o=n(8),r='<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <title>{{title}}</title>\n  <link rel="stylesheet" href="css/reset.css">\n  <link rel="stylesheet" href="css/style.css">\n</head>\n<body>\n  {{{body}}}\n  <script src="js/script.js"><\/script>\n</body>\n</html>\n',i="/* Base CSS File */\n{{{body}}}\n",s="// Base JS File\n{{{body}}}\n",l=o.compile(r),c=o.compile(i),u=o.compile(s);e.exports={source:{HTML:r,CSS:i,JS:s,RESET:"/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n.clearfix::after {\n  content: '';\n  clear: both;\n  display: table;\n}\n",EDITOR_CONFIG:"root = true\n\n[*]\nindent_style = space\nindent_size = 2\ncharset = utf-8\ntrim_trailing_whitespace = false\ninsert_final_newline = true\n"},html:l,css:c,js:u}},function(e,t){e.exports=require("handlebars")}]);