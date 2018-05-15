const inc = action => ({ type: 'INCREMENT', action })
const dec = action => ({ type: 'DECREMENT', action })
const reset = action => ({ type: 'RESET', action })
export {
    inc,
    dec,
    reset
}