function showHome() {
    document.getElementById("konten").innerHTML = `
        <div style="margin-left: 50px; font-size: 22px; line-height: 1.6;">
            <h2>Selamat Datang!</h2>

            <p>Haloo! Selamat datang di website pribadi saya

            </p>

            <p>
                Website ini berisi informasi tentang diri saya, hobi saya,
                serta beberapa hal yang saya sukai.
                Saya membuat website ini untuk latihan pemrograman web dan
                mengembangkan kemampuan saya di bidang teknologi informasi.
            </p>

            <p style="margin-top: 20px; font-style: italic; color: #555;">
                "Jangan menyerah pada kritik, tetapi gunakanlah sebagai kesempatan untuk belajar dan berkembang."
            </p>
        </div>
    

        `;
}

function showProfil() {
    document.getElementById("konten").innerHTML = `
        <div style="text-align: center;">
            <h2>Profil Saya</h2>
        </div>
        <div style="margin-top: 30px; text-align: center;">
            <img src="foto.jpg"
                alt="Foto Profil"
                style="width: 300px; height: 300px; border-radius: 50%; object-fit: cover; border: 4px solid #ff9999;">
        </div>

        <p><b>Nama  :</b> Riska Aulia Zein</p>
        <p><b>Tempat/Tanggal Lahir  :</b> Siborongborong/14 April 2005</p>
        <p><b>Agama :</b> Islam</p>
        <p><b>Alamat Domisili   :</b> Jalan Alfalah 3 No.5, Glugur Darat I, Kota Medan, Sumatera Utara</p>
        <p><b>No Wa    :</b> 081260335509</p>
        <p><b>Email :</b> riskazein653@gmail.com</p>
        
    `;
}

function showHobi() {
    document.getElementById("konten").innerHTML = `
        <div style="text-align: center;">
            <h2>Hobi</h2>
            <p>Bermain Gitar</p>
    
            <div style="margin-top: 30px; text-align: center;">
                <video width="650" controls>
                    <source src="video1.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    `;
}

function showLagu() {
    document.getElementById("konten").innerHTML = `
        <div style="text-align: center";>
            <h2>Lagu Favorit</h2>
        </div>
    
        <div class="song-block">
            <h3>1. Sam Smith - Lay Me Down</h3>
            <iframe style = "border-radius: 12px"
                src="https://open.spotify.com/embed/track/74sb4Gib0cL3TQeCjYF8vh?utm_source=generator" 
                width="80%" height="80" frameBorder="0" allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </div>

        <div class="song-block">
            <h3>2. Sal Priadi - Kita Usahakan Rumah Itu</h3>
            <iframe style = "border-radius: 12px"
                src="https://open.spotify.com/embed/track/1x9jnpPOAMSrr7DuIG5jMl?utm_source=generator" 
                width="80%" height="80" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </div>

        <div class="song-block">
            <h3>3. Nadin Amizah - Mendarah</h3>
            <iframe style = "border-radius: 12px"
                src="https://open.spotify.com/embed/track/75OokMC3JzPnRNXcLTAKdr?utm_source=generator"
                width="80%" height="80" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </div>

        <div class="song-block">
            <h3>4. Dewa 19 - Kangen</h3>
            <iframe style = "border-radius: 12px"
                src="https://open.spotify.com/embed/track/6VggIDYOnf9C8fJVcMpxAu?utm_source=generator" 
                width="80%" height="80" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe> 
        </div>

        <div class="song-block">
            <h3>5. Jemimah Cita - Kamu tak Sendiri</h3>
            <iframe style = "border-radius: 12px"
                src="https://open.spotify.com/embed/track/0SQnaRBCYYnGOCFu8zulgM?utm_source=generator" 
                width="80%" height="80" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </div>

        <div class="song-block">
            <h3>6. Adrianne Lenker - Anything</h3>
            <iframe style = "border-radius: 12px"
                src="https://open.spotify.com/embed/track/4PwWESSlTwzvw9B7bmtTLS?utm_source=generator"
                width="80%" height="80" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe> 
        </div>

        <div class="song-block">
            <h3>7. Raisa, Rony Parulian - Tetap Bukan Kamu</h3>
            <iframe style = "border-radius: 12px"
                src="https://open.spotify.com/embed/track/0taGkMseEIkIZ3noyFFfZA?utm_source=generator" 
                width="80%" height="80" frameBorder="0" alloqfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </div>  

        <div class="song-block">
            <h3>8. Beach House - Space Song</h3>
            <iframe style = "border-radius: 12px"
                src="https://open.spotify.com/embed/track/1ujxjsoNvh4XgS2fUNwkZ2?utm_source=generator"
                width="80%" height="80" frameBorder-"0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe> 
        </div>
        
        <div class="song-block">
            <h3>9. Radiohead - Let Down</h3>
            <iframe style = "border-radius: 12px"
                src="https://open.spotify.com/embed/track/2fuYa3Lx06QQJAm0MjztKr?utm_source=generator" 
                width="80%" height="80" frameBorder="0" allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </div>
        
        <div class="song-block">
            <h3>10. Banda Neira - Sampai Jadi Debu</h3>
            <iframe style = "border-radius: 12px"
                src="https://open.spotify.com/embed/track/4B3DEANIvod8552CbwftCG?utm_source=generator" 
                width="80%" height="80" frameBorder="0" allowfullscreen=""
                allow="autoplay' clipboard-write; encrypted-media; fullscreen; picture-in-picture">
            </iframe>
        </div>
    `;
}

showHome();