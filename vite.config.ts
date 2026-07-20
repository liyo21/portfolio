import { defineConfig, type Plugin } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import MarkdownIt from "markdown-it";
import { parse as parseYaml } from "yaml";

const markdown = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
});

const projectMarkdownPlugin = (): Plugin => ({
  name: "project-markdown",
  enforce: "pre",
  transform(source, id) {
    if (!id.endsWith(".md")) return;

    const frontmatterMatch = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

    if (!frontmatterMatch) {
      throw new Error(`Invalid project frontmatter: ${id}`);
    }

    const [, rawFrontmatter = "", rawContent = ""] = frontmatterMatch;
    const project = {
      ...parseYaml(rawFrontmatter),
      content: markdown.render(rawContent),
    };

    return {
      code: `export default ${JSON.stringify(project)}`,
      map: null,
    };
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [projectMarkdownPlugin(), vue(), tailwindcss()],
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
