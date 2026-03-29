<script setup lang="ts">
import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';
import ScrollToTop from '@/components/common/ScrollToTop.vue';
import { useTheme } from '@/composables/useTheme';

// init theme
useTheme();
</script>

<template>
  <div>
    <AppHeader />
    <router-view />
    <AppFooter />
    <ScrollToTop />
  </div>
</template>
