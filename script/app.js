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

    // Total cost calculation
    const totalCost = document.getElementById("totalCost").innerText;
    const convertedTotalCost = parseInt(totalCost);
    const tourCost = convertedTotalCost + parseInt(price);

    // grand total calculation
    const grandTotalCost = document.getElementById("grand-total").innerText;
    const convertedGrandTotalCost = parseInt(grandTotalCost);
    const grandTourCost = convertedGrandTotalCost + parseInt(price);

    // Display Output
    setInnerText("cart-count", count);
    setInnerText("totalCost", tourCost);
    setInnerText("grand-total", grandTourCost);
  });
}

function setInnerText(elementId, value) {
  document.getElementById(elementId).innerText = value;
}
