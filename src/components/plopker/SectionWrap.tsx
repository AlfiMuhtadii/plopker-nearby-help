import { ReactNode } from "react";
import { Reveal } from "./Reveal";

/** Wraps any existing section in a soft fade/slide reveal without altering its internals. */
export const SectionWrap = ({ children }: { children: ReactNode }) => (
  <Reveal>{children}</Reveal>
);
