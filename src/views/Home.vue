<template>
    <main class="home-page">
        <div class="logo">
            <img src="../assets/logo.png" alt="NTD logo">
        </div>
        <h1>Hello, NotToxicDev here.</h1>
        <router-link class="abt" to = "/about">
            <h2 href = "About.vue">I make stuff</h2>
        </router-link>
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

    .home-page {
        @media (max-width: 1024px) {
			padding-left: 6rem;
		}
    }

</style>