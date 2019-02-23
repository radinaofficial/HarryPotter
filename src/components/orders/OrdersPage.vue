<template>
  <div class="container">
    <b-form-input class="search-bar" type="text" v-model="search" placeholder="Search"></b-form-input>
    <div>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Order Of The Phoenix</th>
          <th>Dumbledores Army</th>
          <th>Death Eater</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="el in filteredElements" :key="el.id">
          <td>{{ el.name }}</td>
          <td>{{ el.orderOfThePhoenix }}</td>
          <td>{{ el.dumbledoresArmy }}</td>
          <td>{{ el.deathEater }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CharactersPage',
  data() {
    return {
      search: '',
      blood: ''
    }
  },
  computed: {
    ...mapGetters([
      'elements',
      'singleElement',
      'base',
      'key',
    ]),
    filteredElements: function() {
      return this.elements.filter((element) => {
          return element.name.toLowerCase().match(this.search.toLowerCase())
        });
    },
  },
  mounted() {
    this.fetchElements()
  },
  methods: {
    ...mapActions([
      'fillElements',
      'fillSignleElement',
    ]),
    fetchElements() {
      const base = this.base
      const key = this.key
      fetch(`${base}/characters?key=${key}`)
      .then(resp => resp.json())
      .then(obj => {
        this.fillElements(obj)
      })
    }
  }
}
</script>
