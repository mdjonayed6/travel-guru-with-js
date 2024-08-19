const allBtn = document.getElementsByClassName("add-btn");

let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function () {
    count = count + 1; //count++
    document.getElementById("cart-count").innerText = count;
  });
}
