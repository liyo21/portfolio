import { createI18n } from "vue-i18n";

const messages = {
    es: {
        hero: {
            title: 'Desarrollador Fullstack enfocado en productos escalables y de alto impacto',
            subtitle: 'Construyo sistemas con Laravel y Vue con experiencia en banca, fintech y sector público. Arquitectura sólida, testing real y performance medible desde el primer deploy.',
            buttonPrimary: 'Ver proyectos',
            buttonSecondary: 'Descargar CV'
        },
        services: {
            cta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        blog: {
            cta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        contact: {
            cta: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            form: {
                title: 'Lorem ipsum',
                name: 'Nombre',
                lastName: 'Apellido',
                email: 'Tu correo electrónico',
                message: 'Mensaje',
                button: 'Enviar mensaje',
            }
        },
        footer: {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            directContact: {
                title: 'Contacto directo',
                subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                email: 'example@example.com',
                phone: '+123 456 7890',
                rrss: {
                    x: 'https://x.com',
                    linkedin: 'https://linkedin.com',
                    github: 'https://github.com',
                }
            },
            text: `© ${new Date().getFullYear()} Dev Eliyonai Molero. Todos los derechos reservados.`
        }
    },
    en: {

    }
};

const i18n = createI18n({
    legacy: false,
    locale: 'es',
    fallbackLocale: 'es',
    messages
})

export default i18n;