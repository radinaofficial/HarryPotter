<template>
  <div class="container">
    <b-form-input class="search-bar" type="text" v-model="search" placeholder="Search"></b-form-input>
      <div class="select-box">
      <span>Search by type: </span>
      <select v-model="spellType">
        <option value=""></option>
        <option value="Charm">Charm</option>
        <option value="Curse">Curse</option>
        <option value="Spell">Spell</option>
        <option value="Other">Other</option>
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>Spell</th>
          <th>Type</th>
          <th>Effect</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="spell in filteredSpells" :key="spell.id">
          <td>{{ spell.spell }}</td>
          <td>{{ spell.type }}</td>
          <td>{{ spell.effect }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'SpellsPage',
  data() {
    return {
      search: '',
      spellType: ''
    }
  },
  computed: {
    ...mapGetters([
      'spell',
      'spells',
      'singleElement',
      'base',
      'key'
    ]),
    filteredSpells: function() {
      return this.spells.filter((spell) => {
          return spell.spell.toLowerCase().match(this.search.toLowerCase()) && (this.spellType == 'other' ? !spell.type.match('Charm|Curse|Spell') : spell.type.match(this.spellType))
        });
    }
  },
  mounted() {
    this.fetchSpells()
  },
  methods: {
    ...mapActions([
      'fillSpells',
      'fillSingleSpell',
    ]),
    fetchSpells() {
      const base = this.base
      const key = this.key
      fetch(`${base}/spells?key=${key}`)
      .then(resp => resp.json())
      .then(obj => {
        this.fillSpells(obj)
      })
    }
  }
}
</script>
