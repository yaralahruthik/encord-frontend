import { IPrediction } from '../../providers/PredictionsContext';

export const normalizePredictions = (
  predictions: IPrediction[],
  originalImgWidth: number,
  originalImgHeight: number,
  curImgWidth: number,
  curImgHeight: number,
) => {
  return predictions.map((prediction) => {
    const { bbox } = prediction;

    const oldX = bbox.x1;
    const oldY = bbox.y1;
    const oldWidth = bbox.x2 - bbox.x1;
    const oldHeight = bbox.y2 - bbox.y1;

    const x = (oldX * curImgWidth) / originalImgWidth;
    const y = (oldY * curImgHeight) / originalImgHeight;
    const width = (oldWidth * curImgWidth) / originalImgWidth;
    const height = (oldHeight * curImgHeight) / originalImgHeight;

    return { ...prediction, bbox: { x1: x, y1: y, x2: width, y2: height } };
  });
};
