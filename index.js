import { starships } from './starships.js';
import { planets } from './planets.js'

function createShips(ships) {
    let shipsArray = [];

    ships.forEach((ship) => {
        let newShip = {
            name: ship["name"],
            length: ship["length"],
            hyperdrive: ship["hyperdrive_rating"],
            class: ship["starship_class"],
            cost: ship["cost_in_credits"],
        }
        shipsArray.push(newShip);
    })
    return shipsArray;
}

let newShips = createShips(starships);

function createPlanets(planets) {
    let planetsArray = [];

    planets.forEach((planet) => {
        let newPlanet = {
            name: planet["name"],
            population: planet["population"],
            climate: planet["climate"],
            terrain: planet["terrain"],
            gravity: planet["gravity"]
        }
        planetsArray.push(newPlanet);
    })
    return planetsArray;
}

let newPlanets = createPlanets(planets)

const shipContainer = document.querySelector('#starships');


function renderShips(array) {
    shipContainer.innerHTML = "";
    planetContainer.innerHTML = "";

    array.forEach((ship) => {
        // 3 main elements
        const tile = document.createElement('div');
            tile.setAttribute('class', 'sscontainer');
        const img = document.createElement('img');
            img.setAttribute('height', '180');
            img.setAttribute('src', 'spaceship.png')
        const info = document.createElement('div');
            info.setAttribute('class', 'info');

        //p tags to hold info
        const name = document.createElement('p');
        const length = document.createElement('p');
        const hyperdrive = document.createElement('p');
        const shipClass = document.createElement('p');
        const cost = document.createElement('p');

        //creating p tag values
        const nameValue = document.createTextNode("Name: " + ship.name);
        const lengthValue = document.createTextNode("Length: " + ship.length);
        const hyperdriveValue = document.createTextNode("Hyperdrive: " + ship.hyperdrive);
        const shipClassValue = document.createTextNode("Class: " + ship.class);
        const costValue = document.createTextNode("Cost: " + ship.cost);

        //appending values to p tags
        name.append(nameValue);
        length.append(lengthValue);
        hyperdrive.append(hyperdriveValue);
        shipClass.append(shipClassValue);
        cost.append(costValue);

        //appending p tags to info
        info.append(name);
        info.append(length);
        info.append(hyperdrive);
        info.append(shipClass);
        info.append(cost);

        //appending img and info to tile
        tile.append(img);
        tile.append(info);

        //appending tile to section
        shipContainer.append(tile);
    })
}

const shipsButton = document.querySelector('#shipsbutton');
shipsButton.addEventListener('click', (event) => renderShips(newShips));


const planetContainer = document.querySelector('#planets');

function renderPlanets(array) {
    shipContainer.innerHTML = "";
    planetContainer.innerHTML = "";

    array.forEach((planet) => {
        // 3 main elements
        const tile = document.createElement('div');
            tile.setAttribute('class', 'planetcontainer');
        const img = document.createElement('img');
            img.setAttribute('height', '130');
            img.setAttribute('src', 'jupiter.png')
        const info = document.createElement('div');
            info.setAttribute('class', 'info');

        //p tags to hold info
        const name = document.createElement('p');
        const population = document.createElement('p');
        const climate = document.createElement('p');
        const terrain = document.createElement('p');
        const gravity = document.createElement('p');

        //creating p tag values
        const nameValue = document.createTextNode("Name: " + planet.name);
        const populationValue = document.createTextNode("Population: " + planet.population);
        const climateValue = document.createTextNode("Climate: " + planet.climate);
        const terrainValue = document.createTextNode("Terrain: " + planet.terrain);
        const gravityValue = document.createTextNode("Gravity: " + planet.gravity);

        //appending values to p tags
        name.append(nameValue);
        population.append(populationValue);
        climate.append(climateValue);
        terrain.append(terrainValue);
        gravity.append(gravityValue);

        //appending p tags to info
        info.append(name);
        info.append(population);
        info.append(climate);
        info.append(terrain);
        info.append(gravity);

        //appending img and info to tile
        tile.append(img);
        tile.append(info);

        //appending tile to section
        planetContainer.append(tile);
    })
}

const planetsButton = document.querySelector('#planetsbutton');
planetsButton.addEventListener('click', (event) => renderPlanets(newPlanets));