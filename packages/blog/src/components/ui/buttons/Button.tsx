import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon?: ReactNode;
  className?: string;
};

export const Button = ({ children, icon, className = '', ...props }: Props) => {
  return (
    <button
      className={clsx([
        'py-2.5 text-gray-500 border border-gray-400 rounded-lg text-center enabled:hover:border-gray-500 enabled:hover:text-gray-600 transition-all duration-300 ease-in-out shadow-button',
        'disabled:text-gray-200 disabled:border-gray-200 disabled:cursor-not-allowed',
        { 'inline-flex px-2.5 gap-2 items-center': !!icon },
        { 'px-4': !icon },
        className,
      ])}
      {...props}
    >
      {!!icon && icon}
      {children}
    </button>
  );
};
