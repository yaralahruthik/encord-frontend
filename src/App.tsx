import TabProvider from './providers/TabProvider';
import Container from './Container';

const App = () => {
  return (
    <TabProvider>
      <Container />
    </TabProvider>
  );
};

export default App;
