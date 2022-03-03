<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
      <div class="logo">
          <img src="../assets/logo.png" alt="NTD logo">
      </div>

      <div class="menu-toggle-wrap">
          <button class="menu-toggle" @click="ToggleMenu">
              <span class="material-icons">keyboard_double_arrow_right</span>
          </button>
      </div>

      <h3>Menu</h3>
      <div class="menu">
          <router-link class="button" to="/NotToxicDev-website/">
            <span class="material-icons">home</span>
            <span class="text">Home</span>
          </router-link>
          <router-link class="button" to="/NotToxicDev-website/about">
            <span class="material-icons">article</span>
            <span class="text">About</span>
          </router-link>
          <router-link class="button" to="/NotToxicDev-website/youtube">
            <span class="material-icons">play_arrow</span>
            <span class="text">Youtube</span>
          </router-link>
          <router-link class="button" to="/NotToxicDev-website/games">
            <span class="material-icons">sports_esports</span>
            <span class="text">Games</span>
          </router-link>
          <router-link class="button" to="/NotToxicDev-website/contacts">
            <span class="material-icons">person</span>
            <span class="text">Contacts</span>
          </router-link>
          <!-- <router-link class="button" to="/NotToxicDev-website/404">
            <span class="material-icons">error_outline</span>
            <span class="text">404</span>
          </router-link> -->
      </div>
  </aside>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value

    localStorage.setItem("is_expanded", is_expanded.value.toString())
}
</script>

<style lang="scss" scoped>
    $primary: #0be881;
    $primary-alt: #05c46b;
    $gray: #808e9b;
    $dark: #485460;
    $dark-alt: #1e272e;
    $light: #f2f5f8;
    $sidebar-width: 300px;
    $ico-width: 32px;

    aside {
        display: flex;
        flex-direction: column;
        width: calc(2rem + $ico-width);
        overflow: hidden;
        min-height: 100vh;
        padding: 1rem;

        background-color: $dark-alt;
        color: $light;

        transition: 0.2s ease-out;

        .logo {
            margin-bottom: 1rem;

            img {
                width: $ico-width;
            }
        }

        .menu-toggle-wrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;

            position: relative;
            top: 0;
            transition: 0.2s ease-out;

            .menu-toggle {
                transition: 0.2s ease-out;

                .material-icons {
                    font-size: $ico-width;
                    color: $light;
                transition: 0.2s ease-out;

                }

                &:hover {
                    .material-icons {
                        color: $primary;
                        transform: translateX(0.5rem);
                    }
                }
            }
        }

        h3, .button .text {
            opacity: 0;
            transition: 0.3s ease-out;
        }

        h3 {
            color: $gray;
            font-size: 14px;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
        }

        .menu {
            margin: 0 -1rem;

            .button {
                display: flex;
                align-items: center;
                text-decoration: none;

                padding: 0.5rem 1rem;
                transition: 0.2s ease-out;

                .material-icons {
                    font-size: $ico-width;
                    color: $light;
                    transition: 0.2s ease-out;
                }

                .text {
                    color: $light;
                    transition: 0.2s ease-out;
                }

                &:hover, &.router-link-exact-active {
                    background-color: $dark;

                    .material-icons, .text{
                        color: $primary;
                    }

                }

                &.router-link-exact-active{
                    border-right: 5px solid $primary;
                }
            }
        }

        &.is-expanded {
            width: $sidebar-width;

            .menu-toggle-wrap {
                top: -3rem;
                .menu-toggle {
                    transform: rotate(-180deg);
                }
            }

            h3, .button .text {
            opacity: 1;
            transition: 0.2s ease-out;
            }

            .button {
                .material-icons {
                    margin-right: 1rem;
                }
            }
        }

        @media (max-width: 768) {
            position: fixed;
            z-index: 99;
        }
    }
</style>