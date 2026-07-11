'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme | null;
        
        // Force 'light' as the default theme if nothing is saved
        const initialTheme = savedTheme || 'light';
        setTheme(initialTheme);
        document.documentElement.classList.toggle('dark', initialTheme === 'dark');
        document.documentElement.setAttribute('data-theme', initialTheme);
    }, []);

    const toggleTheme = (event?: React.MouseEvent) => {
        const nextTheme = theme === 'light' ? 'dark' : 'light';

        const updateThemeDom = () => {
            setTheme(nextTheme);
            localStorage.setItem('theme', nextTheme);
            document.documentElement.classList.toggle('dark', nextTheme === 'dark');
            document.documentElement.setAttribute('data-theme', nextTheme);
        };

        // Circular reveal ripple using View Transition API
        if (
            typeof document !== 'undefined' &&
            typeof (document as any).startViewTransition === 'function' &&
            event
        ) {
            const x = event.clientX;
            const y = event.clientY;
            const endRadius = Math.hypot(
                Math.max(x, window.innerWidth - x),
                Math.max(y, window.innerHeight - y)
            );

            const transition = (document as any).startViewTransition(() => {
                updateThemeDom();
            });

            transition.ready.then(() => {
                const isDark = nextTheme === 'dark';

                // Light→Dark: new dark view expands from click point
                // Dark→Light: old dark view shrinks back to click point
                document.documentElement.animate(
                    isDark
                        ? {
                              clipPath: [
                                  `circle(0px at ${x}px ${y}px)`,
                                  `circle(${endRadius}px at ${x}px ${y}px)`,
                              ],
                          }
                        : {
                              clipPath: [
                                  `circle(${endRadius}px at ${x}px ${y}px)`,
                                  `circle(0px at ${x}px ${y}px)`,
                              ],
                          },
                    {
                        duration: 500,
                        easing: 'cubic-bezier(0.22, 1, 0.36, 1)', // smooth expo-out
                        pseudoElement: isDark
                            ? '::view-transition-new(root)'
                            : '::view-transition-old(root)',
                    }
                );
            });
        } else {
            // Fallback: plain DOM update with CSS transition handling the visuals
            updateThemeDom();
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
