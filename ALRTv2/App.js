import React from 'react';
import Home from './screens/home';
import Navigator from './routes/homeStack'

import InfoProvider from './store';


export default function App(){
  return(
    <InfoProvider>
      <Navigator />
    </InfoProvider>
  );
}