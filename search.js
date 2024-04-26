document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('searchInput');
    var suggestionList = document.getElementById('suggestionList');
    var pages = {
        'about us': 'about_us.html',
        'home': 'welcome.html',
        'restaurants': 'restaurant.html',
        'medical shops': 'medicalshops.html',
        'hospitals': 'hospitals.html',
        'emergency services': 'emergency.html',
        'food outlets': 'outlets.html',
        'shopping complexes': 'shopping.html',
        'Moti Mahal Delux, Raebareli': 'rest1.html',
        'Chawla Family Theme Restaurant, Raebareli': 'rest2.html',
        'Om Family Restaurant, Raebareli': 'rest3.html',
        'Naina Resort': 'rest4.html',
        'The Bridge': 'rest5.html',
        'Iqbal Hotel, Raebareli': 'rest6.html',
        'Food Plaza, Raebareli': 'rest7.html',
        'Kaidi Kitchen Restaurant, Raebareli': 'rest8.html',
        'Shri Brijwasi Restaurant, Raebareli': 'rest9.html',
        'O Cafe & Restaurant, Raebareli': 'rest10.html',
        'The Sapphire, Raebareli': 'rest11.html',
        'Clique, Raebareli': 'rest12.html',
        'Jamal Medical Store, Jais': 'med1.html',
        'Vidhi Medical Store, Jais': 'med2.html',
        'Jai Bharat Medical Store, Raebareli': 'med3.html',
        'Umesh Medical Store, Raebareli': 'med4.html',
        'Kaushal Medical store, Bahadurpur': 'med5.html',
        'Chandra Medical Store, Raebareli': 'med6.html',
        'Aarogya Hospital, Raebareli': 'hosp1.html',
        'Urjit Hospital, Raebareli': 'hosp2.html',
        'AIIMS Raebareli': 'hosp3.html',
        'Rana Beni Madhav Singh District Hospital, Raebareli': 'hosp4.html',
        'Medarex Hospital, Raebareli': 'hosp5.html',
        'Mahavir Hospital, Raebareli': 'hosp6.html',
        'Fire Station, Raebareli': 'eme1.html',
        'Jais Police Station': 'eme2.html',
        'DM Office Amethi': 'eme3.html',
        'Police Chowki Krishna Nagar, Raebareli': 'eme4.html',
        'DM Office Raebareli': 'eme5.html',
        'UP Police Emergency Number': 'eme6.html',
        'Hungry Maks': 'out1.html',
        'Deep Sweets, Raebareli': 'out2.html',
        'Naresh Sweets, Raebareli': 'out3.html',
        'Shabbu Chicken Biryani Shop, Jais': 'out4.html',
        'Pizza Eats & Cafe, Bahadurpur': 'out5.html',
        'Aaloo Tikki, Bahadurpur': 'out6.html',
        'La pinoz, Raebareli': 'out7.html',
        'Dominos, Raebareli': 'out8.html',
        'Anil Bakery, Raebareli': 'out9.html',
        'Trends, Raebareli': 'shop1.html',
        'Monte Carlo, Raebareli': 'shop2.html',
        'Reliance Digital, Raebareli': 'shop3.html',
        'V Mart, Raebareli': 'shop4.html',
        'Pantaloons, Raebareli': 'shop5.html',
        'Deep Shoes, Raebareli': 'shop6.html',
        'Liberty, Raebareli': 'shop7.html',
        'Titan Watches, Raebareli': 'shop8.html',
        'Titan Eye+, Raebareli': 'shop9.html',

        // Add more page mappings as needed
    };

    searchInput.addEventListener('input', function() {
        var searchTerm = searchInput.value.trim().toLowerCase();
        var matchingPages = Object.keys(pages).filter(function(page) {
            return page.includes(searchTerm);
        });

        displaySuggestions(matchingPages);
    });

    function displaySuggestions(suggestions) {
        suggestionList.innerHTML = ''; // Clear existing suggestions
        if (suggestions.length > 0) {
            suggestionList.style.display = 'block'; // Show suggestion list
            suggestions.forEach(function(suggestion) {
                var link = document.createElement('a');
                link.href = pages[suggestion];
                link.textContent = suggestion;
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    window.location.href = pages[suggestion];
                });
                suggestionList.appendChild(link);
            });
        } else {
            suggestionList.style.display = 'none'; // Hide suggestion list if no suggestions
        }
    }

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.search-box')) {
            suggestionList.style.display = 'none'; // Hide suggestion list on outside click
        }
    });

    document.getElementById('searchButton').addEventListener('click', function() {
        var searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm in pages) {
            window.location.href = pages[searchTerm]; // Redirect to the corresponding page
        } else {
            alert('Page not found for the search term: ' + searchTerm);
        }
    });

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Prevent default form submission
            document.getElementById('searchButton').click(); // Trigger search button click on Enter key
        }
    });
});
