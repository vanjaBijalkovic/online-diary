    
<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" :to="{name: 'diaries'}">Diaries</router-link>
    <div class="navbar-nav w-100">
      <router-link class="nav-item nav-link" :to="{name: 'add-diary'}">Add Diary</router-link>
      <router-link
        :to="{name: 'login'}"
        class="nav-link loat-right"
        active-class="active"
      >Login</router-link>
      <router-link
        :to="{name: 'register'}"
        class="nav-link float-right"
        active-class="active"
      >Register</router-link>
      <diary-search class="ml-auto"/>
    </div>
  </nav>
</template>

<script>
import DiarySearch from "../shared/diary-search.vue";
export default {
  name: "NavBar",
  components: {
    DiarySearch
  }
};
</script>