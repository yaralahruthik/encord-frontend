import { createContext, useState } from 'react';
import Tab from './components/Tab';
import Images from './features/Images';
import Predictions from './Predictions';
import { TabEnum } from './CONSTANTS';

export type TodoContext = {
  tab: TabEnum;
  setTab: (tab: TabEnum) => void;
};

export const TabContext = createContext<TodoContext | null>(null);

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

const App = () => {
  const [tab, setTab] = useState<TabEnum>(TabEnum.IMAGES);
  return (
    <div className='p-2'>
      <TabContext.Provider value={{ tab, setTab }}>
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
        {TABS.find((item) => item.value === tab)?.child}
      </TabContext.Provider>
    </div>
  );
};

export default App;
