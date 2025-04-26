<template>
  <component
    :is="tag"
    :class="[
      'font-serif text-primary tracking-tight',
      size === 'xs' && 'text-lg',
      size === 'sm' && 'text-xl',
      size === 'md' && 'text-2xl',
      size === 'lg' && 'text-3xl',
      size === 'xl' && 'text-4xl',
      size === '2xl' && 'text-5xl',
      size === '3xl' && 'text-6xl',
      weight === 'normal' && 'font-normal',
      weight === 'medium' && 'font-medium',
      weight === 'semibold' && 'font-semibold',
      weight === 'bold' && 'font-bold',
    ]"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  tag: {
    type: String,
    default: "h2",
    validator: (value) => ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: (value) =>
      ["xs", "sm", "md", "lg", "xl", "2xl", "3xl"].includes(value),
  },
  weight: {
    type: String,
    default: "bold",
    validator: (value) =>
      ["normal", "medium", "semibold", "bold"].includes(value),
  },
});
</script>
