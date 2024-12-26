<template>
  <div
    class="buttonsComponent__wrapper"
    :style="{ backgroundColor: background, color: color }"
    @click="$emit('handleButtonClick')"
  >
    <span class="source-sans-pro"> {{ text }}</span>
  </div>
</template>

<script setup lang="ts">
export interface ButtonsProps {
  text: string;
  background: string;
  color: string;
  link?: string;
}

const props = withDefaults(defineProps<ButtonsProps>(), {
  background: '#F2902F',
  color: '#522222',
  label: 'Button',
});

const emit = defineEmits(['handleButtonClick']);
</script>

<style lang="scss" scoped>
@use '@/assets/scss/colors.scss' as colors;
.buttonsComponent {
  &__wrapper {
    cursor: pointer;
    display: inline-flex;
    padding: 15px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 60px;
    transition: all 0.5s ease;
    background-color: transparent;

    span {
      font-size: 1.2rem;
      font-weight: 700;
      text-transform: uppercase;
    }

    &:hover {
      background-color: colors.$accent-dark !important;
      color: colors.$white !important;
    }
  }
}
</style>
