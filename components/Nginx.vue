<template>
    <div>
        <h1>Welcome to nginx!</h1>
        <p>If you see this page, the nginx web server is successfully installed and
            working. Further configuration is required.</p>
        <p>For online documentation and support please refer to
            <a href="http://nginx.org/">nginx.org</a>.<br>
            Commercial support is available at
            <a href="http://nginx.com/">nginx.com</a>.
        </p>
        <p><em>Thank you for using nginx.</em></p>
    </div>
</template>

<style scoped>
h1 {
    display: block;
    font-size: 2em;
    font-weight: bold;
    margin-block: .67em;
}

/* Undo TailwindCSS */
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
    margin: unset;
}

/* Undo TailwindCSS */
*,
::before,
::after {
    box-sizing: unset;
    border-width: unset;
    border-style: unset;
    border-color: unset;
}

p {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
}

em {
    font-style: italic;
}

a {
    color: rgb(140, 140, 255);
    text-decoration: underline;
}

div {
    width: 35em !important;
    margin: 0 auto !important;
    font-family: Tahoma, Verdana, Arial, sans-serif !important;
}
</style>