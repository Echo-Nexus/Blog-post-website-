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
    "Lifestyle",
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
    // Theme: site is dark-only
    // (light mode removed per request)
  };

  // --- DOM ELEMENTS ---
  const postsContainer = document.getElementById("posts-container");
  const categoriesContainer = document.getElementById("categories-container");
  const searchInput = document.getElementById("search-input");
  const sortSelect = document.getElementById("sort-select");

  const listView = document.getElementById("list-view");
  const postView = document.getElementById("post-view");
  const backButton = document.getElementById("back-button");
  const postContentContainer = document.getElementById(
    "post-content-container"
  );

  // Track which post is currently open in the full post view (null when list view is active)
  let currentPostId = null;
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
        "bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group border border-transparent dark:border-transparent hover:border-gray-200 dark:hover:border-gray-700";
      card.innerHTML = `
                        <div class="relative post-card-image">
                            <img class="w-full h-48 object-cover" src="${
                              post.imageUrl
                            }" alt="${
        post.title
      }" onerror="this.onerror=null;this.src='https://placehold.co/600x400/cccccc/ffffff?text=Error';">
                            <div class="absolute top-2 left-2 bg-black/50 text-white text-xs font-bold px-2 py-1 rounded-full post-badge">#${
                              index + 1
                            }</div>
                            <button data-favorite-id="${
                              post.id
                            }" class="favorite-btn absolute top-2 right-2 p-2 rounded-full bg-white/70 dark:bg-gray-900/70 ${
        isFavorite ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
      } hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200">
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
    currentPostId = postId; // remember which post is open
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
                        }" class="p-2 rounded-full ${
      isFavorite ? "text-yellow-400" : "text-gray-300 hover:text-yellow-400"
    } hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0 ml-4">
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
        "post-nav-btn inline-flex items-center gap-0 text-blue-600 dark:text-blue-400 hover:underline font-semibold group p-1";
      prevButton.setAttribute("aria-label", "Previous article");
      prevButton.title = "Previous article";
      prevButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" aria-hidden="true"><path d="m12 19-7-7 7-7"/></svg>`;
      postNavigationContainer.appendChild(prevButton);
    }
    postNavigationContainer.appendChild(
      document.createElement("div")
    ).className = "flex-grow"; // Spacer
    if (nextPost) {
      const nextButton = document.createElement("button");
      nextButton.dataset.postId = nextPost.id;
      nextButton.className =
        "post-nav-btn inline-flex items-center gap-0 text-blue-600 dark:text-blue-400 hover:underline font-semibold group p-1";
      nextButton.setAttribute("aria-label", "Next article");
      nextButton.title = "Next article";
      nextButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" aria-hidden="true"><path d="m12 5 7 7-7 7"/></svg>`;
      postNavigationContainer.appendChild(nextButton);
    }

    // Make the post navigation sticky and add subtle spacing so it doesn't overlap content
    postNavigationContainer.classList.add("sticky-post-nav");
    postView.classList.add("has-sticky-nav");

    // Show the view
    listView.classList.add("hidden");
    postView.classList.remove("hidden");
    window.scrollTo(0, 0);
  };

  // Force dark theme only
  const applyTheme = () => {
    const html = document.documentElement;
    html.classList.add("dark");
    html.setAttribute("data-theme", "dark");
  };

  const renderAll = () => {
    // Normalize posts in case the data changes at runtime (ensures sorting & searching are accurate)
    normalizePosts();
    renderCategories();
    renderPosts();
    renderFavoritesSidebar();
  };

  // --- HELPER FUNCTIONS ---
  const getFilteredAndSortedPosts = () => {
    const term = state.searchTerm.trim().toLowerCase();
    let filtered = allPosts
      .filter((post) =>
        state.selectedCategory === "All"
          ? true
          : post.category === state.selectedCategory
      )
      .filter((post) => {
        if (!term) return true;
        // Use precomputed searchable text
        return (post._searchable || "").includes(term);
      });

    // Apply sorting using normalized timestamps
    switch (state.sortOrder) {
      case "oldest":
        filtered.sort((a, b) => {
          const diff = (a._ts || 0) - (b._ts || 0);
          if (diff !== 0) return diff;
          return (a._id || 0) - (b._id || 0);
        });
        break;
      case "alpha-asc":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "alpha-desc":
        filtered.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "newest":
      default:
        filtered.sort((a, b) => {
          const diff = (b._ts || 0) - (a._ts || 0);
          if (diff !== 0) return diff;
          return (b._id || 0) - (a._id || 0);
        });
        break;
    }

    return filtered;
  };

  // --- EVENT HANDLERS ---

  const handleSearch = (e) => {
    state.searchTerm = e.target.value;
    renderPosts();
    // Ensure results are visible when user searches
    try {
      postsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (err) {
      // ignore in unsupported environments
    }
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
  // Theme selector removed (dark-only)
  searchInput.addEventListener("input", handleSearch);
  sortSelect.addEventListener("change", handleSortChange);
  backButton.addEventListener("click", () => {
    postView.classList.add("hidden");
    listView.classList.remove("hidden");
    currentPostId = null; // clear current post when going back to list
    // Remove sticky navigation when returning to list
    postNavigationContainer.classList.remove("sticky-post-nav");
    postView.classList.remove("has-sticky-nav");
  });

  // Sidebar listeners
  hamburgerBtn.addEventListener("click", openSidebar);
  sidebarCloseBtn.addEventListener("click", closeSidebar);
  sidebarOverlay.addEventListener("click", closeSidebar);

  // Event delegation for dynamically created elements
  document.body.addEventListener("click", (e) => {
    // For favoriting from the card view
    const favoriteButton = e.target.closest(".favorite-btn");
    if (favoriteButton) {
      e.stopPropagation(); // Prevent card click
      const postId = parseInt(favoriteButton.dataset.favoriteId, 10);
      handleToggleFavorite(postId);
      renderPosts();
      renderFavoritesSidebar();
      // Open sidebar so user sees their favorites immediately
      openSidebar();
      return;
    }

    // For favoriting from the full post view
    const fullPostFavoriteButton = e.target.closest("#full-post-favorite-btn");
    if (fullPostFavoriteButton) {
      e.stopPropagation();
      const postId = parseInt(fullPostFavoriteButton.dataset.favoriteId, 10);
      handleToggleFavorite(postId);
      // Keep all views in sync
      renderPosts();
      renderFullPost(postId);
      renderFavoritesSidebar();
      return;
    }

    // For removing a favorite from the sidebar
    const removeFavoriteButton = e.target.closest(".remove-favorite-btn");
    if (removeFavoriteButton) {
      e.stopPropagation();
      const postId = parseInt(removeFavoriteButton.dataset.favoriteId, 10);
      handleToggleFavorite(postId);
      renderPosts(); // Re-render to update star icons
      renderFavoritesSidebar();
      // If the user was viewing this post, update the full post view as well
      if (currentPostId === postId && !postView.classList.contains("hidden")) {
        renderFullPost(postId);
      }
      return;
    }

    // For post navigation
    const navButton = e.target.closest(".post-nav-btn");
    if (navButton) {
      const postId = parseInt(navButton.dataset.postId, 10);
      handlePostSelect(postId);
      return;
    }

    // For post selection from card or favorites bar (fallback)
    const postLink = e.target.closest("[data-post-id]");
    if (postLink) {
      const postId = parseInt(postLink.dataset.postId, 10);
      handlePostSelect(postId);
      closeSidebar(); // Close sidebar if open
    }
  });

  // Navigation helper for keyboard actions
  const navigateToAdjacent = (direction) => {
    if (!currentPostId) return;
    const filtered = getFilteredAndSortedPosts();
    const currentIndex = filtered.findIndex((p) => p.id === currentPostId);
    if (currentIndex === -1) return;
    const target =
      direction === "prev"
        ? currentIndex > 0
          ? filtered[currentIndex - 1]
          : null
        : currentIndex < filtered.length - 1
        ? filtered[currentIndex + 1]
        : null;
    if (target) {
      renderFullPost(target.id);
      // ensure visible
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Keyboard shortcuts for productivity
  document.addEventListener("keydown", (e) => {
    const active = document.activeElement;
    const isTyping =
      active &&
      (active.tagName === "INPUT" ||
        active.tagName === "TEXTAREA" ||
        active.isContentEditable);

    // Ctrl/Cmd+K to focus search
    if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      searchInput.focus();
      if (searchInput.select) searchInput.select();
      return;
    }

    // Space to focus search when not typing in an input
    if (e.key === " " && !isTyping) {
      e.preventDefault();
      searchInput.focus();
      if (searchInput.select) searchInput.select();
      return;
    }

    // Left/right arrows for prev/next article when a post is open
    if (
      (e.key === "ArrowLeft" || e.code === "ArrowLeft") &&
      currentPostId &&
      !isTyping
    ) {
      e.preventDefault();
      navigateToAdjacent("prev");
      return;
    }
    if (
      (e.key === "ArrowRight" || e.code === "ArrowRight") &&
      currentPostId &&
      !isTyping
    ) {
      e.preventDefault();
      navigateToAdjacent("next");
      return;
    }

    // 'f' to toggle favorite for the current open post
    if ((e.key === "f" || e.key === "F") && currentPostId && !isTyping) {
      e.preventDefault();
      handleToggleFavorite(currentPostId);
      renderPosts();
      renderFavoritesSidebar();
      renderFullPost(currentPostId);
      return;
    }

    // Escape: go back from full post, or close sidebar if open
    if (e.key === "Escape") {
      if (!postView.classList.contains("hidden")) {
        e.preventDefault();
        backButton.click();
        return;
      }
      if (sidebarMenu.classList.contains("is-open")) {
        e.preventDefault();
        closeSidebar();
        return;
      }
    }

    // 'm' to toggle favorites menu
    if ((e.key === "m" || e.key === "M") && !isTyping) {
      e.preventDefault();
      if (sidebarMenu.classList.contains("is-open")) closeSidebar();
      else openSidebar();
      return;
    }
  });

  // Normalize posts for searching and sorting
  const normalizePosts = () => {
    if (!Array.isArray(allPosts)) return;
    allPosts.forEach((post) => {
      // Timestamp for robust sorting
      const ts = Date.parse(post.date);
      post._ts = Number.isFinite(ts) ? ts : 0;
      // Numeric id for stable tie-breaks
      post._id = Number(post.id) || 0;
      // Precompute a searchable string (strip HTML from content)
      const contentText = post.content
        ? post.content.replace(/<[^>]+>/g, " ")
        : "";
      post._searchable = `${post.title || ""} ${post.summary || ""} ${
        post.author || ""
      } ${post.category || ""} ${contentText}`.toLowerCase();
    });
  };

  // --- INITIALIZATION ---
  const init = () => {
    normalizePosts();
    applyTheme();
    sortSelect.value = state.sortOrder;
    renderAll();

    // Listen to system theme changes and respect them if the user hasn't explicitly chosen a theme
    // Theme is now fixed to dark only; no system-listener needed.
  };

  init();
});
