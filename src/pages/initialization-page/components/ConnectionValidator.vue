<template>
  <div class="p-3 cursor-pointer" v-tooltip="t('testConnection')" @click="$emit('click')">
    <i class="pi" :class="{
      'pi-sync': state === 'idle',
      'pi-spin': state === 'loading',
      'pi-times': state === 'error',
      'text-red-600': state === 'error'
    }">
    </i>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { messages } from '../i18n/messages';
const { t } = useI18n({
  messages
});

defineEmits(["click"])
defineProps({
  state: {
    type: String as PropType<"loading" | "idle" | "error" | "success">,
    default: "idle"
  }
})

</script>