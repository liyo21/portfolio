export type BlogPost = {
  title: string
  slug: string
  excerpt: string
  coverImage: string
  date: string
  author: string
  authorImage: string
  category: string
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    slug: 'deteccion-temprana-del-cancer',
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_1.png",
    author: 'Dev Eliyonai Molero',
    authorImage: '/images/blogdetail-page/silicaman.png',
    category: "Lorem",
    content: `
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Lorem ipsum dolor sit amet</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Consectetur adipiscing elit</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Sed do eiusmod tempor incididunt.</li>
        <li>Ut labore et dolore magna aliqua.</li>
      </ul>

      <div class="rounded-2xl border-l-4 border-primary bg-sky-50 p-5 dark:bg-white/5">
        <p class="font-semibold text-midnight_text dark:text-white">Lorem:</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Ut enim ad minim veniam</h2>
      <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
    `,
  },
  {
    title: "Sed ut perspiciatis unde omnis iste natus error",
    slug: 'opciones-de-tratamiento-oncologico',
    excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_2.jpg",
    author: 'Dev Eliyonai Molero',
    authorImage: '/images/blogdetail-page/silicaman.png',
    category: "Ipsum",
    content: `
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Nemo enim ipsam voluptatem</h2>
      <p>Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.</p>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Quis autem vel eum iure</h2>
      <ul>
        <li>Lorem ipsum dolor sit amet.</li>
        <li>Consectetur adipiscing elit sed do eiusmod.</li>
        <li>Tempor incididunt ut labore et dolore.</li>
      </ul>

      <div class="rounded-2xl border-l-4 border-primary bg-sky-50 p-5 dark:bg-white/5">
        <p class="font-semibold text-midnight_text dark:text-white">Ipsum:</p>
        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
      </div>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">At vero eos et accusamus</h2>
      <ul>
        <li>Et iusto odio dignissimos ducimus.</li>
        <li>Qui blanditiis praesentium voluptatum.</li>
        <li>Atque corrupti quos dolores et quas.</li>
      </ul>
    `,
  },
  {
    title: "At vero eos et accusamus et iusto odio dignissimos",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "21-03-2026",
    coverImage: "/images/blog/blog_3.png",
    slug: "acompanamiento-al-paciente-con-cancer",
    author: 'Dev Eliyonai Molero',
    authorImage: '/images/blogdetail-page/silicaman.png',
    category: "Dolor",
    content: `
      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Lorem ipsum quia dolor sit amet</h2>
      <p>Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Ut enim ad minima veniam</h2>
      <ul>
        <li>Quis nostrum exercitationem ullam.</li>
        <li>Corporis suscipit laboriosam nisi.</li>
        <li>Ut aliquid ex ea commodi consequatur.</li>
      </ul>

      <div class="rounded-2xl border-l-4 border-primary bg-sky-50 p-5 dark:bg-white/5">
        <p class="font-semibold text-midnight_text dark:text-white">Dolor:</p>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
      </div>

      <h2 class="text-2xl font-bold text-midnight_text dark:text-white">Temporibus autem quibusdam</h2>
      <p>Et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
    `,
  },
]

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
