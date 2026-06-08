// src/data/index.ts
import { getImgPath } from "@/utils/image";
import type { HeaderItem } from "@/types/menu";
import type { Blog } from "@/types/blog";

export const headerData: HeaderItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#services" },
  { label: "Proyectos", href: "/#projects" },
  { label: "Contacto", href: "/#contact" },
];

export const Servicebox = [
  {
    icon: getImgPath("/images/companies/logo-chileatiende.svg"),
    title: "IPS ChileAtiende",
    description:
      "Instituto de Previsión Social - ChileAtiende. Plataforma de gestión de turnos, atención al cliente y administración de servicios para la red de atención presencial del IPS en Chile.",
  },
  {
    icon: getImgPath("/images/companies/logo-btg.svg"),
    title: "BTG Pactual",
    description:
      "BTG Pactual. Plataforma de gestión financiera y servicios bancarios para clientes corporativos y particulares en América Latina.",
  },
  {
    icon: getImgPath("/images/companies/logo-virtualpos.svg"),
    title: "VirtualPos",
    description:
      "VirtualPos. Plataforma de pagos electrónicos y soluciones de punto de venta para comercios y empresas en América Latina.",
  },
];

export const Technologies = [
  {
    name: "JavaScript",
    icon: getImgPath("/images/technologies/javascript.svg"),
  },
  {
    name: "TypeScript",
    icon: getImgPath("/images/technologies/typescript.svg"),
  },
  {
    name: "Vue.js",
    icon: getImgPath("/images/technologies/vue.svg"),
  },
  {
    name: "Nuxt.js",
    icon: getImgPath("/images/technologies/nuxt.svg"),
  },
  {
    name: "Unit Tests: Vitest",
    icon: getImgPath("/images/technologies/vitest.svg"),
  },
  {
    name: "E2E Tests: Cypress",
    icon: getImgPath("/images/technologies/cypress.svg"),
  },
  {
    name: "PHP",
    icon: getImgPath("/images/technologies/php.svg"),
  },
  {
    name: "Laravel",
    icon: getImgPath("/images/technologies/laravel.svg"),
  },
  {
    name: "Unit Tests: PHPUnit",
    icon: getImgPath("/images/technologies/phpunit.svg"),
  },
  {
    name: "E2E Tests: Laravel Dusk",
    icon: getImgPath("/images/technologies/laravel-dusk.svg"),
  },
  {
    name: "MySQL",
    icon: getImgPath("/images/technologies/mysql.svg"),
  },
  {
    name: "AWS",
    icon: getImgPath("/images/technologies/aws.svg"),
  },
  {
    name: "Docker",
    icon: getImgPath("/images/technologies/docker.svg"),
  },
  {
    name: "Git",
    icon: getImgPath("/images/technologies/git.svg"),
  },
  {
    name: "Gitlab",
    icon: getImgPath("/images/technologies/gitlab.svg"),
  },
  {
    name: "Github",
    icon: getImgPath("/images/technologies/github.svg"),
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    icon: getImgPath("/images/certifications/aws-cloud-practitioner.png"),
    link: "https://www.credly.com/badges/e9de1a06-9c75-46aa-b96c-07e44713179b/public_url",
  },
  {
    name: "AWS Cloud Quest: Cloud Practitioner",
    icon: getImgPath("/images/certifications/aws-cloud-quest-cloud-practitioner.png"),
    link: "https://www.credly.com/badges/2c8e5f6d-7a8b-4f1e-9b3a-1b9c8e7c-5a0d/public_url",
  },
  {
    name: "Cisco Introduction to Cybersecurity",
    icon: getImgPath("/images/certifications/cisco-introduction-to-cybersecurity.png"),
    link: "https://www.credly.com/badges/3a0d9e7c-5b0d-4f1e-9b3a-2c8e5f6d7a8b/public_url",
  },
  {
    name: "Microsoft Certified: Azure Fundamentals",
    icon: getImgPath("/images/certifications/microsoft-azure-fundamentals.png"),
    link: "https://www.credly.com/badges/4a0d9e7c-5b0d-4f1e-9b3a-2c8e5f6d7a8b/public_url",
  },
  {
    name: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    icon: getImgPath("/images/certifications/microsoft-security-compliance-identity-fundamentals.png"),
    link: "https://www.credly.com/badges/5a0d9e7c-5b0d-4f1e-9b3a-2c8e5f6d7a8b/public_url",
  },
  {
    name: "Scrum Product Owner Professional (SPOPC)",
    icon: getImgPath("/images/certifications/scrum-product-owner-professional.png"),
    link: "https://www.credly.com/badges/6a0d9e7c-5b0d-4f1e-9b3a-2c8e5f6d7a8b/public_url",
  },
];

export const projectsPost: Blog[] = [
  {
    title: "Encriptación de datos en aplicaciones web",
    excerpt: "Implementación de encriptación de datos sensibles utilizando AWS KMS en aplicaciones web, garantizando la seguridad y confidencialidad de la información almacenada y transmitida.",
    date: "21-03-2026",
    coverImage: "/images/projects/aws-kms.PNG",
    slug: "encriptacion-datos-aplicaciones-web",
    category: "AWS",
  },
  {
    title: "Migración de Webpack a Vite: Mejorando el rendimiento y la experiencia de desarrollo",
    excerpt: "Migración del portal ChileAtiende desde Webpack a Vite, logrando una mejora significativa en los tiempos de construcción y recarga en caliente, lo que resultó en una experiencia de desarrollo más fluida y eficiente.",
    date: "21-03-2026",
    coverImage: "/images/projects/webpack-vite.PNG",
    slug: "migracion-webpack-vite",
    category: "Migration",
  },
  {
    title: "QuickCheckout",
    excerpt: "Formulario de pago renderiable en cualquier plataforma, con validaciones en tiempo real y optimizado para conversiones.",
    date: "21-03-2026",
    coverImage: "/images/projects/quick-checkout.PNG",
    slug: "quickcheckout",
    category: "Payments",
  },
];
