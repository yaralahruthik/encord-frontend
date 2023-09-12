import { IImage } from './Images';
import Button from './components/Button';
import TableDataCell from './components/TableDataCell';
import TableRow from './components/TableRow';
import { bytesToKB, formatMillisecondsToDateTime } from './utils';

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
        <Button className='uppercase'>Predict</Button>
      </TableDataCell>
    </TableRow>
  );
};

export default UploadedImage;
