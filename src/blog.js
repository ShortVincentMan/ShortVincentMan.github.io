var blogs = [
    {
        title: "Cal Poly State University",
        date: "13 October 2025",
        description: "Opinion Piece",
        image: "./images/cpslo.jpg",
        imageAlt: "CPSLO",
        slug: "cpslo",
    },
    {
        title: "Learning TypeScript",
        date: "9 October 2025",
        description: "Why I'm Learning TypeScript",
        image: "./images/ts.jpg",
        imageAlt: "",
        slug: "typescript",
    },
    {
        title: "I love my cat",
        date: "9 October 2025",
        description: "My cat is so awesome",
        image: "./images/moe-hero.jpeg",
        imageAlt: "my cat",
        slug: "my-cat",
    },
];
// List Render
function renderBlogs() {
    var container = document.getElementById("blog-container");
    if (!container) {
        console.error("No #blog-container found");
        return;
    }
    blogs.forEach(function (blog) {
        var card = document.createElement("article");
        card.className = "blog-card";
        if (blog.image) {
            var img = document.createElement("img");
            img.src = blog.image;
            img.alt = blog.imageAlt || blog.title;
            img.loading = "lazy";
            card.appendChild(img);
        }
        var h2 = document.createElement("h2");
        h2.textContent = blog.title;
        var date = document.createElement("p");
        date.className = "blog-date";
        date.textContent = blog.date;
        var desc = document.createElement("p");
        desc.textContent = blog.description;
        var link = document.createElement("a");
        link.href = "blogs/".concat(blog.slug, ".html");
        link.textContent = "Read more -->";
        link.setAttribute("aria-label", "Read ".concat(blog.title));
        card.append(h2, date, desc, link);
        container.appendChild(card);
    });
}
document.addEventListener("DOMContentLoaded", renderBlogs);
