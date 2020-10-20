<template> 
    <vg>
            <div class="videogames">
            <div class="p"><p>Here are the video games I worked on, with a demo video (or build if you want to bring out
                your inside gamer) and the source code. I don't have that much video game projects, but I still wanted to learn and experience on a search bar 
                feature on Vue.js, so feel free to search for one of the games with it :)
                </p></div>
            <div class="searchBar">
                <input type="text" v-model="search" placeholder="Search Project.."/>
            </div>
            <center>
            <div class="vgList">
                <div class="vgElement" v-for="(vg,i) in filteredList" :key="i">
                       <div class="title"><div class="menu-item">{{ vg.title }}</div></div>
                        <a href='#' @click="vg.isOpen = !vg.isOpen">
                        <img v-bind:src="vg.img" width="200" height="170" /> <br>
                     </a>
                     <div class="links" v-if="vg.isOpen">
                       <menu>
                       <div class="menu-item"><a v-bind:href="vg.demo" target="_blank">Demo</a></div>
                       <div class="menu-item"><a v-bind:href="vg.code" target="_blank">Code</a></div>
                       </menu>
                     </div>
                 </div>
            </div>
            </center>
    </div>
    </vg>
</template>

<script>
import mars from './assets/marssurvival.png';
import tron from './assets/tron.png';
import getout from './assets/getout.png';

export default {
  name: 'VideoGameProject',
  components: {
  },
  data() {
      return {
      search: '',
      vgs : [
        new VG(
          'Get Out',
          '',
          getout,
          'https://github.com/filrod/UbisoftGameLabMcGill_2',
          'https://www.youtube.com/watch?v=zZE3vkKtanM',
        ),
        new VG(
          'Mars Survival',
          '',
          mars,
          'https://github.com/RobinLmn/MC-Mars-Survival',
          'https://robinlmn.itch.io/mars-survival',
        ),
        new VG(
          'Tron Game',
          '',
          tron,
          'https://github.com/RobinLmn/TronGame',
          'https://robinlmn.itch.io/tron',
        )
      ]
    }
  },
    computed: {
      filteredList() {
        return this.vgs.filter(vg => {
          return vg.title.toLowerCase().includes(this.search.toLowerCase()) 
          || vg.description.toLowerCase().includes(this.search.toLowerCase())
        })
      }
    }
}

class VG {
  constructor(title, description, img, code, demo) {
    this.title = title;
    this.demo = demo;
    this.code = code;
    this.description = description;
    this.img = img;
    this.isOpen = false;
  }
}

</script>

<style>
@import "../../../style.css";
@import 'vg_style.css';
</style>