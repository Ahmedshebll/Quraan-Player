let container = document.querySelector('.container')

fetch('https://quran-endpoint.vercel.app/quran')
.then((res)=> res.json())
.then((data)=> data.data.map((item)=> { container.innerHTML +=
 `<div> <h2>${item.asma.ar.long} (${item.number}) (${item.type.ar}) </h2 style="text-align: center;">
  <audio src="${item.recitation.full}" controls>
  </audio></div>
   <hr>`
   console.log(item.type.ar)
}));
    

