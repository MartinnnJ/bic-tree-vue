// this script calculates exact number of objects in 'init.json' file (so how many components should be rendered)
const jsonData = require('./src/data/init.json');
const bicHierarchy = jsonData.bicHierarchy; // Array

function getTitlesFromJSON(bicHierarchy) {
  const titles = [];
  // recursive function
  function extractTitles(node) {
    if (node.title) {
      titles.push(node.title);
    }
  
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach(child => {
        extractTitles(child);
      });
    }
  }

  bicHierarchy.forEach(node => {
    extractTitles(node);
  });

  return titles;
}

const titles = getTitlesFromJSON(bicHierarchy);
console.log(titles.length);