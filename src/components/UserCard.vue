<template>
  <div class="user-card-container">
    <div class="user-card-container-preview" @click="onClickUserCard">
      <div class="user-card-container-preview-name">{{props.user.name}}</div>
      <div class="user-card-container-preview-icon">{{props.isExpanded?"-":"+"}}</div>
    </div>
    <UserCardExpanded :user="props.user" :isExpanded="props.isExpanded"/>
  </div>
</template>

<script setup lang="ts">
import {User} from '../models/User';
import UserCardExpanded from "./UserCardExpanded.vue";

const props = defineProps<{
  user: User,
  isExpanded: boolean
}>()

const emits = defineEmits(['update:userCard']);
const onClickUserCard = () => {
  emits('update:userCard', props.user);
}

</script>

<style scoped lang="scss">
.user-card-container {
  margin-top: 5px;
  cursor: pointer;

  &-preview {
    height: 56px;
    padding: 15px 35px;
    border: 1px solid #e7e7e7;
    display:flex;
    justify-content: space-between;
  }

  &-expanded {
    height: 100%;
    padding: 15px 35px;
    border: 1px solid #e7e7e7;
    border-top: 0;
    display: flex;
    align-items: center;

    &-avatar {
      &-image {
        width: 85px;
        height: 85px;
        border-radius: 50%;
      }
    }

    &-details {
      margin-left: 25px;
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

@media only screen and (max-width: 600px) {
  .user-card-container-preview-name{
    font-size:12px;
  }
}
</style>