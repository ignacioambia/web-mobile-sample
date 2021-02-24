<template>
  <div>
      <div class="progress-legend">
          <div>
              Progress
          </div>
          <div>
              {{progress}}%
          </div>
      </div>
      <div>
          bar {{progress}}
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
.progress-legend{
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color : $secondary-gray;
}
</style>