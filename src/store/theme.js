import { create } from 'zustand';

const applyTheme = (theme) => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
};

const getInitialTheme = () => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const initialTheme = getInitialTheme();
applyTheme(initialTheme);

const useThemeStore = create((set) => ({
    theme: initialTheme,

    toggleTheme: () =>
        set((state) => {
            const next = state.theme === 'dark' ? 'light' : 'dark';
            applyTheme(next);
            return { theme: next };
        }),
}));

export default useThemeStore;
