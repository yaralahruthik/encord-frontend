import { useContext } from 'react';
import { TabContext } from './providers/TabProvider';
import Images from './features/Images';
import Predictions from './features/Predictions';
import { TabEnum } from './CONSTANTS';
import { PredictionsProvider } from './providers/PredictionsContext';
import Tab from './components/Tab';

const TABS = [
  {
    value: TabEnum.IMAGES,
    label: 'IMAGES',
    child: <Images />,
  },
  {
    value: TabEnum.PREDICTIONS,
    label: 'PREDICTIONS',
    child: <Predictions />,
  },
];

const Container = () => {
  const { tab, setTab } = useContext(TabContext) as TabContext;

  return (
    <div className='p-2'>
      <div className='flex items-center justify-center gap-1'>
        {TABS.map((TAB) => (
          <Tab
            key={TAB.label}
            isActive={tab == TAB.value}
            title={TAB.label}
            onClick={() => setTab(TAB.value)}
          />
        ))}
      </div>
      <PredictionsProvider>
        {TABS.find((item) => item.value === tab)?.child}
      </PredictionsProvider>
    </div>
  );
};

export default Container;
