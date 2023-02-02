const key = "&appid=f5adaa62872fa22627989bf5255e9e32"
const url = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&zip='
const generateBtn = document.getElementById('generate')
// const Error = (error) => console.error(error)
let date = new Date();
let newDate = date.getMonth()+'.'+ date.getDate()+'.'+ date.getFullYear();

// Generate button 
generateBtn.addEventListener('click', async() =>{
    // e.preventDefault()
    const zip = document.getElementById('zip').value
   
    const res = await fetch(`${url}${zip}${key}`)
    
    try{
        const info = await res.json()
        info.content = document.getElementById('feelings').value
        info.date = newDate
        await postDataTo('/postData',info)
        Updata()
    }catch(err){
        console.log(err)
    }
})


//post function 
async function postDataTo(url = '', data = {}){
    
    let res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        body:JSON.stringify(data),
        credentials:'same-origin',
        headers:{
            'content-type':'application/json'
        },
    })
    try{
        const newData = await res.json()

        return newData
    }
    catch(err){
        console.log(err)
    }
}

//get function 

async function getDataTo(baseUrl,zip,key){

   

    try{
        const res = await fetch(`${baseUrl}${zip}${key}`)
        console.log(res)
        const data = await res.json()
        return data
        
    }
    catch(err){
        console.log(err)
    } 
}

//Updata function 
async function Updata(){
    const req = await fetch("/getData")

    try{
        const data = await req.json()
        
        document.getElementById('temp').innerHTML = data.temp
        document.getElementById('date').innerHTML = data.date
        document.getElementById('content').innerHTML = data.content
        
    } catch(err){
        console.log(err)
    }
    

    
    
}