// FIRST CLASS EVENT HANDLER

const firstClassIncrease = document.getElementById("firstClassIncrease");

firstClassIncrease.addEventListener("click", function () {
  let ticketCount = operation("firstClassTicketCount", true);
  ticketPrice("firstClassTicketPrice", ticketCount, 150);

  let subtotal = subTotalDeclare("subtotal");
  calcVat(subtotal);
  let totalBill = calcTotal();
});

const firstClassDecrease = document.getElementById("firstClassDecrease");

firstClassDecrease.addEventListener("click", function () {
  let ticketCount = operation("firstClassTicketCount", false);
  ticketPrice("firstClassTicketPrice", ticketCount, 150);

  let subtotal = subTotalDeclare("subtotal");
  calcVat(subtotal);
  let totalBill = calcTotal();
});

// ECONOMY CLASS EVENT HANDLER

const economyClassIncrease = document.getElementById("economyClassIncrease");

economyClassIncrease.addEventListener("click", function () {
  let ticketCount = operation("economyClassTicketCount", true);
  ticketPrice("economyClassTicketPrice", ticketCount, 100);

  let subtotal = subTotalDeclare("subtotal");
  calcVat(subtotal);
  let totalBill = calcTotal();
});

const economyClassDecrease = document.getElementById("economyClassDecrease");

economyClassDecrease.addEventListener("click", function () {
  let ticketCount = operation("economyClassTicketCount", false);
  ticketPrice("economyClassTicketPrice", ticketCount, 100);

  let subtotal = subTotalDeclare("subtotal");
  calcVat(subtotal);
  let totalBill = calcTotal();
});

// SUBMIT BUTTON EVENT HANDLER

const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", function () {
  let captureMainContent = document.getElementsByClassName("main-content")[0];
  let captureConfirmSection = document.getElementsByClassName(
    "confirmation-hidden"
  )[0];

  captureMainContent.style.display = "none";
  captureConfirmSection.setAttribute("class", "confirmation");

  confirmationInfo(
    "confirmFirstClassTickets",
    "confirmEconomyClassTickets",
    "confirmTotalBill"
  );
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

function confirmationInfo(countId1, countId2, billId) {
  const firstClassTicketCount = parseFloat(
    document.getElementById("firstClassTicketCount").value
  );
  document.getElementById(countId1).innerHTML = firstClassTicketCount;

  const economyClassTicketCount = parseFloat(
    document.getElementById("economyClassTicketCount").value
  );
  document.getElementById(countId2).innerHTML = economyClassTicketCount;

  const totalPrice = parseFloat(
    document.getElementById("totalPrice").innerHTML
  );

  const totalBill = document.getElementById(billId);
  totalBill.innerHTML = totalPrice;
}
