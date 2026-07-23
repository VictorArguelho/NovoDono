import type { Ad } from './Ad';

export type AdCardProps = { ad: Ad };
export type AdInfoProps = { ad: Ad };
export type AdGalleryProps = { images: string[] };
export type NavButtonsProps = { className: string };
export type NavButtonProps = { text: string; img: string };
export type AuthButtonProps = { text: string; variantClass: string };
export type FilterGroupProps = { title: string; options: string[] };