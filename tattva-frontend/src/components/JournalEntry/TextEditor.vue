<template>
  <div class="textEditor">
    <textarea
      v-model="text"
      class="w-full p-4 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Write your journal entry here..."
      rows="10"
    >
    </textarea>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
}
</script>

<style scoped>
.text-editor {
  width: 100%;
  margin: 10px 0;
}
</style>
