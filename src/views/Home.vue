<template>
  <div class="mb-4">
    <b-row class="mt-2">
      <b-col md="2" id="quickMenu" class="small">
        <h5>To do</h5>
        <p>
          o-auth login <br/>
          plug this to firestore <br/>
          Think of what should go here.
        </p>
      </b-col>
      <b-col md="5" id="editor" class="mb-5">
        <div class="ml-2 mb-3">
          <b-button variant="outline-secondary" size="sm" class="mx-1"> <b-icon icon="play-fill"></b-icon> Run </b-button>
          <b-button variant="outline-secondary" size="sm" class="mx-1"> <b-icon icon="server"></b-icon> Save </b-button>
        </div>
        <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers />
      </b-col>
      <b-col md="5" id="output" class="small">
        <span v-html="code"></span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';

import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; 

export default {
  name: 'Home',
  components: {
    PrismEditor
  },
  data: () => ({ 
    code: `<div class="card">
  <div class="card-header">Featured</div>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">
      With supporting text below as a natural lead-in to additional content.
    </p>
    <button class="btn btn-sm btn-primary" onclick="alert('hi')">Click Me</button>
  </div>
</div>`
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); //returns html
    }
  }
};
</script>

<style scoped>
  #editor {
    border-left: solid thin #dfdfdf;
    border-right: solid thin #dfdfdf;
    overflow-y: hidden;
    padding: 0;
  }
  #output, #quickMenu {
    height: 85vh;
    overflow-y: scroll;
  }
  .my-editor {
    background: #f7f7f7;
    color: #ccc;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: .75rem;
    line-height: 1.5;
    padding: 5px;
    overflow-y: scroll;
    height: 80vh;
  } 
  .prism-editor__textarea:focus {
    outline: none;
  }
</style>