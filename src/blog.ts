type Blog = {
    title: string
    date: string
    description: string
    image: string
    imageAlt: string
    slug: string
};

const blogs: Blog[] = [
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
    const container = document.getElementById("blog-container");
    if (!container) {
        console.error("No #blog-container found");
        return;
    }

    blogs.forEach((blog) => {
        const card = document.createElement("article");
        card.className = "blog-card";

        if (blog.image) {
            const img = document.createElement("img");
            img.src = blog.image;
            img.alt = blog.imageAlt || blog.title;
            img.loading = "lazy";
            card.appendChild(img);
        }

        const h2 = document.createElement("h2");
        h2.textContent = blog.title;

        const date = document.createElement("p");
        date.className = "blog-date";
        date.textContent = blog.date;

        const desc = document.createElement("p");
        desc.textContent = blog.description;

        const link = document.createElement("a");

        link.href = `blogs/${blog.slug}.html`;
        link.textContent = "Read more -->";
        link.setAttribute("aria-label", `Read ${blog.title}`);

        card.append(h2, date, desc, link);
        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", renderBlogs);
