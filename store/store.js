import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        base: 'https://www.potterapi.com/v1',
        key: '$2a$10$0c7sXQRBFUWFyyH/dgq83.WcNWe3mdVNMdP/qHblrKRPVWaCd8GLq',
        elements: [],
        element: [],
        spells: [],
        spell: [],
        house: [],
        houses: [],
    },

    getters: {
        elements: state => state.elements,
        singleSpell: state => state.spell,
        spells: state => state.spells,
        singleElement: state => state.element,
        base: state => state.base,
        key: state => state.key,
        house: state => state.house,
        houses: state => state.houses
    },

    mutations: {
        FILL_ELEMENTS(state, elements) {
            state.elements = elements
        },
        FILL_SINGLE_ELEMENT(state, element) {
            state.element = element
        },
        FILL_SPELLS(state, spells) {
            state.spells = spells
        },
        FILL_SINGLE_SPELL(state, spell) {
            state.spell = spell
        },
        FILL_HOUSES(state, houses) {
            state.houses = houses
        },
        FILL_SINGLE_HOUSE(state, house) {
            state.house = house
        }
    },

    actions: {
        fillElements(ctx, elements) {
            ctx.commit('FILL_ELEMENTS', elements)
        },
        fillSignleElement(ctx, element) {
            ctx.commit('FILL_SINGLE_ELEMENT', element)
        },
        fillSpells(ctx, spells) {
            ctx.commit('FILL_SPELLS', spells)
        },
        fillSingleSpell(ctx, spell) {
            ctx.commit('FILL_SPELLS', spell)
        },
        fillHouses(ctx, houses) {
            ctx.commit('FILL_HOUSES', houses)
        },
        fillSingleHouse(ctx, house) {
            ctx.commit('FILL_SINGLE_HOUSE', house)
        }
    }
})