import React from 'react';

const Greetings = (props) => {
  
    switch (lang) {
      case 'de':
        return 'Hallo, ';
        break;
      case 'fr':
        return 'Bonjour, ';
        break;
      case 'es':
        return 'Hola, ';
        break;
      default:
        return 'Hello, ';
        break;
    }
  }

  return (
  
  );
};

export default Greetings;
