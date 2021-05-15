/* MIT License

Copyright (c) 2019 Cam Wiegert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

// via https://github.com/camwiegert/typical/blob/master/typical.js
// modifications: convert to typescript, add 'speed' and 'canceled' parameters

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
