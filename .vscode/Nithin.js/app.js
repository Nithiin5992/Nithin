const http=require('http');
const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/home'){
  
    res.setHeader('Content-Type','Text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body action="/home"><h1>Welcome home</h1></body>')
    res.write('</html>')
    res.end();
}
if(url==='/about'){
  
    res.setHeader('Content-Type','Text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body action="/about"><h1>Welcome to About Us page</h1></body>')
    res.write('</html>')
    res.end();
}
if(url==='/node'){
  
    res.setHeader('Content-Type','Text/html')
    res.write('<html>')
    res.write('<head><title>My first page</title></head>')
    res.write('<body action="/node"><h1>Welcome to my Node Js project</h1></body>')
    res.write('</html>')
    res.end();
}
})
server.listen(3000);

