import React from 'react';

import Header from './Header';
import MessageList from './MessageList';
import MessageViewer from './MessageViewer';
import FancyButtons from './FancyButtons';
import {EmailConsumer} from './EmailContext';

const MainPage = () => (
  <EmailConsumer>
    {({currentEmail}) => (
      <main>
        <Header />
        {currentEmail === null ? <MessageList /> : <MessageViewer />}
        <FancyButtons />
      </main>
    )}
  </EmailConsumer>
);

export default MainPage;
