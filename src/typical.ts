// via https://github.com/camwiegert/typical/blob/master/typical.js
// modified to add 'speed' parameter and convert to typescript

export async function typer(node: any, speed: number, ...args: any) {
	for (const arg of args) {
		switch (typeof arg) {
			case 'string':
				await edit(node, speed, arg)
				break
			case 'number':
				await wait(arg)
				break
			case 'function':
				await arg(node, speed, ...args)
				break
			default:
				await arg
		}
	}
}

async function edit(node: any, speed: number, text: string) {
	const overlap = getOverlap(node.textContent, text)
	await perform(node, speed, [...deleter(node.textContent, overlap), ...writer(text, overlap)])
}

async function wait(ms: number) {
	await new Promise(resolve => setTimeout(resolve, ms))
}

async function perform(node: any, speed: number, edits: any) {
	for (const op of editor(edits)) {
		op(node)
		await wait(speed + speed * (Math.random() - 0.5))
	}
}

export function* editor(edits: any) {
	for (const edit of edits) {
		yield (node: any) => requestAnimationFrame(() => (node.textContent = edit))
	}
}

export function* writer([...text]: string, startIndex = 0, endIndex = text.length) {
	while (startIndex < endIndex) {
		yield text.slice(0, ++startIndex).join('')
	}
}

export function* deleter([...text], startIndex = 0, endIndex = text.length) {
	while (endIndex > startIndex) {
		yield text.slice(0, --endIndex).join('')
	}
}

export function getOverlap(start: string, [...end]: string) {
	return [...start, NaN].findIndex((char, i) => end[i] !== char)
}
