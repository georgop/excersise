<template>
  <div class="searchbar">
    <input v-model="searchQuery" type="text" placeholder="Search by name" />
    <img src="../assets/search.png" class="searchbar-icon search-icon-normal" alt="searchbar"/>
    <img src="../assets/search-hover.png" class="searchbar-icon search-icon-hover" alt="search-hovered"/>
  </div>
</template>

<script setup>
const searchQuery = defineModel()
</script>

<style scoped lang="scss">
.searchbar {
  width: 100%;
  border: 1px solid #e7e7e7;
  padding: 15px 35px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

.searchbar:hover{
  border: 1px solid #767575;
}

.searchbar-icon {
  position: relative;
  width: 24px; /* Adjust the width as per your icon */
  height: 24px; /* Adjust the height as per your icon */
}

.search-icon-hover {
  display: none;
}

.searchbar:hover .search-icon-normal {
  display: none;

}

.searchbar:hover .search-icon-hover {
  display: block;
}

input[type="text"],
input[type="search"],
input[type="number"],
input[type="email"],
input[type="password"],
textarea {
  all: unset;
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .searchbar{
    font-size:12px;
  }
}
</style>
