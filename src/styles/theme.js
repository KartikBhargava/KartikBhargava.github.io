// Modern Color Theme System - Add this to a new file: src/styles/theme.js

export const modernTheme = {
  light: {
    // Primary colors
    primary: '#3b82f6',      // Modern blue
    primaryHover: '#2563eb',
    primaryLight: '#dbeafe',
    
    // Background colors
    background: '#ffffff',    // Pure white background
    surface: '#ffffff',      // Card backgrounds
    surfaceHover: '#f8fafc', // Subtle hover state
    
    // Text colors
    text: '#0f172a',         // Rich dark text
    textSecondary: '#64748b', // Muted text
    textLight: '#94a3b8',    // Light gray text
    
    // Border colors
    border: '#e2e8f0',       // Light borders
    borderLight: '#f1f5f9',  // Very light borders
    
    // Status colors
    success: '#10b981',      // Green
    warning: '#f59e0b',      // Orange
    error: '#ef4444',        // Red
    info: '#3b82f6',         // Blue
    
    // Gradients
    gradientPrimary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradientSecondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    gradientSuccess: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  },
  
  dark: {
    // Primary colors
    primary: '#60a5fa',      // Lighter blue for dark mode
    primaryHover: '#3b82f6',
    primaryLight: '#1e3a8a',
    
    // Background colors
    background: '#0f172a',   // Rich dark background
    surface: '#1e293b',      // Card backgrounds
    surfaceHover: '#334155', // Hover state
    
    // Text colors
    text: '#f8fafc',         // Light text
    textSecondary: '#cbd5e1', // Muted light text
    textLight: '#94a3b8',    // Gray text
    
    // Border colors
    border: '#334155',       // Dark borders
    borderLight: '#475569',  // Lighter dark borders
    
    // Status colors
    success: '#34d399',      // Lighter green
    warning: '#fbbf24',      // Lighter orange
    error: '#f87171',        // Lighter red
    info: '#60a5fa',         // Lighter blue
    
    // Gradients
    gradientPrimary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    gradientSecondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    gradientSuccess: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  }
}

// Helper function to get current theme
export const getTheme = (darkMode = false) => {
  return darkMode ? modernTheme.dark : modernTheme.light
}