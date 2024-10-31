import { type ClassValue } from 'clsx';

export type PlatformType = 'ios' | 'android';

export type ColorSchemeType = 'light' | 'dark';

export type InnerClassNamesProp<T extends string> = { [K in T]?: ClassValue }
