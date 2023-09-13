import { ReactNode, createContext, useState } from 'react';

import { TabEnum } from '../CONSTANTS';

export type TabContext = {
  tab: TabEnum;
  setTab: (tab: TabEnum) => void;
};

export const TabContext = createContext<TabContext | null>(null);

interface Props {
  children: ReactNode;
}

const TabProvider = ({ children }: Props) => {
  const [tab, setTab] = useState<TabEnum>(TabEnum.IMAGES);

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};

export default TabProvider;
