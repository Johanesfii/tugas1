function getData() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  // validation
  if (name == "") {
    return alert("Nama tidak boleh kosong!");
  } else if (email == "") {
    return alert("Email tidak boleh kosong!");
  } else if (phone == "") {
    return alert("No Telpon tidak boleh kosong!");
  } else if (subject == "") {
    return alert("Subject tidak boleh kosong!");
  } else if (message == "") {
    return alert("Mohon diisi agar saya dapat membantu anda..");
  }

  const destination = "johanesfii@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${destination}?subject=${subject}&body=Hallo nama saya ${name} , ${message}, bisakah anda menghubungi saya di ${phone}`;
  a.click();
}
