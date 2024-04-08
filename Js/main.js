// async function API(){
//     const data  = await fetch('/js/api.json',{cache:"no-store"});
//     const res =  await data.json();

//     JSON.stringify(res);

//    const body = res.map((item) => {
//         return(
//             `
//             <div class="box">
//             <h1>${item.name}</h1>
//             <p>${item.genre}</p>
//             </div>
//             `
//         )
//     }).join("");


//      document.querySelector("div.boxes").innerHTML = body;

// }

// API();




function hide(){
    document.querySelector(".mobile-menu").classList.add("hidden");
}
function show(){
    document.querySelector(".mobile-menu").classList.toggle("hidden");
}


(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "CU-1f-rzSYdOcfuxP",
    });
})();
