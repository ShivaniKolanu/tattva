<template>
  <div class="w-full m-10">
    <textarea
      v-model="text"
      class="w-full p-4 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Write your journal entry here..."
      rows="10"
    >
    </textarea>
  </div>
</template>

<script setup>
import { useTextEditor } from "@/components/JournalEntry/TextEditor";

const { text } = useTextEditor();
</script>


<style scoped>
</style>
