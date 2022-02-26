<template>
    <main class="yt-page">
        <h1>Youtube</h1>
        <p>This is the youtube page, here i will add notices for my youtube channel.</p>
        <br>
        <br>
        <div class="play">
            <iframe 
            width="560" height="315" 
            src="https://www.youtube.com/embed/videoseries?list=PLMSpkqIzr6oss-BSeVn0Mb85UO2Va3Xkm" 
            title="Recomended Playlist" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
            </iframe>
        </div>
        <br>
        <br>
        <!-- notices -->
        <p><br></p>
        <!-- notices -->
        <br>
        <br>
        <div class="stream">
            <h2>STREAM SCHEDULE</h2>
            <br>
            <p>Monday - None</p>
            <p>Tuesday - None</p>
            <p>Wednesday - None</p>
            <p>Thursday - None</p>
            <p>Friday - None</p>
            <p>Saturday - None</p>
            <p>Sunday - None</p>
        </div>
        
    </main>
</template>

<style lang="scss" scoped>
    p {
        font-size: 1.3rem;
    }

    .stream {
            text-align: center;
    }

    .play {
        display: grid;
        place-items: center;
    }
</style>