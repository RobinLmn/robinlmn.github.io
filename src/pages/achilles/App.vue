<template>
 <div id="app">
       <header>
      <Menu />
   </header>
    <Title />

<videogames>
    <div class="name">
      Achilles - A 3D Physics Engine
    </div>
    </videogames>
    <introtext>
    <div class="intro">
      In September 2020, <a href="https://www.gamedevmcgill.ca" target="_blank">GameDev McGill</a> started one of its biggest project; creating a free and open source 3D game engine based on the
      Entity Component System (ECS) architecture. The Scarlet Engine was still missing one key feature: movement. 
      <br></br>
      I created Achilles as a Physics Engine for Scarlet, and all of the demos shown below were made
      on this engine. It is however versatile enough to be applied to any other render engine. Since Scarlet is made in ECS, Achilles follows the same architecture.
      <br></br>
      You can find the source code of the engine <a href="https://github.com/Scarlet-Engine-Team-GameDev-McGill/Scarlet-Engine" target="_blank">here</a>.
    </div>
    </introtext>

    <br></br> 
    <videogames>
    <div class="name">
      Dynamics
    </div>
    </videogames>
    <introtext>
    <div class="intro">
      The first step of the engine is to create physically based movement. This was done using the Euler Integration, aka high-school level physics with Newton's Second Law.
      The movement is based on the forces that you apply: you add a force to your objects to make them move accordingly.
      <br></br>
      This is enough to simulate basic solar systems such as below.
      <br></br>
      <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/VLL_EYNJ-B8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </center>
      </div>
    </introtext>

    <br></br>
    <videogames>
    <div class="name">
      Collision Detection and Collision Response
    </div>
    </videogames>
    <introtext>
    <div class="intro">
      Once you have dynamics, an important feature of a physics engine is collisions. I implemented discrete collision detection for basic shapes such as spheres, planes and AABBs. Once a collision is detected,
      collision response is used to reflect the velocitiies of the objects along the collision normal. A way of improving this type of collision is to make them continuous. This interpolates the collision in case 
      it happens in between two frames. Custom shapes collisions can be implemented with raycasts.
      <br></br>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4atD1sCYKqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      &nbsp;
     <iframe width="560" height="315" src="https://www.youtube.com/embed/K5Abe1FOYZs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </introtext>

    <br></br>
    <videogames>
    <div class="name">
      Softbodies
    </div>
    </videogames>
    <introtext>
    <div class="intro">
      For now, we only saw the implementation of rigidbodies. Such bodies actually never exist in real life, even if they are a good approximation for video games. Actually, every object is deformable. Springs
      are the fundation of softbodies; they simulate the liasions between the molecules of an object.
      <br></br>
      Shown below is a simple spring linking a ball and an anchor (the anchor was not rendered, but you can see its transform on the video). 
      <br></br>
      <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/TN5KFZ5XHmM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </center>
      <br></br>
      From springs, you can implement more complicated structures like a rope. Every node is linked to a spring. The top node is linked to an anchor. You can also smash the rope with a ball, which is pretty cool.
      <br></br>
      <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ko-kMHMAwtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </center>
      <br></br>
      A 2-dimensional spring structure will simulate a cloth. Below is an example of a flag, the left nodes are connected to anchors, and the nodes are connected vertically, horizontally and
      diagonally by springs to each other.
      <br></br>
      <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OkWwOq8uyxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>  
      </center>
      <br></br>
      Finally, a 3-dimensional spring will create a generalized softbody. This can be used to simulate jelly or slimes for example. This uses a microstate implementation of softbodies; simulating the link between
      every molecule. A way of optimizing the simulation would be to interpret the softbody at a macrostate level, simulating internal pressure abstractly with the ideal gas law.
      <br></br>
      <center>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4SG7SscPM70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </center>
    </div>
    </introtext>

 </div>

</template>

<script>
import Menu from '../../components/Menu'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
import Title from '../../components/Title'

export default {
  name: 'App',
  components: {
    Title,
    LazyYoutubeVideo,
    Menu
  }
}

</script>

<style>
@import '../../style.css';
</style>

