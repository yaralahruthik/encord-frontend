import { ChangeEvent, useState } from 'react';

import TableHeaderCell from '../../components/TableHeaderCell';
import TableRow from '../../components/TableRow';
import UploadedImage from './UploadedImage';

export interface IImage {
  file: File;
  uploadTime: number;
}

const Images = () => {
  const [images, setImages] = useState<IImage[]>([]);

  const uploadImages = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files?.length) {
      let idx = 0;
      const localImages: IImage[] = [];
      while (idx < e.currentTarget.files.length) {
        localImages.push({
          file: e.currentTarget.files[idx],
          uploadTime: Date.now(),
        });
        idx++;
      }
      setImages(localImages);
    }
  };

  return (
    <div className='mt-10 flex w-full flex-col items-center'>
      <label htmlFor='file-upload'>
        <a className='cursor-pointer rounded bg-indigo-700 px-4 py-2 uppercase text-white opacity-90'>
          Upload Images
        </a>
      </label>
      <input
        onChange={uploadImages}
        id='file-upload'
        type='file'
        accept='image/*'
        multiple
        hidden
      />

      {images.length == 0 ? (
        <p className='mt-4'>No Images Uploaded Yet!</p>
      ) : (
        <table className='mt-10 w-full table-auto border-collapse'>
          <thead>
            <TableRow>
              <TableHeaderCell>Filename</TableHeaderCell>
              <TableHeaderCell>Size (KB)</TableHeaderCell>
              <TableHeaderCell>Upload Time</TableHeaderCell>
              <TableHeaderCell></TableHeaderCell>
            </TableRow>
          </thead>
          <tbody>
            {images.map((image) => (
              <UploadedImage key={image.file.name} image={image} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Images;
