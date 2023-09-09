import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const TableData = ({ children }: Props) => {
  return <td className='border border-slate-400 px-2 py-1'>{children}</td>;
};

export default TableData;
