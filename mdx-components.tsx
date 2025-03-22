import type { MDXComponents } from "mdx/types";
import Map from "@/components/Map";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Map,
    ...components,
  };
}
