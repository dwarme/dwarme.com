import {useEffect} from 'react';

const useTheme = (type: 'theme-ligth' | 'theme-dark') => {
  useEffect(() => {
    document.body.classList.add(type);
  }, []);
};

export default useTheme;
