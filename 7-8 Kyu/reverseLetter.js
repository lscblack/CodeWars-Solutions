const reverseLetter = str => 
    str
      .split('')                           
      .filter(char => char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') 
      .reverse()                               
      .join('');                            
  
  console.log(reverseLetter("loue"));  // Output: "nortlu"
  