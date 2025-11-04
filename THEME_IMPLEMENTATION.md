# Theme System Implementation Guide

## Overview
Your portfolio now has a complete light/dark theme system with custom color palettes, gradients, and smooth transitions throughout the application.

## Color Palette

### Light Theme
- **Primary**: #667eea
- **Secondary**: #764ba2
- **Background**: #ffffff
- **Surface**: #f8fafb
- **Text**: #334155
- **Text Secondary**: #64748b
- **Border**: #e2e8f0

### Dark Theme
- **Primary**: #8b5cf6
- **Secondary**: #a855f7
- **Background**: #0f172a
- **Surface**: #1e293b
- **Text**: #f1f5f9
- **Text Secondary**: #94a3b8
- **Border**: #334155

## Available Gradients

### Light Theme Gradients
```tailwind
bg-gradient-light          /* Light background gradient */
bg-gradient-primary        /* Primary blue to purple */
```

### Dark Theme Gradients
```tailwind
bg-gradient-dark           /* Dark background gradient */
bg-gradient-primary-dark   /* Dark purple gradient */
```

## Usage Examples

### 1. Global Background (Layout)
The ParticleBackground is already applied globally in `layout.tsx`:
```tsx
<ParticleBackground />
<div className="bg-gradient-light dark:bg-gradient-dark">
  {/* Content */}
</div>
```

### 2. Text Colors
```tsx
{/* Light/Dark aware text */}
<p className="text-light-text dark:text-dark-text">
  Main heading
</p>

{/* Secondary text */}
<p className="text-light-text-secondary dark:text-dark-text-secondary">
  Supporting text
</p>
```

### 3. Card Components
```tsx
{/* Basic card */}
<div className="card">Content</div>

{/* Glass effect card */}
<div className="card-glass">Content</div>

{/* Gradient card */}
<div className="card-gradient">Content</div>

{/* With hover animation */}
<div className="card card-hover">Content</div>
```

### 4. Buttons
```tsx
{/* Primary button */}
<button className="btn-primary">Action</button>

{/* Secondary button */}
<button className="btn-secondary">Action</button>

{/* Custom gradient button */}
<button className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-6 py-3 rounded-xl">
  Click me
</button>
```

### 5. Gradient Text
```tsx
<span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
  Gradient Text
</span>
```

### 6. Color Classes
```tsx
{/* Primary colors */}
<div className="text-primary-500 dark:text-primary-400">Primary</div>
<div className="bg-primary-50 dark:bg-primary-900/20">Primary Background</div>

{/* Secondary colors */}
<div className="text-secondary-500 dark:text-secondary-400">Secondary</div>

{/* Light/Dark surface colors */}
<div className="bg-light-secondary dark:bg-dark-secondary">Surface</div>
<div className="border border-light-border dark:border-dark-border">Bordered</div>
```

## Theme Toggle Hook

The theme is managed by `ThemeContext` and persisted to localStorage:

```tsx
import { useTheme } from '@/context/ThemeContext';

export default function MyComponent() {
  const { theme, toggleTheme, colors } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}
```

### Available from Context:
- `theme`: 'light' | 'dark'
- `toggleTheme()`: Switches between light/dark mode
- `colors`: Color palette object with all theme colors

## ParticleBackground Auto-Sync

The `ParticleBackground` component automatically syncs with theme changes:
- Light theme: Blue/purple particles on white background
- Dark theme: Purple/violet particles on dark background

No additional configuration needed - it watches the `useTheme()` hook.

## Scrollbar Styling

Custom scrollbar colors automatically match the theme:
```css
Light theme: Purple gradient
Dark theme: Brighter purple gradient
```

## Selection Colors

Text selection automatically uses theme-aware colors:
```css
Light: #667eea with 25% opacity
Dark: #8b5cf6 with 35% opacity
```

## Tailwind Color Utilities

All Tailwind color utilities support the new palette:

```tailwind
text-primary-500       /* Uses new primary color */
bg-secondary-50        /* Uses new secondary shades */
border-light-border    /* Light theme border */
dark:border-dark-border /* Dark theme border */
```

## Smooth Transitions

All theme changes use smooth transitions (300ms):
```css
transition-colors duration-300 ease-in-out
```

Applied globally to all elements via globals.css.

## Performance Optimizations

✅ Reduced motion support
✅ FPS-limited particle system
✅ Memoized theme toggle component
✅ Layout shift prevention (`prevent-layout-shift` class)
✅ Lazy loading support for images

## Migration Checklist

When updating existing components:
- [ ] Replace `bg-gray-*` with `bg-light-*` / `bg-dark-*`
- [ ] Replace `text-gray-*` with `text-light-text-*` / `text-dark-text-*`
- [ ] Update border colors to use new palette
- [ ] Test dark mode toggle
- [ ] Verify scroll behavior on mobile
- [ ] Check particle animation performance

## Browser Support

✅ Chrome/Edge 90+
✅ Firefox 88+
✅ Safari 14+
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Files Modified

- `src/app/layout.tsx` - Updated to use new theme colors
- `src/app/home/page.tsx` - Example of updated component
- `src/components/Header.tsx` - Navigation with new colors
- `src/components/ThemeToggle.tsx` - Enhanced with new gradients
- `src/components/ParticleBackground.tsx` - Updated particle colors
- `src/context/ThemeContext.tsx` - New color palette
- `src/styles/globals.css` - Updated scrollbar and selection colors
- `tailwind.config.js` - Extended with new colors and gradients
