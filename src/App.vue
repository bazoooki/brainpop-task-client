<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 850px;
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
}
.text-xs	{
  font-size: 0.75rem; /* 12px */
  line-height: 1rem; /* 16px */
}
.icon-btn {
  cursor: pointer;
  background: none;
  color: #0f766e;
  border: none;
  font-weight: bolder;
}

</style>
