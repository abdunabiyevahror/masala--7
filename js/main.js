'1-masala'


//function alphabet_Soup(str) {
  //return str.split("").sort().join("");
//}

//console.log(alphabet_Soup(" "));

//console.log(alphabet_Soup("Exercises"));


'2-masala'

//function MyObj(prop) {
  //this.prop = prop;
//}

//var obj = new MyObj(10);

//console.log(obj instanceof MyObj && obj instanceof Object); // outputs true

'3-masala'

//const originalString = "Teste 5% áàÁÀ éèÉÈ íìÍÌ óòÓÒ úùÚÙ çÇ ãÃ ?!,;";
//const expectedString =
  //"AFQAZQBzAHQAZQAgADUAJQAgAOEA4ADBAMAAIADpAOgAyQDIACAA7QDsAM0AzAAgAPMA8gDTANIAIAD6APkA2gDZACAA5wDHACAA4wDDACAAPwAhACwAOw==";

//const codePoints = originalString.split("").map((char) => char.charCodeAt(0));
//const swapped = codePoints.map((val) => (val >> 8) | (val << 8));
//const arr_BE = new Uint16Array(swapped);

// ArrayBuffer to base64 borrowed from https://stackoverflow.com/a/42334410/3702797
//const result = btoa(
  //new Uint8Array(arr_BE.buffer).reduce(
    //(data, byte) => data + String.fromCharCode(byte),
    //""
  //)
//);
//console.log("same strings:", result === expectedString);
//console.log(result);

'4-masala'

//  const sentence = 'The quick brown fox jumps over the lazy dog.';

// const index = 4;

// console.log(`The character at index ${index} is ${sentence.charAt(index)}`);
// Expected output: "The character at index 4 is q"

'5-masala'

 

// function reverseString(str) {

 
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

 
// const string = prompt('Enter a string: ');

// const result = reverseString(string);
// console.log(result);


'6-masala'
// let S1 = "Hello world";

// let S2 = "*";

// let C = "l";

// let res = S1.replaceAll(C, C + S2);

// console.log(res);

'7-masala'

// // program to check the number of occurrence of a character

// function countString(str, letter) {
//     let count = 0;

//     // looping through the items
//     for (let i = 0; i < str.length; i++) {

//         // check if the character is at that position
//         if (str.charAt(i) == letter) {
//             count += 1;
//         }
//     }
//     return count;
// }

'8-masala'


// // take input from the user
// const string = prompt('Enter a string: ');
// const letterToCheck = prompt('Enter a letter to check: ');

// //passing parameters and calling the function
// const result = countString(string, letterToCheck);

// // displaying the result
// console.log(result);


'9-masala'

// const map = {
//   uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   lowercase: "abcdefghijklmnopqrstuvwxyz",
// };

// var x = "hello";
// var y = x.replace(
//   /(.)/g,
//   (match) => map.uppercase[map.lowercase.indexOf(match)]
// );

// console.log(y);


'10-masala'

// function capFirst(str) {
//      return str[0].toUpperCase() + str.slice(1);
//  }

// console.log(capFirst('hello'));
// //output 
// //Hello

'11-masala'

// function circumference(r) {
//   return parseFloat(r) * 2.0 * Math.PI;
// }

// console.log(circumference(4.567));
// // Expected output: 28.695307297889173

// console.log(circumference('4.567abcdefgh'));
// // Expected output: 28.695307297889173

// console.log(circumference('abcdefgh'));
// // Expected output: NaN


'12-masala'

// function reversedNum(num) {
//   return (
//     parseFloat(num.toString().split("").reverse().join("")) * Math.sign(num)
//   );
// }


'13-masala'
// let str = "abcd";

// let res = str.split("").join(" ");

// console.log(res);

// console.log(12);
// console.log(+"12");
// console.log(+false);
// console.log(+"a");

// console.log(isNaN(12));
// console.log(isNaN("12"));
// console.log(isNaN(false));
// console.log(isNaN("a"));


'14-masala'

// const areEqualInUpperCase = (str1, str2) =>
//   str1.toUpperCase() === str2.toUpperCase();
// const areEqualInLowerCase = (str1, str2) =>
//   str1.toLowerCase() === str2.toLowerCase();

// areEqualInUpperCase("ß", "ss"); // true; should be false
// areEqualInLowerCase("ı", "I"); // false; should be true


'15-masala'

// let S1 = "Hello world";

// let S2 = "*";

// let C = "l";

// let res = S1.replaceAll(C, C + S2);

// console.log(res);

'16-masala'

// let S1 = "Hello world";

// let S2 = "*";

// let C = "l";

// let res = S1.replaceAll(C, C + S2);

// console.log(res);

'17-masala'

// let S1 = "Hello world";

// let S2 = "*";

// let C = "l";

// let res = S1.replaceAll(C, C + S2);

// console.log(res);

'18-masala'
// function removeDirtyChars(str1, str2) {
//   // str2 is the string
//   // which is to be removed
//   var count = getcountarray(str2);
//   var res = "";

//   // ip_idx helps to keep
//   // track of the first string
//   var ip_idx = 0;

//   while (ip_idx < str1.length) {
//     var temp = str1[ip_idx];
//     if (count[temp.charCodeAt(0)] == 0) {
//       res = res.concat(temp);
//     }
//     ip_idx++;
//   }

//   return res;
// }

'19-masala'

// function removeDirtyChars(str1, str2) {
//   // str2 is the string
//   // which is to be removed
//   var count = getcountarray(str2);
//   var res = "";

//   // ip_idx helps to keep
//   // track of the first string
//   var ip_idx = 0;

//   while (ip_idx < str1.length) {
//     var temp = str1[ip_idx];
//     if (count[temp.charCodeAt(0)] == 0) {
//       res = res.concat(temp);
//     }
//     ip_idx++;
//   }

//   return res;
// }

'20-masala'

//  function partOdd(s) {
//    var st = "";
//    for (var i = 0; i < s.length; i++) {
//      if (i % 2 !== 0) st += s[i];
//    }

//    return st;
//  }

'21-masala'

//  function partOdd(s) {
//    var st = "";
//    for (var i = 0; i < s.length; i++) {
//      if (i % 2 !== 0) st -= s[i];
//    }

//    return st;
//  }

'22-masala'

 

// 	function longestWordLength(string)
// 	{
// 		let length = 0;
// 		const words = string.split(" ");
 
// 		for (const word of words)
// 		{
// 			if (word.length > length)
// 			{
// 			length = word.length;
// 			}
// 		}
// 		return length;
// 	}

// 	const sentence = "I am an intern at geeksforgeeks";
// 	console.log(longestWordLength(sentence));
	
'23-masala'
	/* function LongestWordLength(str)
	{
		var n = str.length;
		var res = 0,
		curr_len = 0;
		for (var i = 0; i < n; i++)
		{
		
		// If current character is not
		// end of current word.
		if (str[i] !== " ") curr_len++;
		// If end of word is found
		else
		{
			res = Math.max(res, curr_len);
			curr_len = 0;
		}
		}

		// We do max one more time to consider
		// last word as there won't be any space
		// after last word.
		return Math.max(res, curr_len);
	}

	var s = "I am an intern at geeksforgeeks";
	document.write(LongestWordLength(s)); */
	
 
'24-masala'

// function findLongestWord(str) {
//   return str.length;
// }
// findLongestWord("The quick brown fox jumped over the lazy dog");


'25-masala'

// function minMaxLengthWords(input)

//     // minWord and maxWord are received by reference
//     // and not by value
//     // will be used to store and return output
//     let len = input.length;
//     let si = 0, ei = 0;
//     let min_length = len;
//     let min_start_index = 0;
//     let max_length = 0;
//     let max_start_index = 0;
 
//     // Loop while input string is not empty
//     while (ei <= len)
//     {
//         if (ei < len && input[ei] != ' ')
//         {
//             ei++;
//         }
//         else
//         {
//             // end of a word
//             // find curr word length
//             let curr_length = ei - si;
 
//             if (curr_length < min_length)
//             {
//                 min_length = curr_length;
//                 min_start_index = si;
//             }
 
//             if (curr_length > max_length)
//             {
//                 max_length = curr_length;
//                 max_start_index = si;
//             }
//             ei++;
//             si = ei;
//         }
//     }
 

'26-masala'

//  function firstLetterWord(str) {
//    let result = "";

//    // Traverse the string.
//    let v = true;
//    for (let i = 0; i < str.length; i++) {
//      // If it is space, set v as true.
//      if (str[i] == " ") {
//        v = true;
//      }

//      // Else check if v is true or not.
//      // If true, copy character in output
//      // string and set v as false.
//      else if (str[i] != " " && v == true) {
//        result += str[i];
//        v = false;
//      }
//    }
//    return result;
//  }

//  let str = "geeks for geeks";
//  document.write(firstLetterWord(str));

'27-masala'
//  var username = prompt("Enter your name: ", "");
//  if (confirm("Your name is " + username)) {
//    document.write("<h1>Hello, " + username + "!</h1>");
//  } else {
//    document.write("<h1>Hello, world!</h1>");
//  }

'28-masala'
// function getFileExtension(filename) {
//   // get file extension
//   const extension = filename.split(".").pop();
//   return extension;
// }

// // passing the filename
// const result1 = getFileExtension("module.js");
// console.log(result1);

// const result2 = getFileExtension("module.txt");
// console.log(result2);

'29-masala'

// function getFileExtension(filename) {
//   // get file extension
//   const extension = filename.split(".").pop();
//   return extension;
// }

// // passing the filename
// const result1 = getFileExtension("module.js");
// console.log(result1);

// const result2 = getFileExtension("module.txt");
// console.log(result2);

'30-masala'
// function getFileExtension(filename) {
//   // get file extension
//   const extension = filename.split(".").pop();
//   return extension;
// }

// // passing the filename
// const result1 = getFileExtension("module.js");
// console.log(result1);

// const result2 = getFileExtension("module.txt");
// console.log(result2);