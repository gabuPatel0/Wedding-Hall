import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(imagePath: string): string {
  // For GitHub Pages deployment, we need to include the base path
  const basePath = process.env.NODE_ENV === 'production' ? '/Wedding-Hall' : ''
  
  // If the path already starts with the base path, return as is
  if (imagePath.startsWith('/Wedding-Hall/')) {
    return imagePath
  }
  
  // If it's a relative path starting with './', remove the './' and add base path
  if (imagePath.startsWith('./')) {
    return `${basePath}/${imagePath.slice(2)}`
  }
  
  // If it's an absolute path starting with '/', add base path
  if (imagePath.startsWith('/')) {
    return `${basePath}${imagePath}`
  }
  
  // For any other case, add base path and ensure proper formatting
  return `${basePath}/${imagePath}`
}
