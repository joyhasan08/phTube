const mainContainer = document.getElementById(`main-container`);
let id = 1000;
let check = true;
const allData = async (str,check,nId)=>{
   
    nId ? id = nId : null;
   await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`)
    .then(res => res.json())
    .then(json =>{
        let data = json.data;
        mainContainer.innerHTML =``;
        if(str == 'sort' && check){
            data = json.data;
            data = data.sort((b,a)=>{

                let a1 = Number(a.others.views.slice(0,-1));
                let b1 = Number(b.others.views.slice(0,-1));
                console.log(typeof a.others.views,' ',b.others.views);
                console.log(a1,b1);
                return a1-b1;
            })
           
        }
        data.map(data=>{
        // console.log(data.others?.posted_date);
            const watch = data.others?.posted_date;
            if (watch !== true) {
                let hours = parseInt(watch /360);
                let minutes = Math.floor((watch - (hours * 3600)) / 60)
                let newMin = Math.abs(minutes)
             
              
                // console.log(watch);
                console.log(absuletHours1);
                // console.log(absuletMinuts);
                
            }
            
            const verify = data.authors[0]?.verified;  
            const div = document.createElement(`div`);
            div.innerHTML = `
            <!-- card  -->
         <div class="card  md:w-96  bg-base-100">
            <figure class="px-2 pt-2 rounded-2xl w-80 h-48 lg:w-96 lg:h-60 ">
              <img  src="${data.thumbnail
              }" alt="Shoes" class="rounded-lg w-full  h-full" />
              ${ watch ? `<div class=" top-40 right-2 md:right-20 w-fit lg:block badge badge-accent absolute lg:right-5 lg:top-52 ">${hours}hrs</div>` : '' }
            </figure>
            
            <div class="flex w-72 px-2 pt-5">
                <figure class="w-10 h-10  lg:w-14 lg:h-12 rounded-full  " ><img class="w-10 h-10 lg:w-14 lg:h-12 rounded-full" src="${data.authors[0].profile_picture}" alt=""></figure>
                <h2 class="card-title w-64  px-2">${data.title
                }</h2>
            </div>
            <div class="pl-14 w-72 lg:pl-16">
                <p>${data.authors[0].profile_name}</p>
                <div class="flex items-center ">
                    <p>${data.others.views} views</p>
                    ${verify ?  `<span id="verify"><img class="w-5 ml-2" src="./img/Twitter_Verified_Badge.svg" alt="" srcset=""></span>` : ''}
                </div>
            </div>
          </div>
          <!-- card end  -->

            `
           
            mainContainer.appendChild(div)
        })
        
    } )
}

allData();
const musicTab =()=>{
    id = 1001;
    mainContainer.innerHTML=``
    allData('',false);
     
    
}
const comedyTab =()=>{
    id = 1003;
    mainContainer.innerHTML =``
    allData('',false);
}
const Deawing =()=>{
    mainContainer.innerHTML =``
    const div2 = document.createElement(`div`);
    div2.classList.add(`w-fit`)
    div2.innerHTML =`
    <div class=" flex flex-col justify-center items-center mx-auto pt-28">
    <div class="mx-auto w-fit"><img  src="./img/Icon.png" alt=""></div>
    <p class="text-4xl text-center ">Oops!! Sorry, There is no <br> content here</p>
    </div>
    `
    mainContainer.appendChild(div2)
}