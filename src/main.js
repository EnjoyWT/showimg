import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import Vue3DraggableResizable from 'vue3-draggable-resizable'
//default styles
import 'vue3-draggable-resizable/dist/Vue3DraggableResizable.css'


createApp(App)
  .use(Vue3DraggableResizable)
  .mount('#app')
