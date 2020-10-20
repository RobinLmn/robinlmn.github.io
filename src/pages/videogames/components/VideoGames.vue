<template>
    <videogames>
        <div class="name">
            Game Development Projects  
        </div> 
        <VideoGameProject title="Game Development Projects" :items="videogamesproject" />
    </videogames>
</template>

<script>
import VideoGameProject from './VGProject';

export default {
  name: 'VideoGames',
  components: {
      VideoGameProject
  },
    data () {
    return {
    }
    }
}
</script>

<style>
@import '../../../style.css';
@import 'vg_style.css';
</style>