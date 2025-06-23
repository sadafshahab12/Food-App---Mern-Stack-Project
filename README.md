const mongoURI = \mongodb+srv://...`;`
🛣️ “Build the secret address to the kitchen using the info from the spell book.”

This makes a special connection string so your helper (Mongoose) knows where to go.

const cleanedName = name.replace(/\s+/g, " ").trim();
for trimmed space
for connecting mongodb , import mongodbconnect from db folder to index.js and call mondoDbConnect(), it will be async function

const data = await collection.find({}).toArray();
🧾 “Read everything on the menu and put it into a list I can hold.”

.find({}) means “give me everything.”
.toArray() means “put it all in a nice list (array) I can use in my app.”

mongoose provide us schema for data validation

npm i --save express-validator

auth token secret : node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"

1. Open PowerShell or Command Prompt as Administrator
   Search for "PowerShell" or "cmd" → Right-click → Run as administrator.

2. Run This Command to Take Ownership

   takeown /F "F:\client project\mern-stack-project-1" /R /D Y
   What this does:
   ✔️ /F = Specifies the folder.
   ✔️ /R = Recursive — all files and folders inside.
   ✔️ /D Y = Automatically say "Yes" to any permission prompts.

3. Give Your User Full Rights (optional but wise)
   After taking ownership, you may want to give yourself full control:


icacls "F:\client project\mern-stack-project-1" /grant "%USERNAME%:F" /T
✔️ %USERNAME% = your currently logged-in user (DESKTOP-CHEQ727\AA).
✔️ /T = apply to all subfolders and files.
✔️ :F = Full control.

4. Verify Ownership (Optional, but satisfying)
   To check ownership:


dir /Q "F:\client project\mern-stack-project-1"
Look for your username next to the folder.
