const bill = document.querySelector("#bill-id");
const total = document.querySelector("#total");
const error1 = document.querySelector(".error1");
const error2 = document.querySelector(".error2");
const percents = document.querySelectorAll(".percent");
const custom = document.querySelector("#custom");
const people = document.querySelector("#ppl-id");
const tipAmount = document.querySelector("#tip-amount");

bill.addEventListener("input", ()=> {
    checkInputBill();
    let bilVal= parseInt(bill.value);
    let perInt =parseInt(document.querySelector(".percent.change-color").textContent.replace("%", ""));
    amount(perInt);
});

people.addEventListener("input", ()=> {
    checkInputPeople();
    let pplVal= parseInt(people.value);
    let perInt =parseInt(document.querySelector(".percent.change-color").textContent.replace("%", ""));
    amount(perInt);
});

custom.addEventListener("input", ()=> {
    let customInput = parseInt(custom.value);
    amount(customInput);
});

percents.forEach((per) => {
  per.addEventListener('click', () => {
    percents.forEach((elem) => {
      elem.classList.remove('change-color');
    });
    
    per.classList.add('change-color');
    let perInt = parseInt(per.textContent.replace('%', ''));
    amount(perInt);
});
});

function amount(per) {
    let tip_Amount = ((bill.value / 100) * per) / people.value;
    let toTal = (bill.value / people.value) + tip_Amount;

    tipAmount.textContent = "$" + tip_Amount.toFixed(2);
    total.textContent = "$" + toTal.toFixed(2);
}

function checkInputBill() {
    if(Number(bill.value) === 0){
        error1.style.display = "block";
        bill.style.border = "2px solid #E17457";
    }
    else {
        error1.style.display="none";
        bill.style.border = "0px";
    }
}

function checkInputPeople() {
    if(Number(people.value) === 0){
        error2.style.display = "block";
        people.style.border = "2px solid #E17457";
    }
    else {
        error2.style.display="none";
        people.style.border = "0px";
    }
}

function myReset() {
    location.reload();
};