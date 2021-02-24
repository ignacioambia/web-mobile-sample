<template>
  <div class="order-progress">
      <div class="order-number">
          Order #{{order.id}}
      </div>
      <div class="person-in-charge mb-1">
          Bryan Williams
      </div>
      <custom-progress-bar :progress="80"/>
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
    background-color: #10161C;
    border-radius: 8px;
    padding : 10px;
    min-width: 170px;
    box-shadow: inset -2px -2px 4px 0 #040B11, inset 2px 2px 4px 0 #1C232A, 0 13px 9px 0 #000000;

    .person-in-charge{
        color: $secondary-gray;
        font-size: 12px;
        font-weight: 300;
        letter-spacing: 0;
        line-height: 16px;
    }
}
</style>