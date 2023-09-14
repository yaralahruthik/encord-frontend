import { useCallback, useEffect, useRef, useState } from 'react';

import Button from '../../components/Button';
import {
  IPredictedImage,
  IPrediction,
} from '../../providers/PredictionsContext';
import useModal from '../../hooks/useModal';
import Modal from '../../components/Modal';
import PredictionBox from './PredictionBox';
import { normalizePredictions } from './utils';

interface Props {
  image: IPredictedImage;
}

const ViewButtonWithDialog = ({ image }: Props) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const predictionsRef = useRef(image.predictions);
  const { isOpen, open, close } = useModal();
  const [normalizedPred, setNormalizedPred] = useState<IPrediction[]>([]);

  // I would ideally debounce this for the sake of performance
  // though with small amount of prediction items, it should not be an issue!
  const handleResize = useCallback(() => {
    if (!imageRef.current) return null;
    setNormalizedPred(
      normalizePredictions(
        predictionsRef.current,
        imageRef.current?.naturalWidth,
        imageRef.current?.naturalHeight,
        imageRef.current?.width,
        imageRef.current?.height,
      ),
    );
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return (
    <>
      <Button onClick={open} className='uppercase'>
        View
      </Button>
      <Modal isOpen={isOpen} onClose={close}>
        <div className='flex h-full flex-col gap-4'>
          <div className='flex items-center justify-between'>
            <span className='text-lg font-medium'>View</span>
            <Button
              onClick={close}
              type='button'
              className='flex h-8 w-8 items-center justify-center rounded-full bg-black'
            >
              X
            </Button>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='relative'>
              <img
                onLoad={handleResize}
                ref={imageRef}
                className='absolute'
                src={new URL('../../assets/img_1.jpg', import.meta.url).href}
              />
              {normalizedPred.map((item) => (
                <PredictionBox
                  key={item.label}
                  score={item.score}
                  label={item.label}
                  x1={item.bbox.x1}
                  x2={item.bbox.x2}
                  y1={item.bbox.y1}
                  y2={item.bbox.y2}
                />
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ViewButtonWithDialog;
