const student = {
  name: "Kabir Khan",
  roll: 111,
  Address: "USA",
  singleStat: true,
  friends: ["Opu", "Topu", "Gopu", "Dipu"],
  act: function () {
    console.log("Hello,there, Im Sakib Khan ");
  },
  car: {
    name: "tesla",
    price: 500000000,
    color: "Red",
    manufacturer: {
      name: "Elon Mask",
      nationality: "USA",
    },
  },
  movie: [
    { name: "no 1", release: 2017 },
    { name: "Nayok", release: 2022 },
  ],
};
console.log(student.act);
student.act();
console.log(student.movie[0]);
