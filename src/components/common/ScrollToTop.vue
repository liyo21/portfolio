<!-- src/components/common/ScrollToTop.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
}

function toggleVisibility() {
    isVisible.value = window.pageYOffset > 300
}

onMounted(() => {
    window.addEventListener('scroll', toggleVisibility)
})

onUnmounted(() => {
    window.removeEventListener('scroll', toggleVisibility)
})
</script>

<template>
    <div class="fixed bottom-8 right-8 z-[999]">
        <div class="flex items-center gap-2.5">
            <div v-if="isVisible" role="button" aria-label="scroll to top"
                class="back-to-top flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-[#102C46] text-white shadow-md transition duration-300 ease-in-out hover:bg-dark"
                @click="scrollToTop">
                <span class="mt-[6px] h-3 w-3 rotate-45 border-l border-t border-white"></span>
            </div>
        </div>
    </div>
</template>