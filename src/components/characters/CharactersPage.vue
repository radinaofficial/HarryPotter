<template>
  <div class="container">
     <b-form-input class="search-bar" type="text" v-model="search" placeholder="Search"></b-form-input>
    <div class="select-box">
      <span>Blood Status: </span>
      <select v-model="blood">
        <option value=""></option>
        <option value="pure-blood">Pure-Blood</option>
        <option value="half-blood">Half-Blood</option>
        <option value="muggle-born">Muggle-born</option>
        <option value="unknown">Uknown</option>
      </select>
      <span>Species: </span>
      <select v-model="species">
        <option value=""></option>
        <option value="human">Human</option>
        <option value="ghost">Ghost</option>
        <option value="house-elf">House-elf</option>
        <option value="other">Other</option>
      </select>
    </div>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>House</th>
          <th>Role</th>
          <th>Speices</th>
          <th>Blood Satus</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="el in filteredElements" :key="el.id">
          <td>{{ el.name }}</td>
          <td>{{ el.house }}</td>
          <td>{{ el.role }}</td>
          <td>{{ el.species }}</td>
          <td>{{ el.bloodStatus }}</td>
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
      blood: '',
      species: ''
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
          return element.name.toLowerCase().match(this.search.toLowerCase()) && element.bloodStatus.match(this.blood) && (this.species == 'other' ? !element.species.match('human|ghost|house-elf') : element.species.match(this.species))
        });
    }
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
