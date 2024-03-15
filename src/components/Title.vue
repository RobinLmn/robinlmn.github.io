<template>
    <name>
        <div class="name">
            ROBIN LEMAN
        </div>
        <div class="allicons">
            <div v-for="(icon, i) in icons" :key="i" class="icons">
                <a :href="icon.link" target="_blank"><i :class="icon.ic"></i></a>
            </div>
        </div>
            <hr>
    </name>
</template>

<script>
export default {
  name: 'Title',
  components: {
  },
  data () {
        return {
            icons: [
                {
                    ic: 'fas fa-envelope',
                    link: 'mailto:jobs@robinleman.com'
                },
                {
                    ic: 'fab fa-github',
                    link: 'https://github.com/RobinLmn'
                },
                {
                    ic: 'fab fa-linkedin',
                    link: 'https://www.linkedin.com/in/robin-leman-a5043816b/'
                },
                {
                    ic: 'fab fa-dev',
                    link: 'https://devpost.com/RobinLmn'
                }
            ]
        }
    }
}   

</script>

<style>
@import '../style.css';
</style>