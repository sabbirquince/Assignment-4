// FIRST CLASS EVENT HANDLER

const firstClassIncrease = document.getElementById("firstClassIncrease");

firstClassIncrease.addEventListener("click", function () {
  let ticketCount = operation("firstClassTicketCount", true);
  ticketPrice("firstClassTicketPrice", ticketCount, 150);

  let subtotal = subTotalDeclare("subtotal");
  calcVat(subtotal);
  calcTotal();
});

const firstClassDecrease = document.getElementById("firstClassDecrease");

firstClassDecrease.addEventListener("click", function () {
  let ticketCount = operation("firstClassTicketCount", false);
  ticketPrice("firstClassTicketPrice", ticketCount, 150);

  let subtotal = subTotalDeclare("subtotal");
  calcVat(subtotal);
  calcTotal();
});

// ECONOMY CLASS EVENT HANDLER

const economyClassIncrease = document.getElementById("economyClassIncrease");

economyClassIncrease.addEventListener("click", function () {
  let ticketCount = operation("economyClassTicketCount", true);
  ticketPrice("economyClassTicketPrice", ticketCount, 100);

  let subtotal = subTotalDeclare("subtotal");
  calcVat(subtotal);
  calcTotal();
});

const economyClassDecrease = document.getElementById("economyClassDecrease");

economyClassDecrease.addEventListener("click", function () {
  let ticketCount = operation("economyClassTicketCount", false);
  ticketPrice("economyClassTicketPrice", ticketCount, 100);

  let subtotal = subTotalDeclare("subtotal");
  calcVat(subtotal);
  calcTotal();
});

// FUNCTIONS

function operation(getValueId, isIncrease) {
  let ticketCount = document.getElementById(getValueId).value;
  ticketCount = parseFloat(ticketCount);

  if (isIncrease && ticketCount >= 0) {
    ticketCount++;
  } else if (!isIncrease && ticketCount > 0) {
    ticketCount--;
  }
  document.getElementById(getValueId).value = ticketCount;
  return ticketCount;
}

function ticketPrice(setId, ticketCount, price) {
  document.getElementById(setId).innerHTML = ticketCount * price;
  return ticketCount * price;
}

function subTotalDeclare(setId) {
  let subtotalId = document.getElementById(setId);
  let firstClassPrice = parseFloat(
    document.getElementById("firstClassTicketPrice").innerHTML
  );
  let economyClassPrice = parseFloat(
    document.getElementById("economyClassTicketPrice").innerHTML
  );

  subtotalId.innerHTML = firstClassPrice + economyClassPrice;
  return firstClassPrice + economyClassPrice;
}

function calcVat(subtotalPrice) {
  let VAT = subtotalPrice * 0.1;
  document.getElementById("vat").innerHTML = VAT;
}

function calcTotal() {
  let subtotal = parseFloat(document.getElementById("subtotal").innerHTML);
  let VAT = parseFloat(document.getElementById("vat").innerHTML);
  document.getElementById("totalPrice").innerHTML = subtotal + VAT;
}
