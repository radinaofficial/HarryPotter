<template>
  <b-navbar toggleable="md" type="dark" variant="warning">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item id="main-page" to="/">Characters</b-nav-item>
          <b-nav-item to="/houses">Hauses</b-nav-item>
          <b-nav-item to="/spells">Spells</b-nav-item>
          <b-nav-item to="/orders">Orders</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
  export default {
  };
</script>
