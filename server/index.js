const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Initialize the repository
app.post('/init', (req, res) => {
  exec('node vercon.mjs init', (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

// Add file
app.post('/add', (req, res) => {
    const { filename, content } = req.body;  // Get filename and content from the request body
  
    //console.log(`Received filename: ${filename}, content length: ${content.length}`);
  
    // Ensure the filename and content are provided
    if (!filename || !content) {
      return res.status(400).send('Filename and content are required');
    }
  
    // Write the content to the file
    const filePath = path.join(__dirname, filename);  // Save the file to the current directory (or any other path)
  
    // Write the content to the file
    fs.writeFile(filePath, content, (err) => {
      if (err) {
        return res.status(500).send('Error writing file: ' + err.message);
      }
  
      // Call the vercon.mjs add command to add the file to the repository
      exec(`node vercon.mjs add ${filename}`, (error, stdout, stderr) => {
        if (error) return res.status(500).send(stderr);
        res.send(stdout);
      });
    });
});


// Add file


// Commit changes
app.post('/commit', (req, res) => {
  const { message } = req.body;
  exec(`node vercon.mjs commit "${message}"`, (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

// View commit logs
app.get('/log', (req, res) => {
  exec('node vercon.mjs log', (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

// Show specific commit
app.get('/show/:hash', (req, res) => {
  const hash = req.params.hash;
  exec(`node vercon.mjs show ${hash}`, (error, stdout, stderr) => {
    if (error) return res.status(500).send(stderr);
    res.send(stdout);
  });
});

app.get('/commitedFiles', (req, res) => {
    const objectsDir = path.join(process.cwd(), '.clasp/objects');
  
    fs.readdir(objectsDir, (err, files) => {
      if (err) {
        return res.status(500).send('Error reading objects folder: ' + err.message);
      }
  
      const fileDetails = [];
  
      files.forEach((hashFilename) => {
        const filePath = path.join(objectsDir, hashFilename);
  
        try {
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          try {
            const parsedContent = JSON.parse(fileContent);
            fileDetails.push({
              filename: getOriginalFilename(hashFilename), // Get original filename
              hashFilename: hashFilename, // Keep hash filename for internal use
              content: parsedContent,
            });
          } catch (jsonError) {
            // Skip non-JSON files
          }
        } catch (err) {
          console.error('Error reading file:', hashFilename, err.message);
        }
      });
  
      res.json(fileDetails);
    });
  });
  

  const getOriginalFilename = (hashFilename) => {
    try {
      const filePath = path.join('.clasp/objects', hashFilename);
      const content = fs.readFileSync(filePath, 'utf-8');
      
      // Try to parse as JSON first
      try {
        const parsed = JSON.parse(content);
        return parsed.filename || hashFilename; // Return original filename if stored in JSON
      } catch {
        // If not JSON, check for filename in metadata
        const metadataPath = path.join('.clasp/metadata', hashFilename + '.meta');
        if (fs.existsSync(metadataPath)) {
          const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
          return metadata.originalFilename || hashFilename;
        }
      }
    } catch (error) {
      console.error('Error getting original filename:', error);
    }
    return hashFilename;
  };


 app.get('/addedFiles', (req, res) => {
    const objectsDir = path.join(process.cwd(), '.clasp/objects');
  
    fs.readdir(objectsDir, (err, files) => {
      if (err) {
        return res.status(500).send('Error reading objects folder: ' + err.message);
      }
  
      const fileDetails = [];
  
      files.forEach((hashFilename) => {
        const filePath = path.join(objectsDir, hashFilename);
  
        try {
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          try {
            JSON.parse(fileContent); // Skip JSON files
          } catch (jsonError) {
            // Not a JSON file, include it
            fileDetails.push({
              filename: getOriginalFilename(hashFilename), // Get original filename
              hashFilename: hashFilename, // Keep hash filename for internal use
              content: fileContent,
            });
          }
        } catch (err) {
          console.error('Error reading file:', hashFilename, err.message);
        }
      });
  
      res.json(fileDetails);
    });
  });
  

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
