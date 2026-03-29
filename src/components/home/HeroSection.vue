<!-- src/components/home/HeroSection.vue -->
<script setup lang="ts">
import { getImgPath } from '@/utils/image'
import { onMounted } from 'vue';
import { useParticles } from '@/composables/useParticles';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const { particlesOptions, particlesColor } = useParticles();

onMounted(() => {
    particlesColor.value = "#2f6b4f"; // Color verde oscuro
});

</script>

<template>
    <section class="relative overflow-hidden bg-white pt-28 dark:bg-darklight md:pt-44 h-screen flex items-center">
        <vue-particles
            id="tsparticles-hero"
            class="absolute inset-0 z-0 pointer-events-none"
            :options="particlesOptions"
        />

        <div class="container mx-auto max-w-6xl px-4 relative z-10 grid grid-cols-12 gap-y-10 gap-x-6 md:gap-10">
            <!-- Left column -->
            <div class="md:col-span-6 col-span-12 min-w-0 flex flex-col justify-center gap-6" data-aos="fade-right"
                data-aos-delay="200" data-aos-duration="1000">

                <div class="space-y-4">
                    <h1 class="text-2xl font-bold leading-tight text-midnight_text dark:text-white sm:text-3xl md:text-4xl lg:text-5xl md:leading-[1.15]">
                        {{ t('hero.title') }}
                    </h1>

                    <p class="max-w-xl text-lg text-grey dark:text-white/70 md:text-xl">
                        {{ t('hero.subtitle') }}
                    </p>
                </div>

                <div class="flex w-full flex-col gap-3 sm:flex-row">
                    <a href="#portfolio"
                        class="inline-flex w-full items-center justify-center rounded-md bg-primary px-8 py-3 font-semibold text-white transition duration-300 hover:bg-dark_border sm:w-auto">
                        {{ t('hero.buttonPrimary') }}
                    </a>

                    <a href="#contact"
                        class="inline-flex w-full items-center justify-center rounded-md border border-border bg-white px-8 py-3 font-semibold text-midnight_text transition duration-300 hover:border-primary hover:text-primary dark:border-white/10 dark:bg-transparent dark:text-white sm:w-auto">
                        {{ t('hero.buttonSecondary') }}
                    </a>
                </div>
            </div>

            <!-- Right column (hero image) -->
            <div
                class="md:col-span-6 col-span-12 min-w-0 relative flex items-center justify-center">
                <div class="relative w-full max-w-[34rem]">
                    <div class="absolute -left-4 top-8 h-28 w-28 rounded-full bg-primary/10 blur-3xl"></div>
                    <div class="absolute bottom-8 right-0 h-32 w-32 rounded-full bg-sky-200/40 blur-3xl"></div>

                    <img :src="getImgPath('/images/hero/hero-image.png')" alt="Eliyonai Molero, desarrollador Fullstack"
                        width="350" height="150" style="width: 100%; height: auto"
                        class="relative z-10 drop-shadow-[0_24px_50px_rgba(15,23,42,0.14)]" />

                    <div class="absolute bottom-6 left-4 z-20 max-w-60 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur dark:bg-darkmode/90">
                        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                            Disponible para proyectos remotos
                        </p>
                        <p class="mt-1 text-sm text-midnight_text dark:text-white">
                            +5 años en sistemas críticos · IPS ChileAtiende · BTG Pactual
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
