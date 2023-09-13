import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  className?: string;
  variant?: 'contained' | 'outlined' | 'text';
}

const Button = ({
  children,
  className,
  variant = 'contained',
  ...rest
}: Props) => {
  const commonClasses = 'p-2 hover:opacity-90 disabled:cursor-not-allowed';

  const classMap = {
    contained: 'rounded bg-violet-700 text-white active:bg-violet-600',
    outlined: 'rounded text-black active:bg-grey-600',
    text: 'font-medium',
  };

  return (
    <button
      {...rest}
      className={twMerge(commonClasses, classMap[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
