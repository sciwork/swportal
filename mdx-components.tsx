import type { MDXComponents } from "mdx/types";
import { Meetup } from "@/components/Meetup";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Meetup,
    ...components,
  };
}
