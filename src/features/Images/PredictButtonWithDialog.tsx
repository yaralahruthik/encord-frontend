import { FormEvent, useContext, useState } from 'react';

import Button from '../../components/Button';
import { TabEnum } from '../../CONSTANTS';
import { TabContext } from '../../providers/TabProvider';
import { PredictionsContext } from '../../providers/PredictionsContext';
import { IImage } from './Images';
import Modal from '../../components/Modal';
import useModal from '../../hooks/useModal';

interface Props {
  image: IImage;
}

const PredictButtonWithDialog = ({ image }: Props) => {
  const { setTab } = useContext(TabContext) as TabContext;
  const { predictedImages, setPredictedImages } = useContext(
    PredictionsContext,
  ) as PredictionsContext;
  const { isOpen, open, close } = useModal();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      title: { value: string };
      description: { value: string };
    };

    const { title, description } = target;

    try {
      setIsLoading(true);
      const resp = await fetch(`http://localhost:3000/predict/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title.value,
          description: description.value,
          // In a real world use case, an ID would be used to track the image being predicted
          // Usually the image is uploaded to a storage bucket
          id: image.id,
          timeOfPrediction: Date.now(),
          // Need to hardcode this due to json-server overwriting it
          predictions: [
            {
              bbox: {
                x1: 589,
                x2: 1443,
                y1: 92,
                y2: 927,
              },
              label: 'orange',
              score: '0.97',
            },
            {
              bbox: {
                x1: -1,
                x2: 1617,
                y1: 25,
                y2: 1193,
              },
              label: 'bowl',
              score: '0.29',
            },
            {
              bbox: {
                x1: -3,
                x2: 801,
                y1: 1,
                y2: 204,
              },
              label: 'person',
              score: '0.28',
            },
          ],
        }),
      });

      const data = await resp.json();

      setError('');
      close();
      setIsLoading(false);

      setTab(TabEnum.PREDICTIONS);
      setPredictedImages([...predictedImages, data]);
    } catch (e) {
      setIsLoading(false);
      setError((e as { message: string }).message);
    }
  };

  return (
    <>
      <Button onClick={open} className='uppercase'>
        Predict
      </Button>
      <Modal isOpen={isOpen} onClose={close}>
        {isLoading ? (
          <div className='flex h-full items-center justify-center font-medium'>
            Predicting...
          </div>
        ) : (
          <form onSubmit={handleSubmit} className='flex h-full flex-col gap-4'>
            <div className='flex items-center justify-between'>
              <span className='text-lg font-medium'>Predict</span>
              <Button
                onClick={close}
                type='button'
                className='flex h-8 w-8 items-center justify-center rounded-full bg-black'
              >
                X
              </Button>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-2'>
                <label htmlFor='title'>Title *</label>
                <input
                  required
                  id='title'
                  placeholder='Title'
                  name='title'
                  className='border border-slate-400 p-1'
                />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='description'>Description</label>
                <textarea
                  id='description'
                  placeholder='Description'
                  rows={6}
                  name='description'
                  className='border border-slate-400 p-1'
                />
              </div>
            </div>
            {error && <div className='text-red-500'>{error}</div>}
            <div className='flex grow items-end gap-4 self-end'>
              <Button type='button' variant='text' onClick={close}>
                Cancel
              </Button>
              <Button type='submit'>Submit</Button>
            </div>
          </form>
        )}
      </Modal>
    </>
  );
};

export default PredictButtonWithDialog;
