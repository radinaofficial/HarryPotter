<template>
  <div class="container">
     <b-form-input class="search-bar" type="text" v-model="search" placeholder="Search"></b-form-input>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Head of house</th>
          <th>Mascot</th>
          <th>Founder</th>
          <th>House ghost</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="el in filteredHouses" :key="el.id">
          <td :class="el.name">{{ el.name }}</td>
          <td :class="el.name">{{ el.headOfHouse }}</td>
          <td :class="el.name">{{ el.mascot }}</td>
          <td :class="el.name">{{ el.founder }}</td>
          <td :class="el.name">{{ el.houseGhost }}</td>
        </tr>
      </tbody>
    </table>
    <div class="select-box">
      <span>Search by house: </span>
      <select v-model="members">
        <option value=""></option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </select>
    </div>
    <table>
      <tbody>
        <tr v-for="el in filteredByHouse" :key="el.id">
          <td :class="el.house">{{ el.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'HousesPage',
  data() {
    return {
      search: '',
      members: ''
    }
  },
  computed: {
    ...mapGetters([
      'houses',
      'elements',,
      'signleElement',
      'singleHouse',
      'base',
      'key',
    ]),
    filteredHouses: function() {
      return this.houses.filter((house) => {
          return house.name.toLowerCase()
        });
    },
    filteredByHouse: function() {
      return this.elements.filter((element) => {
          return ((element.house) ? element.house.match(this.members) : element.house) && element.name.toLowerCase().match(this.search.toLowerCase())
        });
    }
  },
  mounted() {
    this.fetchElements(),
    this.fetchMembers()
  },
  methods: {
    ...mapActions([
      'fillHouses',
      'fillElements',
      'fillSingleHouse',
    ]),
    fetchElements() {
      const base = this.base
      const key = this.key
      fetch(`${base}/houses?key=${key}`)
      .then(resp => resp.json())
      .then(obj => {
        this.fillHouses(obj)
      })
    },
    fetchMembers() {
      const base = this.base
      const key = this.key
      fetch(`${base}/characters?key=${key}`)
      .then(resp => resp.json())
      .then(obj => {
        this.fillElements(obj)
      })
    },
  }
}
</script>
