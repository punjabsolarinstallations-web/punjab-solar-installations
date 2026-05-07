const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

function searchProducts() {

    let filter = searchInput.value.toLowerCase().trim();

    /* EMPTY SEARCH */
    if (filter === "") {

        alert("Please enter product name");
        return;

    }

    /* PRODUCTS SECTION PAR LE JAYE */
    document.getElementById("popular").scrollIntoView({
        behavior: "smooth"
    });

    /* BATTERIES PAGE */
    if (
        filter.includes("battery") ||
        filter.includes("batteries") ||
        filter.includes("osaka") ||
        filter.includes("ags") ||
        filter.includes("phoenix") ||
        filter.includes("royal battery")
    ) {

        window.location.href = "batteries.html";

    }

    /* INVERTERS PAGE */
    else if (
        filter.includes("inverter") ||
        filter.includes("hybrid") ||
        filter.includes("ongrid") ||
        filter.includes("offgrid")
    ) {

        window.location.href = "inverters.html";

    }

    /* BREAKERS PAGE */
    else if (
        filter.includes("breaker") ||
        filter.includes("breakers") ||
        filter.includes("mcb") ||
        filter.includes("ac breaker") ||
        filter.includes("dc breaker")
    ) {

        window.location.href = "breakers.html";

    }

    /* WIRES PAGE */
    else if (
        filter.includes("wire") ||
        filter.includes("wires") ||
        filter.includes("cable") ||
        filter.includes("4mm") ||
        filter.includes("6mm") ||
        filter.includes("10mm")
    ) {

        window.location.href = "wires.html";

    }

    /* SOLAR PAGE */
    else if (
        filter.includes("solar") ||
        filter.includes("panel") ||
        filter.includes("panels") ||
        filter.includes("plates") ||
        filter.includes("jinko") ||
        filter.includes("longi")
    ) {

        window.location.href = "solarplates.html";

    }

    /* ACCESSORIES PAGE */
    else if (
        filter.includes("accessory") ||
        filter.includes("accessories") ||
        filter.includes("tool") ||
        filter.includes("connector")
    ) {

        window.location.href = "accessories.html";

    }

    /* NO RESULT */
    else {

        alert("Product not found");

    }

}

/* BUTTON SEARCH */
searchBtn.addEventListener("click", searchProducts);

/* ENTER KEY SEARCH */
searchInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

        searchProducts();

    }

});