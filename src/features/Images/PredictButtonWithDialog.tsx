import { useState } from 'react';
import ReactModal from 'react-modal';

import Button from '../../components/Button';

const PredictButtonWithDialog = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleDialog = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      <Button onClick={toggleDialog} className='uppercase'>
        Predict
      </Button>
      {!isHidden && (
        <ReactModal isOpen onRequestClose={toggleDialog}>
          Hello World!
        </ReactModal>
      )}
    </>
  );
};

export default PredictButtonWithDialog;
