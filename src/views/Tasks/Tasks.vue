<template>
    <div>
        <app-header></app-header>
        <div>

          <div class="d-flex justify-content-end mt-4 mb-4">
            <custom-button>
              Create
              <mdicon name="plus" />
            </custom-button>
          </div>  
        </div>



        <div>
          <router-view></router-view>
        </div>
    </div>


</template>

<script>

    import AppHeader from '@/components/AppHeader'
    import CustomButton from '@/components/CustomButton'
    
    export default {
      name: 'App',
      components: {
          AppHeader, CustomButton
      }
    
    }
    </script>

<style>

</style>