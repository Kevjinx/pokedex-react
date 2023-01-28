import store from './store'
import * as createAction from './actionCreator'

console.log(store)
console.log(createAction)

const unsubscribe = store.subscribe(() => {
	console.log('store changed: ', store.getState());
})

store.dispatch(createAction.pokemonAddedToTeam(1))
store.dispatch(createAction.pokemonAddedToTeam(2))

store.dispatch(createAction.pokemonRemovedFromTeam(1))

unsubscribe()