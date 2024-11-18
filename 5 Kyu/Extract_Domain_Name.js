const domainName = url => url.replace("www.","").replace("http://","").replace("https://","").split(".")[0]
  
  console.log(domainName("www.xakep.ru"));          // Output: "xakep"
  console.log(domainName("http://google.com"));      // Output: "google"
  console.log(domainName("https://www.example.org")); // Output: "example"
  