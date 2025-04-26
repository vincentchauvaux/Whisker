<template>
  <div
    :class="[
      'bg-white rounded-xl shadow-soft overflow-hidden transition-all duration-200',
      hover && 'hover:shadow-lg',
      padding === 'none' && 'p-0',
      padding === 'sm' && 'p-4',
      padding === 'md' && 'p-6',
      padding === 'lg' && 'p-8',
    ]"
  >
    <div v-if="$slots.header" class="border-b border-gray-100 p-4">
      <slot name="header" />
    </div>
    <div :class="[padding === 'none' ? 'p-0' : 'p-4']">
      <slot />
    </div>
    <div v-if="$slots.footer" class="border-t border-gray-100 p-4">
      <slot name="footer" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  hover: {
    type: Boolean,
    default: true,
  },
  padding: {
    type: String,
    default: "md",
    validator: (value) => ["none", "sm", "md", "lg"].includes(value),
  },
});
</script>
