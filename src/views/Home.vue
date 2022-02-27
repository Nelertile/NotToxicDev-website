<template>
    <main class="home-page">
        <div class="logo">
            <img src="../assets/logo.png" alt="NTD logo">
        </div>
        <h1>Hello, NotToxicDev here.</h1>
        <router-link class="abt" to = "/about">
            <h2 href = "About.vue">I make stuff</h2>
        </router-link>

        <div class="play">
            <h2>Recomended Playlist</h2>
            <iframe 
            width="560" height="315" 
            src="https://www.youtube.com/embed/videoseries?list=PLMSpkqIzr6oss-BSeVn0Mb85UO2Va3Xkm" 
            title="Recomended Playlist" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    $primary: #0be881;
    $primary-alt: #05c46b;
    $gray: #808e9b;
    $dark: #485460;
    $dark-alt: #1e272e;
    $light: #f2f5f8;
    $sidebar-width: 300px;
    

    .logo {
        display: grid;
        place-items: center;
        img {
            width: 256px;
        }
    }

    h1, h2{
        text-align: center;
        margin-top: 1rem;
    }

    .play {
        display: grid;
        place-items: center;
        margin-top: 2rem;
    }

    .home-page {
        @media (max-width: 1024px) {
			padding-left: 6rem;
		}
    }
    

</style>