import { useState } from 'react';

import Tab from './Tab';
import Images from './Images';
import Predictions from './Predictions';

const TABS = [
  {
    label: 'IMAGES',
    child: <Images />,
  },
  {
    label: 'PREDICTIONS',
    child: <Predictions />,
  },
];

const App = () => {
  const [tab, setTab] = useState(0);

  return (
    <div className='p-2'>
      <div className='flex items-center justify-center gap-1'>
        {TABS.map((TAB, index) => (
          <Tab
            key={TAB.label}
            isActive={tab == index}
            title={TAB.label}
            onClick={() => setTab(index)}
          />
        ))}
      </div>
      {TABS[tab].child}
    </div>
  );
};

export default App;
