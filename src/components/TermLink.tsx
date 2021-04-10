import React, { MouseEventHandler } from 'react'
import { Link } from 'react-router-dom'

const linkClasses = [
	'text-white',
	'font-mono',
	'underline',
	'md:hover:no-underline',
	'py-3',
	'px-6',
	'text-md',
	'rounded-md',
].join(' ')
const linkClassesSoft =
	linkClasses +
	' ' +
	['bg-gray-700', 'md:hover:bg-gray-500', 'bg-opacity-80', 'md:hover:bg-opacity-80'].join(' ')
const linkClassesHard =
	linkClasses +
	' ' +
	['bg-purple-900', 'md:hover:bg-purple-700', 'bg-opacity-80', 'md:hover:bg-opacity-80'].join(' ')

type Props = { to: string; soft?: boolean }

const TermLink: React.FC<Props> = ({ children, to, soft }) => (
	<Link to={to} className={soft ? linkClassesSoft : linkClassesHard} style={{ zIndex: 10 }}>
		{children}
	</Link>
)

export default TermLink

type ActionProps = { onClick: MouseEventHandler<HTMLAnchorElement>; soft?: boolean }
export const TermAction: React.FC<ActionProps> = ({ children, onClick, soft }) => (
	<a
		href='#play'
		className={soft ? linkClassesSoft : linkClassesHard}
		onClick={onClick}
		style={{ zIndex: 10 }}
	>
		{children}
	</a>
)
