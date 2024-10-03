console.clear()

const a = new Promise((resolve) => {
  setTimeout(resolve,500,'A')
})

const b = new Promise((resolve,reject) => {
  setTimeout(reject,200,'B')
})

const c = new Promise((resolve) => {
  setTimeout(resolve,300,'C')
})


Promise.race([a,b,c])
.then(resp => console.log(resp))
.catch(error => console.log(error))