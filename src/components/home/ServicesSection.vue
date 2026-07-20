<!-- src/components/home/ServicesSection.vue -->
<script setup lang="ts">
import { Technologies } from '@/data'
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t, tm } = useI18n();

const companiesList = computed(() => tm('services.companies') as Array<{ name: string; logo: string; url: string; description: string }>);

</script>

<template>
    <section class="bg-section dark:bg-darklight" id="services">
        <div class="container mx-auto max-w-6xl px-4">

            <h2 class="text-xl sm:text-2xl md:text-4xl leading-tight font-bold text-midnight_text md:text-center text-start pt-7 pb-20 md:w-4/6 w-full m-auto dark:text-white"
                data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                {{ t('services.title') }}
            </h2>

            <p class="md:w-3/5 w-full m-auto md:text-center text-start text-grey dark:text-white/70 pb-16 text-base sm:text-lg"
                data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                {{ t('services.subtitle') }}
            </p>
            
            <div 
                class="flex gap-2 items-center justify-center" 
                data-aos="fade-up" 
                data-aos-delay="200"
                data-aos-duration="1000"
            >
                <span class="w-3 h-3 rounded-full bg-success"></span>
                <span
                    class="font-medium text-midnight_text text-lg dark:text-white/80">
                    {{ t('services.technologies') }}
                </span>
            </div>

            <div class="grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7 mt-4">
                <div v-for="(item, index) in Technologies" :key="index"
                    class="col-span-3 min-w-0 bg-white flex flex-col justify-between items-center text-center py-7 px-7 shadow-service rounded-md gap-8 dark:bg-white/70"
                    data-aos="fade-up" :data-aos-delay="`${index * 200}`" data-aos-duration="1000"
                    data-aos-offset="300"
                >
                    <div class="w-40 h-40 rounded-full flex items-center justify-center">
                        <img :src="item.icon" alt="Service Box" class="w-40 h-40 bg-no-repeat inline-block bg-contain" />
                    </div>
                    <h3 class="max-w-44 mx-auto text-2xl font-bold dark:text-white">
                        {{ item.name }}
                    </h3>
                </div>
            </div>

            <div 
                class="flex gap-2 items-center justify-center mt-16" 
                data-aos="fade-up" 
                data-aos-delay="200"
                data-aos-duration="1000"
            >
                <span class="w-3 h-3 rounded-full bg-success"></span>
                <span
                    class="font-medium text-midnight_text text-lg dark:text-white/80">
                    {{ t('services.cta') }}
                </span>
            </div>

            <div class="grid md:grid-cols-12 sm:grid-cols-8 grid-cols-1 gap-7 mt-4">
                <div v-for="(item, index) in companiesList" :key="index"
                    class="col-span-4 min-w-0 bg-white flex flex-col justify-between items-center text-center py-14 px-7 shadow-service rounded-md gap-8 dark:bg-white/60"
                    data-aos="fade-up" :data-aos-delay="`${index * 200}`" data-aos-duration="1000"
                    data-aos-offset="300"
                >
                    <div class="w-60 h-60 rounded-full flex items-center justify-center">
                        <img :src="item.logo" alt="Service Box" class="w-40 h-40 bg-no-repeat inline-block bg-contain" />
                    </div>
                    <h3 class="max-w-44 mx-auto text-2xl font-bold dark:text-white">
                        {{ item.name }}
                    </h3>
                    <p class="dark:text-white text-base font-normal">
                        {{ item.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
