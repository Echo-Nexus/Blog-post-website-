//Use this template to set image between article
/*  <img src="https://www.dropbox.com/scl/fi/mu2xvhnxmto9f941fsb3b/id2.jpg?rlkey=lmnig3t0q8he4p7m7wyw1u4jn&st=h07tu3nu&&raw=1" 
       alt="Artificial Intelligence" 
       class="w-full h-80 md:h-96 object-cover rounded-xl mb-6 shadow-md" />
*/

//This is the tamplate for Articles
/*
{  
        id: ,  
        title: "",  
        author: "Komal Chaudhary",  
        date: "August 25, 2025",  
        category: "Tech",  
        imageUrl: "https://placehold.co/600x400/8b5cf6/ffffff?text=Space",  
        summary:  
            "",  
        content: `<p></p>`  
    }
*/
document.addEventListener("DOMContentLoaded", () => {

  const categories = [
    "All",
    "Tech",
    "Biography",
    "Science",
    "Country",
    "Books",
    "River",
    "Mountains",
    "Music",
    "Business",
    "Education",
    "History",
    "Art",
    "Sports",
  ];

  // --- STATE MANAGEMENT ---
  let state = {
    searchTerm: "",
    selectedCategory: "All",
    sortOrder: localStorage.getItem("blog-sortOrder") || "newest",
    favorites: JSON.parse(localStorage.getItem("blog-favorites")) || [],
    theme: localStorage.getItem("blog-theme") || "light",
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
    categories.forEach((category) => {
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

    const favoritePosts = allPosts.filter((post) =>
      state.favorites.includes(post.id)
    );
    favoritePosts.forEach((post) => {
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

  const renderFullPost = (postId) => {
    const post = allPosts.find((p) => p.id === postId);
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
    const currentIndex = filteredPosts.findIndex((p) => p.id === postId);
    const prevPost = currentIndex > 0 ? filteredPosts[currentIndex - 1] : null;
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
        (post) =>
          state.selectedCategory === "All" ||
          post.category === state.selectedCategory
      )
      .filter((post) =>
        post.title.toLowerCase().includes(state.searchTerm.toLowerCase())
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

  const handleSearch = (e) => {
    state.searchTerm = e.target.value;
    renderPosts();
  };

  const handleSortChange = (e) => {
    state.sortOrder = e.target.value;
    localStorage.setItem("blog-sortOrder", state.sortOrder);
    renderPosts();
  };

  const handleToggleFavorite = (postId) => {
    if (state.favorites.includes(postId)) {
      state.favorites = state.favorites.filter((id) => id !== postId);
    } else {
      state.favorites.push(postId);
    }
    localStorage.setItem("blog-favorites", JSON.stringify(state.favorites));
  };

  const handlePostSelect = (postId) => {
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
  document.body.addEventListener("click", (e) => {
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
    const fullPostFavoriteButton = e.target.closest("#full-post-favorite-btn");
    if (fullPostFavoriteButton) {
      const postId = parseInt(fullPostFavoriteButton.dataset.favoriteId, 10);
      handleToggleFavorite(postId);
      renderFullPost(postId);
      renderFavoritesSidebar();
    }

    // For removing a favorite from the sidebar
    const removeFavoriteButton = e.target.closest(".remove-favorite-btn");
    if (removeFavoriteButton) {
      const postId = parseInt(removeFavoriteButton.dataset.favoriteId, 10);
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
