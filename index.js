function validateForm() {
    var x = document.forms["myForm"]["newItem"].value;
    if (x == "") {
      alert("Item must be filled out!");
      return false;
    }
  }
  