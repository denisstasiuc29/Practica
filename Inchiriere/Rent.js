document.getElementById("rentalForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const car = document.getElementById("car").value;
    const days = parseInt(document.getElementById("days").value);
    let pricePerDay = 0;
  
    switch (car) {
      case "dacia":
        pricePerDay = 200;
        break;
      case "bmw":
        pricePerDay = 400;
        break;
      case "audi":
        pricePerDay = 350;
        break;
    }
  
    const total = pricePerDay * days;
    document.getElementById("result").innerText = `Preț total: ${total} lei`;
  });
  