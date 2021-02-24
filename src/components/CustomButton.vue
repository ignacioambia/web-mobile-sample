<template>
    <button class="custom-button">
        <slot></slot>
    </button>
</template>

<script>

</script>


<style scoped lang="scss">
.custom-button{
    background-color: transparent;
    border: 0px;
    padding: 3px;
    text-align: center;
    color: $primary-yellow;
    text-transform: uppercase;
    cursor : pointer;
    font-family: inherit;
    font-size: 16px;
}
</style>