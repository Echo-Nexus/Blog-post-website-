import React, { useState, useEffect, useMemo } from 'react';

// --- MOCK DATA ---
// Expanded blog posts with categories
const allPosts = [
    // Tech Category
    { id: 1, title: 'The Future of Artificial Intelligence', author: 'Jane Doe', date: 'August 25, 2025', category: 'Tech', imageUrl: 'https://placehold.co/600x400/1d4ed8/ffffff?text=AI', summary: 'Dive into the evolving world of AI and discover what the future holds for machine learning and neural networks.', content: `<p>Artificial Intelligence (AI) is a transformative force reshaping industries. The core of modern AI lies in machine learning (ML), enabling systems to learn from experience.</p><h3 class="text-2xl font-bold mt-6 mb-3">The Rise of Neural Networks</h3><p>Deep learning utilizes neural networks to tackle complex problems, leading to significant advancements in natural language processing and image recognition. However, it also brings ethical challenges around data privacy and algorithmic bias.</p>` },
    { id: 2, title: 'Getting Started with React Hooks', author: 'John Dev', date: 'August 24, 2025', category: 'Tech', imageUrl: 'https://placehold.co/600x400/2563eb/ffffff?text=React', summary: 'A comprehensive guide to understanding and using React Hooks for state management and side effects.', content: `<p>React Hooks have revolutionized how we write components. They allow you to use state and other React features without writing a class.</p><h3 class="text-2xl font-bold mt-6 mb-3">useState and useEffect</h3><p>The most common hooks are <code>useState</code> for managing local state and <code>useEffect</code> for handling side effects like data fetching or subscriptions. Mastering them is key to modern React development.</p>` },
    { id: 3, title: 'Understanding Docker and Containers', author: 'Peter Code', date: 'August 23, 2025', category: 'Tech', imageUrl: 'https://placehold.co/600x400/3b82f6/ffffff?text=Docker', summary: 'An introduction to containerization technology with Docker, and how it simplifies deployment.', content: `<p>Docker allows you to package an application with all of its dependencies into a standardized unit for software development. This solves the "it works on my machine" problem.</p>` },
    // Design Category
    { id: 4, title: 'The Art of Minimalist Web Design', author: 'Emily White', date: 'August 22, 2025', category: 'Design', imageUrl: 'https://placehold.co/600x400/64748b/ffffff?text=Design', summary: 'Explore the principles of minimalist design and how they can create beautiful, functional websites.', content: `<p>Minimalist web design emphasizes simplicity and functionality. By stripping away unnecessary elements, it focuses the user's attention on what's most important: the content.</p>` },
    { id: 5, title: 'Mastering CSS Grid Layout', author: 'Chris Style', date: 'August 21, 2025', category: 'Design', imageUrl: 'https://placehold.co/600x400/71717a/ffffff?text=CSS', summary: 'Unlock the power of CSS Grid to create complex, responsive layouts with ease.', content: `<p>CSS Grid is a two-dimensional layout system that makes it easy to build complex web page layouts. It's a game-changer for web designers and developers.</p>` },
    // Lifestyle Category
    { id: 6, title: 'A Guide to Sustainable Living', author: 'John Smith', date: 'August 20, 2025', category: 'Lifestyle', imageUrl: 'https://placehold.co/600x400/22c55e/ffffff?text=Green', summary: 'Learn practical tips for a more sustainable lifestyle. Every small change makes a big difference.', content: `<p>Sustainable living is about making conscious choices to reduce your environmental impact. It starts with the three Rs: Reduce, Reuse, Recycle.</p>` },
    { id: 7, title: 'The Benefits of Daily Meditation', author: 'Sara Mindful', date: 'August 19, 2025', category: 'Lifestyle', imageUrl: 'https://placehold.co/600x400/16a34a/ffffff?text=Zen', summary: 'Discover how a few minutes of meditation each day can improve your focus, reduce stress, and enhance well-being.', content: `<p>Meditation is a practice that can lead to a greater sense of calm and clarity. Even short sessions can have a profound impact on your mental health.</p>` },
    // Business Category
    { id: 8, title: 'Startup Funding: A Founder\'s Guide', author: 'Mark Investor', date: 'August 18, 2025', category: 'Business', imageUrl: 'https://placehold.co/600x400/f97316/ffffff?text=Biz', summary: 'Navigate the complex world of venture capital and angel investing to secure funding for your startup.', content: `<p>Securing funding is one of the biggest challenges for a startup. Understanding the different stages of funding is crucial for success.</p>` },
    { id: 9, title: 'Effective Project Management Techniques', author: 'Laura Plan', date: 'August 17, 2025', category: 'Business', imageUrl: 'https://placehold.co/600x400/ea580c/ffffff?text=Project', summary: 'Learn about Agile, Scrum, and other methodologies to keep your projects on track and on budget.', content: `<p>Choosing the right project management methodology can make or break a project. Agile and Scrum are popular choices for their flexibility and iterative approach.</p>` },
    // Science Category
    { id: 10, title: 'The Wonders of the James Webb Telescope', author: 'Astro Alex', date: 'August 16, 2025', category: 'Science', imageUrl: 'https://placehold.co/600x400/8b5cf6/ffffff?text=Space', summary: 'Explore the breathtaking images and groundbreaking discoveries from the James Webb Space Telescope.', content: `<p>The James Webb Space Telescope is providing an unprecedented view of the early universe, revealing galaxies and stars in stunning detail.</p>` },
];

const categories = [ 'All', 'Tech', 'Design', 'Lifestyle', 'Business', 'Science', 'Health', 'Travel', 'Food', 'Finance', 'Marketing', 'Education', 'History', 'Art', 'Music', 'Sports', 'Gaming', 'Books', 'Movies', 'DIY' ];

// --- SVG Icons ---
const ArrowLeftIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>);
const ArrowRightIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>);
const SunIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>);
const MoonIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>);
const StarIcon = ({ isFilled }) => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill={isFilled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
const SearchIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>);

// --- Components ---

const Navbar = ({ searchTerm, setSearchTerm, theme, toggleTheme }) => (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
                <div className="flex-shrink-0">
                    <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">The Modern Dev</h1>
                </div>
                <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
                    <div className="max-w-lg w-full lg:max-w-xs">
                        <label htmlFor="search" className="sr-only">Search</label>
                        <div className="relative text-gray-400 focus-within:text-gray-600">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <SearchIcon />
                            </div>
                            <input
                                id="search"
                                className="block w-full bg-white dark:bg-gray-800 py-2 pl-10 pr-3 border border-transparent rounded-md leading-5 text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:bg-white dark:focus:bg-gray-700 focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm"
                                placeholder="Search articles"
                                type="search"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <button onClick={toggleTheme} className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 dark:focus:ring-offset-gray-800 focus:ring-blue-500">
                    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
                </button>
            </div>
        </div>
    </header>
);

const Categories = ({ selectedCategory, setSelectedCategory }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex overflow-x-auto space-x-2 pb-2 -mx-2 px-2">
            {categories.map(category => (
                <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap transition-colors duration-200 ${
                        selectedCategory === category
                            ? 'bg-blue-600 text-white'
                            : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                >
                    {category}
                </button>
            ))}
        </div>
    </div>
);

const BlogPostCard = ({ post, onPostSelect, isFavorite, toggleFavorite }) => (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 group">
        <div className="relative">
            <img className="w-full h-48 object-cover" src={post.imageUrl} alt={post.title} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Error'; }} />
            <button onClick={(e) => { e.stopPropagation(); toggleFavorite(post.id); }} className="absolute top-2 right-2 p-2 rounded-full bg-white/70 dark:bg-gray-900/70 text-yellow-500 hover:bg-white dark:hover:bg-gray-900 transition-colors duration-200">
                <StarIcon isFilled={isFavorite} />
            </button>
        </div>
        <div className="p-6" onClick={() => onPostSelect(post.id)}>
            <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{post.category}</p>
            <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">By {post.author} on {post.date}</p>
            <p className="text-gray-700 dark:text-gray-300 mt-4 h-20 overflow-hidden">{post.summary}</p>
            <div className="mt-4">
                <span className="text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">Read more &rarr;</span>
            </div>
        </div>
    </div>
);

const BlogList = ({ posts, onPostSelect, favorites, toggleFavorite }) => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map(post => (
                    <BlogPostCard key={post.id} post={post} onPostSelect={onPostSelect} isFavorite={favorites.includes(post.id)} toggleFavorite={toggleFavorite} />
                ))}
            </div>
        ) : (
            <div className="text-center py-16">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">No Articles Found</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Try adjusting your search or category filters.</p>
            </div>
        )}
    </div>
);

const BlogPostFull = ({ post, onBack, onNavigate, isFavorite, toggleFavorite }) => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold mb-6 group">
            <span className="transform group-hover:-translate-x-1 transition-transform duration-300"><ArrowLeftIcon /></span>
            Back to all posts
        </button>
        <article>
            <img className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg mb-8" src={post.imageUrl} alt={post.title} onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Error'; }} />
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-md font-semibold text-blue-600 dark:text-blue-400">{post.category}</p>
                    <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">{post.title}</h1>
                    <p className="text-md text-gray-500 dark:text-gray-400 mt-4">By {post.author} on {post.date}</p>
                </div>
                <button onClick={() => toggleFavorite(post.id)} className="p-2 rounded-full text-yellow-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 flex-shrink-0 ml-4">
                    <StarIcon isFilled={isFavorite} />
                </button>
            </div>
            <div className="prose lg:prose-xl mt-8 max-w-none text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
        <div className="mt-12 flex justify-between items-center">
            {onNavigate.prev && <button onClick={() => onNavigate.prev()} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold group"><span className="transform group-hover:-translate-x-1 transition-transform duration-300"><ArrowLeftIcon /></span>Previous Article</button>}
            <div className="flex-grow"></div>
            {onNavigate.next && <button onClick={() => onNavigate.next()} className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold group">Next Article<span className="transform group-hover:translate-x-1 transition-transform duration-300"><ArrowRightIcon /></span></button>}
        </div>
    </div>
);

export default function App() {
    // State Management
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    
    // Theme state with localStorage persistence
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('blog-theme');
        return savedTheme || 'light';
    });

    // Favorites state with localStorage persistence
    const [favorites, setFavorites] = useState(() => {
        const savedFavorites = localStorage.getItem('blog-favorites');
        return savedFavorites ? JSON.parse(savedFavorites) : [];
    });

    // Effect to apply theme class and save to localStorage
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('blog-theme', theme);
    }, [theme]);

    // Effect to save favorites to localStorage
    useEffect(() => {
        localStorage.setItem('blog-favorites', JSON.stringify(favorites));
    }, [favorites]);

    // Handlers
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    
    const toggleFavorite = (postId) => {
        setFavorites(prev => 
            prev.includes(postId) 
                ? prev.filter(id => id !== postId) 
                : [...prev, postId]
        );
    };

    const handlePostSelect = (postId) => {
        setSelectedPostId(postId);
        window.scrollTo(0, 0);
    };

    const handleBack = () => setSelectedPostId(null);

    // Filtering logic
    const filteredPosts = useMemo(() => {
        return allPosts
            .filter(post => selectedCategory === 'All' || post.category === selectedCategory)
            .filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }, [searchTerm, selectedCategory]);

    // Navigation logic for next/previous articles
    const navigation = useMemo(() => {
        if (!selectedPostId) return { prev: null, next: null };
        const currentIndex = filteredPosts.findIndex(p => p.id === selectedPostId);
        const prevPostId = currentIndex > 0 ? filteredPosts[currentIndex - 1].id : null;
        const nextPostId = currentIndex < filteredPosts.length - 1 ? filteredPosts[currentIndex + 1].id : null;
        
        return {
            prev: prevPostId ? () => handlePostSelect(prevPostId) : null,
            next: nextPostId ? () => handlePostSelect(nextPostId) : null,
        };
    }, [selectedPostId, filteredPosts]);

    const selectedPost = selectedPostId ? allPosts.find(p => p.id === selectedPostId) : null;

    return (
        <div className="bg-gray-100 dark:bg-gray-900 min-h-screen font-sans transition-colors duration-300">
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} theme={theme} toggleTheme={toggleTheme} />
            <main>
                {selectedPost ? (
                    <BlogPostFull 
                        post={selectedPost} 
                        onBack={handleBack}
                        onNavigate={navigation}
                        isFavorite={favorites.includes(selectedPost.id)}
                        toggleFavorite={toggleFavorite}
                    />
                ) : (
                    <>
                        <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
                        <BlogList 
                            posts={filteredPosts} 
                            onPostSelect={handlePostSelect}
                            favorites={favorites}
                            toggleFavorite={toggleFavorite}
                        />
                    </>
                )}
            </main>
        </div>
    );
}

