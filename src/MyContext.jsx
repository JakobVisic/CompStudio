// MyContext.js
import React, { createContext } from 'react';

const MyContext = createContext({
  bookModeOn: false,
  paperkModeOn: false,
  deskModeOn: false,
  mugModeOn: false,
  phoneModeOn: false,
  monitorModeOn: false,
  keysModeOn: false,
  setBookModeOn: () => {},
  setPaperModeOn: () => {},
  setDeskModeOn: () => {},
  setMugModeOn: () => {},
  setPhoneModeOn: () => {},
  setMonitorModeOn: () => {},
  setKeysModeOn: () => {}
});
// const MyContext = React.createContext();

export default MyContext;

