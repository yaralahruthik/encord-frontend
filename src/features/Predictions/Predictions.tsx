import { useContext } from 'react';

import TableHeaderCell from '../../components/TableHeaderCell';
import TableRow from '../../components/TableRow';
import { PredictionsContext } from '../../providers/PredictionsContext';

const Predictions = () => {
  const { predictedImages } = useContext(
    PredictionsContext,
  ) as PredictionsContext;

  return (
    <div className='mt-10 flex w-full flex-col items-center'>
      {predictedImages.length == 0 ? (
        <p className='mt-4'>No Predictions Yet!</p>
      ) : (
        <table className='mt-10 w-full table-auto border-collapse'>
          <thead>
            <TableRow>
              <TableHeaderCell>Title</TableHeaderCell>
              <TableHeaderCell>Description</TableHeaderCell>
              <TableHeaderCell>Time of Prediction</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableRow>
          </thead>
          {/* <tbody>
        {predictedImages.map((image) => (
          <PredictedImage key={image.id} image={image} />
        ))}
      </tbody> */}
        </table>
      )}
    </div>
  );
};

export default Predictions;
