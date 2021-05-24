import { MutableRefObject, useEffect } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'

export const BaseTitle = "Mikey's Website"

export const useTitle = (title: string) =>
	useEffect(() => {
		document.title = `${title}`
	}, [title])

export type PagePropsCommon = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	title: string
}

export type PageProps = PagePropsCommon & {
	setHomeStage: () => void
}

export type PagePropsSetStage = PagePropsCommon & {
	setStage: (stage: HomeContentStage) => void
}
