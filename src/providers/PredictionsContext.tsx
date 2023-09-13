import { ReactNode, createContext, useState } from 'react';

export interface IPrediction {
  bbox: {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  };
  label: string;
  score: string;
}

export interface IPredictedImage {
  title: string;
  description: string;
  id: string;
  predictions: IPrediction[];
}

export type PredictionsContext = {
  predictedImages: IPredictedImage[];
  setPredictedImages: (images: IPredictedImage[]) => void;
};

export const PredictionsContext = createContext<PredictionsContext | null>(
  null,
);

interface Props {
  children: ReactNode;
}

export const PredictionsProvider = ({ children }: Props) => {
  const [predictedImages, setPredictedImages] = useState<IPredictedImage[]>([]);

  return (
    <PredictionsContext.Provider
      value={{ predictedImages, setPredictedImages }}
    >
      {children}
    </PredictionsContext.Provider>
  );
};
