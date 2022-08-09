<template>
    <div>
      <input v-model="diary.title">
      <input v-model="diary.contents">
    </div>
</template>

<script setup>
defineProps({
  diary: {
  },
  mode: 'new'
})
</script>

<style>
</style>