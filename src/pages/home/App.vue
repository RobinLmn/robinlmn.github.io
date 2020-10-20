<template>
 <div id="app">
   <header>
      <Menu />
   </header>
    <Title />
    <Intro />
 </div>
</template>

<script>

import Menu from '../../components/Menu'
import Title from '../../components/Title'
import Intro from '../../components/Intro'

export default {
  name: 'App',
  components: {
    Title,
    Menu,
    Intro
  }
}

</script>

<style>
@import '../../style.css';
</style>
