import Button from './Button';
import TableData from './TableData';
import TableRow from './TableRow';

const Images = () => {
  return (
    <div className='flex w-full flex-col'>
      <table className='table-fixed border-collapse'>
        <thead>
          <tr>
            <th>Filename</th>
            <th>Size</th>
            <th>Upload Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <TableRow>
            <TableData>
              The Sliding Mr. Bones (Next Stop, Pottersville)
            </TableData>

            <TableData>Malcolm Lockyer</TableData>
            <TableData>1961</TableData>
            <TableData>
              <Button>Predict</Button>
            </TableData>
          </TableRow>
        </tbody>
      </table>
    </div>
  );
};

export default Images;
