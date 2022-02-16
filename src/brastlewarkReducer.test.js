import { brastlewarkReducer } from './store/brastlewark/reducers'
import { brastlewarkFilterAge } from './store/brastlewark/actions'
import { brastlewarkInit } from './store/brastlewark/actions'
import { brastlewarkFilterHairColor } from './store/brastlewark/actions'
const state = [
    {"id":0,"name":"Tobus Quickwhistle","thumbnail":"http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg","age":306,"weight":39.065952,"height":107.75835,"hair_color":"Pink","professions":["Metalworker","Woodcarver","Stonecarver"," Tinker","Tailor","Potter"],"friends":["Cogwitz Chillwidget","Tinadette Chillbuster"]},
    {"id":1,"name":"Fizkin Voidbuster","thumbnail":"http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg","age":288,"weight":35.279167,"height":110.43628,"hair_color":"Green","professions":["Brewer","Medic","Prospector","Gemcutter","Mason","Tailor"],"friends":[]},
]

test('returns all items', () => {
    const newStateaAll = brastlewarkReducer(state, brastlewarkInit)
    expect(newStateaAll).toHaveLength(2)
})

test('returns fitered items by age', () => {
    const newFilteredState = brastlewarkReducer(state, brastlewarkFilterAge(200, 300))
    expect(newFilteredState).toHaveLength(1)
})

test('returns fitered items by hair color', () => {
    const newFilteredState = brastlewarkReducer(state, brastlewarkFilterHairColor('Pink'))
    expect(newFilteredState).toHaveLength(1)
})