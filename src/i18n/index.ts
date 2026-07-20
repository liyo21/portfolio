import { createI18n } from "vue-i18n";
import { getInitialLocale } from "@/utils/locale";
import { getImgPath } from "@/utils/image";

const messages = {
    es: {
        hero: {
            title: 'Desarrollador Fullstack enfocado en productos escalables y de alto impacto',
            subtitle: 'Construyo sistemas con Laravel y Vue con experiencia en banca, fintech y sector público. Arquitectura sólida, testing real y performance medible desde el primer deploy.',
            buttonPrimary: 'Ver proyectos',
            buttonSecondary: 'Descargar CV',
            buttonSecondaryLoading: 'Descargando...',
        },
        services: {
            cta: 'Empresas en las que he trabajado',
            title: 'Eliyonai Molero - Desarrollador Fullstack',
            subtitle: 'Desarrollador Full Stack con más de 6 años de experiencia en el diseño, desarrollo e implementación de soluciones web robustas, escalables y eficientes. He trabajado tanto en frontend como en backend, participando en proyectos desde cero y colaborando en equipos multidisciplinarios bajo metodologías ágiles como SCRUM.',
            technologies: 'Tecnologías',
            companies: [
                {
                    name: "IPs ChileAtiende",
                    logo: getImgPath("/images/companies/logo-chileatiende.svg"),
                    url: "https://www.chileatiende.gob.cl/",
                    description: 'Instituto de Previsión Social - ChileAtiende. Plataforma de gestión de turnos, atención al cliente y administración de servicios para la red de atención presencial del IPS en Chile.'
                },
                {
                    name: 'BTG Pactual',
                    logo: getImgPath("/images/companies/logo-btg.svg"),
                    url: 'https://btgpactual.cl/',
                    description: 'BTG Pactual. Plataforma de gestión financiera y servicios bancarios para clientes corporativos y particulares en América Latina'
                },
                {
                    name: 'VirtualPos',
                    logo: getImgPath("/images/companies/logo-virtualpos.svg"),
                    url: 'https://www.virtualpos.cl/',
                    description: 'VirtualPos. Plataforma de pagos electrónicos y soluciones de punto de venta para comercios y empresas en América Latina.'
                }
            ]
        },
        projects: {
            cta: 'Proyectos',
            title: 'Proyectos destacados',
            subtitle: 'A lo largo de mi carrera, he tenido la oportunidad de trabajar en una variedad de proyectos que han abarcado desde aplicaciones web para el sector público hasta soluciones financieras para empresas privadas. Mi enfoque siempre ha sido crear productos que no solo cumplan con los requisitos técnicos, sino que también ofrezcan una experiencia de usuario excepcional y un rendimiento óptimo.',
            featured: 'Artículo destacado',
            readArticle: 'Leer artículo',
            breadcrumb: 'Proyectos',
            related: 'Lecturas relacionadas',
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
                turnstileError: 'Por favor, completa el desafío de verificación.',
            }
        },
        footer: {
            title: '¿Tienes algún proyecto en mente? ¡Hablemos!',
            directContact: {
                title: 'Contacto directo',
                subtitle: 'Estoy abierto a nuevas oportunidades y colaboraciones. Si estás interesado en trabajar conmigo o simplemente quieres saludar, no dudes en contactarme a través del formulario o por mis redes sociales.',
                email: "moleroeliyonai@gmail.com",
                phone: '+56 9 5555 5555',
                rrss: {
                    x: 'https://x.com',
                    linkedin: 'https://www.linkedin.com/in/molero-eliyonai/',
                    github: 'https://github.com/liyo21',
                }
            },
            list: [
              {
                title: 'Servicios',
                to: '/#services',
              },
              {
                title: 'Proyectos',
                to: '/#projects',
              },
              {
                title: 'Contacto',
                to: '/#contact',
              },
            ],
            text: `© ${new Date().getFullYear()} Dev Eliyonai Molero. Todos los derechos reservados.`
        }
    },
    en: {
        hero: {
            title: 'Fullstack Developer focused on scalable and high-impact products',
            subtitle: 'I build systems with Laravel and Vue with experience in banking, fintech, and the public sector. Solid architecture, real testing, and measurable performance from the first deploy.',
            buttonPrimary: 'View projects',
            buttonSecondary: 'Download CV',
            buttonSecondaryLoading: 'Downloading...',
        },
        services: {
            cta: 'Companies I have worked for',
            title: 'Eliyonai Molero - Fullstack Developer',
            subtitle: 'Full Stack Developer with over 6 years of experience in designing, developing, and implementing robust, scalable, and efficient web solutions. I have worked on both frontend and backend, participating in projects from scratch and collaborating in multidisciplinary teams under agile methodologies like SCRUM.',
            technologies: 'Technologies',
            companies: [
                {
                    name: "IPs ChileAtiende",
                    logo: getImgPath("/images/companies/logo-chileatiende.svg"),
                    url: "https://www.chileatiende.gob.cl/",
                    description: 'Instituto de Previsión Social - ChileAtiende. Platform for managing appointments, customer service, and administration of services for the IPS in-person service network in Chile.'
                },
                {
                    name: 'BTG Pactual',
                    logo: getImgPath("/images/companies/logo-btg.svg"),
                    url: 'https://btgpactual.cl/',
                    description: 'BTG Pactual. Financial management and banking services platform for corporate and individual clients in Latin America.'
                },
                {
                    name: 'VirtualPos',
                    logo: getImgPath("/images/companies/logo-virtualpos.svg"),
                    url: 'https://www.virtualpos.cl/',
                    description: 'VirtualPos. Electronic payment platform and point-of-sale solutions for businesses and companies in Latin America.'
                }
            ]
        },
        projects: {
            cta: 'Projects',
            title: 'Featured Projects',
            subtitle: 'Throughout my career, I have had the opportunity to work on a variety of projects ranging from web applications for the public sector to financial solutions for private companies. My focus has always been on creating products that not only meet technical requirements but also offer an exceptional user experience and optimal performance.',
            featured: 'Featured article',
            readArticle: 'Read article',
            breadcrumb: 'Projects',
            related: 'Related articles',
        },
        contact: {
            cta: 'Contact',
            title: 'Do you have a project in mind? Let\'s talk!',
            subtitle: 'I am open to new opportunities and collaborations. If you are interested in working with me or just want to say hi, feel free to contact me through the form or via my social media.',
            form: {
                title: 'Lorem ipsum',
                name: 'First Name',
                lastName: 'Last Name',
                email: 'Your email address',
                message: 'Message',
                button: 'Send message',
                turnstileError: 'Please complete the verification challenge.',
            }
        },
        footer: {
            title: 'Do you have a project in mind? Let\'s talk!',
            directContact: {
                title: 'Direct Contact',
                subtitle: 'I am open to new opportunities and collaborations. If you are interested in working with me or just want to say hi, feel free to contact me through the form or via my social media.',
                email: "moleroeliyonai@gmail.com",
                phone: '+56 9 5555 5555',
                rrss: {
                    x: 'https://x.com',
                    linkedin: 'https://www.linkedin.com/in/molero-eliyonai/',
                    github: 'https://github.com/liyo21',
                }
            },
            list: [
              {
                title: 'Services',
                to: '/#services',
              },
              {
                title: 'Projects',
                to: '/#projects',
              },
              {
                title: 'Contact',
                to: '/#contact',
              },
            ],
            text: `© ${new Date().getFullYear()} Dev Eliyonai Molero. All rights reserved.`
        }
    }
};

const i18n = createI18n({
    legacy: false,
    locale: getInitialLocale(),
    fallbackLocale: 'es',
    messages
})

export default i18n;
