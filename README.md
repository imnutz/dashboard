#Dashboard

Using [SAM Pattern](http://sam.js.org)

Based on: http://demos.creative-tim.com/light-bootstrap-dashboard

Attempt to split the webapp into folders + components.

Contains 2 working components:
- Contact manager
- Todo list

## Run
- Build

    ```npm install```

    ```npm run build```


- Install json-server:

    ```npm install -g json-server```

  Start json-server:

    ```json-server --watch db.json```

- If you are on MAC, you can run the following command in project folder:

  ```python -m SimpleHTTPServer 8000```

  And access this url: `http://localhost:8000`.
  Otherwise, you can use [Live server](https://www.npmjs.com/package/live-server)