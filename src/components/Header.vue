<template>
  <div class="header-container">
    <div class="header-container-top"/>
    <div class="header-container-middle d-flex flex-column flex-md-row justify-content-md-start align-items-center px-md-5">
      <img src="../assets/logo.png" alt="company-logo" class="pt-2"/>
      <span class="px-4 header-container-middle-text">{{props.label}}</span>
    </div>
    <div class="header-container-bottom"></div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  label:string;
}>()

</script>

<style scoped lang="scss">
.header-container{

  &-top{
    width:100%;
    height:35px;
    background-color:#00a3e3;
  }

  &-middle{
    color:#b2b2ba;
    height:100px;
    &-company-logo{
      height:50px;
    }
    &-text{
      font-family: 'Roboto', sans-serif;
      font-weight:300;
      font-size:32px;
    }
  }

  &-bottom{
    background-color:#e7e7e7;
    height:8px;
  }
}
</style>
