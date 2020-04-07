import { HelloWorld } from './Hello';
import * as React from 'react';

const App: React.FC<{}> = () => {
    return <HelloWorld compiler="Typescript" framework="React"></HelloWorld>;
};

export default App;
