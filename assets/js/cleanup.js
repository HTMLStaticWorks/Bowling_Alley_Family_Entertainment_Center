const fs = require('fs');
const path = require('path');
const dir = 'f:\\Smartfusion\\June 1st slot\\Bowling Alley & Family Entertainment Center';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && fs.statSync(path.join(dir, f)).size > 0);

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  // Remove nav-item li containing dashboard.html - handle both inline and multiline
  content = content.replace(/<li class="nav-item"><a class="nav-link[^"]*" href="dashboard\.html">Dashboard<\/a><\/li>\s*/g, '');
  content = content.replace(/<li class="nav-item">\s*<a class="nav-link[^"]*" href="dashboard\.html">Dashboard<\/a>\s*<\/li>\s*/g, '');
  // Remove also desktop mobile CTA Sign Up if still present
  content = content.replace(/<a href="register\.html" class="btn btn-secondary[^"]*">Sign Up<\/a>\s*/g, '');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('Cleaned: ' + file);
});
console.log('All done.');
