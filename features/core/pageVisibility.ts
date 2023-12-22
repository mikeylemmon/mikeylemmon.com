import { useEffect, useState } from 'react'
// via https://blog.sethcorker.com/harnessing-the-page-visibility-api-with-react

const document = typeof window !== 'undefined' ? window.document : ({} as any)

export function browserVisibilityEvent() {
	if (typeof document.hidden !== 'undefined') {
		return 'visibilitychange'
	} else if (typeof (document as any).msHidden !== 'undefined') {
		return 'msvisibilitychange'
	} else if (typeof (document as any).webkitHidden !== 'undefined') {
		return 'webkitvisibilitychange'
	}
	return 'visibilitychange'
}

export function browserDocumentHiddenProp() {
	if (typeof document.hidden !== 'undefined') {
		return 'hidden'
	} else if (typeof (document as any).msHidden !== 'undefined') {
		return 'msHidden'
	} else if (typeof (document as any).webkitHidden !== 'undefined') {
		return 'webkitHidden'
	}
	return 'hidden'
}

export function isDocumentVisible() {
	const doc = document as any
	if (typeof doc[browserDocumentHiddenProp()] === 'undefined') {
		return false
	}
	return !doc[browserDocumentHiddenProp()]
}

export function usePageVisibility(setNeedsRestage: (val: boolean) => void) {
	const [isVisible, setIsVisible] = useState(isDocumentVisible())
	const onVisibilityChange = () => {
		const isVis = isDocumentVisible()
		console.log(`Visibility changed to ${isVis}`)
		setNeedsRestage(true)
		setIsVisible(isVis)
	}
	useEffect(() => {
		const visibilityChange = browserVisibilityEvent()
		document.addEventListener(visibilityChange, onVisibilityChange, false)
		return () => {
			document.removeEventListener(visibilityChange, onVisibilityChange)
		}
	})
	return isVisible
}
