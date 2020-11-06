function saveState (state) {
    localStorage.setItem('state', JSON.stringify(state))
}

function getState () {
    const state = localStorage.getItem('state') || '[]'
    return JSON.parse(state)
}