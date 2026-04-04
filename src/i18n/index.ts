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
            cta: 'Empresas en las que he trabajado',
            title: 'Eliyonai Molero - Desarrollador Fullstack',
            subtitle: 'Desarrollador Full Stack con más de 6 años de experiencia en el diseño, desarrollo e implementación de soluciones web robustas, escalables y eficientes. He trabajado tanto en frontend como en backend, participando en proyectos desde cero y colaborando en equipos multidisciplinarios bajo metodologías ágiles como SCRUM.',
        },
        projects: {
            cta: 'Proyectos',
            title: 'Proyectos destacados',
            subtitle: 'A lo largo de mi carrera, he tenido la oportunidad de trabajar en una variedad de proyectos que han abarcado desde aplicaciones web para el sector público hasta soluciones financieras para empresas privadas. Mi enfoque siempre ha sido crear productos que no solo cumplan con los requisitos técnicos, sino que también ofrezcan una experiencia de usuario excepcional y un rendimiento óptimo.',
        },
        contact: {
            cta: 'Contacto',
            title: '¿Tienes algún proyecto en mente? ¡Hablemos!',
            subtitle: 'Estoy abierto a nuevas oportunidades y colaboraciones. Si estás interesado en trabajar conmigo o simplemente quieres saludar, no dudes en contactarme a través del formulario o por mis redes sociales.',
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
            title: '¿Tienes algún proyecto en mente? ¡Hablemos!',
            directContact: {
                title: 'Contacto directo',
                subtitle: 'Estoy abierto a nuevas oportunidades y colaboraciones. Si estás interesado en trabajar conmigo o simplemente quieres saludar, no dudes en contactarme a través del formulario o por mis redes sociales.',
                email: 'example@example.com',
                phone: '+123 456 7890',
                rrss: {
                    x: 'https://x.com',
                    linkedin: 'https://www.linkedin.com/in/molero-eliyonai/',
                    github: 'https://github.com/liyo21',
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