function updatedata(charecter){
    console.log(charecter)
    const elem = document.querySelector(".row")
    const card = `<div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
    <div class="card h-100">
    <header class="header">
          <div class="card-header"><b>${charecter.character}</b></div>
      </header>
      <img src="${charecter.image}" class="card-img-top" alt="...">
      
      <div class="card-body">
        <div class="card-text"><b>Nickname:</b> ${charecter.nickname}</div>
        <div ><b>House:</b> ${charecter.hogwartsHouse}</div>
      </div>
      
    </div>
    </div>`
    
    elem.insertAdjacentHTML("beforeend",card)
}

const getData = async ()=>{
    let charecterData = await fetch("https://harry-potter-api-en.onrender.com/characters")
    .then((data)=>data.json())
    .then((data) => data)
    .catch(x=> console.warn(x));

    for(let i=0;i<charecterData.length;i++){
        updatedata(charecterData[i])
    }
}
getData();