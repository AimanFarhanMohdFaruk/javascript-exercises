const getTheTitles = function(books) {
  titlesArray = [];
  for(const value of books){
    titlesArray.push(value['title'])
  }
  return titlesArray
};

// Do not edit below this line
module.exports = getTheTitles;
