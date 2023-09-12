import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

const TableHeaderCell = ({ children }: Props) => {
  return <th>{children}</th>;
};

export default TableHeaderCell;
