document.addEventListener("DOMContentLoaded", () => {
    // --- DATA SOURCE ---
    // To add a new article, simply add a new object to this array.
    // Ensure the 'id' is unique and the 'date' is a valid string format.
    const allPosts = [
        {
            id: 1,
            title: "About This Website Creator ",
            author: "Komal Chaudhary",
            date: "August 25, 2025",
            category: "Biography",
            imageUrl:
                "https://www.dropbox.com/scl/fi/94re827cvv68umj0od45c/IMG_20250719_140929.jpg?rlkey=42a55l0d8sld2ojeaxqwt2z7j&st=0z8ou6ga&&raw=1",
            summary:
                "Komal Chaudhary is a highly motivated and talented learner from Nepal, with a passion for science, technology, and sharing knowledge through creative content.",
            content: `<p>Komal Chaudhary is an ambitious and intellectually curious individual hailing from Nepal. Known for being a consistent top performer in academics, Komal has a deep love for learning and exploring new subjects, particularly in the fields of science, technology, history, and innovation. With a natural talent for research and critical thinking, Komal has developed a strong foundation in understanding complex concepts and presenting them in a simple, engaging manner.</p>

            <p>Beyond academics, Komal is exploring various avenues to share knowledge with a wider audience. Whether it is writing detailed blog posts, crafting engaging articles, or producing educational content for YouTube, Komal aims to inspire curiosity and learning in others. A tech-savvy individual, Komal is comfortable using modern tools, gadgets, and digital platforms to create and disseminate content efficiently.</p>

            <p>Despite having limited resources, including devices like a Samsung A7 tablet, a Redmi Note 9, and basic accessories, Komal has shown remarkable ingenuity in leveraging what is available to achieve learning and creative goals. With a forward-thinking mindset, Komal is constantly seeking opportunities to grow, innovate, and explore career paths that blend technology, creativity, and knowledge sharing.</p>

            <p>Driven by curiosity and a desire to make a meaningful impact, Komal continues to set ambitious goals, balancing academic excellence with personal development and creative pursuits. Through dedication, discipline, and a passion for lifelong learning, Komal Chaudhary represents a bright and inspiring example of a young individual eager to leave a mark in the fields of science, technology, and education.</p>`
        },
        {
            id: 2,
            title: "Artificial Intelligence को भविष्य",
            author: "Komal Chaudhary",
            date: "August 25, 2025",
            category: "Tech",
            imageUrl:
                "https://www.dropbox.com/scl/fi/mu2xvhnxmto9f941fsb3b/id2.jpg?rlkey=lmnig3t0q8he4p7m7wyw1u4jn&st=h07tu3nu&&raw=1",
            summary:
                "यो लेखमा हामी भविष्यमा Artificial Intelligence (AI) ले हाम्रो जीवन र समाजमा कस्तो प्रभाव पार्न सक्छ भन्ने बारेमा विस्तृत विश्लेषण गर्नेछौं।",
            content: `<div style="max-width:800px; margin:auto; padding:20px; background-color:#ffffff; box-shadow:0 4px 12px rgba(0,0,0,0.1); border-radius:16px;">
        
               <p style="font-size:18px; color:#374151; margin-bottom:20px;">
            यो लेखमा हामी भविष्यमा Artificial Intelligence (AI) ले हाम्रो जीवन र समाजमा कस्तो प्रभाव पार्न सक्छ भन्ने बारेमा विस्तृत विश्लेषण गर्नेछौं।
        </p>

        <p style="font-size:16px; color:#374151; margin-bottom:16px;">
            Artificial Intelligence (AI) आधुनिक प्रविधिको एक महत्वपूर्ण हिस्सा बनेको छ। यसले हाम्रा दैनिक जीवन, उद्योग, स्वास्थ्य, शिक्षा, र मनोरञ्जनको क्षेत्रमा ठूलो प्रभाव पार्दै आएको छ। भविष्यमा AI को विकास अझ तीव्र र व्यापक हुने अपेक्षा गरिएको छ।
        </p>

        <h2 style="font-size:24px; font-weight:700; color:#111827; margin-top:20px; margin-bottom:12px;">१. AI को वर्तमान स्थिति</h2>
        <p style="font-size:16px; color:#374151; margin-bottom:12px;">आजको समयमा AI विभिन्न क्षेत्रमा प्रयोग भइरहेको छ:</p>
        <div style="font-size:16px; color:#374151; margin-left:20px; margin-bottom:20px;">
            <p style="margin-bottom:6px;">• स्वचालित ड्राइभिङ: Tesla, Waymo जस्ता कम्पनीहरूले AI को प्रयोग गरेर कारलाई स्वतः चलाउने प्रविधि विकास गरिरहेका छन्।</p>
            <p style="margin-bottom:6px;">• स्वास्थ्य सेवा: AI रोगको पहिचान, उपचार योजना, र मेडिकल इमेजिंगमा मद्दत गर्दैछ।</p>
            <p style="margin-bottom:6px;">• वाणिज्य र ई–कर्मस: AI ग्राहक व्यवहार विश्लेषण, सुझाव प्रणाली, र सप्लाई चेन व्यवस्थापनमा प्रयोग भइरहेको छ।</p>
            <p style="margin-bottom:6px;">• भाषा र संचार: ChatGPT जस्ता AI उपकरणहरूले मानव–कम्प्युटर संवादलाई सहज बनाउँदै छन्।</p>
        </div>

        <h2 style="font-size:24px; font-weight:700; color:#111827; margin-top:20px; margin-bottom:12px;">२. भविष्यमा AI को सम्भावना</h2>
        <p style="font-size:16px; color:#374151; margin-bottom:12px;">भविष्यमा AI ले हाम्रो जीवन र समाजलाई विभिन्न तरिकाले रूपान्तरण गर्नेछ:</p>
        <div style="font-size:16px; color:#374151; margin-left:20px; margin-bottom:20px;">
            <p style="margin-bottom:6px;">• <strong>शिक्षा:</strong> व्यक्तिगत शिक्षण अनुभव र अनलाइन शिक्षा प्रणालीलाई AI द्वारा अझ प्रभावकारी बनाइनेछ।</p>
            <p style="margin-bottom:6px;">• <strong>स्वास्थ्य:</strong> AI ले रोग निदान, औषधि विकास, र स्वास्थ्य सेवा प्रणालीमा क्रान्ति ल्याउनेछ।</p>
            <p style="margin-bottom:6px;">• <strong>उद्योग र रोजगारी:</strong> मेसिन लर्निङ र रोबोटिक्सको प्रयोगले उत्पादन क्षमता बढाउनेछ, तर केही पारम्परिक रोजगारी कम हुन सक्छ।</p>
            <p style="margin-bottom:6px;">• <strong>सुरक्षा र गोपनीयता:</strong> AI आधारित सुरक्षा प्रणालीले साइबर अपराध र डाटा सुरक्षा सुधार गर्नेछ, तर गोपनीयता र नैतिक चुनौतीहरू पनि बढ्नेछन्।</p>
        </div>

        <h2 style="font-size:24px; font-weight:700; color:#111827; margin-top:20px; margin-bottom:12px;">३. AI र सामाजिक प्रभाव</h2>
        <div style="font-size:16px; color:#374151; margin-left:20px; margin-bottom:20px;">
            <p style="margin-bottom:6px;">• आर्थिक वृद्धि: AI ले उत्पादन क्षमता बढाएर राष्ट्रिय आर्थिक वृद्धि गर्नेछ।</p>
            <p style="margin-bottom:6px;">• रोजगारी चुनौती: केही क्षेत्रमा मानिसको स्थान मेसिनले लिने सम्भावना छ, जसले नयाँ कौशल सिक्न आवश्यक बनाउनेछ।</p>
            <p style="margin-bottom:6px;">• शिक्षा र प्रशिक्षण: नयाँ AI प्रविधिको लागि विद्यार्थी र पेशेवरहरूको लागि प्रशिक्षण र शिक्षा अनिवार्य हुनेछ।</p>
            <p style="margin-bottom:6px;">• नैतिक र कानूनी प्रश्न: AI ले निर्णय लिने प्रक्रियामा पारदर्शिता र जिम्मेवारी सुनिश्चित गर्न चुनौती उत्पन्न गर्नेछ।</p>
        </div>

        <h2 style="font-size:24px; font-weight:700; color:#111827; margin-top:20px; margin-bottom:12px;">४. AI को नैतिकता र जिम्मेवारी</h2>
        <div style="font-size:16px; color:#374151; margin-left:20px; margin-bottom:20px;">
            <p style="margin-bottom:6px;">• AI ले लिएर आउने निर्णयहरू पारदर्शी र न्यायसंगत हुनुपर्छ।</p>
            <p style="margin-bottom:6px;">• डेटा गोपनीयता र प्रयोगकर्ता अधिकारको संरक्षण अनिवार्य छ।</p>
            <p style="margin-bottom:6px;">• AI मा पूर्वाग्रह र भेदभाव रोक्न निरन्तर निगरानी आवश्यक छ।</p>
        </div>

        <h2 style="font-size:24px; font-weight:700; color:#111827; margin-top:20px; margin-bottom:12px;">५. निष्कर्ष</h2>
        <p style="font-size:16px; color:#374151; margin-bottom:12px;">भविष्यमा AI हाम्रो जीवनको अभिन्न हिस्सा बन्नेछ। यसले शिक्षा, स्वास्थ्य, उद्योग, सुरक्षा र मनोरञ्जनका क्षेत्रमा क्रान्ति ल्याउनेछ। तर यससँगै सामाजिक, नैतिक, र कानूनी चुनौतीहरू पनि आउनेछन्। हामीले यी चुनौतीहरू सामना गर्दै AI को विकासलाई सुरक्षित, जिम्मेवार र मानव कल्याणमुखी बनाउनु जरुरी छ।</p>
        <p style="font-size:16px; color:#374151;">AI को सही दिशा र नियमनले मानव जीवनलाई अझ सरल, सुरक्षित, र समृद्ध बनाउने अवसर प्रदान गर्नेछ। यसैले, AI को भविष्य उज्ज्वल भए पनि यसमा सजग र जिम्मेवार दृष्टिकोण आवश्यक छ।</p>

    </div>`
        },
        {
    id: 3,
    title: "Google को इतिहास र भविष्य",
    author: "Komal Chaudhary",
    date: "August 25, 2025",
    category: "Tech",
    imageUrl: "https://www.dropbox.com/scl/fi/q78b026iahykc1j4e3zxk/id3.jpg?rlkey=dcswv80ci9bwmdkfy5k9thtvb&st=e5t58imr&&raw=1",
    summary: "यो लेखमा हामी Google को इतिहास, यसको विकास, र भविष्यमा यसको सम्भावित योगदानबारे विस्तृत विश्लेषण गर्नेछौं।",
    content: `<div style="max-width:800px; margin:auto; padding:20px; background-color:#ffffff; box-shadow:0 4px 12px rgba(0,0,0,0.1); border-radius:16px; font-family:Arial, sans-serif;">

      <pre>
      गुगलको यात्रा सन् १९९८ मा ल्यारी पेज (Larry Page) र सर्गेई ब्रिन (Sergey Brin) द्वारा सुरु भएको थियो। उनीहरू दुवै स्ट्यानफोर्ड विश्वविद्यालयका विद्यार्थी थिए। उनीहरूले इन्टरनेटमा जानकारी खोज्ने एउटा नयाँ र राम्रो तरिका पत्ता लगाउने उद्देश्यले काम गरिरहेका थिए। उनीहरूको यो परियोजनाको नाम सुरुमा "ब्याकरब" (BackRub) थियो, जसलाई पछि "गूगल" नाम दिइयो। "गूगल" नाम "गूगोल" (Googol) शब्दबाट आएको हो, जसको अर्थ १ पछि १०० वटा शून्य हुन्छ। यो नामले उनीहरूको विशाल जानकारीलाई व्यवस्थित गर्ने लक्ष्यलाई झल्काउँछ।
​गूगलको पहिलो कार्यालय क्यालिफोर्नियाको मेन्लो पार्कमा एउटा साथीको ग्यारेजमा थियो। सन् १९९८ मा उनीहरूले आधिकारिक रूपमा "गुगल इंक." (Google Inc.) को स्थापना गरे। उनीहरूको मुख्य लक्ष्य भनेको संसारभरिको जानकारीलाई व्यवस्थित गर्नु र सबैले त्यसलाई सजिलै उपयोग गर्न सक्ने बनाउनु थियो। उनीहरूको खोज इन्जिनले वेबसाइटहरूलाई उनीहरूको लिङ्कको आधारमा श्रेणीकरण गर्थ्यो, जसले गर्दा सबैभन्दा सान्दर्भिक परिणामहरू सजिलै फेला पार्न सकिन्थ्यो।
​समयसँगै गुगलले आफ्नो सेवाहरू विस्तार गर्दै गयो। सन् २००० मा गुगलले "गुगल एड्स" (Google Ads) सुरु गर्यो, जसले कम्पनीलाई ठूलो आर्थिक सफलता दियो। त्यसपछि सन् २००४ मा "जीमेल" (Gmail) आयो, जसले ठूलो मात्रामा निःशुल्क भण्डारण दिएर इमेलको क्षेत्रमा क्रान्ति ल्यायो। त्यसैगरी, सन् २००५ मा "गुगल म्याप्स" (Google Maps) र सन् २००६ मा "युट्युब" (YouTube) को अधिग्रहणले गुगललाई थप शक्तिशाली बनायो।
​सन् २००८ मा गुगलले आफ्नो वेब ब्राउजर "गुगल क्रोम" (Google Chrome) र मोबाइल अपरेटिङ सिस्टम "एन्ड्रोइड" (Android) सुरु गर्यो। एन्ड्रोइड अहिले संसारका धेरैजसो स्मार्टफोनहरूमा प्रयोग हुने मुख्य अपरेटिङ सिस्टम बनेको छ। यी दुई उत्पादनले गुगललाई खोज र विज्ञापनभन्दा बाहिरको प्रविधि बजारमा पनि स्थापित गर्यो।
​आज, गुगल एक विश्वव्यापी कम्पनी बनेको छ र यसको मुख्य कम्पनी "अल्फाबेट इंक." (Alphabet Inc.) हो। यसले आर्टिफिसियल इन्टेलिजेन्स (AI), क्लाउड कम्प्युटिङ, र अन्य धेरै क्षेत्रमा काम गरिरहेको छ। गुगलले आफ्नो सानो ग्यारेजबाट सुरु भएको यात्रामा प्रविधिको संसारमा ठूलो परिवर्तन ल्याएको छ।
      </pre>
    </div>`
},
        {
            id: 4,
            title: "ब्रह्माण्डको रहस्य",
            author: "Komal Chaudhary",
            date: "August 25, 2025",
            category: "Science",
            imageUrl:
                "https://www.dropbox.com/scl/fi/pqfe0wseqxy2w5nbk4hc2/id4.jpg?rlkey=fk3409qhnt68glse9mzjq7etd&st=qu4053fk&&raw=1",
            summary:
                "यो लेखमा हामी ब्रह्माण्डको विशालता, यसको संरचना, र यसको रहस्यहरूबारे विस्तृत चर्चा गर्नेछौं।",
            content: `<div style="max-width:800px; margin:auto; padding:20px; background-color:#ffffff; box-shadow:0 4px 12px rgba(0,0,0,0.1); border-radius:16px; font-family:Arial, sans-serif;">

        <p style="font-size:18px; color:#374151; margin-bottom:16px;">
            ब्रह्माण्ड मानव ज्ञानको सबैभन्दा विशाल र रहस्यमय क्षेत्र हो। यसको गहिराइ र विशालता अकल्पनीय छ, र यसमा अरबौं तारा, ग्रह, नक्षत्र, र आकाशगङ्गा छन्।
        </p>

        <h2 style="font-size:24px; font-weight:700; color:#111827; margin-top:20px; margin-bottom:12px;">१. ब्रह्माण्डको संरचना</h2>
        <p style="font-size:16px; color:#374151; margin-bottom:12px;">ब्रह्माण्ड मुख्यतः निम्न घटकबाट बनेको छ:</p>
        <div style="font-size:16px; color:#374151; margin-left:20px; margin-bottom:20px;">
            <p style="margin-bottom:6px;">• ताराहरू: आकाशमा प्रकाश फ्याँक्ने विशाल ग्यासका बल्बहरू।</p>
            <p style="margin-bottom:6px;">• ग्रहहरू: आफ्नो तारा वरिपरि घुम्ने ठूला पिण्डहरू।</p>
            <p style="margin-bottom:6px;">• ग्यास र धुलो: नयाँ तारा निर्माणमा महत्वपूर्ण।</p>
            <p style="margin-bottom:6px;">• डार्क म्याटर र डार्क ऊर्जा: अझै रहस्यमय, ब्रह्माण्डको ९०% भन्दा बढी हिस्सा यहीले बनाएको छ।</p>
        </div>

        <h2 style="font-size:24px; font-weight:700; color:#111827; margin-top:20px; margin-bottom:12px;">२. ब्रह्माण्डको उत्पत्ति</h2>
        <p style="font-size:16px; color:#374151; margin-bottom:12px;">
            वैज्ञानिक अनुसार, ब्रह्माण्ड करिब १३.८ अरब वर्षअघि बिग बैंक (Big Bang) बाट उत्पन्न भएको हो। त्यसपछि यो विस्तार हुँदै आएको छ र आजसम्म विशाल रूप लिइसकेको छ।
        </p>

        <h2 style="font-size:24px; font-weight:700; color:#111827; margin-top:20px; margin-bottom:12px;">३. ब्रह्माण्डका रहस्य</h2>
        <div style="font-size:16px; color:#374151; margin-left:20px; margin-bottom:20px;">
            <p style="margin-bottom:6px;">• डार्क म्याटर र डार्क ऊर्जा: ब्रह्माण्डको अधिकांश तत्व अझै बुझिएको छैन।</p>
            <p style="margin-bottom:6px;">• ब्ल्याक होल: अत्यन्त घना पिण्ड जसबाट प्रकाश पनि बाहिर निस्कन सक्दैन।</p>
            <p style="margin-bottom:6px;">• मल्टिवर्स सम्भावना: वैज्ञानिकहरूले अन्य ब्रह्माण्डहरूको अस्तित्वको सम्भावना पनि राखेका छन्।</p>
        </div>

        <h2 style="font-size:24px; font-weight:700; color:#111827; margin-top:20px; margin-bottom:12px;">४. निष्कर्ष</h2>
        <p style="font-size:16px; color:#374151; margin-bottom:12px;">
            ब्रह्माण्डको अध्ययनले मानव सोच र विज्ञान दुवैलाई चुनौती दिएको छ। यसको विशालता र रहस्यहरूले अझ नयाँ अनुसन्धान र खोजहरूको मार्ग खोल्नेछ। हामीले यसको संरचना, उत्पत्ति, र रहस्य बुझेर मात्र आफ्नो ज्ञानको सीमा विस्तार गर्न सक्छौं।
        </p>

    </div>`
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
