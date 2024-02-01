<script setup>
import Home from "./pages/Home.vue";
import Header from "./components/Header.vue";
</script>

<template>
	<div class="bg-white">
		<Header />
		<router-view />
	</div>
</template>

<style scoped></style>
