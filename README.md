Steps to start a React.Js projects

1.  Install Node.js Download installer from https://nodejs.org/en/download/ and install
2.  Install Vscode Download installer from https://code.visualstudio.com/download and install
3.  Create react app Open command prompt and navigate to folder where you want to create projects.
    Execute below in command prompt

    ```bash
    npx create-next-app@latest
    ```

    Enter project name as "my-react-app"
    Keep press enter to create your project files

    ```bash
    cd my-react-app
    npm run dev
    ```

    Development server will start and you can access the app with the url http://localhost:3000
    Close the terminal to stop the app.

4.  Open the folder "my-react-app" in vscode (IDE for react js app development)
    Access Menu Terminal => Terminal.
    In the terminal run below command to start development server

    ```bash
    npm run dev
    ```

5.  Create Hello Component (page)
    Create file 'Hello.tsx' under 'src\app\components' folder
    Paste the below code in it and save

    ```javascript
    import React from "react";

    function Hello(props: any) {
      return (
        <span>
          Hello <b>{props.name}</b>
        </span>
      );
    }

    export default Hello;
    ```

6.  Render the Hello component created

    - Create folder "pages" under "src"
    - To create page, create file "my-page.tsx" and paste below code

      ```javascript
      import React from "react";
      import Hello from "../app/components/Hello";

      function MyPage(props: any) {
        return (
          <div>
            <h1>My first page</h1>
            <Hello name={"Thiruva"}></Hello>
          </div>
        );
      }

      export default MyPage;
      ```

7.  Open the url "http://localhost:3000/my-page" to see the changes
8.  Once the file is saved, you can the see the updates automatically in browser.
