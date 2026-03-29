<!-- src/components/home/BlogSection.vue -->
<script setup lang="ts">
import { blogPosts } from '@/data';
import { getImgPath } from '@/utils/image';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const getCoverImage = (blog: any) => {
  return blog.coverImage ? getImgPath(blog.coverImage) : '';
};

</script>

<template>
  <section class="flex flex-wrap justify-center bg-section dark:bg-darkmode" id="blog">
    <div class="container mx-auto max-w-6xl px-4">
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <div class="mb-4 flex items-center justify-center gap-2" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <span class="w-3 h-3 rounded-full bg-success"></span>
          <span class="font-medium text-midnight_text text-sm dark:text-white/50">
            {{ t('blog.cta') }}
          </span>
        </div>

        <h2
          class="text-xl sm:text-2xl md:text-4xl font-bold text-midnight_text dark:text-white"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          {{ t('blog.title') }}
        </h2>

        <p class="mt-4 text-base leading-7 text-grey dark:text-white/70 sm:text-lg" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
          {{ t('blog.subtitle') }}
        </p>
      </div>

      <div class="mb-8 flex flex-wrap items-center justify-center gap-3 text-sm font-medium text-grey dark:text-white/60" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
        <span class="rounded-full bg-white px-4 py-2 shadow-sm dark:bg-darklight">Lorem ipsum</span>
        <span class="rounded-full bg-white px-4 py-2 shadow-sm dark:bg-darklight">Lorem ipsum</span>
        <span class="rounded-full bg-white px-4 py-2 shadow-sm dark:bg-darklight">Lorem ipsum</span>
        <span class="rounded-full bg-white px-4 py-2 shadow-sm dark:bg-darklight">Lorem ipsum</span>
      </div>

      <div class="grid grid-cols-12 gap-7">
        <article
          v-if="blogPosts[0]"
          class="group col-span-12 min-w-0 overflow-hidden rounded-2xl bg-white shadow-service dark:bg-darkmode md:grid md:grid-cols-12"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <div class="relative overflow-hidden md:col-span-7">
            <router-link :to="`/blog/${blogPosts[0].slug}`" :aria-label="blogPosts[0].title || 'Artículo destacado'" class="block h-full">
              <img
                :src="getCoverImage(blogPosts[0])"
                :alt="blogPosts[0].title || 'Artículo destacado'"
                class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                style="width: 100%; height: 100%"
              />
            </router-link>

            <div class="absolute left-4 top-4 rounded-full bg-primary px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg">
              {{ blogPosts[0].category || 'Oncología' }}
            </div>
          </div>

          <div class="flex flex-col justify-between gap-5 p-6 md:col-span-5 md:p-8">
            <div class="space-y-3">
              <span class="text-sm font-semibold uppercase tracking-[0.14em] text-primary">Artículo destacado</span>
              <h3 class="text-2xl font-semibold leading-tight text-black dark:text-white md:text-[30px]">
                <router-link :to="`/blog/${blogPosts[0].slug}`" class="transition hover:text-primary dark:hover:text-primary">
                  {{ blogPosts[0].title }}
                </router-link>
              </h3>
              <p class="text-base leading-7 text-grey dark:text-white/70">
                {{ blogPosts[0].excerpt }}
              </p>
            </div>

            <div class="flex flex-wrap items-center gap-4 text-sm font-semibold text-grey dark:text-white/50">
              <span>{{ blogPosts[0].date }}</span>
              <span class="h-1 w-1 rounded-full bg-grey/50"></span>
              <span>Revisado para pacientes y familias</span>
            </div>

            <router-link
              :to="`/blog/${blogPosts[0].slug}`"
              class="inline-flex w-fit items-center gap-2 text-base font-semibold text-primary transition hover:text-blue-700"
            >
              Leer artículo
              <span aria-hidden="true">→</span>
            </router-link>
          </div>
        </article>

        <div
          v-for="(blog, i) in blogPosts.slice(1)"
          :key="blog.slug || i"
          class="w-full md:col-span-6 col-span-12 min-w-0"
          data-aos="fade-up"
          :data-aos-delay="`${(i + 1) * 200}`"
          data-aos-duration="1000"
        >
          <article class="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-service transition hover:-translate-y-1 dark:bg-darkmode">
            <div class="relative overflow-hidden">
              <router-link :to="`/blog/${blog.slug}`" :aria-label="blog.title || 'Artículo del blog'" class="block">
                <img
                  :src="getCoverImage(blog)"
                  :alt="blog.title || 'Artículo del blog'"
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
                  {{ blog.date }}
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
        </div>
      </div>

    </div>
  </section>
</template>