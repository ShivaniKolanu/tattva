import { ref } from "vue";

export function useTextEditor() {
  const text = ref("");
  return { text };
}
