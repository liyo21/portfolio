<!-- src/components/home/ContactSection.vue -->
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useForm, useField } from 'vee-validate';
import { useI18n } from 'vue-i18n';
import { useParticles } from '@/composables/useParticles';

const { t } = useI18n();

const { handleSubmit } = useForm();

const { value: firstName, errorMessage: firstNameError } = useField<string>('firstName', (val) => {
    if (!val) return 'El nombre es requerido';
    return true;
});

const { value: lastName, errorMessage: lastNameError } = useField<string>('lastName', (val) => {
    if (!val) return 'El apellido es requerido';
    return true;
});

const { value: email, errorMessage: emailError } = useField<string>('email', (val) => {
    if (!val) return 'El correo es requerido';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return 'El correo no es válido';
    return true;
});

const { value: message, errorMessage: messageError } = useField<string>('message', (val) => {
    if (!val) return 'Debe especificar el motivo de su consulta.';
    if ((val as string).length < 10) return 'Debe especificar el motivo de su consulta con al menos 10 caracteres.';
    return true;
});

const isSubmitting = ref(false);
const turnstileToken = ref('');
const widgetId = ref<string | null>(null);
const formSubmitAttempted = ref(false);

const TURNSTILE_SCRIPT_URL = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';

const renderTurnstileWidget = () => {
    widgetId.value = window.turnstile.render('#turnstile-container', {
        sitekey: import.meta.env.VITE_TURNSTILE_SITE_KEY,
        theme: 'auto',
        callback: (token: string) => {
            turnstileToken.value = token;
        },
        'expired-callback': () => {
            turnstileToken.value = '';
        },
        'error-callback': () => {
            turnstileToken.value = '';
        },
    });
};

const sendWhatsappMessage = handleSubmit(() => {
    formSubmitAttempted.value = true;

    if (!turnstileToken.value) return;

    try {
        isSubmitting.value = true;

        const fullMessage = `Hola Eliyonai, mi nombre es ${firstName.value} ${lastName.value}. Mi correo es ${email.value}. ${message.value}`;
        const encodedMessage = encodeURIComponent(fullMessage);
        const whatsappUrl = `https://wa.me/56967289355?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');
    } catch (error) {
        console.error('Error al enviar el mensaje de WhatsApp:', error);
    } finally {
        isSubmitting.value = false;
    }

    if (widgetId.value) {
        window.turnstile?.reset(widgetId.value);
    }
    turnstileToken.value = '';
    resetFields();
});

const resetFields = () => {
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    message.value = '';
};

const { particlesOptions, particlesColor } = useParticles();

onMounted(() => {
    particlesColor.value = '#fff';

    if (!document.querySelector(`script[src="${TURNSTILE_SCRIPT_URL}"]`)) {
        const script = document.createElement('script');
        script.src = TURNSTILE_SCRIPT_URL;
        script.async = true;
        script.onload = renderTurnstileWidget;
        document.head.appendChild(script);
    } else if (window.turnstile) {
        renderTurnstileWidget();
    }
});

onUnmounted(() => {
    if (widgetId.value) {
        window.turnstile?.remove(widgetId.value);
    }
});

</script>

<template>
    <section id="contact" class="relative overflow-hidden overflow-x-hidden bg-darkmode dark:bg-darklight">
        <vue-particles
            id="tsparticles-contact"
            class="absolute inset-0 z-0 pointer-events-none"
            :options="particlesOptions"
        />
        <div class="container mx-auto max-w-6xl px-4">
            <div class="grid md:grid-cols-12 grid-cols-1 md:gap-7 gap-0">
                <!-- Left column: Info -->
                <div class="row-start-1 col-start-1 row-end-2 md:col-end-7 col-end-12" data-aos="fade-left"
                    data-aos-delay="200" data-aos-duration="1000">
                    <div class="flex gap-2 items-center justify-start">
                        <span class="w-3 h-3 rounded-full bg-success"></span>
                        <span class="font-medium text-sm text-white">{{ t('contact.cta') }}</span>
                    </div>

                    <h2 class="sm:text-4xl text-[28px] leading-tight font-bold text-white py-12">
                        {{ t('contact.title') }}
                    </h2>

                    <p class="text-white/70 text-base sm:text-lg max-w-xl pb-10">
                        {{ t('contact.subtitle') }}
                    </p>
                </div>

                <!-- Right column: Form -->
                <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000"
                    class="relative before:content-[''] before:absolute before:w-[13rem] before:h-24 before:top-[5%] before:left-[35%] before:z-[1] md:row-start-1 row-start-2 md:col-start-8 col-start-1 row-end-2 col-end-13">
                    <div
                        class="lg:mt-0 mt-8 bg-white dark:bg-darkmode max-w-[50rem] m-auto pt-[2.1875rem] pb-8 px-[2.375rem] rounded-md relative z-10">
                        <form class="flex w-full m-auto justify-between flex-wrap gap-4" @submit.prevent="sendWhatsappMessage">
                            <!-- Nombre y Apellido -->
                            <div class="flex gap-4 w-full">
                                <div class="w-full">
                                    <input
                                        v-model="firstName"
                                        :class="['text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-solid placeholder:text-grey rounded-lg focus-visible:outline-0', firstNameError ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary dark:border-dark_border dark:focus:border-primary']"
                                        type="text" :placeholder="t('contact.form.name')" />
                                    <p v-if="firstNameError" class="text-red-500 text-xs mt-1">{{ firstNameError }}</p>
                                </div>
                                <div class="w-full">
                                    <input
                                        v-model="lastName"
                                        :class="['text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-solid placeholder:text-grey rounded-lg focus-visible:outline-0', lastNameError ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary dark:border-dark_border dark:focus:border-primary']"
                                        type="text" :placeholder="t('contact.form.lastName')" />
                                    <p v-if="lastNameError" class="text-red-500 text-xs mt-1">{{ lastNameError }}</p>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="w-full">
                                <input
                                    v-model="email"
                                    :class="['text-midnight_text w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] border border-solid placeholder:text-grey rounded-lg focus-visible:outline-0', emailError ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-primary dark:border-dark_border dark:focus:border-primary']"
                                    type="email" :placeholder="t('contact.form.email')" />
                                <p v-if="emailError" class="text-red-500 text-xs mt-1">{{ emailError }}</p>
                            </div>

                            <!-- Mensaje -->
                            <div class="w-full">
                                <textarea
                                    v-model="message"
                                    :class="['text-midnight_text h-[9.375rem] w-full text-base transition-[0.5s] bg-transparent dark:border-dark_border dark:text-white px-[0.9375rem] py-[0.830rem] !border !border-solid placeholder:text-grey rounded-lg focus-visible:outline-0', messageError ? '!border-red-500 focus:!border-red-500' : '!border-border focus:!border-primary dark:!border-dark_border dark:focus:!border-primary']"
                                    :placeholder="t('contact.form.message')"></textarea>
                                <p v-if="messageError" class="text-red-500 text-xs mt-1">{{ messageError }}</p>
                            </div>

                            <!-- Turnstile -->
                            <div class="w-full">
                                <div id="turnstile-container"></div>
                                <p v-if="formSubmitAttempted && !turnstileToken" class="text-red-500 text-xs mt-1">{{ t('contact.form.turnstileError') }}</p>
                            </div>

                            <div class="w-full">
                                <button 
                                    :disabled="isSubmitting || !turnstileToken"
                                    class="w-full bg-primary hover:bg-blue-700 text-white py-3 rounded-lg cursor-pointer font-semibold transition disabled:bg-primary/70 disabled:cursor-not-allowed"
                                    type="submit"
                                >
                                    {{ t('contact.form.button') }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>