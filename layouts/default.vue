<script setup>
const route = useRoute()
const { t } = useI18n()
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true
})

const title = computed(() => "namedTitle" in route.meta ? `${t("name")} | ${t(route.meta.namedTitle)}` : t(route.meta.title));
</script>

<template>
    <div>
        <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

        <Head>
            <Title>{{ title }}</Title>
            <template v-for="link in head.link" :key="link.id">
                <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
            </template>
            <template v-for="meta in head.meta" :key="meta.id">
                <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
            </template>
        </Head>

        <Body class="m-8">
            <!-- nav is already included -->
            <Navbar />
            <br>
            <!-- nav is already included -->
            <main>
                <slot />
            </main>
        </Body>

        </Html>
    </div>
</template>
