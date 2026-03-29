<!-- src/components/layout/MobileHeaderLink.vue -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import type { HeaderItem } from '../../types/menu'

const props = defineProps<{ item: HeaderItem }>()
const route = useRoute()
const submenuOpen = ref(false)

function isHashLink(href: string): boolean {
  return href.includes('#')
}

function getHash(href: string): string {
  const [, hash = ''] = href.split('#')
  return hash
}

function isHomeLink(href: string): boolean {
  return href === '/'
}

function isGroupActive(item: HeaderItem): boolean {
  if (isHomeLink(item.href)) {
    return route.path === '/' && !route.hash
  }

  if (isHashLink(item.href)) {
    return route.path === '/' && route.hash === `#${getHash(item.href)}`
  }

  return route.fullPath === item.href || route.path === item.href
}
</script>

<template>
  <div class="relative block w-full">
    <router-link
      :to="item.href"
      active-class=""
      exact-active-class=""
      class="flex items-center justify-between w-full py-2 px-3 text-black rounded-md dark:text-grey dark:text-opacity-70 focus:outline-none"
      :class="{ 'bg-primary !text-white dark:!text-white': isGroupActive(item) }"
      @click="item.submenu ? (submenuOpen = !submenuOpen) : undefined"
    >
      {{ item.label }}
      <svg
        v-if="item.submenu"
        xmlns="http://www.w3.org/2000/svg"
        width="1.5em"
        height="1.5em"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m7 10l5 5l5-5"
        />
      </svg>
    </router-link>

    <div v-if="submenuOpen && item.submenu" class="bg-white p-2 w-full">
      <router-link
        v-for="(subItem, index) in item.submenu"
        :key="index"
        :to="subItem.href"
        active-class=""
        exact-active-class=""
        class="block py-2 text-gray-500 hover:bg-gray-200"
      >
        {{ subItem.label }}
      </router-link>
    </div>
  </div>
</template>