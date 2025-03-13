const fs = require('fs');
const path = require('path');

// Function to check if a file is an Angular component
function isComponentFile(filePath) {
  return filePath.endsWith('.component.ts');
}

// Function to check if a component is standalone
function isStandaloneComponent(fileContent) {
  return fileContent.includes('standalone: true');
}

// Function to add the standalone property
function addStandaloneProperty(fileContent) {
  const selectorLineRegex = /selector:\s*["'].*["']/;
  const selectorLineMatch = fileContent.match(selectorLineRegex);

  if (selectorLineMatch) {
    const selectorLine = selectorLineMatch[0];
    const updatedContent = fileContent.replace(
      selectorLine,
      `${selectorLine},\n  standalone: true,`
    );
    return updatedContent;
  }

  return fileContent;
}

// Function to process a single file
function processFile(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf8');

  if (!isStandaloneComponent(fileContent)) {
    const updatedContent = addStandaloneProperty(fileContent);
    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  } else {
    console.log(`Already standalone: ${filePath}`);
  }
}

// Function to recursively traverse the directory
function traverseDirectory(directory) {
  console.log(`Traversing directory: ${directory}`); // Debug log
  try {
    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        traverseDirectory(filePath); // Recursively traverse subdirectories
      } else if (isComponentFile(filePath)) {
        processFile(filePath); // Process component files
      }
    }
  } catch (error) {
    console.error(`Error reading directory: ${directory}`, error);
  }
}

// Main function
function main() {
  const projectRoot = `C:\\Users\\Khaled Oweas\\Downloads\\metronic_angular_v8.2.9_demo1\\src\\`; // Use the current directory (src) as the root
  console.log(`Starting from project root: ${projectRoot}`); // Debug log
  traverseDirectory(projectRoot);
  console.log('Standalone check and update complete.');
}

// Run the script
main();
