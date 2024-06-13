

//JavaScript Kodları Eklenecektir!

/*document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-bar ul li");
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            let submenu = this.querySelector(".sub-menu-1");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector(".sub-menu-1");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });

    const subMenuItems = document.querySelectorAll(".hover-me");
    subMenuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            let submenu = this.querySelector(".sub-menu-2");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector(".sub-menu-2");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-bar ul li");
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            let submenu = this.querySelector(".sub-menu-1");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector(".sub-menu-1");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });

    const subMenuItems = document.querySelectorAll(".hover-me");
    subMenuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            let submenu = this.querySelector(".sub-menu-2");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector(".sub-menu-2");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });

    */

/*İçerik Gösterme Kodu*/
const contentArea = document.getElementById("content-area");
const submenuItems = document.querySelectorAll(".submenu-item");
submenuItems.forEach(item => {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        const contentKey = this.getAttribute("data-content");
        loadContent(contentKey);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-bar ul li");
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            let submenu = this.querySelector(".sub-menu-1");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector(".sub-menu-1");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });

    const subMenuItems = document.querySelectorAll(".hover-me");
    subMenuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            let submenu = this.querySelector(".sub-menu-2");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector(".sub-menu-2");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });

    // İçerik Gösterme Kodu
    const contentArea = document.getElementById("content-area");
    const submenuItems = document.querySelectorAll(".submenu-item");
    submenuItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            const contentKey = this.getAttribute("data-content");
            loadContent(contentKey);
        });
    });

    function loadContent(contentKey) {
        let content = "";
        switch (contentKey) {
            case "misyonumuz":
                content = "<h2>Misyonumuz</h2><p>Burada misyonumuz ile ilgili bilgiler yer alacak.</p>";
                break;
            case "vizyonumuz":
                content = "<h2>Vizyonumuz</h2><p>Burada vizyonumuz ile ilgili bilgiler yer alacak.</p>";
                break;
            case "hedeflerimiz":
                content = "<h2>Hedeflerimiz</h2><p>Burada hedeflerimiz ile ilgili bilgiler yer alacak.</p>";
                break;
            default:
                content = "<h2>Bilgi Yok</h2><p>Bu içerik henüz eklenmemiş.</p>";
        }
        contentArea.innerHTML = content;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.querySelector('.menu-bar ul li:first-child a');
    homeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Sayfanın yeniden yüklenmesini önlemek için
        clearContent(); // İçeriği temizle
    });

    function clearContent() {
        // İçerik alanındaki yazıları temizle
        const contentArea = document.getElementById('content-area');
        contentArea.innerHTML = '';
    }
});





// const subMenuItems = document.querySelectorAll(".hover-me");
// subMenuItems.forEach(item => {
//     item.addEventListener("mouseenter", function () {
//         let submenu = this.querySelector(".sub-menu-2");
//         if (submenu) {
//             submenu.style.display = "block";
//         }
//     });

//     item.addEventListener("mouseleave", function () {
//         let submenu = this.querySelector(".sub-menu-2");
//         if (submenu) {
//             submenu.style.display = "none";
//         }
//     });
// });


// const subMenuItems = document.querySelectorAll(".hover-me");
// subMenuItems.forEach(item => {
//     item.addEventListener("mouseenter", function () {
//         let submenu = this.querySelector(".sub-menu-2");
//         if (submenu) {
//             submenu.style.display = "block";
//         }
//     });

//     item.addEventListener("mouseleave", function () {
//         let submenu = this.querySelector(".sub-menu-2");
//         if (submenu) {
//             submenu.style.display = "none";
//         }
//     });
// });



//JavaScript Kodları Eklenecektir!

/*document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-bar ul li");
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            let submenu = this.querySelector(".sub-menu-1");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector(".sub-menu-1");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });

    const subMenuItems = document.querySelectorAll(".hover-me");
    subMenuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            let submenu = this.querySelector(".sub-menu-2");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector(".sub-menu-2");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".menu-bar ul li");
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            let submenu = this.querySelector(".sub-menu-1");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector(".sub-menu-1");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });

    const subMenuItems = document.querySelectorAll(".hover-me");
    subMenuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            let submenu = this.querySelector(".sub-menu-2");
            if (submenu) {
                submenu.style.display = "block";
            }
        });

        item.addEventListener("mouseleave", function () {
            let submenu = this.querySelector(".sub-menu-2");
            if (submenu) {
                submenu.style.display = "none";
            }
        });
    });

    //Örnek 
    //.
    //.

    */