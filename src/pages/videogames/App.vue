<template>
 <div id="app">
    <header>
      <Menu />
   </header>
    <Title />
    <VideoGames />
 </div>
</template>

<script>
import Menu from '../../components/Menu'
import Title from '../../components/Title'
import VideoGames from './components/VideoGames'

export default {
  name: 'App',
  components: {
    Title,
    Menu,
    VideoGames
  }
}

</script>

<style>
@import '../../style.css';
</style>

