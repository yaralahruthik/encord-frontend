import TableDataCell from '../../components/TableDataCell';
import TableRow from '../../components/TableRow';
import { IPredictedImage } from '../../providers/PredictionsContext';
import { formatMillisecondsToDateTime } from '../../utils';
import ViewButtonWithDialog from './ViewButtonWithDialog';

interface Props {
  image: IPredictedImage;
}

const PredictedImage = ({ image }: Props) => {
  return (
    <TableRow>
      <TableDataCell>{image.title}</TableDataCell>

      <TableDataCell>{image.description}</TableDataCell>

      <TableDataCell>
        {formatMillisecondsToDateTime(image.timeOfPrediction)}
      </TableDataCell>
      <TableDataCell>
        <ViewButtonWithDialog image={image} />
      </TableDataCell>
    </TableRow>
  );
};

export default PredictedImage;
