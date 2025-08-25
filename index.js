document.addEventListener("DOMContentLoaded", () => {
    // --- DATA SOURCE ---
    // To add a new article, simply add a new object to this array.
    // Ensure the 'id' is unique and the 'date' is a valid string format.
    const allPosts = [
      
                {
    id: 1,
    title: "Artificial Intelligence को भविष्य",
    author: "Komal Chaudhary",
    date: "August 25, 2025",
    category: "Tech",
    imageUrl: "https://www.dropbox.com/scl/fi/mu2xvhnxmto9f941fsb3b/id2.jpg?rlkey=lmnig3t0q8he4p7m7wyw1u4jn&st=h07tu3nu&&raw=1",
    summary:
        "यो लेखमा हामी भविष्यमा Artificial Intelligence (AI) ले हाम्रो जीवन र समाजमा कस्तो प्रभाव पार्न सक्छ भन्ने बारेमा विस्तृत विश्लेषण गर्नेछौं।",
    content: `<p>Artificial Intelligence (AI) आधुनिक प्रविधिको एक महत्वपूर्ण हिस्सा बनेको छ। यसले हाम्रा दैनिक जीवन, उद्योग, स्वास्थ्य, शिक्षा, र मनोरञ्जनको क्षेत्रमा ठूलो प्रभाव पार्दै आएको छ। भविष्यमा AI को विकास अझ तीव्र र व्यापक हुने अपेक्षा गरिएको छ।</p>

<h2>१. AI को वर्तमान स्थिति</h2>
<p>आजको समयमा AI विभिन्न क्षेत्रमा प्रयोग भइरहेको छ:</p>
<ul>
    <li>स्वचालित ड्राइभिङ: Tesla, Waymo जस्ता कम्पनीहरूले AI को प्रयोग गरेर कारलाई स्वतः चलाउने प्रविधि विकास गरिरहेका छन्।</li>
    <li>स्वास्थ्य सेवा: AI रोगको पहिचान, उपचार योजना, र मेडिकल इमेजिंगमा मद्दत गर्दैछ।</li>
    <li>वाणिज्य र ई–कर्मस: AI ग्राहक व्यवहार विश्लेषण, सुझाव प्रणाली, र सप्लाई चेन व्यवस्थापनमा प्रयोग भइरहेको छ।</li>
    <li>भाषा र संचार: ChatGPT जस्ता AI उपकरणहरूले मानव–कम्प्युटर संवादलाई सहज बनाउँदै छन्।</li>
</ul>

<h2>२. भविष्यमा AI को सम्भावना</h2>
<p>भविष्यमा AI ले हाम्रो जीवन र समाजलाई विभिन्न तरिकाले रूपान्तरण गर्नेछ:</p>
<ul>
    <li><strong>शिक्षा:</strong> व्यक्तिगत शिक्षण अनुभव र अनलाइन शिक्षा प्रणालीलाई AI द्वारा अझ प्रभावकारी बनाइनेछ।</li>
    <li><strong>स्वास्थ्य:</strong> AI ले रोग निदान, औषधि विकास, र स्वास्थ्य सेवा प्रणालीमा क्रान्ति ल्याउनेछ।</li>
    <li><strong>उद्योग र रोजगारी:</strong> मेसिन लर्निङ र रोबोटिक्सको प्रयोगले उत्पादन क्षमता बढाउनेछ, तर केही पारम्परिक रोजगारी कम हुन सक्छ।</li>
    <li><strong>सुरक्षा र गोपनीयता:</strong> AI आधारित सुरक्षा प्रणालीले साइबर अपराध र डाटा सुरक्षा सुधार गर्नेछ, तर गोपनीयता र नैतिक चुनौतीहरू पनि बढ्नेछन्।</li>
</ul>

<h2>३. AI र सामाजिक प्रभाव</h2>
<p>AI को प्रभाव समाजमा विविध प्रकारले देखिनेछ:</p>
<ul>
    <li>आर्थिक वृद्धि: AI ले उत्पादन क्षमता बढाएर राष्ट्रिय आर्थिक वृद्धि गर्नेछ।</li>
    <li>रोजगारी चुनौती: केही क्षेत्रमा मानिसको स्थान मेसिनले लिने सम्भावना छ, जसले नयाँ कौशल सिक्न आवश्यक बनाउनेछ।</li>
    <li>शिक्षा र प्रशिक्षण: नयाँ AI प्रविधिको लागि विद्यार्थी र पेशेवरहरूको लागि प्रशिक्षण र शिक्षा अनिवार्य हुनेछ।</li>
    <li>नैतिक र कानूनी प्रश्न: AI ले निर्णय लिने प्रक्रियामा पारदर्शिता र जिम्मेवारी सुनिश्चित गर्न चुनौती उत्पन्न गर्नेछ।</li>
</ul>

<h2>४. AI को नैतिकता र जिम्मेवारी</h2>
<p>AI को विकाससँगै नैतिकता र जिम्मेवारीको प्रश्न महत्त्वपूर्ण हुन्छ:</p>
<ul>
    <li>AI ले लिएर आउने निर्णयहरू पारदर्शी र न्यायसंगत हुनुपर्छ।</li>
    <li>डेटा गोपनीयता र प्रयोगकर्ता अधिकारको संरक्षण अनिवार्य छ।</li>
    <li>AI मा पूर्वाग्रह र भेदभाव रोक्न निरन्तर निगरानी आवश्यक छ।</li>
</ul>

                 <h2>५. निष्कर्ष</h2>
                 <p>भविष्यमा AI हाम्रो जीवनको अभिन्न हिस्सा बन्नेछ। यसले शिक्षा, स्वास्थ्य, उद्योग, सुरक्षा र मनोरञ्जनका क्षेत्रमा क्रान्ति ल्याउनेछ। तर यससँगै सामाजिक, नैतिक, र कानूनी चुनौतीहरू पनि आउनेछन्। हामीले यी चुनौतीहरू सामना गर्दै AI को विकासलाई सुरक्षित, जिम्मेवार र मानव कल्याणमुखी बनाउनु जरुरी छ।</p>

                 <p>AI को सही दिशा र नियमनले मानव जीवनलाई अझ सरल, सुरक्षित, र समृद्ध बनाउने अवसर प्रदान गर्नेछ। यसैले, AI को भविष्य उज्ज्वल भए पनि यसमा सजग र जिम्मेवार दृष्टिकोण आवश्यक छ।</p>`
         },
        {
            id: 2,
            title: "Getting Started with React Hooks",
            author: "John Dev",
            date: "August 24, 2025",
            category: "Tech",
            imageUrl: "https://placehold.co/600x400/2563eb/ffffff?text=React",
            summary:
                "A comprehensive guide to understanding and using React Hooks for state management and side effects.",
            content: `<p>React Hooks have revolutionized how we write components. They allow you to use state and other React features without writing a class.</p><h3 class="text-2xl font-bold mt-6 mb-3">useState and useEffect</h3><p>The most common hooks are <code>useState</code> for managing local state and <code>useEffect</code> for handling side effects like data fetching or subscriptions. Mastering them is key to modern React development.</p>`
        },
        {
            id: 3,
            title: "Understanding Docker and Containers",
            author: "Peter Code",
            date: "August 23, 2025",
            category: "Tech",
            imageUrl: "https://placehold.co/600x400/3b82f6/ffffff?text=Docker",
            summary:
                "An introduction to containerization technology with Docker, and how it simplifies deployment.",
            content: `<p>Docker allows you to package an application with all of its dependencies into a standardized unit for software development. This solves the "it works on my machine" problem.</p>`
        },
        {
            id: 4,
            title: "The Art of Minimalist Web Design",
            author: "Emily White",
            date: "August 22, 2025",
            category: "Design",
            imageUrl: "https://placehold.co/600x400/64748b/ffffff?text=Design",
            summary:
                "Explore the principles of minimalist design and how they can create beautiful, functional websites.",
            content: `<p>Minimalist web design emphasizes simplicity and functionality. By stripping away unnecessary elements, it focuses the user's attention on what's most important: the content.</p>`
        },
        {
            id: 5,
            title: "Mastering CSS Grid Layout",
            author: "Chris Style",
            date: "August 21, 2025",
            category: "Design",
            imageUrl: "https://placehold.co/600x400/71717a/ffffff?text=CSS",
            summary:
                "Unlock the power of CSS Grid to create complex, responsive layouts with ease.",
            content: `<p>CSS Grid is a two-dimensional layout system that makes it easy to build complex web page layouts. It's a game-changer for web designers and developers.</p>`
        },
        {
            id: 6,
            title: "A Guide to Sustainable Living",
            author: "John Smith",
            date: "August 20, 2025",
            category: "Lifestyle",
            imageUrl: "https://placehold.co/600x400/22c55e/ffffff?text=Green",
            summary:
                "Learn practical tips for a more sustainable lifestyle. Every small change makes a big difference.",
            content: `<p>Sustainable living is about making conscious choices to reduce your environmental impact. It starts with the three Rs: Reduce, Reuse, Recycle.</p>`
        },
        {
            id: 7,
            title: "The Benefits of Daily Meditation",
            author: "Sara Mindful",
            date: "August 19, 2025",
            category: "Lifestyle",
            imageUrl: "https://placehold.co/600x400/16a34a/ffffff?text=Zen",
            summary:
                "Discover how a few minutes of meditation each day can improve your focus, reduce stress, and enhance well-being.",
            content: `<p>Meditation is a practice that can lead to a greater sense of calm and clarity. Even short sessions can have a profound impact on your mental health.</p>`
        },
        {
            id: 8,
            title: "Startup Funding: A Founder's Guide",
            author: "Mark Investor",
            date: "August 18, 2025",
            category: "Business",
            imageUrl: "https://placehold.co/600x400/f97316/ffffff?text=Biz",
            summary:
                "Navigate the complex world of venture capital and angel investing to secure funding for your startup.",
            content: `<p>Securing funding is one of the biggest challenges for a startup. Understanding the different stages of funding is crucial for success.</p>`
        },
        {
            id: 9,
            title: "Effective Project Management Techniques",
            author: "Laura Plan",
            date: "August 17, 2025",
            category: "Business",
            imageUrl: "https://placehold.co/600x400/ea580c/ffffff?text=Project",
            summary:
                "Learn about Agile, Scrum, and other methodologies to keep your projects on track and on budget.",
            content: `<p>Choosing the right project management methodology can make or break a project. Agile and Scrum are popular choices for their flexibility and iterative approach.</p>`
        },
        {
            id: 10,
            title: "The Wonders of the James Webb Telescope",
            author: "Astro Alex",
            date: "August 16, 2025",
            category: "Science",
            imageUrl: "https://placehold.co/600x400/8b5cf6/ffffff?text=Space",
            summary:
                "Explore the breathtaking images and groundbreaking discoveries from the James Webb Space Telescope.",
            content: `<p>The James Webb Space Telescope is providing an unprecedented view of the early universe, revealing galaxies and stars in stunning detail.</p>`
        },
        {
            id: 11,
            title: "About This Website Creator ",
            author: "Komal Chaudhary",
            date: "August 25, 2025",
            category: "Biography",
            imageUrl: "https://www.dropbox.com/scl/fi/94re827cvv68umj0od45c/IMG_20250719_140929.jpg?rlkey=42a55l0d8sld2ojeaxqwt2z7j&st=0z8ou6ga&&raw=1",
            summary:
                "Komal Chaudhary is a highly motivated and talented learner from Nepal, with a passion for science, technology, and sharing knowledge through creative content.",
            content: `<p>Komal Chaudhary is an ambitious and intellectually curious individual hailing from Nepal. Known for being a consistent top performer in academics, Komal has a deep love for learning and exploring new subjects, particularly in the fields of science, technology, history, and innovation. With a natural talent for research and critical thinking, Komal has developed a strong foundation in understanding complex concepts and presenting them in a simple, engaging manner.</p>

            <p>Beyond academics, Komal is exploring various avenues to share knowledge with a wider audience. Whether it is writing detailed blog posts, crafting engaging articles, or producing educational content for YouTube, Komal aims to inspire curiosity and learning in others. A tech-savvy individual, Komal is comfortable using modern tools, gadgets, and digital platforms to create and disseminate content efficiently.</p>

            <p>Despite having limited resources, including devices like a Samsung A7 tablet, a Redmi Note 9, and basic accessories, Komal has shown remarkable ingenuity in leveraging what is available to achieve learning and creative goals. With a forward-thinking mindset, Komal is constantly seeking opportunities to grow, innovate, and explore career paths that blend technology, creativity, and knowledge sharing.</p>

            <p>Driven by curiosity and a desire to make a meaningful impact, Komal continues to set ambitious goals, balancing academic excellence with personal development and creative pursuits. Through dedication, discipline, and a passion for lifelong learning, Komal Chaudhary represents a bright and inspiring example of a young individual eager to leave a mark in the fields of science, technology, and education.</p>`
        }
    ];
    const categories = [
        "All",
        "Tech",
        "Design",
        "Lifestyle",
        "Business",
        "Science",
        "Health",
        "Travel",
        "Food",
        "Finance",
        "Marketing",
        "Education",
        "History",
        "Art",
        "Music",
        "Sports",
        "Gaming",
        "Books",
        "Movies",
        "DIY",
        "Biography"
    ];

    // --- STATE MANAGEMENT ---
    let state = {
        searchTerm: "",
        selectedCategory: "All",
        sortOrder: localStorage.getItem("blog-sortOrder") || "newest",
        favorites: JSON.parse(localStorage.getItem("blog-favorites")) || [],
        theme: localStorage.getItem("blog-theme") || "light"
    };

    // --- DOM ELEMENTS ---
    const postsContainer = document.getElementById("posts-container");
    const categoriesContainer = document.getElementById("categories-container");
    const searchInput = document.getElementById("search-input");
    const sortSelect = document.getElementById("sort-select");
    const themeToggle = document.getElementById("theme-toggle");
    const themeIconMoon = document.getElementById("theme-icon-moon");
    const themeIconSun = document.getElementById("theme-icon-sun");
    const listView = document.getElementById("list-view");
    const postView = document.getElementById("post-view");
    const backButton = document.getElementById("back-button");
    const postContentContainer = document.getElementById(
        "post-content-container"
    );
    const postNavigationContainer = document.getElementById("post-navigation");
    const noResultsContainer = document.getElementById("no-results");

    // Sidebar elements
    const sidebarMenu = document.getElementById("sidebar-menu");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
    const favoritesListContainer = document.getElementById(
        "favorites-list-container"
    );

    // --- RENDER FUNCTIONS ---

    const renderCategories = () => {
        categoriesContainer.innerHTML = "";
        categories.forEach(category => {
            const button = document.createElement("button");
            button.textContent = category;
            button.className = `px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors duration-200 ${
                state.selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`;
            button.addEventListener("click", () => {
                state.selectedCategory = category;
                renderAll();
            });
            categoriesContainer.appendChild(button);
        });
    };

    const renderPosts = () => {
        postsContainer.innerHTML = "";
        const filteredPosts = getFilteredAndSortedPosts();

        noResultsContainer.classList.toggle("hidden", filteredPosts.length > 0);

        filteredPosts.forEach((post, index) => {
            const isFavorite = state.favorites.includes(post.id);
            const card = document.createElement("div");
            card.className =
                "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group";
            card.innerHTML = `
                        <div class="relative">
                            <img class="w-full h-48 object-cover" src="${
                                post.imageUrl
                            }" alt="${
                                post.title
                            }" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Error';">
                            <div class="absolute top-2 left-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full">#${
                                index + 1
                            }</div>
                            <button data-favorite-id="${
                                post.id
                            }" class="favorite-btn absolute top-2 right-2 p-2 rounded-full bg-white/70 dark:bg-gray-900/70 text-yellow-500 hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="${
                                    isFavorite ? "currentColor" : "none"
                                }" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            </button>
                        </div>
                        <div class="p-6 cursor-pointer" data-post-id="${
                            post.id
                        }">
                            <p class="text-sm font-semibold text-blue-600 dark:text-blue-400">${
                                post.category
                            }</p>
                            <h2 class="mt-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">${
                                post.title
                            }</h2>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">By ${
                                post.author
                            } on ${post.date}</p>
                            <p class="text-gray-700 dark:text-gray-300 mt-4 h-20 overflow-hidden">${
                                post.summary
                            }</p>
                            <div class="mt-4">
                                <span class="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">Read more &rarr;</span>
                            </div>
                        </div>
                    `;
            postsContainer.appendChild(card);
        });
    };

    const renderFavoritesSidebar = () => {
        favoritesListContainer.innerHTML = "";
        if (state.favorites.length === 0) {
            favoritesListContainer.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-400">Star an article to save it here.</p>`;
            return;
        }

        const favoritePosts = allPosts.filter(post =>
            state.favorites.includes(post.id)
        );
        favoritePosts.forEach(post => {
            const item = document.createElement("div");
            item.className =
                "flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700";
            item.innerHTML = `
                        <span class="font-semibold text-sm text-gray-800 dark:text-gray-200 cursor-pointer truncate pr-2" data-post-id="${post.id}">${post.title}</span>
                        <button class="remove-favorite-btn flex-shrink-0 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900" data-favorite-id="${post.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    `;
            favoritesListContainer.appendChild(item);
        });
    };

    const renderFullPost = postId => {
        const post = allPosts.find(p => p.id === postId);
        if (!post) return;

        const isFavorite = state.favorites.includes(post.id);
        postContentContainer.innerHTML = `
                    <img class="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8" src="${
                        post.imageUrl
                    }" alt="${
                        post.title
                    }" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Error';">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-md font-semibold text-blue-600 dark:text-blue-400">${
                                post.category
                            }</p>
                            <h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">${
                                post.title
                            }</h1>
                            <p class="text-md text-gray-500 dark:text-gray-400 mt-4">By ${
                                post.author
                            } on ${post.date}</p>
                        </div>
                        <button id="full-post-favorite-btn" data-favorite-id="${
                            post.id
                        }" class="p-2 rounded-full text-yellow-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0 ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="${
                                isFavorite ? "currentColor" : "none"
                            }" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        </button>
                    </div>
                    <div class="prose lg:prose-xl mt-8 max-w-none text-gray-800 dark:text-gray-200">${
                        post.content
                    }</div>
                `;

        // Navigation
        const filteredPosts = getFilteredAndSortedPosts();
        const currentIndex = filteredPosts.findIndex(p => p.id === postId);
        const prevPost =
            currentIndex > 0 ? filteredPosts[currentIndex - 1] : null;
        const nextPost =
            currentIndex < filteredPosts.length - 1
                ? filteredPosts[currentIndex + 1]
                : null;

        postNavigationContainer.innerHTML = "";
        if (prevPost) {
            const prevButton = document.createElement("button");
            prevButton.dataset.postId = prevPost.id;
            prevButton.className =
                "post-nav-btn inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold group";
            prevButton.innerHTML = `<span class="transform group-hover:-translate-x-1 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg></span>Previous Article`;
            postNavigationContainer.appendChild(prevButton);
        }
        postNavigationContainer.appendChild(
            document.createElement("div")
        ).className = "flex-grow"; // Spacer
        if (nextPost) {
            const nextButton = document.createElement("button");
            nextButton.dataset.postId = nextPost.id;
            nextButton.className =
                "post-nav-btn inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold group";
            nextButton.innerHTML = `Next Article<span class="transform group-hover:translate-x-1 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>`;
            postNavigationContainer.appendChild(nextButton);
        }

        // Show the view
        listView.classList.add("hidden");
        postView.classList.remove("hidden");
        window.scrollTo(0, 0);
    };

    const applyTheme = () => {
        if (state.theme === "dark") {
            document.documentElement.classList.add("dark");
            themeIconMoon.classList.add("hidden");
            themeIconSun.classList.remove("hidden");
        } else {
            document.documentElement.classList.remove("dark");
            themeIconMoon.classList.remove("hidden");
            themeIconSun.classList.add("hidden");
        }
    };

    const renderAll = () => {
        renderCategories();
        renderPosts();
        renderFavoritesSidebar();
    };

    // --- HELPER FUNCTIONS ---
    const getFilteredAndSortedPosts = () => {
        let filtered = allPosts
            .filter(
                post =>
                    state.selectedCategory === "All" ||
                    post.category === state.selectedCategory
            )
            .filter(post =>
                post.title
                    .toLowerCase()
                    .includes(state.searchTerm.toLowerCase())
            );

        // Apply sorting
        switch (state.sortOrder) {
            case "oldest":
                filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
                break;
            case "alpha-asc":
                filtered.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case "alpha-desc":
                filtered.sort((a, b) => b.title.localeCompare(a.title));
                break;
            case "newest":
            default:
                filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
        }

        return filtered;
    };

    // --- EVENT HANDLERS ---

    const handleThemeToggle = () => {
        state.theme = state.theme === "light" ? "dark" : "light";
        localStorage.setItem("blog-theme", state.theme);
        applyTheme();
    };

    const handleSearch = e => {
        state.searchTerm = e.target.value;
        renderPosts();
    };

    const handleSortChange = e => {
        state.sortOrder = e.target.value;
        localStorage.setItem("blog-sortOrder", state.sortOrder);
        renderPosts();
    };

    const handleToggleFavorite = postId => {
        if (state.favorites.includes(postId)) {
            state.favorites = state.favorites.filter(id => id !== postId);
        } else {
            state.favorites.push(postId);
        }
        localStorage.setItem("blog-favorites", JSON.stringify(state.favorites));
    };

    const handlePostSelect = postId => {
        renderFullPost(postId);
    };

    const openSidebar = () => {
        sidebarMenu.classList.add("is-open");
        sidebarOverlay.classList.add("is-open");
    };

    const closeSidebar = () => {
        sidebarMenu.classList.remove("is-open");
        sidebarOverlay.classList.remove("is-open");
    };

    // --- EVENT LISTENERS ---
    themeToggle.addEventListener("click", handleThemeToggle);
    searchInput.addEventListener("input", handleSearch);
    sortSelect.addEventListener("change", handleSortChange);
    backButton.addEventListener("click", () => {
        postView.classList.add("hidden");
        listView.classList.remove("hidden");
    });

    // Sidebar listeners
    hamburgerBtn.addEventListener("click", openSidebar);
    sidebarCloseBtn.addEventListener("click", closeSidebar);
    sidebarOverlay.addEventListener("click", closeSidebar);

    // Event delegation for dynamically created elements
    document.body.addEventListener("click", e => {
        // For post selection from card or favorites bar
        const postLink = e.target.closest("[data-post-id]");
        if (postLink) {
            const postId = parseInt(postLink.dataset.postId, 10);
            handlePostSelect(postId);
            closeSidebar(); // Close sidebar if open
        }

        // For favoriting from the card view
        const favoriteButton = e.target.closest(".favorite-btn");
        if (favoriteButton) {
            e.stopPropagation(); // Prevent card click
            const postId = parseInt(favoriteButton.dataset.favoriteId, 10);
            handleToggleFavorite(postId);
            renderPosts();
            renderFavoritesSidebar();
        }

        // For favoriting from the full post view
        const fullPostFavoriteButton = e.target.closest(
            "#full-post-favorite-btn"
        );
        if (fullPostFavoriteButton) {
            const postId = parseInt(
                fullPostFavoriteButton.dataset.favoriteId,
                10
            );
            handleToggleFavorite(postId);
            renderFullPost(postId);
            renderFavoritesSidebar();
        }

        // For removing a favorite from the sidebar
        const removeFavoriteButton = e.target.closest(".remove-favorite-btn");
        if (removeFavoriteButton) {
            const postId = parseInt(
                removeFavoriteButton.dataset.favoriteId,
                10
            );
            handleToggleFavorite(postId);
            renderPosts(); // Re-render to update star icons
            renderFavoritesSidebar();
        }

        // For post navigation
        const navButton = e.target.closest(".post-nav-btn");
        if (navButton) {
            const postId = parseInt(navButton.dataset.postId, 10);
            handlePostSelect(postId);
        }
    });

    // --- INITIALIZATION ---
    const init = () => {
        applyTheme();
        sortSelect.value = state.sortOrder;
        renderAll();
    };

    init();
});
