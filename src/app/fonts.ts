import localFont from 'next/font/local'

// Gilroy Font Configuration for TTF files
export const gilroy = localFont({
  src: [
    {
      path: './fonts/Gilroy-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Gilroy-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-gilroy',
  display: 'swap',
  fallback: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
})

// Export individual weight classes for easy usage
export const gilroyClasses = {
  regular: `${gilroy.variable} font-gilroy font-normal`,
  medium: `${gilroy.variable} font-gilroy font-medium`,
  semibold: `${gilroy.variable} font-gilroy font-semibold`,
  bold: `${gilroy.variable} font-gilroy font-bold`,
}
