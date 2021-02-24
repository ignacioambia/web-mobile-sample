import Vue from 'vue'
import VueRouter from 'vue-router'


import Tasks from '../views/Tasks/Tasks';

import AllTasks from '../views/Tasks/children/AllTasks';
import CompletedTasks from '../views/Tasks/children/CompletedTasks';
import InProgressTasks from '../views/Tasks/children/InProgressTasks';
import StartedTasks from '../views/Tasks/children/StartedTasks';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tasks',
    component: Tasks,
    redirect : 'all-tasks',
    children : [
      {
        path : 'all-tasks',
        name : 'All',
        component : AllTasks
      },
      {
        path : 'in-progress',
        name : 'In Progress',
        component : InProgressTasks
      },
      {
        path : 'started',
        name : 'Started',
        component : StartedTasks
      },
      {
        path : 'completed',
        name : 'Completed',
        component : CompletedTasks
      },

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
