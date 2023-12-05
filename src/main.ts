import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import ProductRow from './components/ProductRow.vue'
import ProductEdit from './components/Edit.vue'
import ProductAdd from './components/AddProduct.vue'
const app = createApp(App)
app.component('ProductRow',ProductRow)
app.component('ProductEdit',ProductEdit)
app.component('ProductAdd',ProductAdd)
app.mount('#app')