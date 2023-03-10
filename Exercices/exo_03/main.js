const container = document.querySelector(".container");
container.style.color = "black";
const getData = async () => {
  try {
    const res = await fetch("./data.json");
    const countries = await res.json();
    console.log(countries);
    countries.map((countrie) => {
      const country_container = document.createElement("div");
      country_container.classList.add("country_container");
      const country_image = document.createElement("img");
      country_image.setAttribute("src", countrie.flag);
      country_image.classList.add("country_image");

      country_container.appendChild(country_image);
      container.appendChild(country_container);

      const country_information = document.createElement("div");
      country_information.classList.add("country_information");

      const country_name = document.createElement("span");
      country_name.textContent = countrie.name;
      country_name.classList.add("country_name");

      const country_population = document.createElement("span");
      country_population.classList.add("country_population");

      country_population.textContent = countrie.population;
      const country_region = document.createElement("span");
      country_region.classList.add("country_region");

      country_region.textContent = countrie.region;

      const country_capitale = document.createElement("span");
      country_capitale.classList.add("country_capital");

      country_capitale.textContent = countrie.capitale;
      country_container.appendChild(country_information);
      country_information.appendChild(country_name);
      country_information.appendChild(country_population);
      country_information.appendChild(country_region);
      country_information.appendChild(country_capitale);
    });
  } catch (error) {
    console.log(error.message);
  }
};

getData();

// const element = document.createElement("div");
// element.textContent = ", world!";
// document.body.appendChild(element);

// const image = document.createElement("img");
// image.src = "myimage.jpg";
// document.body.appendChild(image);
