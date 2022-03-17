<template>
    <main class="contacts-page">
        <h1>Contacts</h1><br><br>
        <p>Find me at</p><br>
        <div class="socials">
            <a href="https://bit.ly/ntgyt" target="_blank" class="youtube"><img src="../assets/youtube.svg" alt="youtube" width="96"></a>
            <a href="https://github.com/NotToxicDev" class="github"><img src="../assets/github.svg" alt="github" width="64"></a>
            <a href="https://discord.gg/GNRC2Gu5Yb" class="discord"><img src="../assets/discord.svg" alt="discord" width="64"></a>
            <a href="https://twitter.com/NotToxicDev" class="twitter"><img src="../assets/twitter.svg" alt="twitter" width="64"></a>
       </div>
       <br>
       <br>
       <a href="https://github.com/NotToxicDev/NotToxicDev/blob/main/contacts.md" class="">Find the whole list here</a>
    </main>
</template>

<style lang="scss" scoped>
    .contacts-page {
        text-align: center;
        p, a {
            font-size: 3rem;
        }
        .socials {
            padding: 10px 10px 10px 10px;
            .youtube { margin-left: 10px; margin-right: -15px; }
            .github { margin-left: 20px; }
            .discord { margin-left: 20px; }
            .twitter { margin-left: 20px; }
        }
    }
</style>