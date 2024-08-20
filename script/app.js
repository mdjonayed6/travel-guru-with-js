const allBtn = document.getElementsByClassName("add-btn");

let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count + 1; //count++
    const placeName = e.target.parentNode.parentNode.childNodes[1].innerText;
    const price =
      e.target.parentNode.parentNode.childNodes[3].childNodes[0].innerText;
    const selectedContainer = document.getElementById(
      "selected-place-container"
    );
    const li = document.createElement("li");
    const place = document.createElement("p");
    place.innerText = placeName;
    const amount = document.createElement("p");
    amount.innerText = price;

    li.appendChild(place);
    li.appendChild(amount);
    selectedContainer.appendChild(li);

    totalCost("totalCost", parseInt(price));
    grandTotalCost("grand-total", parseInt(price));

    // Total cost calculation
    // -----------------------------------
    // const totalCost = document.getElementById("totalCost").innerText;
    // const convertedTotalCost = parseInt(totalCost);
    // const tourCost = convertedTotalCost + parseInt(price);

    // grand total calculation
    // --------------------------------------
    // const grandTotalCost = document.getElementById("grand-total").innerText;
    // const convertedGrandTotalCost = parseInt(grandTotalCost);
    // const grandTourCost = convertedGrandTotalCost + parseInt(price);

    // Display Output

    setInnerText("cart-count", count);
  });
}
// Total cost functionality
function totalCost(elementId, value) {
  const totalCost = document.getElementById(elementId).innerText;
  const convertedTotalCost = parseInt(totalCost);
  const tourCost = convertedTotalCost + parseInt(value);
  setInnerText(elementId, tourCost);
}
// Grand total cost functionality
function grandTotalCost(category) {
  const totalCost = document.getElementById("totalCost").innerText;
  const convertedGrandTotalCost = parseInt(totalCost);

  if (category === "bus") {
    setInnerText("grand-total", convertedGrandTotalCost + 100);
  } else if (category === "train") {
    setInnerText("grand-total", convertedGrandTotalCost - 200);
  } else if (category === "flight") {
    setInnerText("grand-total", convertedGrandTotalCost + 500);
  } else {
    setInnerText("grand-total", convertedGrandTotalCost);
  }
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
