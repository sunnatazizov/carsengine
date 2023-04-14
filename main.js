let cars = [
    {
        id: 1,
        model: "urus",
        company: "lamborgini",
        price: 266000,
        engineForce: 6.5
    },
    {
        id: 2,
        model: "cheron",
        company: "buggatti",
        price: 500000,
        engineForce: 8.9
    },
    {
        id: 3,
        model: "malibu 2",
        company: "gm",
        price: 33000,
        engineForce: 2.4
    },
    {
        id: 4,
        model: "gentra",
        company: "gm",
        price: 17000,
        engineForce: 1.5
    },
    {
        id: 5,
        model: "gelen vagen",
        company: "mercedes",
        price: 300000,
        engineForce: 4
    },
    {
        id: 6,
        model: "matiz",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    },
    {
        id: 7,
        model: "aston martin",
        company: "daewoo",
        price: 3000,
        engineForce: 6
    }
]

let maxEngineForce = 0;

for (let i = 0; i < cars.length; i++) {
  if (cars[i].engineForce > maxEngineForce) {
    maxEngineForce = cars[i].engineForce;
  }
}
  console.log(maxEngineForce);
  

cars.forEach((car, index) => car.isSale = index < 3);
console.table(cars);


cars.forEach((car) => {
    document.write(`
    Model: ${car.model} <br>
    Price: <b>${car.price}</b><br> 
    Company: ${car.company} <br>
    EngineForce: ${car.engineForce} <br>
    isSale:  <div class= "saleis">${car.isSale} ${car.isSale ? '<img class="icon" src="icon/sale_icon.png">' : '<img class="icon" src="icon/nosale_icon.jpg">'}</div><br>
    <div class="engine">
    <div class="fill" style="width: ${car.engineForce * 100 / maxEngineForce }%"></div>
    </div> <hr>
    `)
})

