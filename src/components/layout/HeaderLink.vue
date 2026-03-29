<!-- src/components/layout/HeaderLink.vue -->
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

function isActive(href: string): boolean {
  if (isHomeLink(href)) {
    return route.path === '/' && !route.hash
  }

  if (isHashLink(href)) {
    return route.path === '/' && route.hash === `#${getHash(href)}`
  }

  return route.fullPath === href || route.path === href
}

function isGroupActive(item: HeaderItem): boolean {
  if (isActive(item.href)) return true
  if (item.submenu) {
    return item.submenu.some((sub) => route.fullPath.startsWith(sub.href) || route.path.startsWith(sub.href))
  }
  return false
}
</script>

<template>
  <div
    class="relative"
    @mouseenter="submenuOpen = true"
    @mouseleave="submenuOpen = false"
  >
    <router-link
      :to="item.href"
      active-class=""
      exact-active-class=""
      class="text-base flex py-2 font-normal hover:text-primary dark:hover:text-primary text-black dark:text-white"
      :class="{ 'text-primary dark:!text-primary': isGroupActive(item) }"
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

    <div
      v-if="submenuOpen && item.submenu"
      class="absolute py-2 left-0 mt-0.5 top-8 w-60 bg-white dark:bg-darklight shadow-lg dark:shadow-dark-md rounded-lg"
      data-aos="fade-up"
      data-aos-duration="400"
    >
      <router-link
        v-for="(subItem, index) in item.submenu"
        :key="index"
        :to="subItem.href"
        active-class=""
        exact-active-class=""
        class="block px-4 py-2 text-[15px]"
        :class="
          isActive(subItem.href)
            ? 'bg-primary text-white'
            : 'text-black hover:bg-gray-200 dark:hover:bg-midnight_text dark:text-white hover:text-dark dark:hover:text-white'
        "
      >
        {{ subItem.label }}
      </router-link>
    </div>
  </div>
</template>