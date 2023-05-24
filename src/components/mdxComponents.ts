import P from "./P.astro";
import Divider from "./Divider.astro";
import Strong from "./Strong.astro";
import Blockquote from "./Blockquote.astro";
import OL from "./OL.astro";
import UL from "./UL.astro";
import LI from "./LI.astro";
import H1 from "./H1.astro";
import H2 from "./H2.astro";
import H3 from "./H3.astro";
import H4 from "./H4.astro";
import Link from "./Link.astro";
import Image from "./Image.astro";

export const mdxComponents = {
  p: P,
  strong: Strong,
  blockquote: Blockquote,
  ol: OL,
  ul: UL,
  li: LI,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  hr: Divider,
  a: Link,
  img: Image,
};
