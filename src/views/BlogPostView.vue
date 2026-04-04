<!-- src/views/BlogPostView.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { projectsPosts, getProjectBySlug } from '@/data/blog'
import { getImgPath } from '@/utils/image'

const route = useRoute()
const router = useRouter()

const post = computed(() => {
  const slug = String(route.params.slug || '')
  return getProjectBySlug(slug)
})

const relatedPosts = computed(() => {
  if (!post.value) return []
  return projectsPosts.filter((item) => item.slug !== post.value?.slug).slice(0, 3)
})

const formattedDate = computed(() => {
  if (!post.value) return ''
  const parsedDate = parse(post.value.date, 'dd-MM-yyyy', new Date())
  return format(parsedDate, "d 'de' MMMM, yyyy", { locale: es })
})

if (!post.value) {
  router.replace('/404')
}
</script>

<template>
  <main v-if="post" class="pt-20 pb-20 overflow-hidden bg-white dark:bg-darklight">
    <section class="container mx-auto max-w-6xl px-4">
      <div class="mb-8 flex flex-wrap items-center gap-3 text-sm font-semibold text-grey dark:text-white/55">
        <router-link to="/#projects" class="transition hover:text-primary">Proyectos</router-link>
        <span>/</span>
        <span>{{ post.category }}</span>
      </div>

      <div class="grid gap-10 lg:grid-cols-12">
        <article class="lg:col-span-8">
          <div class="flex flex-wrap items-center gap-3 text-sm font-semibold text-grey dark:text-white/55">
            <span class="rounded-full bg-primary px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">
              {{ post.category }}
            </span>
            <span>{{ formattedDate }}</span>
          </div>
          
          <h1 class="mt-6 text-4xl font-bold leading-tight text-midnight_text dark:text-white md:text-[46px]">
            {{ post.title }}
          </h1>

          <div class="mt-10 overflow-hidden rounded-2xl">
            <img
              :src="getImgPath(post.coverImage)"
              :alt="post.title"
              class="w-full h-auto"
            />
          </div>

          <p class="mt-5 max-w-3xl text-lg leading-8 text-grey dark:text-white/70">
            {{ post.excerpt }}
          </p>

          <div class="blog-details mt-10 max-w-4xl text-midnight_text dark:text-white/90">
            <div
              class="space-y-6 text-base leading-8 text-grey dark:text-white/75"
              v-html="post.content"
            ></div>
          </div>
        </article>

        <aside class="lg:col-span-4">
          <div class="sticky top-28 space-y-6">
            <div class="rounded-2xl border border-border bg-white p-6 shadow-service dark:border-white/10 dark:bg-darkmode">
              <h3 class="text-xl font-bold text-midnight_text dark:text-white">Lecturas relacionadas</h3>
              <div class="mt-5 space-y-4">
                <router-link
                  v-for="item in relatedPosts"
                  :key="item.slug"
                  :to="`/project/${item.slug}`"
                  class="block rounded-xl border border-border p-4 transition hover:border-primary hover:shadow-md dark:border-white/10"
                >
                  <p class="text-xs font-bold uppercase tracking-[0.14em] text-primary">{{ item.category }}</p>
                  <p class="mt-2 text-base font-semibold leading-6 text-midnight_text transition hover:text-primary dark:text-white">
                    {{ item.title }}
                  </p>
                </router-link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </main>
</template>