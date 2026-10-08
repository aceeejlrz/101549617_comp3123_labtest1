// Question 3: File Module - Remove Log files

const fs = require('fs');
const path = require('path');

const logsDir = path.join(process.cwd(), 'Logs');

if (fs.existsSync(logsDir)) {
    // Remove all the files from the Logs directory and output their names
    const files = fs.readdirSync(logsDir);
    files.forEach((file) => {
        console.log(`delete files...${file}`);
        fs.unlinkSync(path.join(logsDir, file));
    });

    // Remove the Logs directory
    fs.rmdirSync(logsDir);
} else {
    console.log('Logs directory does not exist');
}
