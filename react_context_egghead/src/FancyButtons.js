import React from 'react';

const Color = React.createContext('blue');

const FancyButton = () => (
  <Color.Consumer>
    {color => {
      if (typeof color === 'undefined') {
        throw Error('You must use FancyButton with a provider');
      }
      return <button className={`fancy-button ${color}`}>Fancy</button>;
    }}
  </Color.Consumer>
);

const FancyButtons = () => (
  <div>
    <FancyButton />
    <Color.Provider value="red">
      <FancyButton />
    </Color.Provider>
    <Color.Provider value="blue">
      <FancyButton />
    </Color.Provider>
    <Color.Provider value="green">
      <FancyButton />
    </Color.Provider>
    <Color.Provider value="black">
      <FancyButton />
    </Color.Provider>
  </div>
);

export default FancyButtons;
