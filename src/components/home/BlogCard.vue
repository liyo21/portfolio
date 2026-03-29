<!-- src/components/home/BlogCard.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { format } from 'date-fns'
import { es } from 'date-fns/locale'
import type { Blog } from '@/types/blog'
import { getImgPath } from '@/utils/image'

const props = defineProps<{ blog: Blog }>()

const coverImage = computed(() => props.blog.coverImage || '')
const blogTitle = computed(() => props.blog.title || 'Artículo del blog')
const formattedDate = computed(() =>
  format(new Date(props.blog.date), 'dd MMM yyyy', { locale: es })
)
</script>

<template>
  <article class="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-service transition hover:-translate-y-1 dark:bg-darkmode">
    <div class="relative overflow-hidden">
      <router-link :to="`/blog/${blog.slug}`" :aria-label="blogTitle" class="block">
        <img
          :src="getImgPath(coverImage)"
          :alt="blogTitle"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          style="width: 100%; height: auto"
        />
      </router-link>

      <div class="absolute left-4 top-4 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg">
        {{ blog.category || 'Oncología' }}
      </div>
    </div>

    <div class="flex flex-1 flex-col gap-4 p-6">
      <div class="space-y-2">
        <h3>
          <router-link
            :to="`/blog/${blog.slug}`"
            class="inline-block text-[22px] font-semibold leading-tight text-black transition hover:text-primary dark:text-white dark:hover:text-primary"
          >
            {{ blog.title }}
          </router-link>
        </h3>

        <p class="text-base leading-7 text-grey dark:text-white/60">
          {{ blog.excerpt }}
        </p>
      </div>

      <div class="mt-auto flex items-center justify-between gap-4 pt-2">
        <span class="text-sm font-semibold leading-loose text-grey dark:text-white/50">
          {{ formattedDate }}
        </span>

        <router-link
          :to="`/blog/${blog.slug}`"
          class="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-blue-700"
        >
          Leer artículo
          <span aria-hidden="true">→</span>
        </router-link>
      </div>
    </div>
  </article>
</template>