import type { IconProps } from '@models/props';

function Icon({ children }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

export function ChevronLeftIcon() {
  return (
    <Icon>
      <polyline points="15 18 9 12 15 6" />
    </Icon>
  );
}

export function ChevronRightIcon() {
  return (
    <Icon>
      <polyline points="9 18 15 12 9 6" />
    </Icon>
  );
}

export function CloseIcon() {
  return (
    <Icon>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </Icon>
  );
}
