interface Props {
  label: string;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
  score: string;
}

const PredictionBox = ({ label, score, x1, x2, y1, y2 }: Props) => {
  return (
    <div
      className='absolute'
      style={{
        top: y1,
        left: x1,
        width: x2,
        height: y2,
        border: '2px solid blue',
        background: 'linear-gradient(rgba(0,0,255,.1), rgba(0,0,255,.1))',
        display: 'flex',
        color: 'blue',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        flexGrow: 1,
        zIndex: 10,
      }}
    >
      {label} ({(+score * 100).toFixed(0)}%)
    </div>
  );
};

export default PredictionBox;
