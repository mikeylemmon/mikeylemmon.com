import { MutableRefObject } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { HomeContentStage } from 'components/HomeContent'
import Term from 'components/Term'

export type PageProps = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setHomeStage: () => void
}

export type PagePropsSetStage = RouteComponentProps & {
	termRef: MutableRefObject<Term | null>
	setStage: (stage: HomeContentStage) => void
}
