<template>
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 m-5">
        <ProjectCard v-for="project in filteredProjectList" :key="project.name" :name="project.name"
            :description="project.description" :thumbnail="project.thumbnail" :url="project.url" />
    </div>
</template>

<script setup lang="ts">
const { query } = useRoute();

type Project = {
    name: string,
    description: string,
    thumbnail?: string,
    isTransfur?: boolean,
    url?: string
}

const projectList: Project[] = [
    {
        name: "discord-rpc",
        description: "A Discord RPC library (Non Roblox)",
        url: "https://github.com/xhayper/discord-rpc"
    },
    {
        name: "COTL_API",
        description: "Modding API for Cult of the Lamb (Non Roblox)",
        "thumbnail": "/thumbnail/cotl_api.png",
        url: "https://github.com/xhayper/COTL_API"
    },
    {
        name: "Animator",
        description: "An alternative to roblox's animation player (Roblox)",
        url: "https://github.com/xhayper/Animator"
    },
    {
        name: "BufferStream",
        description: "Wrapper around Buffer class that handle offset for you (Roblox)",
        url: "https://github.com/xhayper/BufferStream"
    },
    {
        name: "StuffIMade",
        description: "Stuff that i made that are public, usually contains useful function, snippets and more (Roblox and Non Roblox)",
        url: "https://github.com/xhayper/StuffIMade"
    },
    {
        name: "GDMP",
        description: "Multiplayer mod for Geometry Dash (Non Roblox)",
        url: "https://github.com/Furries-UwU/GDMP-Client"
    },
    {
        name: "DiscordProxy",
        description: "High performance (?) Discord proxy for Roblox (Roblox)",
        url: "https://github.com/xhayper/DiscordProxy"
    },
    {
        name: "cotl-save-editor",
        description: "Raw JSON save file editor for Cult of the Lamb (Non Roblox)",
        url: "https://cotl-save-editor.vercel.app/"
    },
    {
        name: "simai.js",
        description: "A serializer/deserializer for the rhythm game chart format simai. (Non Roblox)",
        url: "https://github.com/reflektone-games/simai.js"
    },
    {
        name: "roblox-message-thing",
        description: "Roblox <=> Typescript | Communication test. (Roblox)",
        url: "https://github.com/xhayper/roblox-message-thing/"
    },
    {
        name: "zzlib.luau",
        description: "zlib-compressed file depacking library in Luau. (Non Roblox)",
        url: "https://github.com/xhayper/zzlib.luau"
    },
    {
        name: "CacheStore",
        description: "A simple database wrapper that store data and cache it. (Roblox)",
        url: "https://github.com/xhayper/StuffIMade/blob/main/Roblox/src/CacheStore.luau"
    },
    {
        name: "dr-k-bot",
        description: "Moderation bot for Official Changed discord server. (Non Roblox)",
        url: "https://github.com/xhayper/dr-k-bot",
        isTransfur: true
    },
    {
        name: "Turned",
        description: "Changed inspried Minecraft mod (Non Roblox)",
        url: "https://github.com/xhayper/Turned",
        isTransfur: true
    },
    {
        name: "Transfur Game Kit",
        description: "Template transfur game. (Roblox)",
        thumbnail: "https://tr.rbxcdn.com/14febb2109056cfb858f56f2ee5f3364/352/352/Image/Png",
        url: "https://www.roblox.com/games/7184400142",
        isTransfur: true
    }
];

const showTransfurProject = query.showTransfurProject === 'true';
const filteredProjectList = projectList.filter(work => !work.isTransfur || (showTransfurProject && work.isTransfur)).sort((a, b) => a.name.localeCompare(b.name));

definePageMeta({
    title: 'Project'
});

updateTitle();
</script>