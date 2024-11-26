const btnSearch = document.getElementById('btnSearch');
const btnReset = document.getElementById('btnReset');
const resultDiv = document.getElementById('recommendations');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function searchCondition() {
    const inputSearch = document.getElementById('inputSearch').value.toLowerCase().trim().toLowerCase();
    let html = '';

    fetch('api.json')
        .then(response => response.json())
        .then(data => {

            if (inputSearch === 'country') {
                html += `<div class="destination">`;
                html += `<img src="${data.countries[0].cities[0].imageUrl}" alt="hjh" />`;
                html += `<h2>${data.countries[0].cities[0].name}</h2>`;

                html += `<p> ${data.countries[0].cities[0].description}</p>`;
                html += `<button>Visit</button>`;
                html += `</div>`;

                html += `<div class="destination">`;
                html += `<img src="${data.countries[1].cities[0].imageUrl}" alt="hjh" />`;
                html += `<h2>${data.countries[1].cities[0].name}</h2>`;

                html += `<p> ${data.countries[1].cities[0].description}</p>`;
                html += `<button>Visit</button>`;
                html += `</div>`;
            }

            if (inputSearch === 'temple') {
                html += `<div class="destination">`;
                html += `<img src="${data.temples[0].imageUrl}" alt="hjh" />`;
                html += `<h2>${data.temples[0].name}</h2>`;

                html += `<p> ${data.temples[0].description}</p>`;
                html += `<button>Visit</button>`;
                html += `</div>`;

                html += `<div class="destination">`;
                html += `<img src="${data.temples[1].imageUrl}" alt="hjh" />`;
                html += `<h2>${data.temples[1].name}</h2>`;

                html += `<p> ${data.temples[1].description}</p>`;
                html += `<button>Visit</button>`;
                html += `</div>`;
            }

            if (inputSearch === 'beach') {
                html += `<div class="destination">`;
                html += `<img src="${data.beaches[0].imageUrl}" alt="hjh" />`;
                html += `<h2>${data.beaches[0].name}</h2>`;

                html += `<p> ${data.beaches[0].description}</p>`;
                html += `<button>Visit</button>`;
                html += `</div>`;

                html += `<div class="destination">`;
                html += `<img src="${data.beaches[1].imageUrl}" alt="hjh" />`;
                html += `<h2>${data.beaches[1].name}</h2>`;

                html += `<p> ${data.beaches[1].description}</p>`;
                html += `<button>Visit</button>`;
                html += `</div>`;
            }

            resultDiv.innerHTML = html;
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

function resetFormAndDestinationsResults() {
    document.getElementById('inputSearch').value = "";
    resultDiv.innerHTML = "";
}

btnSearch.addEventListener('click', searchCondition);
btnReset.addEventListener('click', resetFormAndDestinationsResults);