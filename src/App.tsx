import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Myroutes from './Myroutes';
import GlobalStyle from './styles/global';

const App:React.FC = () => (
  <>
    <BrowserRouter>
      <Myroutes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
