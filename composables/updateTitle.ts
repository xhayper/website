export const updateTitle = () => {
  const route = useRoute();

  const formattedTitle = route.meta.title
    ? `${route.meta.title} - hayper`
    : "hayper";

  useHead({
    title: formattedTitle,
    meta: [
      { property: "og:title", content: formattedTitle },
      { name: "twitter:title", content: formattedTitle },
    ],
  });
};
