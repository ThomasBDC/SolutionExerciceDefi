function isTextLengthGreaterThan5(element) {
    return element.length > 5
  }
  
  let webBrowsers = ['Opera', 'Safari', 'Internet Explorer', 'Vivaldi', 'Firefox', 'Chrome', 'Edge']

  
//Question 1
console.log(webBrowsers.every(isTextLengthGreaterThan5));

//Question 2
console.log("Tableau non trié v");
console.log(webBrowsers);
console.log("Tableau trié v");
webBrowsers.sort();
console.log(webBrowsers);

//Question 3
console.log("Tableau filtré:");
let webBrowsersFiltered = webBrowsers.filter(isTextLengthGreaterThan5);
console.log(webBrowsersFiltered);

//Question 4
console.log(webBrowsersFiltered.join());