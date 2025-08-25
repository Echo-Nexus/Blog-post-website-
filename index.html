<!DOCTYPE html>
<html lang="en" class="">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Modern Dev | A Blog</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <script>
        // Custom Tailwind configuration to set the 'Inter' font family.
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                    },
                }
            }
        }
    </script>
    <style>
        /* Simple scrollbar styling for a better look */
        ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
        }
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        .dark ::-webkit-scrollbar-track {
            background: #2d3748;
        }
        ::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #555;
        }
        /* Basic styles for the prose content from the data */
        .prose h3 {
            font-size: 1.5rem; /* 24px */
            line-height: 2rem; /* 32px */
            font-weight: 700;
            margin-top: 1.5rem;
            margin-bottom: 0.75rem;
        }
        .prose p {
            margin-bottom: 1rem;
        }
        .prose code {
            background-color: #e5e7eb;
            padding: 0.25rem 0.5rem;
            border-radius: 0.25rem;
            font-family: monospace;
        }
        .dark .prose code {
             background-color: #4a5568;
        }
        /* Styles for the sidebar menu */
        #sidebar-menu {
            transform: translateX(-100%);
            transition: transform 0.3s ease-in-out;
        }
        #sidebar-menu.is-open {
            transform: translateX(0);
        }
        #sidebar-overlay {
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }
        #sidebar-overlay.is-open {
            opacity: 1;
            visibility: visible;
        }
    </style>
</head>
<body class="bg-gray-100 dark:bg-gray-900 font-sans transition-colors duration-300">

    <!-- Sidebar Menu (hidden by default) -->
    <div id="sidebar-overlay" class="fixed inset-0 bg-black/50 z-40"></div>
    <div id="sidebar-menu" class="fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-900 shadow-lg z-50">
        <div class="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 class="text-lg font-bold text-gray-800 dark:text-gray-100">Favorite Articles</h2>
            <button id="sidebar-close-btn" class="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-gray-600 dark:text-gray-300"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
        </div>
        <div id="favorites-list-container" class="p-4 h-[calc(100%-65px)] overflow-y-auto">
            <!-- Favorite items will be injected here -->
        </div>
    </div>


    <!-- App Container -->
    <div id="app">

        <!-- Header/Navbar -->
        <header class="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-20 transition-colors duration-300">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex items-center justify-between h-16">
                    <div class="flex items-center gap-4">
                         <!-- Hamburger Menu Button -->
                        <button id="hamburger-btn" class="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                        </button>
                        <h1 class="text-2xl font-bold text-blue-600 dark:text-blue-400">The Modern Dev</h1>
                    </div>
                    <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                        <div class="max-w-lg w-full lg:max-w-xs">
                            <label for="search" class="sr-only">Search</label>
                            <div class="relative text-gray-400 focus-within:text-gray-600">
                                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                </div>
                                <input
                                    id="search-input"
                                    class="block w-full bg-gray-100 dark:bg-gray-800 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:bg-white dark:focus:bg-gray-700 focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                                    placeholder="Search by title..."
                                    type="search"
                                />
                            </div>
                        </div>
                    </div>
                    <button id="theme-toggle" class="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500">
                        <!-- Moon Icon -->
                        <svg id="theme-icon-moon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                        <!-- Sun Icon (hidden by default) -->
                        <svg id="theme-icon-sun" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="hidden"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                    </button>
                </div>
            </div>
        </header>

        <main>
            <!-- Blog List View -->
            <div id="list-view">
                <!-- Controls: Categories & Sorting -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div id="categories-container" class="flex overflow-x-auto space-x-2 pb-4 -mx-2 px-2">
                        <!-- Category buttons will be injected here -->
                    </div>
                    <div class="flex justify-end">
                         <div class="flex items-center gap-2">
                            <label for="sort-select" class="text-sm font-medium text-gray-700 dark:text-gray-300">Sort by:</label>
                            <select id="sort-select" class="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
                                <option value="newest">Newest First</option>
                                <option value="oldest">Oldest First</option>
                                <option value="alpha-asc">Title (A-Z)</option>
                                <option value="alpha-desc">Title (Z-A)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Blog Posts Grid -->
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                     <div id="posts-container" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                         <!-- Blog post cards will be injected here -->
                     </div>
                     <div id="no-results" class="text-center py-16 hidden">
                        <h2 class="text-2xl font-bold text-gray-900 dark:text-white">No Articles Found</h2>
                        <p class="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or category filters.</p>
                    </div>
                </div>
            </div>

            <!-- Single Post View (hidden by default) -->
            <div id="post-view" class="hidden">
                 <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <button id="back-button" class="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold mb-6 group">
                        <span class="transform group-hover:-translate-x-1 transition-transform duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                        </span>
                        Back to all posts
                    </button>
                    <article id="post-content-container">
                        <!-- Full post content will be injected here -->
                    </article>
                    <div id="post-navigation" class="mt-12 flex justify-between items-center">
                        <!-- Navigation buttons will be injected here -->
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            // --- DATA SOURCE ---
            // To add a new article, simply add a new object to this array.
            // Ensure the 'id' is unique and the 'date' is a valid string format.
            const allPosts = [
                { id: 1, title: 'The Future of Artificial Intelligence', author: 'Jane Doe', date: 'August 25, 2025', category: 'Tech', imageUrl: 'https://placehold.co/600x400/1d4ed8/ffffff?text=AI', summary: 'Dive into the evolving world of AI and discover what the future holds for machine learning and neural networks.', content: `<p>Artificial Intelligence (AI) is a transformative force reshaping industries. The core of modern AI lies in machine learning (ML), enabling systems to learn from experience.</p><h3 class="text-2xl font-bold mt-6 mb-3">The Rise of Neural Networks</h3><p>Deep learning utilizes neural networks to tackle complex problems, leading to significant advancements in natural language processing and image recognition. However, it also brings ethical challenges around data privacy and algorithmic bias.</p>` },
                { id: 2, title: 'Getting Started with React Hooks', author: 'John Dev', date: 'August 24, 2025', category: 'Tech', imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=React', summary: 'A comprehensive guide to understanding and using React Hooks for state management and side effects.', content: `<p>React Hooks have revolutionized how we write components. They allow you to use state and other React features without writing a class.</p><h3 class="text-2xl font-bold mt-6 mb-3">useState and useEffect</h3><p>The most common hooks are <code>useState</code> for managing local state and <code>useEffect</code> for handling side effects like data fetching or subscriptions. Mastering them is key to modern React development.</p>` },
                { id: 3, title: 'Understanding Docker and Containers', author: 'Peter Code', date: 'August 23, 2025', category: 'Tech', imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=Docker', summary: 'An introduction to containerization technology with Docker, and how it simplifies deployment.', content: `<p>Docker allows you to package an application with all of its dependencies into a standardized unit for software development. This solves the "it works on my machine" problem.</p>` },
                { id: 4, title: 'The Art of Minimalist Web Design', author: 'Emily White', date: 'August 22, 2025', category: 'Design', imageUrl: 'https://placehold.co/600x400/64748b/ffffff?text=Design', summary: 'Explore the principles of minimalist design and how they can create beautiful, functional websites.', content: `<p>Minimalist web design emphasizes simplicity and functionality. By stripping away unnecessary elements, it focuses the user's attention on what's most important: the content.</p>` },
                { id: 5, title: 'Mastering CSS Grid Layout', author: 'Chris Style', date: 'August 21, 2025', category: 'Design', imageUrl: 'https://placehold.co/600x400/71717a/ffffff?text=CSS', summary: 'Unlock the power of CSS Grid to create complex, responsive layouts with ease.', content: `<p>CSS Grid is a two-dimensional layout system that makes it easy to build complex web page layouts. It's a game-changer for web designers and developers.</p>` },
                { id: 6, title: 'A Guide to Sustainable Living', author: 'John Smith', date: 'August 20, 2025', category: 'Lifestyle', imageUrl: 'https://placehold.co/600x400/22c55e/ffffff?text=Green', summary: 'Learn practical tips for a more sustainable lifestyle. Every small change makes a big difference.', content: `<p>Sustainable living is about making conscious choices to reduce your environmental impact. It starts with the three Rs: Reduce, Reuse, Recycle.</p>` },
                { id: 7, title: 'The Benefits of Daily Meditation', author: 'Sara Mindful', date: 'August 19, 2025', category: 'Lifestyle', imageUrl: 'https://placehold.co/600x400/16a34a/ffffff?text=Zen', summary: 'Discover how a few minutes of meditation each day can improve your focus, reduce stress, and enhance well-being.', content: `<p>Meditation is a practice that can lead to a greater sense of calm and clarity. Even short sessions can have a profound impact on your mental health.</p>` },
                { id: 8, title: 'Startup Funding: A Founder\'s Guide', author: 'Mark Investor', date: 'August 18, 2025', category: 'Business', imageUrl: 'https://placehold.co/600x400/f97316/ffffff?text=Biz', summary: 'Navigate the complex world of venture capital and angel investing to secure funding for your startup.', content: `<p>Securing funding is one of the biggest challenges for a startup. Understanding the different stages of funding is crucial for success.</p>` },
                { id: 9, title: 'Effective Project Management Techniques', author: 'Laura Plan', date: 'August 17, 2025', category: 'Business', imageUrl: 'https://placehold.co/600x400/ea580c/ffffff?text=Project', summary: 'Learn about Agile, Scrum, and other methodologies to keep your projects on track and on budget.', content: `<p>Choosing the right project management methodology can make or break a project. Agile and Scrum are popular choices for their flexibility and iterative approach.</p>` },
                { id: 10, title: 'The Wonders of the James Webb Telescope', author: 'Astro Alex', date: 'August 16, 2025', category: 'Science', imageUrl: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Space', summary: 'Explore the breathtaking images and groundbreaking discoveries from the James Webb Space Telescope.', content: `<p>The James Webb Space Telescope is providing an unprecedented view of the early universe, revealing galaxies and stars in stunning detail.</p>` },
            ];
            const categories = [ 'All', 'Tech', 'Design', 'Lifestyle', 'Business', 'Science', 'Health', 'Travel', 'Food', 'Finance', 'Marketing', 'Education', 'History', 'Art', 'Music', 'Sports', 'Gaming', 'Books', 'Movies', 'DIY' ];

            // --- STATE MANAGEMENT ---
            let state = {
                searchTerm: '',
                selectedCategory: 'All',
                sortOrder: localStorage.getItem('blog-sortOrder') || 'newest',
                favorites: JSON.parse(localStorage.getItem('blog-favorites')) || [],
                theme: localStorage.getItem('blog-theme') || 'light',
            };

            // --- DOM ELEMENTS ---
            const postsContainer = document.getElementById('posts-container');
            const categoriesContainer = document.getElementById('categories-container');
            const searchInput = document.getElementById('search-input');
            const sortSelect = document.getElementById('sort-select');
            const themeToggle = document.getElementById('theme-toggle');
            const themeIconMoon = document.getElementById('theme-icon-moon');
            const themeIconSun = document.getElementById('theme-icon-sun');
            const listView = document.getElementById('list-view');
            const postView = document.getElementById('post-view');
            const backButton = document.getElementById('back-button');
            const postContentContainer = document.getElementById('post-content-container');
            const postNavigationContainer = document.getElementById('post-navigation');
            const noResultsContainer = document.getElementById('no-results');
            
            // Sidebar elements
            const sidebarMenu = document.getElementById('sidebar-menu');
            const sidebarOverlay = document.getElementById('sidebar-overlay');
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
            const favoritesListContainer = document.getElementById('favorites-list-container');


            // --- RENDER FUNCTIONS ---

            const renderCategories = () => {
                categoriesContainer.innerHTML = '';
                categories.forEach(category => {
                    const button = document.createElement('button');
                    button.textContent = category;
                    button.className = `px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors duration-200 ${
                        state.selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`;
                    button.addEventListener('click', () => {
                        state.selectedCategory = category;
                        renderAll();
                    });
                    categoriesContainer.appendChild(button);
                });
            };

            const renderPosts = () => {
                postsContainer.innerHTML = '';
                const filteredPosts = getFilteredAndSortedPosts();

                noResultsContainer.classList.toggle('hidden', filteredPosts.length > 0);

                filteredPosts.forEach((post, index) => {
                    const isFavorite = state.favorites.includes(post.id);
                    const card = document.createElement('div');
                    card.className = "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group";
                    card.innerHTML = `
                        <div class="relative">
                            <img class="w-full h-48 object-cover" src="${post.imageUrl}" alt="${post.title}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Error';">
                            <div class="absolute top-2 left-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full">#${index + 1}</div>
                            <button data-favorite-id="${post.id}" class="favorite-btn absolute top-2 right-2 p-2 rounded-full bg-white/70 dark:bg-gray-900/70 text-yellow-500 hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            </button>
                        </div>
                        <div class="p-6 cursor-pointer" data-post-id="${post.id}">
                            <p class="text-sm font-semibold text-blue-600 dark:text-blue-400">${post.category}</p>
                            <h2 class="mt-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">${post.title}</h2>
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-2">By ${post.author} on ${post.date}</p>
                            <p class="text-gray-700 dark:text-gray-300 mt-4 h-20 overflow-hidden">${post.summary}</p>
                            <div class="mt-4">
                                <span class="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">Read more &rarr;</span>
                            </div>
                        </div>
                    `;
                    postsContainer.appendChild(card);
                });
            };
            
            const renderFavoritesSidebar = () => {
                favoritesListContainer.innerHTML = '';
                if (state.favorites.length === 0) {
                    favoritesListContainer.innerHTML = `<p class="text-center text-gray-500 dark:text-gray-400">Star an article to save it here.</p>`;
                    return;
                }

                const favoritePosts = allPosts.filter(post => state.favorites.includes(post.id));
                favoritePosts.forEach(post => {
                    const item = document.createElement('div');
                    item.className = 'flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700';
                    item.innerHTML = `
                        <span class="font-semibold text-sm text-gray-800 dark:text-gray-200 cursor-pointer truncate pr-2" data-post-id="${post.id}">${post.title}</span>
                        <button class="remove-favorite-btn flex-shrink-0 p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900" data-favorite-id="${post.id}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-red-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        </button>
                    `;
                    favoritesListContainer.appendChild(item);
                });
            };

            const renderFullPost = (postId) => {
                const post = allPosts.find(p => p.id === postId);
                if (!post) return;

                const isFavorite = state.favorites.includes(post.id);
                postContentContainer.innerHTML = `
                    <img class="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8" src="${post.imageUrl}" alt="${post.title}" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Error';">
                    <div class="flex justify-between items-start">
                        <div>
                            <p class="text-md font-semibold text-blue-600 dark:text-blue-400">${post.category}</p>
                            <h1 class="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">${post.title}</h1>
                            <p class="text-md text-gray-500 dark:text-gray-400 mt-4">By ${post.author} on ${post.date}</p>
                        </div>
                        <button id="full-post-favorite-btn" data-favorite-id="${post.id}" class="p-2 rounded-full text-yellow-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0 ml-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                        </button>
                    </div>
                    <div class="prose lg:prose-xl mt-8 max-w-none text-gray-800 dark:text-gray-200">${post.content}</div>
                `;
                
                // Navigation
                const filteredPosts = getFilteredAndSortedPosts();
                const currentIndex = filteredPosts.findIndex(p => p.id === postId);
                const prevPost = currentIndex > 0 ? filteredPosts[currentIndex - 1] : null;
                const nextPost = currentIndex < filteredPosts.length - 1 ? filteredPosts[currentIndex + 1] : null;
                
                postNavigationContainer.innerHTML = '';
                if(prevPost) {
                    const prevButton = document.createElement('button');
                    prevButton.dataset.postId = prevPost.id;
                    prevButton.className = "post-nav-btn inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold group";
                    prevButton.innerHTML = `<span class="transform group-hover:-translate-x-1 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg></span>Previous Article`;
                    postNavigationContainer.appendChild(prevButton);
                }
                 postNavigationContainer.appendChild(document.createElement('div')).className = 'flex-grow'; // Spacer
                if(nextPost) {
                    const nextButton = document.createElement('button');
                    nextButton.dataset.postId = nextPost.id;
                    nextButton.className = "post-nav-btn inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold group";
                    nextButton.innerHTML = `Next Article<span class="transform group-hover:translate-x-1 transition-transform duration-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg></span>`;
                    postNavigationContainer.appendChild(nextButton);
                }

                // Show the view
                listView.classList.add('hidden');
                postView.classList.remove('hidden');
                window.scrollTo(0, 0);
            };

            const applyTheme = () => {
                if (state.theme === 'dark') {
                    document.documentElement.classList.add('dark');
                    themeIconMoon.classList.add('hidden');
                    themeIconSun.classList.remove('hidden');
                } else {
                    document.documentElement.classList.remove('dark');
                    themeIconMoon.classList.remove('hidden');
                    themeIconSun.classList.add('hidden');
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
                    .filter(post => state.selectedCategory === 'All' || post.category === state.selectedCategory)
                    .filter(post => post.title.toLowerCase().includes(state.searchTerm.toLowerCase()));
                
                // Apply sorting
                switch (state.sortOrder) {
                    case 'oldest':
                        filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
                        break;
                    case 'alpha-asc':
                        filtered.sort((a, b) => a.title.localeCompare(b.title));
                        break;
                    case 'alpha-desc':
                        filtered.sort((a, b) => b.title.localeCompare(a.title));
                        break;
                    case 'newest':
                    default:
                        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
                        break;
                }
                
                return filtered;
            };

            // --- EVENT HANDLERS ---

            const handleThemeToggle = () => {
                state.theme = state.theme === 'light' ? 'dark' : 'light';
                localStorage.setItem('blog-theme', state.theme);
                applyTheme();
            };

            const handleSearch = (e) => {
                state.searchTerm = e.target.value;
                renderPosts();
            };

            const handleSortChange = (e) => {
                state.sortOrder = e.target.value;
                localStorage.setItem('blog-sortOrder', state.sortOrder);
                renderPosts();
            };
            
            const handleToggleFavorite = (postId) => {
                if (state.favorites.includes(postId)) {
                    state.favorites = state.favorites.filter(id => id !== postId);
                } else {
                    state.favorites.push(postId);
                }
                localStorage.setItem('blog-favorites', JSON.stringify(state.favorites));
            };
            
            const handlePostSelect = (postId) => {
                renderFullPost(postId);
            };

            const openSidebar = () => {
                sidebarMenu.classList.add('is-open');
                sidebarOverlay.classList.add('is-open');
            };

            const closeSidebar = () => {
                sidebarMenu.classList.remove('is-open');
                sidebarOverlay.classList.remove('is-open');
            };

            // --- EVENT LISTENERS ---
            themeToggle.addEventListener('click', handleThemeToggle);
            searchInput.addEventListener('input', handleSearch);
            sortSelect.addEventListener('change', handleSortChange);
            backButton.addEventListener('click', () => {
                postView.classList.add('hidden');
                listView.classList.remove('hidden');
            });
            
            // Sidebar listeners
            hamburgerBtn.addEventListener('click', openSidebar);
            sidebarCloseBtn.addEventListener('click', closeSidebar);
            sidebarOverlay.addEventListener('click', closeSidebar);
            
            // Event delegation for dynamically created elements
            document.body.addEventListener('click', (e) => {
                // For post selection from card or favorites bar
                const postLink = e.target.closest('[data-post-id]');
                if (postLink) {
                    const postId = parseInt(postLink.dataset.postId, 10);
                    handlePostSelect(postId);
                    closeSidebar(); // Close sidebar if open
                }
                
                // For favoriting from the card view
                const favoriteButton = e.target.closest('.favorite-btn');
                if (favoriteButton) {
                    e.stopPropagation(); // Prevent card click
                    const postId = parseInt(favoriteButton.dataset.favoriteId, 10);
                    handleToggleFavorite(postId);
                    renderPosts();
                    renderFavoritesSidebar();
                }
                
                // For favoriting from the full post view
                const fullPostFavoriteButton = e.target.closest('#full-post-favorite-btn');
                if (fullPostFavoriteButton) {
                    const postId = parseInt(fullPostFavoriteButton.dataset.favoriteId, 10);
                    handleToggleFavorite(postId);
                    renderFullPost(postId);
                    renderFavoritesSidebar();
                }
                
                // For removing a favorite from the sidebar
                const removeFavoriteButton = e.target.closest('.remove-favorite-btn');
                if (removeFavoriteButton) {
                    const postId = parseInt(removeFavoriteButton.dataset.favoriteId, 10);
                    handleToggleFavorite(postId);
                    renderPosts(); // Re-render to update star icons
                    renderFavoritesSidebar();
                }
                
                // For post navigation
                const navButton = e.target.closest('.post-nav-btn');
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
    </script>
</body>
</html>
