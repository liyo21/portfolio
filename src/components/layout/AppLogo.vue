<!-- src/components/layout/AppLogo.vue -->
<script setup lang="ts">
import { getImgPath } from '@/utils/image'
</script>

<template>
  <router-link to="/">
    <img
      :src="getImgPath('/images/logo/logo.svg')"
      alt="logo"
      width="160"
      height="50"
      class="dark:hidden"
    />
    <img
      :src="getImgPath('/images/logo/logo-white.svg')"
      alt="logo"
      width="160"
      height="50"
      class="hidden dark:block"
    />
  </router-link>
</template>