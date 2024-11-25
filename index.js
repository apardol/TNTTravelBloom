const btnSearch = document.getElementById('btnSearch');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function searchCondition() {
    const inputSearch = document.getElementById('inputSearch').value.toLowerCase().trim();
    const resultDiv = document.getElementById('recommendations');
    resultDiv.innerHTML = '';

    fetch('api.json')
        .then(response => response.json())
        .then(data => {

            if (inputSearch === 'country') {
                resultDiv.innerHTML += `<div class="destination">`;
                resultDiv.innerHTML += `<img src="${data.countries[0].cities[0].imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<h2>${data.countries[0].cities[0].name}</h2>`;

                resultDiv.innerHTML += `<p> ${data.countries[0].cities[0].description}</p>`;
                resultDiv.innerHTML += `<button>Visit</button>`;
                resultDiv.innerHTML += `</div>`;

                resultDiv.innerHTML += `<div class="destination">`;
                resultDiv.innerHTML += `<img src="${data.countries[1].cities[0].imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<h2>${data.countries[1].cities[0].name}</h2>`;

                resultDiv.innerHTML += `<p> ${data.countries[1].cities[0].description}</p>`;
                resultDiv.innerHTML += `<button>Visit</button>`;
                resultDiv.innerHTML += `</div>`;

            }

            if (inputSearch === 'temple') {
                resultDiv.innerHTML += `<div class="destination">`;
                resultDiv.innerHTML += `<img src="${data.temples[0].cities[0].imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<h2>${data.countries[0].cities[0].name}</h2>`;

                resultDiv.innerHTML += `<p> ${data.countries[0].cities[0].description}</p>`;
                resultDiv.innerHTML += `<button>Visit</button>`;
                resultDiv.innerHTML += `</div>`;

                resultDiv.innerHTML += `<div class="destination">`;
                resultDiv.innerHTML += `<img src="${data.countries[1].cities[0].imageUrl}" alt="hjh">`;
                resultDiv.innerHTML += `<h2>${data.countries[1].cities[0].name}</h2>`;

                resultDiv.innerHTML += `<p> ${data.countries[1].cities[0].description}</p>`;
                resultDiv.innerHTML += `<button>Visit</button>`;
                resultDiv.innerHTML += `</div>`;

            }

            // const condition = data.conditions.find(item => item.name.toLowerCase() === inputSearch);

            // if (condition) {
            //     const symptoms = condition.symptoms.join(', ');
            //     const prevention = condition.prevention.join(', ');
            //     const treatment = condition.treatment;

            //     resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
            //     resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="hjh">`;

            //     resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
            //     resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
            //     resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            // } else {
            //     resultDiv.innerHTML = 'Condition not found.';
            // }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}

btnSearch.addEventListener('click', searchCondition);