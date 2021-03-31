<template>
  <div class="mb-4">

    <b-row class="mt-2" v-if="user">
      <b-col xl="2" cols="3" id="quickMenu" class="small">
        <h5>Column Title</h5>
        <div class="my-3">
          <b-button variant="outline-secondary" size="sm" class="mr-2 my-1" type="submit" form="code" > <b-icon icon="play-fill"></b-icon> Run </b-button>
          <b-button variant="outline-secondary" size="sm" class="mr-2 my-1" type="submit" form="code" > <b-icon icon="server"></b-icon> Save </b-button>
        </div>
        <p>To do: Make this column a drawer or get rid of it.</p>
      </b-col>
      <b-col xl="5" cols="9" id="editor" class="mb-5">
        <b-card>
          <b-card-text>
            <b-form @submit="onSubmit" id="code">
              <prism-editor class="my-editor" v-model="form.code" :highlight="highlighter" line-numbers /> 
            </b-form>
          </b-card-text>
        </b-card>
      </b-col>
      <b-col xl="5" id="output" class="small">
        <b-card>
          <b-card-text>
            <span v-html="form.code"></span>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>

    <b-row v-if="!user">
      <b-col>
        <p>Log into your account to get started.</p>
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
    form: {
      code: `<p class="display-4">Welcome to Stream State <br> <span class="lead">Write code in Scala, Python, and HTML </span> </p>`,
      created_by: '',
      created: ''
    }
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js);
    },
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  },
  props: ['user']
};
</script>

<style scoped>
  #editor {
    overflow-y: hidden;
  }
  #output .card {
    height: 85vh;
    overflow-y: scroll;
  }
  #editor .card {
    height: 85vh;
    overflow-y: scroll;
    background: #f7f7f7;
  }
  .my-editor {
    background: #f7f7f7;
    color: #ccc;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: .7rem;
    line-height: 1.5;
    overflow-y: scroll;
  } 
  .prism-editor__textarea:focus {
    outline: none;
  }
  .hidden {
    visibility: hidden;
  }
</style>