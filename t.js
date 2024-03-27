let matrix = [];

function timeConversion(s) {
  // Write your code here
  // let hour = new RegExp("([0-9]{2,3})([:])([0-9]{2,3})([:])([0-9]{2,3})(^[a-z]{2,3})?");
  let newString;
  let regPm = new RegExp(/([a-z]{2,3})/gim);
  let split = s.split(":");
  let hours = Number(split[0]);
  let minutes = split[1];

  let splitSeconds = split[2].split(regPm);
  let pmAm = splitSeconds[1];
  let seconds = splitSeconds[0];

  if (hours == 12 && pmAm == "AM") {
    hours = "00";
    return (newString = `${hours}:${minutes}:${seconds}`);
  } else {
    if (hours > 12 && splitSeconds[1] == "PM") {
      hours += 12;
    }
    if (hours < 10) {
      hours = "0" + hours;
    }
  }
  newString = `${hours}:${minutes}:${seconds}`;

  return newString;
}
// timeConversion("12:45:54PM");

function f(x, y) {
  var valor;
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      valor = rgb();
      matrix.push([valor]);
      console.log(` POS - ${i}${j} = ${valor}\n`);
    }
  }
}

function rgb() {
  const resp = [
    (r = Math.floor(Math.random() * 255)),
    (g = Math.floor(Math.random() * 255)),
    (b = Math.floor(Math.random() * 255)),
  ];
  return resp;
}

let printMatrix = (matrix) => {
  for (let i in matrix) {
    console.log(matrix[i].join("\n"));
  }
};

f(2, 2);
printMatrix(matrix);

//------------------- x

// |
// |      valor[x] = 2
// |
// |     valor[x][y]
// |
// |
// |
// | y
