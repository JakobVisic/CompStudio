// MyContext.js
import React, { createContext } from 'react';

const MyContext = createContext({
  bookModeOn: false,
  paperkModeOn: false,
  deskModeOn: false,
  mugModeOn: false,
  phoneModeOn: false,
  monitorModeOn: false,
  setBookModeOn: () => {},
  setPaperModeOn: () => {},
  setDeskModeOn: () => {},
  setMugModeOn: () => {},
  setPhoneModeOn: () => {},
  setMonitorModeOn: () => {},
});
// const MyContext = React.createContext();

export default MyContext;

