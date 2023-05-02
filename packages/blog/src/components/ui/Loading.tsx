import clsx from 'clsx';

type Props = {
  className?: string;
  size?: keyof typeof sizes;
  color?: keyof typeof colors;
};

const sizes = {
  // 32px
  '2xl': 'h-8 w-8',
  // 24px
  xl: 'w-6 h-6',
  // 20px
  lg: 'w-5 h-5',
  // 16px
  md: 'h-4 w-4',
  // 14px
  sm: 'h-3.5 w-3.5',
  // 12px
  xs: 'h-3 w-3',
} as const;

const colors = {
  white: 'text-white',
  violet: 'text-violet-600',
  black: 'text-black',
} as const;

export const Loading = ({
  className,
  size = 'lg',
  color = 'violet',
}: Props) => (
  <svg
    className={clsx(['animate-spin', sizes[size], colors[color], className])}
    fill="none"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      fill="currentColor"
    ></path>
  </svg>
);
