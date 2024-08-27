console.clear()

// Print values between min and max without zero

function range (min, max) {
  const doNotPrintZero = 1
  setInterval(() => {
    console.log(
      Math.floor(Math.random() * (max - min)) + doNotPrintZero
    )
  }, 1000)
}

range(1, 100)
