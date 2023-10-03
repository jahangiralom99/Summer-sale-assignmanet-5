let count = 1;
let sum = 0;

function clickCardBtn(target) {
  const textContent = document.getElementById("text-container");
    const priceElement = document.getElementById("price");

  const cardTitle = target.childNodes[5].childNodes[3].innerText;
  const p = document.createElement("p");
  p.classList.add("font-bold");
  p.innerHTML = `
        ${count++} ${cardTitle}
    `;
  textContent.appendChild(p);
    const price = target.childNodes[5].childNodes[5].innerText.split(" ")[0];
    
    sum = parseFloat(sum) + parseFloat(price)

    priceElement.innerText = sum;

    if (priceElement.innerText > 200) {
        const btn = document.getElementById('apply-btn');
        btn.removeAttribute("disabled")
    } else if(priceElement.innerText > 1){
        const btn = document.getElementById('make-btn');
        btn.removeAttribute("disabled")
    }

}


function addSumByAnother() {
    const couponField = document.getElementById("coupon-field");
    const priceElement = document.getElementById("price").innerText;
    const discountElement = document.getElementById('discount');
    const totalElement = document.getElementById('total');
    const field = couponField.value;
    couponField.value = "";
    if (field === "SELL200") {
        const discount = (parseFloat(priceElement) * 20) / 100;
        discountElement.innerText = discount;
        const total = parseFloat(priceElement) - discount;
        totalElement.innerText = total;
    }
    else {
        alert("wrong coupon")
    }
}