#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting comprehensive lint fix...');

// Step 1: Run ESLint with auto-fix
console.log('📝 Running ESLint auto-fix...');
try {
  execSync('npm run lint:fix', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  ESLint auto-fix completed with some remaining issues');
}

// Step 2: Fix common TypeScript issues
console.log('🔍 Fixing TypeScript issues...');

const srcDir = path.join(__dirname, '../src');

function fixTypeScriptIssues(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixTypeScriptIssues(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix implicit any parameters
      const anyParamRegex = /\(([^)]*)\s*\)\s*=>/g;
      content = content.replace(anyParamRegex, (match, params) => {
        if (params && !params.includes(':') && params.trim() && !params.includes('...')) {
          const paramName = params.trim();
          if (paramName === 'event' && filePath.includes('Event')) {
            modified = true;
            return `(${paramName}: any) =>`;
          }
        }
        return match;
      });
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`✅ Fixed: ${filePath}`);
      }
    }
  });
}

try {
  fixTypeScriptIssues(srcDir);
} catch (error) {
  console.log('⚠️  Some TypeScript fixes may need manual attention');
}

console.log('🎉 Lint fix process completed!');