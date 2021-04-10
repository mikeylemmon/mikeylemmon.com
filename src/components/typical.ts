// via https://github.com/camwiegert/typical/blob/master/typical.js
// modified to add 'speed' parameter and convert to typescript

type TyperProps = { canceled: boolean }
export async function typer(props: TyperProps, node: any, ...args: any) {
	let ss = 75
	let didFirstWrite = false
	for (const arg of args) {
		if (!node) {
			return
		}
		if (props.canceled) {
			// node.textContent += '^C'
			return
		}
		switch (typeof arg) {
			case 'string':
				if (!didFirstWrite) {
					node.textContent = ''
					didFirstWrite = true
				}
				await edit(props, node, ss, arg)
				break
			case 'number':
				await wait(arg)
				break
			case 'function':
				await arg(node, ss, ...args)
				break
			case 'object':
				if (typeof arg.speed === 'number') {
					ss = arg.speed
				} else {
					console.warn('[typical] Unknown param:', arg)
				}
				break
			default:
				await arg
		}
	}
}

async function edit(props: TyperProps, node: any, speed: number, text: string) {
	const overlap = getOverlap(node.textContent, text)
	await perform(props, node, speed, [...deleter(node.textContent, overlap), ...writer(text, overlap)])
}

async function wait(ms: number) {
	await new Promise(resolve => setTimeout(resolve, ms))
}

async function perform(props: TyperProps, node: any, speed: number, edits: any) {
	const ss = speed <= 0 ? -speed : speed + speed * (Math.random() - 0.5)
	for (const op of editor(ss, edits)) {
		if (props.canceled) {
			return
		}
		op(node)
		if (ss) {
			await wait(ss)
		}
	}
}

export function* editor(speed: number, edits: any) {
	for (const edit of edits) {
		if (speed) {
			yield (node: any) => requestAnimationFrame(() => (node.textContent = edit))
		} else {
			yield (node: any) => (node.textContent = edit)
		}
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
