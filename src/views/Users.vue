<template>
  <div>
    <Header label="Team Members"/>
    <div class="px-md-5 px-5">
      <div class="pt-5 d-flex flex-column justify-content-between align-items-center flex-md-row">
        <div class="w-75">
          <Searchbar v-model="searchQuery"/>
        </div>
        <div v-if="isLoading"><Loading :isLoading="true"/></div>
        <div v-else class="fs-2">{{ users.length }} People</div>
      </div>
      <div class="pt-3">
        <div v-if="error">Error occured...</div>
        <div v-for="(user, index) in filteredUsers">
          <UserCard :user="user" :isExpanded="index === expandedUserIndex" @update:userCard="expandUserCard(index)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "../components/Header.vue";
import { useGetUsers } from "../composables/useGetUsers.ts";
import { computed, onMounted, ref } from "vue";
import Searchbar from "../components/Searchbar.vue";
import Loading from "../components/Loading.vue";
import UserCard from "../components/UserCard.vue";

const { getUsers, users, isLoading, error } = useGetUsers();
const searchQuery = ref<string>("");

// Added 3 seconds timeout so we can display the loading feature.
onMounted(() => {
  setTimeout(() => getUsers(), 3000);
});

const filteredUsers = computed(() => {
  return users.value.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const expandedUserIndex = ref<number | null>(null);

const expandUserCard = (index: number) => {
  if (index === expandedUserIndex.value) {
    expandedUserIndex.value = null;
  } else {
    expandedUserIndex.value = index;
  }
};
</script>

<style scoped>
</style>
