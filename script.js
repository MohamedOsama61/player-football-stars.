

// Generate cards on players.html
if (document.getElementById("playersContainer")) {
    const container = document.getElementById("playersContainer");
    players.forEach(player => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="images/${player.images[0]}" alt="${player.name}" />
            <h3>${player.name}</h3>`
        ;

       // card.addEventListener("click", () => openDetails(player.id));
         card.addEventListener("click", () => {
            localStorage.setItem("playerId", player.id);
            setTimeout(() => {
                window.location.href = "player-details.html";
            }, 50);
        });


        container.appendChild(card);
    });
}

// Save ID and go to details page
function openDetails(id) {
    localStorage.setItem("playerId", id);
    window.location.href ="player-details.html";
}
//-----------------------------------------------------------------------------------------------------
// صفحة التفاصيل: نتحقق أولاً إن العنصر موجود وبعدين نعرض
if (document.getElementById("playerDetails")) {
    const id =Number( localStorage.getItem("playerId"));
    const p = players.find(x => x.id == id);

    const detailsDiv = document.getElementById("playerDetails");

    if (!p) {
        detailsDiv.innerHTML =` <p style="color: #ff6b6b; text-align:center; padding:30px;">
        خطأ: لم يتم العثور على بيانات اللاعب. ارجع إلى صفحة اللاعبين وحاول مرة أخرى.
        </p>`;
       
    } 
    
    else {
        detailsDiv.innerHTML = `
            <div class="player-details">
                <img src="images/${p.images[0]}" alt="${p.name}" />
                <h2>${p.name}</h2>
                <p>${p.info}</p>
               <div style="margin-top:20px; display:flex; justify-content:center; gap:12px;">
                    <img src="images/${p.images[1]}" alt="${p.name} photo 2" width="250" />
                    <img src="images/${p.images[2]}" alt="${p.name} photo 3" width="250" />
                </div>
            </div>`
        
        ;
 } 
}

//-------------------------------------------------------------------------------------------------------------
function login() {
    // البيانات الصحيحة
    let correctName = "mohamed";
    let correctEmail = "mohamed@gmail.com";
    let correctPass = "12345";

    // الحصول على القيم من الحقول
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    // التحقق
    if (name === correctName && email === correctEmail && pass === correctPass) {
        window.location.href = "index.html"; // الصفحة الرئيسية
    } else {
        document.getElementById("msg").innerHTML = "❌ Wrong info — Try again";
    }
}
