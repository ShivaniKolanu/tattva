<template>
  <div class="image-uploader">
    <input
      type="file"
      @change="handleImageUpload"
      accept="image/*"
      class="mb-2 p-2 border border-gray-300 rounded-md"
    />
    <div v-if="image" class="image-preview flex items-center space-x-4 mt-3">
      <img :src="image" alt="Preview" class="w-32 h-32 object-cover rounded-md" />
      <button
        @click="removeImage"
        class="text-white bg-red-500 hover:bg-red-600 rounded-md px-4 py-2"
      >
        Remove
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
    }
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0]
      if (file && file.type.startsWith('image/')) {
        this.image = URL.createObjectURL(file)
      }
    },
    removeImage() {
      this.image = null
    },
  },
}
</script>

<style scoped>
.image-uploader {
  margin: 10px 0;
}
</style>
