const submitForm = (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("mail").value;
  const msg = document.getElementById("msg").value;

  if (!name || !email || !msg) {
    alert("porfavor llena todos los campos");
    return;
  }

  const myObjectToSend = { name: name, email: email, msg: msg, number: 30 };

  console.log(myObjectToSend);
  console.log(JSON.stringify(myObjectToSend));
};

const getSelectedValue = () => {
  const selectedDropdown = document.getElementById("ddlViewBy");
  alert(selectedDropdown.value);

  const selectedValue =
    selectedDropdown.options[selectedDropdown.selectedIndex].text;
  alert(selectedValue);
};

getSelectedValueFromRadioButtons = () => {
  alert(document.querySelector('input[name="rate"]:checked').value);
};
