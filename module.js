exports.fun=function(){ 
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Express Js</title>
    </head>
    <body>
    <script>
    function onclk(){
      var s1=document.getElementById('exp').value;
      var s2=document.getElementById('exp1').value;
      var s3=document.getElementById('exp2').innerText=s1+s2;
    }
    </script>
        <h1>Hello World</h1>
        <h2>Express Js</h2>
        <input type="number" name="input" id="exp"><br/>
        <input type="number" name="input" id="exp1"><br/>
        <button type="button" onclick="onclk()">Submit</button>
        <h3 id="exp2"></h3>
    </body>
    </html>`;
}