import TermLink from 'components/TermLink'

const base = { to: '/songs-and-poems', title: 'Songs and Poems' }

const links = [
	{ to: `${base.to}/given-time`, title: 'Given Time' },
	{ to: `${base.to}/a-mighty-growing`, title: 'A Mighty Growing' },
	{ to: `${base.to}/my-winds`, title: 'My Winds', hidden: true },
	{ to: `${base.to}/bompa`, title: 'Bompa' },
]
export default links

export const linkForPath = (path: string) => {
	let ii = 0
	for (ii = 0; ii < links.length; ii++) {
		if (links[ii].to === path) {
			break
		}
	}
	return links[ii % links.length]
}

type RelativeLinksOpts = {
	ended?: boolean
	nextTitle?: string
}
export const relativeLinks = (path: string, opts: RelativeLinksOpts = {}) => {
	const { ended, nextTitle } = opts
	let ii = 0
	for (ii = 0; ii < links.length; ii++) {
		if (links[ii].to === path) {
			break
		}
	}
	const prev = (ii + links.length - 1) % links.length
	const next = (ii + 1) % links.length
	const elems = [
		<TermLink key='link-0' to={base.to} soft>
			&lt; {base.title}
		</TermLink>,
	]
	if (ii !== 0) {
		elems.push(
			<TermLink key='link-1' to={links[prev].to} soft>
				Prev
			</TermLink>,
		)
	}
	if (ii !== links.length - 1) {
		elems.push(
			<TermLink key='link-2' to={links[next].to} soft={!ended}>
				{nextTitle || 'Next'}
			</TermLink>,
		)
	}
	return elems
}
