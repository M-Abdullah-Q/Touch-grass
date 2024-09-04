import React from 'react';
import { Topbar } from './components/Topbar';
import axios from 'axios';
import { Background } from './components/Background';
import { TempCard } from './components/TempCard';
import { Footer } from './components/Footer';
import { RecoilRoot } from 'recoil';

function App() {

  return (
    <RecoilRoot>
      <div className="h-screen">
        <Background />
        <Topbar />
        <TempCard />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App
