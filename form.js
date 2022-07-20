const submitForm = (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("mail").value;
  const msg = document.getElementById("msg").value;

  if (!name || !email || !msg) {
    alert("porfavor llena todos los campos")
    return;
  }

  const myObjectToSend = { name: name, email: email, msg: msg, number: 30 }

  console.log(myObjectToSend);
  console.log(JSON.stringify(myObjectToSend))
}
