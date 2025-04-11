import React from 'react'

document.addEventListener('DOMContentLoaded', () => {
    const languageSelectWrapper = document.getElementById('language-select-wrapper');
    const languageSelectTrigger = document.getElementById('language-select-trigger');
    const languageSelectOptions = document.getElementById('language-select-options');
    const languageSelectElement = document.querySelector('#language-select-options select');

    const transportTypeSelectWrapper = document.getElementById('transport-type-select-wrapper');
    const transportTypeSelectTrigger = document.getElementById('transport-type-select-trigger');
    const transportTypeSelectOptions = document.getElementById('transport-type-select-options');
    const transportTypeSelectElement = document.querySelector('#transport-type-select-options select');

    const routeSelectWrapper = document.getElementById('route-select-wrapper');
    const routeSelectTrigger = document.getElementById('route-select-trigger');
    const routeSelectOptions = document.getElementById('route-select-options');
    const routeSelectElement = document.querySelector('#route-select-options select');

    const resetButton = document.getElementById('reset-button');
    const searchButton = document.getElementById('search-button');
    const contentSearchInput = document.getElementById('content-search');
    const resultsContainer = document.getElementById('results-container');

    let selectedLanguage = '';
    let selectedTransportType = '';
    let selectedRoute = '';

    function createCustomDropdown(selectWrapper, selectTrigger, selectOptions, selectElement, onChangeCallback) {
        selectTrigger.addEventListener('click', () => {
            selectWrapper.classList.toggle('open');
            if (selectWrapper.classList.contains('open')) {
                const triggerRect = selectTrigger.getBoundingClientRect();
                selectOptions.style.top = triggerRect.bottom + 'px';
                selectOptions.style.left = triggerRect.left + 'px';
                selectOptions.style.width = Math.max(triggerRect.width, 200) + 'px'; // Use max of trigger width and 200
            }
        });

        selectOptions.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                const value = event.target.dataset.value;
                const label = event.target.textContent;
                selectTrigger.querySelector('span').textContent = label;
                selectElement.value = value;
                selectWrapper.classList.remove('open');
                onChangeCallback(value);
            }
        });

        selectElement.addEventListener('change', (event) => {
            const label = selectOptions.querySelector(`[data-value="${event.target.value}"]`).textContent;
            selectTrigger.querySelector('span').textContent = label;
            onChangeCallback(event.target.value);
        });

        document.addEventListener('click', (event) => {
            if (!selectWrapper.contains(event.target) && !selectOptions.contains(event.target)) {
                selectWrapper.classList.remove('open');
            }
        });
    }

    createCustomDropdown(languageSelectWrapper, languageSelectTrigger, languageSelectOptions, languageSelectElement, (value) => {
        selectedLanguage = value;
    });

    createCustomDropdown(transportTypeSelectWrapper, transportTypeSelectTrigger, transportTypeSelectOptions, transportTypeSelectElement, (value) => {
        selectedTransportType = value;
    });

    createCustomDropdown(routeSelectWrapper, routeSelectTrigger, routeSelectOptions, routeSelectElement, (value) => {
        selectedRoute = value;
    });

    resetButton.addEventListener('click', () => {
        selectedLanguage = '';
        selectedTransportType = '';
        selectedRoute = '';
        contentSearchInput.value = '';
        languageSelectTrigger.querySelector('span').textContent = 'Language';
        transportTypeSelectTrigger.querySelector('span').textContent = 'Transport Type';
        routeSelectTrigger.querySelector('span').textContent = 'Route';
        languageSelectElement.value = '';
        transportTypeSelectElement.value = '';
        routeSelectElement.value = '';
        resultsContainer.innerHTML = '<h2 class="text-xl font-semibold text-gray-800 mb-4">Information</h2><p class="text-gray-600">Select language, transport type and route, or use the search bar to find information.</p>';
    });

    searchButton.addEventListener('click', () => {
        performSearch(selectedLanguage, selectedTransportType, selectedRoute, contentSearchInput.value);
    });

    contentSearchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            performSearch(selectedLanguage, selectedTransportType, selectedRoute, contentSearchInput.value);
        }
    });

    function performSearch(language, transportType, route, query) {
        let resultsHTML = '<h2 class="text-xl font-semibold text-gray-800 mb-4">Information</h2>';
        let hasResults = false;

        // Simulate transport information data (replace with your actual data)
        const transportData = [
            {
                language: 'en',
                type: 'matatu',
                route: 'nairobi-cbd',
                title: 'Matatu Nairobi CBD Route Information',
                content: 'Details about Matatu routes to Nairobi CBD:  stages, fares, and typical travel times.',
            },
            {
                language: 'en',
                type: 'matatu',
                route: 'westlands',
                title: 'Matatu Westlands Route Details',
                content: 'Information regarding Matatu routes to Westlands: pick-up points, and accessibility.',
            },
            {
                language: 'en',
                type: 'bus',
                route: 'nairobi-cbd',
                title: 'Bus Schedule for Nairobi CBD',
                content: 'Bus timings and  information for Nairobi CBD.',
            },
            {
                language: 'en',
                type: 'train',
                route: 'mombasa-road',
                title: 'Train Service Along Mombasa Road',
                content: 'Information about the train service: routes, and stops along Mombasa Road.',
            },
            {
                language: 'en',
                type: 'uber',
                route: 'kawangware',
                title: 'Uber/Taxi Fares to Kawangware',
                content: 'Typical Uber and taxi fares and availability for trips to Kawangware.',
            },
            {
                language: 'en',
                type: 'matatu',
                route: 'eastlands',
                title: 'Matatu Eastlands Routes',
                content: 'Information on matatu routes and termini in Eastlands area.',
            },
            {
                language: 'en',
                type: 'bus',
                route: 'all',
                title: 'General Bus Service Information',
                content: 'Policies and general information about our bus services.',
            },
            {
                language: 'en',
                type: 'train',
                route: 'all',
                title: 'About Our Train Services',
                content: 'Overview of our train network and amenities.',
            },
            {
                language: 'en',
                type: 'uber',
                route: 'all',
                title: 'Using Uber/Taxi Services',
                content: 'Guide to using  taxi services: booking, safety tips.',
            },
            {
                language: 'sw',
                type: 'matatu',
                route: 'nairobi-cbd',
                title: 'Taarifa za Ruti za Matatu Nairobi CBD',
                content: 'Maelezo kuhusu ruti za Matatu kwenda Nairobi CBD:  vituo, nauli, na muda wa kawaida wa safari.',
            },
            {
                language: 'sw',
                type: 'matatu',
                route: 'westlands',
                title: 'Maelezo ya Ruti za Matatu Westlands',
                content: 'Maelezo kuhusu ruti za Matatu kwenda Westlands: mahali pa kupanda, na upatikanaji.',
            },
            {
                language: 'sw',
                type: 'bus',
                route: 'nairobi-cbd',
                title: 'Ratiba ya Mabasi ya Nairobi CBD',
                content: 'Muda wa mabasi na  habari kwa Nairobi CBD.',
            },
            {
                language: 'sw',
                type: 'train',
                route: 'mombasa-road',
                title: 'Huduma ya Treni Kando ya Barabara ya Mombasa',
                content: 'Habari kuhusu huduma ya treni: njia, na vituo kando ya Barabara ya Mombasa.',
            },
            {
                language: 'sw',
                type: 'uber',
                route: 'kawangware',
                title: 'Nauli za Uber/Teksi kwenda Kawangware',
                content: 'Nauli za kawaida za Uber na teksi na upatikanaji wa safari za kwenda Kawangware.',
            },
            {
                language: 'sw',
                type: 'matatu',
                route: 'eastlands',
                title: 'Ruti za Matatu za Eastlands',
                content: 'Habari kuhusu ruti za matatu na vituo katika eneo la Eastlands.',
            },
            {
                language: 'sw',
                type: 'bus',
                route: 'all',
                title: 'Maelezo ya Jumla ya Huduma za Basi',
                content: 'Sera na maelezo ya jumla kuhusu huduma zetu za basi.',
            },
            {
                language: 'sw',
                type: 'train',
                route: 'all',
                title: 'Kuhusu Huduma Zetu za Treni',
                content: 'Muhtasari wa mtandao wetu wa treni na huduma.',
            },
            {
                language: 'sw',
                type: 'uber',
                route: 'all',
                title: 'Kutumia Huduma za Uber/Teksi',
                content: 'Mwongozo wa kutumia huduma za teksi: kuweka nafasi, vidokezo vya usalama.',
            },
            // Add more transport information here
        ];

        const filteredResults = transportData.filter(item => {
            return (
                (!language || item.language === language) &&
                (!transportType || item.type === transportType) &&
                (!route || item.route === route || route === 'all') &&
                (!query ||
                    item.title.toLowerCase().includes(query.toLowerCase()) ||
                    item.content.toLowerCase().includes(query.toLowerCase()))
            );
        });

        if (filteredResults.length > 0) {
            hasResults = true;
            resultsHTML += '<ul class="border rounded-md">';
            filteredResults.forEach(item => {
                resultsHTML += `
                    <li class="border-b last:border-0 p-4">
                        <h3 class="font-semibold text-lg">${item.title}</h3>
                        <p class="text-gray-700">${item.content}</p>
                    </li>
                `;
            });
            resultsHTML += '</ul>';
        }

        resultsContainer.innerHTML = hasResults
            ? resultsHTML
            : '<h2 class="text-xl font-semibold text-gray-800 mb-4">Information</h2><p class="text-gray-600">No matching information found based on your criteria.</p>';
    }
});

const Transport = () => {
  return (
    <div>
        <div class="container mx-auto px-4 py-8">
        <h1 class="text-2xl font-semibold text-gray-800 mb-6">Transport Help & Information</h1>

        <div class="flex flex-col md:flex-row gap-4 mb-6">
            <div class="custom-select-wrapper" id="language-select-wrapper">
                <div class="custom-select-trigger" id="language-select-trigger">
                    <span>Language</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
                <div class="custom-options" id="language-select-options">
                    <select class="hidden">
                        <option value="en">English</option>
                        <option value="sw">Kiswahili</option>
                    </select>
                    <ul>
                        <li data-value="en">English</li>
                        <li data-value="sw">Kiswahili</li>
                    </ul>
                </div>
            </div>

            <div class="custom-select-wrapper" id="transport-type-select-wrapper">
                <div class="custom-select-trigger" id="transport-type-select-trigger">
                    <span>Transport Type</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
                <div class="custom-options" id="transport-type-select-options">
                    <select class="hidden">
                        <option value="">All Types</option>
                        <option value="matatu">Matatu</option>
                        <option value="bus">Bus</option>
                        <option value="train">Train</option>
                        <option value="uber">Uber/Taxi</option>
                    </select>
                    <ul>
                        <li data-value="">All Types</li>
                        <li data-value="matatu">Matatu</li>
                        <li data-value="bus">Bus</li>
                        <li data-value="train">Train</li>
                        <li data-value="uber">Uber/Taxi</li>
                    </ul>
                </div>
            </div>

            <div class="custom-select-wrapper" id="route-select-wrapper">
                <div class="custom-select-trigger" id="route-select-trigger">
                    <span>Route</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
                <div class="custom-options" id="route-select-options">
                    <select class="hidden">
                        <option value="">All Routes</option>
                         <option value="nairobi-cbd">Nairobi CBD</option>
                        <option value="westlands">Westlands</option>
                        <option value="kawangware">Kawangware</option>
                        <option value="eastlands">Eastlands</option>
                        <option value="mombasa-road">Mombasa Road</option>
                    </select>
                    <ul>
                        <li data-value="">All Routes</li>
                         <li data-value="nairobi-cbd">Nairobi CBD</li>
                        <li data-value="westlands">Westlands</li>
                        <li data-value="kawangware">Kawangware</li>
                        <li data-value="eastlands">Eastlands</li>
                        <li data-value="mombasa-road">Mombasa Road</li>
                    </ul>
                </div>
            </div>

            <div class="flex items-center gap-2">
                <input type="text" id="content-search" placeholder="Search by keyword"
                       class="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" />
                <button id="search-button"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                    Search
                </button>
            </div>
        </div>
        <button id="reset-button"
                class="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded-md transition duration-300 mb-6">
            Reset
        </button>

        <div id="results-container" class="bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-gray-800 mb-4">Information</h2>
            <p class="text-gray-600">Select language, transport type and route, or use the search bar to find information.</p>
        </div>
    </div>
    </div>
  )
}

export default Transport
