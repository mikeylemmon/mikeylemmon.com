import { AppProvider } from '@/features/core/AppProvider'
import type { Metadata } from 'next'
import { Inter, Noto_Sans_Mono } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-inter',
})

const notoMono = Noto_Sans_Mono({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-noto-mono',
})

const sweden = localFont({
	src: './SwedenSansRegular.woff2',
	display: 'swap',
	variable: '--font-sweden',
})

const swedenBold = localFont({
	src: './SwedenSansBold.woff2',
	display: 'swap',
	variable: '--font-sweden-bold',
})

const fontClasses = [inter.variable, notoMono.variable, sweden.variable, swedenBold.variable].join(' ')

export const metadata: Metadata = {
	title: "Mikey's Website",
	description: 'The very impressive website of Mikey Lemmon',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className={fontClasses}>
			<body>
				<AppProvider>{children}</AppProvider>
			</body>
		</html>
	)
}
