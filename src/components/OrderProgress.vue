<template>
  <div class="order-progress">
      <div class="order-number" style="font-family: 'Avenir Book';">
          Order #{{order.id}}
      </div>
      <div class="person-in-charge mb-1 subheader">
          {{order.inCharge}}
      </div>
      <custom-progress-bar :progress="order.progress"/>
      <div  class="d-flex justify-content-end font-size-10 secondary-gray-txt subheader">
          1 day left
      </div>
  </div>
</template>

<script>
import CustomProgressBar from '@/components/CustomProgressBar'

export default {
    components : {CustomProgressBar},
    props : {
        order : {
            type : Object,
            required : true
        }
    }
}
</script>

<style scoped lang="scss">
.order-progress{
    background-color: $black-card;
    border-radius: 8px;
    padding : 10px;
    min-width: 170px;
    box-shadow: inset -2px -2px 4px 0 $solid-black, inset 2px 2px 4px 0 $secondary-black, 0 13px 9px 0 black;

    .person-in-charge{
        font-size: 12px;
        line-height: 16px;
    }
}
</style>