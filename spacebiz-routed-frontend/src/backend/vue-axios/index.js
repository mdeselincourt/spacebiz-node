// As per Pawel's tutorial

import Vue from 'vue'
import VueAxios from 'vue-axios'

import axios from './axios' // Fu** knows what this all does

Vue.use(VueAxios, axios)

export default axios // Pawel left this line out of his stupid tutorial
