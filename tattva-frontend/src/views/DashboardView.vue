<template>
  <div class="dashboard max-w-4xl mx-auto p-6">
    <h1 class="text-3xl font-semibold mb-8">Journal Dashboard</h1>
    <TextEditor />
    <ImageUploader />
  </div>
</template>

<script>
import TextEditor from '@/components/JournalEntry/TextEditor.vue' // Correct import
import ImageUploader from '@/components/JournalEntry/ImageUploader.vue' // Correct import

export default {
  components: {
    TextEditor, // Register TextEditor component
    ImageUploader, // Register ImageUploader component
  },
}
</script>

<style scoped>
.dashboard {
  text-align: center;
  padding: 20px;
}
</style>
