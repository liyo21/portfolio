<!-- src/components/home/HeroSection.vue -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useParticles } from '@/composables/useParticles';
import { useLanguage } from '@/composables/useLanguage';
import { getImgPath } from '@/utils/image';
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
const { t } = useI18n();
const { locale } = useLanguage()

const { particlesOptions, particlesColor } = useParticles();
const isLoading = ref(false);

onMounted(() => {
    particlesColor.value = "#2f6b4f"; // Color verde oscuro
});

const downloadCV = () => {
    const link = document.createElement('a');
    link.href = getImgPath(`/documents/cv-eliyonai-molero-${locale.value}.pdf`);
    link.download = `cv-eliyonai-molero-${locale.value}.pdf`; // Nombre del archivo descargado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

const downloadButtonText = computed(() => {
    return isLoading.value ? t('hero.buttonSecondaryLoading') : t('hero.buttonSecondary');
});

const handleDownloadClick = () => {
    isLoading.value = true;
    downloadCV();
    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
};

</script>

<template>
    <section class="relative overflow-hidden bg-white pt-28 dark:bg-darklight md:pt-44 min-h-screen flex md:items-center">
        <vue-particles
            id="tsparticles-hero"
            class="absolute inset-0 z-0 pointer-events-none"
            :options="particlesOptions"
        />

        <div class="container mx-auto max-w-6xl px-4 relative z-10 grid grid-cols-12 gap-y-10 gap-x-6 md:gap-10">
            <!-- Left column -->
            <div class="md:col-span-10 col-span-12 min-w-0 flex flex-col justify-center gap-6" data-aos="fade-right"
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

                    <a
                        href=""
                        class="inline-flex w-full items-center justify-center rounded-md border border-border bg-white px-8 py-3 font-semibold text-midnight_text transition duration-300 hover:border-primary hover:text-primary dark:border-white/10 dark:bg-white dark:text-primary sm:w-auto"
                        @click.prevent="handleDownloadClick"
                    >
                        {{ downloadButtonText }}
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
