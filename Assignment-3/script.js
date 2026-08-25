document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       DATE & TIME DISPLAY (LIVE CLOCK)
    ========================================================= */
    function updateTime() {
        const now = new Date();

        const formatted = now.toLocaleString("en-GB", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        const dateElement = document.getElementById("dateTime");

        if (dateElement) {
            dateElement.innerText = formatted;
        }
    }

    updateTime();
    setInterval(updateTime, 1000);


    /* =========================================================
       HAPPY HOUR COUNTDOWN (SMART VERSION)
    ========================================================= */
    function updateCountdown() {

        const now = new Date();

        let end = new Date();

        // Happy Hour ends at 23:00
        end.setHours(23, 0, 0, 0);

        // If time passed -> tomorrow
        if (now > end) {
            end.setDate(end.getDate() + 1);
        }

        const diff = end - now;

        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        const countdownElement =
            document.getElementById("countdown");

        if (countdownElement) {

            countdownElement.innerText =
                h + "h " +
                m + "m " +
                s + "s remaining";
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);


    /* =========================================================
       FORM VALIDATION (ADVANCED)
    ========================================================= */
    const form =
        document.querySelector(".product-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            let errors = [];

            const name =
                document.getElementById("name")
                .value.trim();

            const description =
                document.getElementById("description")
                .value.trim();

            const price =
                parseFloat(
                    document.getElementById("price").value
                );

            const category =
                document.getElementById("category").value;

            const supplier =
                document.getElementById("supplier").value;

            const confirm =
                document.getElementById("confirm-info").checked;


            /* =========================
               NAME VALIDATION
            ========================= */
            if (name.length < 3) {
                errors.push(
                    "Product name must be at least 3 characters."
                );
            }

            if (name.length > 50) {
                errors.push(
                    "Product name must be less than 50 characters."
                );
            }


            /* =========================
               DESCRIPTION VALIDATION
            ========================= */
            if (description.length < 10) {
                errors.push(
                    "Description must be at least 10 characters."
                );
            }

            if (description.length > 300) {
                errors.push(
                    "Description is too long."
                );
            }


            /* =========================
               PRICE VALIDATION
            ========================= */
            if (isNaN(price) || price <= 0) {

                errors.push(
                    "Price must be a valid positive number."
                );
            }


            /* =========================
               CATEGORY VALIDATION
            ========================= */
            if (category === "") {

                errors.push(
                    "Please select a category."
                );
            }


            /* =========================
               SUPPLIER VALIDATION
            ========================= */
            if (supplier === "") {

                errors.push(
                    "Please select a supplier."
                );
            }


            /* =========================
               CONFIRM CHECK
            ========================= */
            if (!confirm) {

                errors.push(
                    "You must confirm the information."
                );
            }


            /* =========================
               FINAL CHECK
            ========================= */
            if (errors.length > 0) {

                e.preventDefault();

                alert(errors.join("\n"));

            } else {

                alert("Product successfully added!");
            }

        });
    }


    /* =========================================================
       MEMBERSHIP CALCULATOR (IMPROVED)
    ========================================================= */
    const membershipForm =
        document.getElementById("membershipForm");

    if (membershipForm) {

        membershipForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const type =
                document.getElementById("membershipType").value;

            const duration =
                parseInt(
                    document.getElementById("duration").value
                );

            let monthlyPrice = 0;


            /* =========================
               MEMBERSHIP TYPES
            ========================= */
            if (type === "monthly") {

                monthlyPrice = 10;

            } else if (type === "yearly") {

                monthlyPrice = 8;

            } else if (type === "premium") {

                monthlyPrice = 15;
            }


            /* =========================
               VALIDATION
            ========================= */
            if (isNaN(duration) || duration <= 0) {

                alert("Please enter valid duration!");

                return;
            }


            /* =========================
               CALCULATION
            ========================= */
            const total =
                monthlyPrice * duration;


            /* =========================
               RESULT
            ========================= */
            document.getElementById("membershipResult").innerText =
                "Total fee: " +
                total +
                "€ for " +
                duration +
                " months";
        });
    }


    /* =========================================================
       JSON LOAD + PARSE
    ========================================================= */
    function loadItems() {

        if (!document.getElementById("dataTable")) return;


        fetch("items.json")

            .then(response => response.json())

            .then(data => {

                let table = "";


                data.items.forEach(item => {

                    table += `
                        <tr>

                            <td>
                                ${item.id}
                            </td>

                            <td>
                                ${item.name}
                            </td>

                            <td>
                                ${item.price}€
                            </td>

                            <td>
                                ${item.categoryId}
                            </td>

                            <td>
                                <span class="badge bg-primary">
                                    ${item.lastPurchaseDate}
                                </span>
                            </td>

                        </tr>
                    `;
                });


                document.getElementById("dataTable").innerHTML =
                    table;

            })

            .catch(error => {

                console.error(
                    "JSON load error:",
                    error
                );
            });
    }

    // LOAD ITEMS
    loadItems();


    /* =========================================================
       SEARCH FILTER
    ========================================================= */
    const searchInput =
        document.getElementById("searchBox");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const filter =
                searchInput.value.toLowerCase();

            const rows =
                document.querySelectorAll("#dataTable tr");


            rows.forEach(row => {

                const text =
                    row.innerText.toLowerCase();


                if (text.includes(filter)) {

                    row.style.display = "";

                } else {

                    row.style.display = "none";
                }

            });

        });
    }

});