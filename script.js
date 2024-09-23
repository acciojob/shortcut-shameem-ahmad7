function shortcut(s1, s2) {
  // your code here
	if (s1.length > 0 && s2.length > 0) {
        // Get the first letters of both strings
        const firstLetterStr1 = s1.charAt(0);
        const firstLetterStr2 = s2.charAt(0);
        
        // Concatenate and return them
        return firstLetterStr1 + firstLetterStr2;
    }
    
    // Return an empty string if any input is empty
    return '';
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
