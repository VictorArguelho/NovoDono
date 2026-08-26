import type { CSSProperties, ReactNode } from 'react';

import type { Ad } from './Ad';

export type AdCardProps = { ad: Ad };
export type AdInfoProps = { ad: Ad };
export type AdGalleryProps = { images: string[] };
export type NavButtonsProps = { className: string };
export type NavButtonProps = { text: string };
export type AuthButtonProps = { text: string; variantClass: string };
export type FilterGroupProps = { title: string; options: string[] };
export type IconProps = { children: ReactNode };
export type ButtonProps = {
  className?: string;
  raised?: boolean;
  transparent?: boolean;
  shadow?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
  children: ReactNode;
};
