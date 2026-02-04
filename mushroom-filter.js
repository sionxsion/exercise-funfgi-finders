const cards = document.querySelectorAll(".mushroom-guide .card");

const seasonalFilter = document.querySelector("#season");
const edibleFilter = document.querySelector("#edible");
const noResultsMessage = document.querySelector(".no-matches");

const currentFilters = {
  season: "all",
  edible: "all",
};

cards.forEach((card, index) => {
  const mushroomId = `mushroom-${index + 1}`;
  card.style.viewTransitionName = `mushroom-card-${mushroomId}`;
});

function handleFilterChange(event) {
  currentFilters[event.target.id] = event.target.value;
  document.startViewTransition()
    ? document.startViewTransition(() => filterCards())
    : filterCards();
}

seasonalFilter.addEventListener("change", handleFilterChange);
edibleFilter.addEventListener("change", handleFilterChange);

function filterCards() {
  let hasVisibleCards = false;
  cards.forEach((card) => {
    const season = card.querySelector("[data-season]").dataset.season;
    const edible = card.querySelector("[data-edible]").dataset.edible;

    const matchesSeason = currentFilters.season === season;
    const matchesEdible = currentFilters.edible === edible;

    if (
      (matchesEdible || currentFilters.edible == "all") &&
      (matchesSeason || currentFilters.season == "all")
    ) {
      card.hidden = false;
      hasVisibleCards = true;
    } else {
      card.hidden = true;
    }

    hasVisibleCards
      ? (noResultsMessage.hidden = true)
      : (noResultsMessage.hidden = false);
  });
}

// to keep functionality the filters are hidden on the html this function
// will be executed only if the user can use js
function enableFiltering() {
  seasonalFilter.hidden = false;
  edibleFilter.hidden = false;
}

enableFiltering();
