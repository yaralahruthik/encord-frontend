import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <button className='rounded bg-violet-700 p-2 text-white hover:opacity-90 active:bg-violet-600'>
      {children}
    </button>
  );
};

export default Button;
