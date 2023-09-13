import { IImage } from './Images';
import TableDataCell from '../../components/TableDataCell';
import TableRow from '../../components/TableRow';
import { bytesToKB, formatMillisecondsToDateTime } from '../../utils';
import PredictButtonWithDialog from './PredictButtonWithDialog';

interface Props {
  image: IImage;
}

const UploadedImage = ({ image }: Props) => {
  return (
    <TableRow>
      <TableDataCell>{image.file.name}</TableDataCell>

      <TableDataCell>{bytesToKB(image.file.size)}</TableDataCell>
      {/* Technically, this information should be comming from server after the file is uploaded! */}
      <TableDataCell>
        {formatMillisecondsToDateTime(image.uploadTime)}
      </TableDataCell>
      <TableDataCell>
        <PredictButtonWithDialog image={image} />
      </TableDataCell>
    </TableRow>
  );
};

export default UploadedImage;
