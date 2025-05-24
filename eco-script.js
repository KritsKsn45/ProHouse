    document.addEventListener("DOMContentLoaded", function () {
        // เปิด/ปิดเมนู sidebar
        const sidebar = document.querySelector('.pf-nav-sidebar');
        const sidebarBtn = document.querySelector('.pf-nav-sidebar-btn');

        if (sidebar && sidebarBtn) {
            sidebarBtn.addEventListener('click', () => {
                sidebar.classList.toggle('open');
            });

            let touchStartX = 0;
            let touchEndX = 0;

            document.addEventListener('touchstart', function (e) {
                touchStartX = e.changedTouches[0].screenX;
            });

            document.addEventListener('touchend', function (e) {
                touchEndX = e.changedTouches[0].screenX;

                if (touchEndX - touchStartX > 100) {
                    sidebar.classList.add('open');
                }

                if (touchStartX - touchEndX > 100) {
                    sidebar.classList.remove('open');
                }
            });

            document.querySelectorAll('.pf-nav-sidebar a').forEach(link => {
                link.addEventListener('click', () => {
                    sidebar.classList.remove('open');
                });
            });
        }

        // Smooth scroll ไปยัง section
        const navLinks = document.querySelectorAll(".pf-nav-con a, .pfbtn a, a[href^='#']");
        navLinks.forEach(link => {
            link.addEventListener("click", function (e) {
                const targetId = this.getAttribute("href").substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            });
        });

        // Sort/filter model cards ตาม data-type
        const buttons = document.querySelectorAll(".p-item");
        const modelCards = document.querySelectorAll(".model-card-link");

        buttons.forEach(button => {
            button.addEventListener("click", function (event) {
                event.preventDefault();

                buttons.forEach(btn => btn.classList.remove("active"));
                this.classList.add("active");

                const selectedType = this.getAttribute("data-type");

                modelCards.forEach(card => {
                    if (selectedType === "all" || card.getAttribute("data-type") === selectedType) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });

        // Modal popup ภาพ Promotion
        const modal = document.getElementById("imageModal");
        const modalImg = document.getElementById("modalImage");
        const closeBtn = document.querySelector(".close");
        const image = document.querySelector(".pf-pm-rd img");

        if (modal && modalImg && closeBtn && image) {
            image.addEventListener("click", function () {
                modal.style.display = "flex";
                modalImg.src = this.src;
            });

            closeBtn.addEventListener("click", function () {
                modal.style.display = "none";
            });

            modal.addEventListener("click", function (e) {
                if (e.target === modal) {
                    modal.style.display = "none";
                }
            });
        }
    });
