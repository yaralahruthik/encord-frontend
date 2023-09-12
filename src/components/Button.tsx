import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children?: ReactNode;
  className?: string;
}

const Button = ({ children, className, ...rest }: Props) => {
  return (
    <button
      {...rest}
      className={twMerge(
        'rounded bg-violet-700 p-2 text-white hover:opacity-90 active:bg-violet-600',
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
