import type { NextConfig } from "next";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  output: "export",
  distDir: process.env.OUTPUTDIR,
  images: {
    unoptimized: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  options: {
    remarkPlugins: [remarkFrontmatter, remarkGfm],
    rehypePlugins: [],
  },
});

export default withMDX(nextConfig);
