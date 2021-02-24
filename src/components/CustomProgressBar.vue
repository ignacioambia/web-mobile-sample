<template>
  <div class="custom-progress-bar">
      <div class="progress-legend">
          <div>
              Progress
          </div>
          <div>
              {{progress}}%
          </div>
      </div>
      <div class="bar">
         <div class="progress" :style="{'min-width' : progress + '%'}">

         </div>
      </div>
  </div>
</template>

<script>
export default {
    props : {
        progress : {
            type : Number,
            required : true
        }
    }
}
</script>

<style scoped lang="scss">
.custom-progress-bar{
    color : $secondary-gray;

    .progress-legend{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
    }

    .bar{
        background-color: #494C50;
        min-height: 1px;
        position: relative;

        .progress{
            position: absolute;
            min-height: 100%;
            background-color: $primary-yellow ;
        }
    }

}

</style>