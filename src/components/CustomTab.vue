<template>
  <div 
        class="custom-tab" 
        :class="{'active' : active }">
      <slot></slot>
  </div>
</template>

<script>
export default {
    props : {
        active : {
            type : Boolean,
            default : false
        }
    }

}
</script>

<style scoped lang="scss">
.custom-tab{

    cursor : pointer;

    &.active{
        color : $primary-yellow;
        border-bottom: 1px solid;
    }
}

</style>