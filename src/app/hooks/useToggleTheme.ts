'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export const useToggleTheme = () => {
  const { theme = 'light', themes, setTheme } = useTheme();
  const [themeValue, setThemeValue] = useState<string>('light');

  useEffect(() => setThemeValue(theme), [theme]);

  return { theme: themeValue, setTheme, themes };
};

// 훅으로 만들어 쓸수도있음!