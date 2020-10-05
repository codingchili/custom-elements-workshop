# Workshop instructions

1. Run a HTTP server locally.
    1. Intellij ‘File | Settings | Build, Execution, Deployment | Debugger’
    2. python -m http.server
    3. npm install http-server -g
    4. In iipax: deploy/caseapp.war/workspace/*
2. Open the website
    1. Press CTRL+SHIFT+I in chrome for developer tools.
3. Start with the skeleton from here
    1. Make a network API request (`/api/search.json`) using Fetch on button click.
    2. Display the results in a “card-like” grid.
    3. Make it possible to close the information dialog.
    4. Create a new component, workspace or style the existing one.
