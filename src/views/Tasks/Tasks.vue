<template>
    <div>
        <app-header></app-header>
        <div>

          <div class="d-flex justify-content-end mt-2">
            <custom-button>
              Create
              <mdicon size="20"  name="plus" />
            </custom-button>
          </div>  
        </div>

        <!-- tabs in task section -->
        <div class="d-flex justify-content-between mt-2 mb-2">
            <custom-tab
              v-for="tab in tasksTabs" 
              @click.native="$router.push({ name : tab.name}).catch(e=>{})"
              :active="tab.name == $route.name"
              :key="tab.name">
                {{tab.name}}
            </custom-tab>
        </div>




        <div>
          <router-view></router-view>
        </div>
    </div>


</template>

<script>

    import AppHeader from '@/components/AppHeader'
    import CustomButton from '@/components/CustomButton'
    import CustomTab from '@/components/CustomTab'
    
    export default {
      name: 'App',
      components: {
          AppHeader, CustomButton,CustomTab
      },

      computed : {
        tasksTabs(){
          return this.$router.options.routes
          .find(r=>r.name == 'Tasks').children;       
        }
      },

      methods : {
        yolo(){
          console.log('hola mundo')
        }
      },


      mounted(){
      }
    
    }
    </script>

<style>

</style>