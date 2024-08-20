// let allCardSide = document.getElementsByClassName("card-side");
// for (const cs of allCardSide) {
//   cs.addEventListener("click", function (e) {
//     let isThisDisabled = e.target
//       .closest(".card-body")
//       .querySelector(".add-btn").disabled;
//     e.target.closest(".card-body").querySelector(".add-btn").disabled =
//       !isThisDisabled;
//     e.target.closest(".card-body").closest(".card-side").style.backgroundColor =
//       !isThisDisabled ? "white" : "gray";
//   });
// }

const allBtn = document.getElementsByClassName("add-btn");

let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
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

    e.target.disabled = true;
    e.target.parentNode.parentNode.parentNode.style.backgroundColor = "gray";

    //e.target.parentNode.parentNode.parentNode.style.backgroundColor = "gray";
    // e.target.setAttribute("disabled", true);
    //e.target.disabled = true;

    li.appendChild(place);
    li.appendChild(amount);
    // remaining budget
    const budget = document.getElementById("total-budget").innerText;
    const convertedBudget = parseInt(budget);

    if (convertedBudget - parseInt(price) < 0) {
      alert(
        "This trip goes up above your budget. Please increase your budget or select others"
      );

      e.target.parentNode.parentNode.parentNode.style.backgroundColor = "white";
      e.target.disabled = false;
      return;
    }

    // display remaining budget
    document.getElementById("total-budget").innerText =
      convertedBudget - parseInt(price);

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
  // console.log("converted cost", convertedTotalCost);
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
