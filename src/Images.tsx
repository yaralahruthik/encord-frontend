import Button from './Button';
import TableDataCell from './TableDataCell';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';

const Images = () => {
  return (
    <div className='flex w-full flex-col'>
      <table className='table-fixed border-collapse'>
        <thead>
          <TableRow>
            <TableHeaderCell>Filename</TableHeaderCell>
            <TableHeaderCell>Size</TableHeaderCell>
            <TableHeaderCell>Upload Time</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableDataCell>
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </TableDataCell>

            <TableDataCell>Malcolm Lockyer</TableDataCell>
            <TableDataCell>1961</TableDataCell>
            <TableDataCell>
              <Button>Predict</Button>
            </TableDataCell>
          </TableRow>
        </tbody>
      </table>
    </div>
  );
};

export default Images;
