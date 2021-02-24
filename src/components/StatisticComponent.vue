<template>
              <div >
                <div class="d-flex">

                <div :class="statistic.iconClass">
                    <mdicon  :name="statistic.icon" />
                </div>
                <div>
                    <div class="header">
                        {{statistic.value}}
                    </div>

                    <div class="subheader">
                        {{statistic.key}}
                    </div>
                </div>
                </div>
                
            </div>
</template>

<script>
export default {
    props : {
        info : {
            type : Object,
            required : true
        }
    }

}
</script>

<style>

</style>