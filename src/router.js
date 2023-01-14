import Vue from "vue"
import VueRouter from "vue-router"
import Index from "./components/index.vue"
import Calendar from "./components/calendar.vue"

Vue.use(VueRouter)
// 2. Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Index },
  { path: '/calendar', component: Calendar },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  routes, // short for `routes: routes`
  mode: "history"
})

export default router