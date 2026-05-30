declare module "react-animate-on-scroll" {
  import * as React from "react";

  export interface ScrollAnimationProps {
    animateIn: string;
    animateOut?: string;
    delay?: number;
    duration?: number;
    initiallyVisible?: boolean;
    offset?: number;
    offsetBottom?: number;
    offsetLeft?: number;
    offsetRight?: number;
    offsetTop?: number;
    animateOnce?: boolean;
    animatePreScroll?: boolean;
    afterAnimatedIn?: () => void;
    afterAnimatedOut?: () => void;
    beforeAnimatedIn?: () => void;
    beforeAnimatedOut?: () => void;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }

  const ScrollAnimation: React.ComponentType<ScrollAnimationProps>;

  export default ScrollAnimation;
}