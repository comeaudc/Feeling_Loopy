// Feeling Loopy

// input - ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26

// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);

//What do we know?
// There is ONLY 4 cells per row
// Only "\n" escape character
//  Commas separate cells
// "\n" indicates a new line
// Has to be done in a loop *
// out input is a string, strings are iterable *
// the last row has no '\n
// console.log(cell1, cell2, cell3, cell4);
// 3 things: commas, "\n", characters

//Variables
let string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// Memory allocation for future values
let cell = ``;
let row = ``;

// for (let i in string) {
//   //For index in string
//   switch (string[i]) {
//     case ',':
//       row = row + cell + ' '; // Add cell to row
//       cell = ``; // Emtying cell to reuse
//       break;
//     case '\n':
//       row += cell; // Add final cell to row
//       cell = ``; // Clear cell
//       console.log(row); // Print row
//       row = ``; // Clear row
//       break;
//     default:
//       cell += string[i]; //If char, add to current cell
//       break;
//   }

//   //If we reach final character in string, print final row
//   if(i == string.length - 1){
//     //string.length is length of string - 114 - index is 114
//     row += cell // Add final cell
//     console.log(row) // Print row
//   }
// }

for (let i in string) {
  //For index in string
  if (string[i] == ',') {
    row = row + cell + ' '; // Add cell to row
    cell = ``; // Emtying cell to reuse
  } else if (string[i] == '\n') {
    row += cell; // Add final cell to row
    cell = ``; // Clear cell
    console.log(row); // Print row
    row = ``; // Clear row
  } else {
    cell += string[i]; //If char, add to current cell
  }

  //If we reach final character in string, print final row
  if (i == string.length - 1) {
    //string.length is length of string - 114 - index is 114
    row += cell; // Add final cell
    console.log(row); // Print row
  }
}

const str = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

let cell1 = ``;
let cell2 = ``;
let cell3 = ``;
let cell4 = ``;
let placeholder = ``;
let counter = 0;

//Another solution
for (let char of str) {
  switch (char) {
    // If comma do this
    case ',':
      counter++;
      if (!cell1) {
        cell1 = placeholder;
        placeholder = ``;
      } else if (!cell2) {
        cell2 = placeholder;
        placeholder = ``;
      } else {
        cell3 = placeholder;
        placeholder = ``;
      }
      break;
    //If new line do this
    case '\n':
      counter++;
      cell4 = placeholder;
      placeholder = ``;
      console.log(cell1, cell2, cell3, cell4);
      cell1 = ``;
      cell2 = ``;
      cell3 = ``;
      cell4 = ``;
      break;
    //If char do this
    default:
      counter++;
      placeholder += char;

      if (counter === str.length) {
        //If it's our last character we populate cell4 and print
        cell4 = placeholder;
        placeholder = ``;
        console.log(cell1, cell2, cell3, cell4);
        cell1 = ``;
        cell2 = ``;
        cell3 = ``;
        cell4 = ``;
        counter = 0;
      }
      break;
  }
}
