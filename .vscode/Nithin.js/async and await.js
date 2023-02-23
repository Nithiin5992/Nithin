async function getcoldrinks() {


    
  await  setTimeout( () => {
    
    console.log("get cold drinks")
    
    resolve()
    
    }, 3000)

}
   async function getbutter() {

        
     setTimeout( () => {
        
        console.log("get some butter")
        
        resolve()
        
        }, 3000)
    }
   async function createPost() {

  return new Promise( (resolve, reject) => {
        
        setTimeout( () => {
        
        posts.push({title: 'POST'});
        
        resolve()
        
        }, 3000)
    })
}
   async function deletePost(){
        
     if(posts.length > 0){
        
        const poppedElement = posts.pop();
        console.log(poppedElement)
        }}

getbutter().await(getcoldrinks);

