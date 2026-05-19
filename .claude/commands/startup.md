Kill any existing process on port 3001 and start the local dev server, then open the browser.

Execute these steps in order:

1. Kill any existing process on port 3001:
   `lsof -ti :3001 | xargs kill -9 2>/dev/null; echo "cleared"`

2. Start the dev server in the background on port 3001:
   `export NVM_DIR="$HOME/.nvm" && source "$NVM_DIR/nvm.sh" && npm run dev -- --port 3001 &`

3. Wait for the server to be ready:
   `sleep 4 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3001`

4. Open the browser:
   `open http://localhost:3001`

5. Report a one-line summary confirming the server is running at http://localhost:3001.
