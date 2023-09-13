import { useEffect, useRef, useState } from 'react';
import ReactModal from 'react-modal';

import Button from '../../components/Button';
import {
  IPredictedImage,
  IPrediction,
} from '../../providers/PredictionsContext';

interface Props {
  image: IPredictedImage;
}

const ViewButtonWithDialog = ({ image }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [normalizedPred, setNormalizedPred] = useState<IPrediction[]>([]);

  const toggleDialog = () => {
    setIsOpen((prev) => !prev);
  };

  const { predictions } = image;

  useEffect(() => {
    if (!imageRef || !imageRef.current) return;

    const normalizePredictions = () => {
      return predictions.map((prediction) => {
        const { bbox } = prediction;

        const oldX = bbox.x1;
        const oldY = bbox.y1;
        const oldWidth = bbox.x2 - bbox.x1;
        const oldHeight = bbox.y2 - bbox.y1;

        const originalImgWidth = imageRef.current!.naturalWidth;
        const originalImgHeight = imageRef.current!.naturalHeight;
        const curImgWidth = imageRef.current!.width;
        const curImgHeight = imageRef.current!.height;

        const x = (oldX * curImgWidth) / originalImgWidth;
        const y = (oldY * curImgHeight) / originalImgHeight;
        const width = (oldWidth * curImgWidth) / originalImgWidth;
        const height = (oldHeight * curImgHeight) / originalImgHeight;

        return { ...prediction, bbox: { x1: x, y1: y, x2: width, y2: height } };
      });
    };

    setNormalizedPred(normalizePredictions());
  }, [predictions]);

  return (
    <>
      <Button onClick={toggleDialog} className='uppercase'>
        View
      </Button>
      <ReactModal
        isOpen={isOpen}
        onRequestClose={toggleDialog}
        style={{
          content: {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
          },
        }}
      >
        <div className='flex h-full flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <span className='text-lg font-medium'>View</span>
            <Button
              onClick={toggleDialog}
              type='button'
              className='flex h-8 w-8 items-center justify-center rounded-full bg-black'
            >
              X
            </Button>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='relative'>
              <img
                ref={imageRef}
                className='absolute'
                src={new URL('../../assets/img_1.jpg', import.meta.url).href}
              />
              {normalizedPred.map((item) => (
                <div
                  key={item.label}
                  className='absolute'
                  style={{
                    top: item.bbox.y1,
                    left: item.bbox.x1,
                    width: item.bbox.x2,
                    height: item.bbox.y2,
                    border: '2px solid blue',
                    background:
                      'linear-gradient(rgba(0,0,255,.1), rgba(0,0,255,.1))',
                    display: 'flex',
                    color: 'blue',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                    flexGrow: 1,
                    zIndex: 10,
                  }}
                >
                  {item.label} ({(+item.score * 100).toFixed(0)}%)
                </div>
              ))}
            </div>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ViewButtonWithDialog;
