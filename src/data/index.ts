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
