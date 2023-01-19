const printMatrix = (matrix) => {
  for (const row of matrix) {
    for (const el of row) {
      process.stdout.write(el + " ");
    }
    process.stdout.write("\n");
  }
};

const wordSearch = (letters, word) => {
  const longstring = letters
    .map((letter) => {
      return letter.join("");
    })
    .join("");
  return longstring.includes(word);
};

const transpose = function (matrix) {
  const newArray = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArray.push([]);
  }

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[x].length; y++) {
      newArray[y].push(matrix[x][y]);
    }
  }
  return newArray;
};

module.exports = wordSearch;

// Denny Doan, Elisabeth Clarke, Mauro Alves
