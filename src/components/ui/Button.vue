<template>
  <button
    :type="type"
    :disabled="disabled"
    :class="[
      'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200',
      variant === 'primary' && 'bg-primary text-white hover:bg-primary-dark',
      variant === 'secondary' &&
        'bg-secondary text-white hover:bg-secondary-dark',
      variant === 'tertiary' &&
        'bg-tertiary text-primary hover:bg-tertiary-dark',
      variant === 'outline' &&
        'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      size === 'sm' && 'px-4 py-2 text-xs',
      size === 'lg' && 'px-6 py-4 text-base',
      disabled && 'opacity-70 cursor-not-allowed',
      fullWidth && 'w-full',
    ]"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: "button",
  },
  variant: {
    type: String,
    default: "primary",
    validator: (value) =>
      ["primary", "secondary", "tertiary", "outline"].includes(value),
  },
  size: {
    type: String,
    default: "md",
    validator: (value) => ["sm", "md", "lg"].includes(value),
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["click"]);
</script>
