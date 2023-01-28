const store = require('./store')
const createAction = require('./actionCreator')

const unsubscribe = store.subscribe(() => {
	console.log('store changed: ', store.getState());
})




store.dispatch(createAction.pokemonAddedToTeam(1))
store.dispatch(createAction.pokemonAddedToTeam(2))

store.dispatch(createAction.pokemonRemovedFromTeam(1))

unsubscribe()