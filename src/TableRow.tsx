import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TableRow = ({ children }: Props) => {
  return <tr className='hover:bg-slate-100'>{children}</tr>;
};

export default TableRow;
