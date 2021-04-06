<template>
    <menu>
        <div class="menu-item"><a href="https://robinlmn.github.io" target="_blank">Home</a></div>
        <Dropdown title="Projects" :items="projects" />
        <div class="menu-item"><a href="https://robinlmn.github.io/pdf/robin-leman-resume.pdf" target="_blank">Resume</a></div>
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
                    title: 'Achilles - Physics Engine',
                    link: 'achilles.html'
                },
                {
                    title: 'Video Games',
                    link: 'videogames.html'
                },
                {
                    title: 'Cybersecurity',
                    link: 'https://github.com/RobinLmn/md5-decryption-crackingchallenge'
                },
                {
                    title: 'Re<ycle',
                    link: 'https://github.com/RobinLmn/McHacks7_re-ycle'
                },
                {
                    title: 'Cryptocurrencies Calculator',
                    link: 'https://github.com/RobinLmn/catallaxy_challenge'
                }
            ]
        }
    }
}
</script>

<style>
@import '../style.css';
</style>