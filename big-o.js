const nemo = ['nemo'];

export function findNemo(array) {
  for(let i = 0; i < array.length; i++) {
    if(array[i] === 'nemo') {
      console.log('Nemo found!')
    }
  }
}
