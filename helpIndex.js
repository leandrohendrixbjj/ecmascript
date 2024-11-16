const API_URL = 'http://localhost:3000'
let abortController = new AbortController()

const [
  start,
  stop,
  cards
] = ['start', 'stop', 'cards'].map(item => document.getElementById(item))

start.addEventListener('click', async () => {
  try {
    const readable = await consumeAPI(abortController.signal)
    // add signal and await to handle the abortError exception after abortion
    await readable.pipeTo(appendToHTML(cards), { signal: abortController.signal })
  } catch (error) {
    if (!error.message.includes('abort')) throw error
  }
})

stop.addEventListener('click', () => {
  abortController.abort()
  console.log('aborting...')
  abortController = new AbortController()
})

async function consumeAPI(signal) {
  const response = await fetch(API_URL, {
    signal
  })
  const reader = response.body
    .pipeThrough(new TextDecoderStream())
    .pipeThrough(parseNDJSON())
  return reader
}

function parseNDJSON() {
  return new TransformStream({
    async transform(chunk, controller) {
      for (const item of chunk.split('\n')) {
        try {
          controller.enqueue(JSON.parse(item))
        } catch (error) {
          console.error('Error', error)
        }
      }
    }
  })
}

function appendToHTML(element) {
  let elementsCounter = 0
  return new WritableStream({
    write({ title }) {
      const card = `
      <article>
        <div class="text">
          <h3>${title}</h3>          
        </div>
      </article>
      `
      if (++elementsCounter > 20) {
        element.innerHTML = card
        elementsCounter = 0
        return
      }

      element.innerHTML += card
    },
    abort(reason) {
      console.log('aborted**', reason)
    }
  })
}

// this function will make shure that if two chunks come from a single transmission
// convert it split it in break lines
// given:{}\n{}
// should be:
//    {}
//    {}
