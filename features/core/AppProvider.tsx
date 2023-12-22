'use client'
import {
	Dispatch,
	FC,
	PropsWithChildren,
	RefObject,
	SetStateAction,
	createContext,
	createRef,
	useContext,
	useRef,
	useState,
} from 'react'
import Term from '../term/Term'
import HomeContent, { HomeContentStage } from './HomeContent'
import { useRouter } from 'next/navigation'

type AppRouterInstance = ReturnType<typeof useRouter>

// AppCtx holds everything that used to be manually passed to Routes
// in the old create-react-app site (except "title")
type AppCtx = {
	termRef: RefObject<Term>
	stage: HomeContentStage
	needsRestage: boolean
	setStage: Dispatch<SetStateAction<HomeContentStage>>
	setHomeStage: () => void
	setNeedsRestage: Dispatch<SetStateAction<boolean>>
	history: AppRouterInstance
}

const AppContext = createContext<AppCtx>({
	termRef: createRef(),
	stage: 'intro',
	needsRestage: false,
	setStage: () => undefined,
	setHomeStage: () => undefined,
	setNeedsRestage: () => undefined,
	history: {} as AppRouterInstance,
})

export const AppProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
	const termRef = useRef<Term>(null)
	const [stage, setStage] = useState<HomeContentStage>('intro')
	const [needsRestage, setNeedsRestage] = useState<boolean>(false)
	const setHomeStage = () => {
		if (needsRestage) {
			// restage solves some issues with bg video not playing
			// after returning to the page on mobile by briefly
			// disabling the video
			setStage('intro')
			setTimeout(() => setStage('thrive1'), 16)
		} else {
			setStage('thrive1')
		}
	}
	const history = useRouter()

	return (
		<AppContext.Provider
			value={{
				termRef,
				stage,
				needsRestage,
				setStage,
				setHomeStage,
				setNeedsRestage,
				history,
			}}
		>
			<Term ref={termRef} />
			{children}
			<HomeContent
				stage={stage}
				style={{ zIndex: -10 }}
				className='bg-gray-700 fixed left-0 top-0 h-full w-full object-cover object-center'
				setNeedsRestage={setNeedsRestage}
			/>
		</AppContext.Provider>
	)
}

export const useApp = () => useContext(AppContext)
