<template>
    <menu>
        <div class="menu-item"><a href="https://robinleman.com" target="_blank">Home</a></div>
        <Dropdown title="Projects" :items="projects" />
        <div class="menu-item"><a href="https://robinleman.com/robin-leman-resume.pdf" target="_blank">Resume</a></div>
    </menu>
</template>

<script>
import Dropdown from './Dropdown';

export default {
    name: 'Menu',
    components: {
        Dropdown
    },
    data () {
        return {
            projects: [
                {
                    title: 'Debris Disk Simualtion',
                    link: 'https://github.com/RobinLmn/DebrisDiskSimulation'
                },
                {
                    title: 'Achilles - Physics Engine',
                    link: 'achilles.html'
                },
                {
                    title: 'Multithreaded Raytracer in C++',
                    link: 'https://github.com/RobinLmn/Multithreaded-Raytracer'
                },
                {
                    title: 'Meme Popularity Predictor',
                    link: 'https://github.com/RobinLmn/ML-MemePopularity'
                },
                {
                    title: 'Video Game Projects',
                    link: 'videogames.html'
                }
            ]
        }
    }
}
</script>

<style>
@import '../style.css';
</style>