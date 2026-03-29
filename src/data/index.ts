// src/data/index.ts
import { getImgPath } from "@/utils/image";
import type { HeaderItem } from "@/types/menu";
import type { Blog } from "@/types/blog";

export const headerData: HeaderItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/#services" },
  { label: "Blog", href: "/#blog" },
  { label: "Contacto", href: "/#contact" },
];

export const Servicebox = [
  {
    icon: getImgPath("/images/services/ux-design-product_1.svg"),
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: getImgPath("/images/services/perfomance-optimization.svg"),
    title: "Consectetur adipiscing elit",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    icon: getImgPath("/images/services/ux-design-product_2.svg"),
    title: "Sed do eiusmod tempor",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];

export const blogPosts: Blog[] = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_1.png",
    slug: "deteccion-temprana-del-cancer",
    category: "Lorem",
  },
  {
    title: "Sed ut perspiciatis unde omnis iste natus error",
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_2.jpg",
    slug: "opciones-de-tratamiento-oncologico",
    category: "Ipsum",
  },
  {
    title: "At vero eos et accusamus et iusto odio dignissimos",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_3.png",
    slug: "acompanamiento-al-paciente-con-cancer",
    category: "Dolor",
  },
];
