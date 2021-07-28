export const buildIframeContent = (html: string, css: string) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>codeplay</title>
    <style>
      ${css}
    </style>
  </head>
  <body>
    <div id="root">
     ${html}
    </div>
    <script>
      window.onmessage = function (e) {
        try {
          eval(e.data)
        } catch(err) {
          console.log(err)
        }
      }
    </script>
  </body>
  </html>
  `;
};
