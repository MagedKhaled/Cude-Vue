import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { createApp } from 'vue'
import App from './App.vue'
import ProductRow from './components/ProductRow.vue'
import ProductEdit from './components/ProductEdit.vue'
import ProductAdd from './components/AddProduct.vue'
import ContentTable from './components/ContentTable.vue'
const app = createApp(App)
app.component('ProductRow',ProductRow)
app.component('ProductEdit',ProductEdit)
app.component('ProductAdd',ProductAdd)
app.component('ContentTable',ContentTable)
app.mount('#app')