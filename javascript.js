 const getData = async()=>{
 
    await fetch("https://type.fit/api/quotes")
   .then((response)=>response.json())
   .then((data)=>{ console.log(data)

    if(Array.isArray(data) && data.length>0){
        const random =Math.floor(Math.random()* data.length);
        console.log(random);

        let randomdata= `${data[random].text}     Author : ${data[random].author}`;
        console.log(randomdata);

    
   let Data = document.getElementById('content');
   Data.innerText = randomdata;
    }
       })
 
    }

 getData();


 







