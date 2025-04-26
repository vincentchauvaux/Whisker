<template>
  <div class="w-full">
    <label
      v-if="label"
      :for="id"
      class="block text-sm font-medium text-primary-dark font-sans mb-1"
    >
      {{ label }}
      <span v-if="required" class="text-secondary">*</span>
    </label>
    <div class="relative">
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :required="required"
        :class="[
          'w-full rounded-lg border border-gray-200 px-4 py-2 text-sm text-primary-dark font-sans',
          'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
          'disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed',
          error && 'border-secondary focus:ring-secondary',
          icon && 'pl-10',
        ]"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <div
        v-if="icon"
        class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
      >
        <slot name="icon" />
      </div>
    </div>
    <p v-if="error" class="mt-1 text-sm text-secondary font-sans">
      {{ error }}
    </p>
    <p v-if="help" class="mt-1 text-sm text-gray-500 font-sans">
      {{ help }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  modelValue: {
    type: [String, Number],
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  error: {
    type: String,
    default: "",
  },
  help: {
    type: String,
    default: "",
  },
  icon: {
    type: Boolean,
    default: false,
  },
});

defineEmits(["update:modelValue"]);
</script>
