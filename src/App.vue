<template>
  <div class="app">
    <Sidebar/>
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import Sidebar from './components/Sidebar.vue'


</script>

<style lang="scss">
  $primary: #0be881;
  $primary-alt: #05c46b;
  $gray: #808e9b;
  $dark: #485460;
  $dark-alt: #1e272e;
  $light: #f2f5f8;
  $sidebar-width: 300px;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: $dark-alt;
  font-family: "Comfortaa", cursive;
}

.app {
  background-color: $primary-alt;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
	display: flex;
	main {
		flex: 1 1 0;
		padding: 2rem;
		@media (max-width: 1024px) {
			padding-left: 6rem;
		}
	}
}
</style>
