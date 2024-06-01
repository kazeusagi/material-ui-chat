'use client';

import { useMemo, useState } from 'react';

import Dashboard from '@/components/mui/Dashboard';
import { CssBaseline, ThemeProvider, createTheme, useTheme } from '@mui/material';

export default function Home() {
  // ユーザが選択しているカラーモード
  const [selectedMode, setSelectedMode] = useState<'light' | 'dark'>('dark');
  // コンテキストの指定（他のコンポーネントでも呼び出して使えるように）
  const colorMode = useMemo(
    () => ({
      selectedMode,
    }),
    [selectedMode],
  );
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}
