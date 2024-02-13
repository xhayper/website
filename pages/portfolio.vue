<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-5">
        <WorkCard v-for="work in filteredWorkList" :key="work.name" :name="work.name" :description="work.description"
            :job="work.job" :startDate="work.startDate" :endDate="work.endDate" :thumbnail="work.thumbnail"
            :url="work.url" />
    </div>
</template>

<script setup lang="ts">
const { query } = useRoute();

type Work = {
    name: string,
    description: string,
    job: string,
    startDate?: Date,
    endDate?: Date,
    thumbnail?: string,
    isTransfur?: boolean,
    url?: string
}

const workList: Work[] = [
    {
        name: "Reflektone Games",
        description: "Rhythm game development team (Non Roblox)",
        job: "Website back-end developer",
        startDate: new Date(2023, 11, 3),
        url: "https://github.com/reflektone-games"
    },
    {
        name: "Cosmoverse",
        description: "Furry Minecraft Server (Non Roblox)",
        job: "Sysadmin and Developer",
        startDate: new Date(2023, 6, 28),
        thumbnail: "/thumbnail/cosmoverse.png",
        url: "https://cosmoverse.gay/"
    },
    {
        name: "Cult of the Lamb",
        description: "Create your own cult, as a lamb. Roguelike + Resources Managment (Non Roblox)",
        job: "Reddit Moderator",
        startDate: new Date(2023, 5, 25),
        thumbnail: "/thumbnail/cult_of_the_lamb.png",
        url: "https://www.cultofthelamb.com/"
    },
    {
        name: "Anthropolious",
        description: "A hangout game for furry and non furry! (Roblox)",
        job: "Scripter",
        startDate: new Date(2023, 1),
        thumbnail: "https://tr.rbxcdn.com/9a781970ccc4693cc5ae840286fe592d/150/150/Image/Png",
        url: "https://www.roblox.com/games/6675127933"
    },
    {
        name: "Edward the Man-Eating Train",
        description: "A game based on Choo-Choo Charles concept where you have to survive a train killing you. (Roblox)",
        job: "Moderator",
        startDate: new Date(2022, 12),
        thumbnail: "https://tr.rbxcdn.com/d8cfc19d65bc40ae0afe122a1135064b/150/150/Image/Png",
        url: "https://www.roblox.com/games/10875701453"
    },
    {
        name: "Changed",
        description: "You know what this is. (Non Roblox)",
        job: "Moderator and Bot developer",
        startDate: new Date(2021, 12, 10),
        url: "https://discord.gg/changed",
        isTransfur: true
    },
    {
        name: "Unhappy Raccoon",
        description: "MMORPG Top-Down game where you play as a furry. (Non Roblox)",
        job: "Discord Moderator",
        startDate: new Date(2022, 10, 19),
        thumbnail: "/thumbnail/unhappy_raccoon.jpg",
        url: "https://discord.gg/fNZ8CHVJvy"
    },
    {
        name: "Thunder Scientific Corporation",
        description: "TODO (Roblox)",
        job: "Scripter",
        startDate: new Date(2022, 6),
        endDate: new Date(2024, 2),
        thumbnail: "https://tr.rbxcdn.com/fbe3b3d0205ec6a2773c4ed6a8364614/150/150/Image/Png",
        url: "https://www.roblox.com/games/7131355525",
        isTransfur: true
    },
    {
        name: "RESURGENCED",
        description: "TODO (Roblox)",
        job: "QA Tester",
        startDate: new Date(2021, 8),
        endDate: new Date(2021, 9),
        thumbnail: "https://tr.rbxcdn.com/da0303f714c4028c55bec4bd018a9dab/150/150/Image/Png",
        url: "https://www.roblox.com/games/6306910204",
        isTransfur: true
    },
    {
        name: "Altered",
        description: "TODO (Roblox)",
        job: "Scripter",
        startDate: new Date(2021, 7),
        endDate: new Date(2021, 10),
        isTransfur: true
    },
    {
        name: "RESURGENCED Roleplay",
        description: "TODO (Roblox)",
        job: "Scripter",
        startDate: new Date(2021, 6),
        endDate: new Date(2021, 12),
        thumbnail: "https://tr.rbxcdn.com/09dae6655385c9c21fdf72803362c364/150/150/Image/Png",
        url: "https://www.roblox.com/games/6464459617",
        isTransfur: true
    },
    {
        name: "Kaiju Paradise",
        description: "TODO (Roblox)",
        job: "Moderator",
        startDate: new Date(2021, 6),
        endDate: new Date(2021, 9),
        thumbnail: "https://tr.rbxcdn.com/2c03aff9e324472dd094e688e1a82f31/150/150/Image/Png",
        url: "https://www.roblox.com/games/6456351776",
        isTransfur: true
    },
    {
        name: "Lyricity",
        description: "Discord server for a composer called 'LyricWulf' (Non Roblox)",
        job: "Moderator",
        url: "https://lyricwulf.com/discord/"
    }//,
    // {
    //     name: "Adonis",
    //     description: "Community-maintained server moderation and management system created for use on the Roblox platform. (Roblox)",
    //     job: "Contributor",
    //     thumbnail: "https://repository-images.githubusercontent.com/55325103/2bed6800-bfef-11eb-835b-99b981918623?width=300&height=260",
    //     url: "https://github.com/Epix-Incorporated/Adonis"
    // }
];

const showTransfurWork = query.showTransfurWork === 'true';

const filteredWorkList = workList.filter(work => !work.isTransfur || (showTransfurWork && work.isTransfur))
    .sort((a, b) => (b.startDate?.getTime() ?? 0) - (a.startDate?.getTime() ?? 0));

definePageMeta({
    title: 'Portfolio'
});

updateTitle();
</script>