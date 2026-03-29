<!-- src/views/BlogPostView.vue -->
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { format, parse } from 'date-fns'
import { es } from 'date-fns/locale'
import { blogPosts, getBlogPostBySlug } from '@/data/blog'
import { getImgPath } from '@/utils/image'

const route = useRoute()
const router = useRouter()

const post = computed(() => {
  const slug = String(route.params.slug || '')
  return getBlogPostBySlug(slug)
})

const relatedPosts = computed(() => {
  if (!post.value) return []
  return blogPosts.filter((item) => item.slug !== post.value?.slug).slice(0, 3)
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
        <router-link to="/#blog" class="transition hover:text-primary">Blog</router-link>
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

          <p class="mt-5 max-w-3xl text-lg leading-8 text-grey dark:text-white/70">
            {{ post.excerpt }}
          </p>

          <div class="mt-8 flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-border bg-white p-5 shadow-service dark:border-white/10 dark:bg-darkmode">
            <div class="flex items-center gap-4">
              <img
                :src="getImgPath(post.authorImage)"
                :alt="post.author"
                class="rounded-full"
                width="72"
                height="72"
                style="width: auto; height: auto"
              />
              <div>
                <p class="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Contenido revisado por</p>
                <p class="text-xl font-semibold text-midnight_text dark:text-white">{{ post.author }}</p>
                <p class="text-sm text-grey dark:text-white/55">Oncología · Información pensada para pacientes y familias</p>
              </div>
            </div>

            <a
              href="/#contact"
              class="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Agendar consulta
            </a>
          </div>

          <div class="mt-10 overflow-hidden rounded-2xl">
            <img
              :src="getImgPath(post.coverImage)"
              :alt="post.title"
              class="w-full"
              style="width: 100%; height: auto"
            />
          </div>

          <div class="blog-details mt-10 max-w-4xl text-midnight_text dark:text-white/90">
            <div
              class="space-y-6 text-base leading-8 text-grey dark:text-white/75"
              v-html="post.content"
            ></div>
          </div>

          <div class="mt-12 grid gap-4 rounded-2xl bg-sky-50 p-6 dark:bg-white/5">
            <h2 class="text-2xl font-bold text-midnight_text dark:text-white">¿Cuándo consultar?</h2>
            <p class="text-base leading-8 text-grey dark:text-white/70">
              Si notas cambios persistentes, un síntoma que no mejora o ya tienes estudios y quieres entender mejor el siguiente paso, una valoración médica puede ayudarte a tomar decisiones con más claridad.
            </p>
            <a
              href="/#contact"
              class="inline-flex w-fit items-center gap-2 font-semibold text-primary transition hover:text-blue-700"
            >
              Habla con un especialista
              <span aria-hidden="true">→</span>
            </a>
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
                  :to="`/blog/${item.slug}`"
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