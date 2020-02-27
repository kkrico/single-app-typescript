import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { HelloWorld } from './components/Hello';

ReactDOM.render(<HelloWorld compiler="Ts" framework="React" />, document.getElementById('app'));
