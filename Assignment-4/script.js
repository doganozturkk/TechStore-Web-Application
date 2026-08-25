/* =========================================================
   TECHSTORE FULL SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================================
       LOGIN STATUS CHECK
    ========================================================= */
    const loginStatusBox = document.getElementById("loginStatusBox");
    const loggedUser = sessionStorage.getItem("loggedInUser");

    if (loginStatusBox && loggedUser) {
        loginStatusBox.classList.remove("d-none");
        loginStatusBox.innerText =
            "✅ " + loggedUser + " already logged in";
    }

    /* =========================================================
       DATE & TIME DISPLAY
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
       HAPPY HOUR COUNTDOWN
    ========================================================= */
    function updateCountdown() {
        const now = new Date();
        let end = new Date();

        end.setHours(23, 0, 0, 0);

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
                h + "h " + m + "m " + s + "s remaining";
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* =========================================================
       LOAD CATEGORIES DYNAMICALLY
    ========================================================= */
    function loadCategories() {
        const categoriesContainer =
            document.getElementById("categoriesContainer");

        if (!categoriesContainer) return;

        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(data => {
                const grouped = {};

                data.forEach(item => {
                    if (!grouped[item.category]) {
                        grouped[item.category] = [];
                    }

                    grouped[item.category].push(item);
                });

                let html = "";

                for (const category in grouped) {
                    html += `
                        <div class="col-12 col-md-6">
                            <section class="category-block h-100">
                                <h2 class="mb-3">
                                    ${category} Category
                                </h2>
                                <ul>
                    `;

                    grouped[category].forEach(product => {
                        html += `
                            <li>${product.name}</li>
                        `;
                    });

                    html += `
                                </ul>
                            </section>
                        </div>
                    `;
                }

                categoriesContainer.innerHTML = html;
            })
            .catch(error => {
                console.error(
                    "Category load error:",
                    error
                );
            });
    }

    loadCategories();

    /* =========================================================
       LOAD PRODUCT DETAILS
    ========================================================= */
    function loadDetails() {
        const detailsContainer =
            document.getElementById("detailsContainer");

        if (!detailsContainer) return;

        fetch("http://localhost:3000/products")
            .then(response => response.json())
            .then(data => {
                const grouped = {};

                data.forEach(item => {
                    if (!grouped[item.category]) {
                        grouped[item.category] = [];
                    }

                    grouped[item.category].push(item);
                });

                let html = "";

                for (const category in grouped) {
                    html += `
                        <section class="category-block mb-5">
                            <h2 class="section-title">
                                ${category} Category
                            </h2>

                            <div class="table-responsive">
                                <table class="table table-hover table-bordered align-middle">
                                    <tr class="table-dark">
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                    </tr>
                    `;

                    grouped[category].forEach(product => {
                        html += `
                            <tr>
                                <td>${product.name}</td>
                                <td>${product.price}€</td>
                                <td>
                                    ${product.description || "No description"}
                                </td>
                            </tr>
                        `;
                    });

                    html += `
                                </table>
                            </div>
                        </section>
                    `;
                }

                detailsContainer.innerHTML = html;
            })
            .catch(error => {
                console.error(
                    "Details load error:",
                    error
                );
            });
    }

    loadDetails();

    /* =========================================================
       LOAD ITEMS INTO JSON TABLE
       EN ÖNEMLİ KISIM BURASI
    ========================================================= */
    function loadItems() {
        const dataTable =
            document.getElementById("dataTable");

        if (!dataTable) return;

        fetch("http://localhost:3000/products")
            .then(response => {
                if (!response.ok) {
                    throw new Error(
                        "Cannot load products."
                    );
                }

                return response.json();
            })
            .then(items => {
                dataTable.innerHTML = "";

                if (!items || items.length === 0) {
                    dataTable.innerHTML = `
                        <tr>
                            <td colspan="5"
                                class="text-center">
                                No products found.
                            </td>
                        </tr>
                    `;
                    return;
                }

                items.forEach(item => {
                    const row = document.createElement("tr");

                    row.innerHTML = `
                        <td>${item.id ?? "-"}</td>
                        <td>${item.name ?? "-"}</td>
                        <td>${item.price ?? "-"}€</td>
                        <td>${item.categoryId ?? "-"}</td>
                        <td>
                            ${
                                item.lastPurchaseDate ||
                                item.addedDate ||
                                "-"
                            }
                        </td>
                    `;

                    dataTable.appendChild(row);
                });
            })
            .catch(error => {
                console.error(
                    "Load items error:",
                    error
                );

                dataTable.innerHTML = `
                    <tr>
                        <td colspan="5"
                            class="text-danger text-center">
                            Failed to load products.
                        </td>
                    </tr>
                `;
            });
    }

    /* SAYFA YÜKLENİNCE TABLOYU DOLDUR */
    loadItems();

    /* =========================================================
       PRODUCT FORM
    ========================================================= */
    const form =
        document.querySelector(".product-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let errors = [];

            const name =
                document.getElementById("name")
                    .value
                    .trim();

            const description =
                document.getElementById("description")
                    .value
                    .trim();

            const price =
                parseFloat(
                    document.getElementById("price")
                        .value
                );

            const category =
                document.getElementById("category")
                    .value;

            const supplier =
                document.getElementById("supplier")
                    .value;

            const confirm =
                document.getElementById("confirm-info")
                    .checked;

            const lastPurchaseDate =
                document.getElementById("lastPurchaseDate")
                    .value;

            /* VALIDATION */
            if (name.length < 3) {
                errors.push(
                    "Product name must be at least 3 characters."
                );
            }

            if (description.length < 10) {
                errors.push(
                    "Description must be at least 10 characters."
                );
            }

            if (isNaN(price) || price <= 0) {
                errors.push(
                    "Price must be a valid positive number."
                );
            }

            if (category === "") {
                errors.push(
                    "Please select a category."
                );
            }

            if (supplier === "") {
                errors.push(
                    "Please select a supplier."
                );
            }

            if (!confirm) {
                errors.push(
                    "You must confirm the information."
                );
            }

            if (errors.length > 0) {
                alert(errors.join("\n"));
                return;
            }

            /* CATEGORY ID */
            let categoryId = "";

            if (category === "Laptops") {
                categoryId = "LAP-NEW";
            } else if (category === "Smartphones") {
                categoryId = "PHN-NEW";
            } else if (category === "Audio") {
                categoryId = "AUD-NEW";
            } else if (category === "Accessories") {
                categoryId = "ACC-NEW";
            }

            /* NEW PRODUCT OBJECT */
            const newProduct = {
                name: name,
                description: description,
                price: price,
                category: category,
                categoryId: categoryId,
                supplierName: supplier,
                lastPurchaseDate: lastPurchaseDate
            };

            /* SEND TO SERVER */
            fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body: JSON.stringify(newProduct)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(
                            "Product could not be added."
                        );
                    }

                    return response.json();
                })
                .then(data => {
                    console.log(data);

                    alert(
                        "Product added successfully!"
                    );

                    form.reset();

                    /* TABLOYU YENİLE */
                    loadItems();
                })
                .catch(error => {
                    console.error(error);
                    alert(error.message);
                });
        });
    }

    /* =========================================================
       MEMBERSHIP CALCULATOR
    ========================================================= */
    const membershipForm =
        document.getElementById("membershipForm");

    if (membershipForm) {
        membershipForm.addEventListener(
            "submit",
            function (e) {
                e.preventDefault();

                const type =
                    document.getElementById(
                        "membershipType"
                    ).value;

                const duration =
                    parseInt(
                        document.getElementById(
                            "duration"
                        ).value
                    );

                let monthlyPrice = 0;

                if (type === "monthly") {
                    monthlyPrice = 10;
                } else if (type === "yearly") {
                    monthlyPrice = 8;
                } else if (type === "premium") {
                    monthlyPrice = 15;
                }

                if (
                    isNaN(duration) ||
                    duration <= 0
                ) {
                    alert(
                        "Please enter valid duration!"
                    );
                    return;
                }

                const total =
                    monthlyPrice * duration;

                const result =
                    document.getElementById(
                        "membershipResult"
                    );

                if (result) {
                    result.innerText =
                        "Total fee: " +
                        total +
                        "€ for " +
                        duration +
                        " months";
                }
            }
        );
    }

    /* =========================================================
       SEARCH FILTER
    ========================================================= */
    const searchInput =
        document.getElementById("searchBox");

    if (searchInput) {
        searchInput.addEventListener(
            "keyup",
            function () {
                const filter =
                    searchInput.value.toLowerCase();

                const rows =
                    document.querySelectorAll(
                        "#dataTable tr"
                    );

                rows.forEach(row => {
                    const text =
                        row.innerText.toLowerCase();

                    if (
                        text.includes(filter)
                    ) {
                        row.style.display = "";
                    } else {
                        row.style.display =
                            "none";
                    }
                });
            }
        );
    }

    /* =========================================================
       LOGIN FORM
    ========================================================= */
    const loginForm =
        document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener(
            "submit",
            function (e) {
                e.preventDefault();

                const username =
                    document.getElementById(
                        "username"
                    ).value.trim();

                const password =
                    document.getElementById(
                        "password"
                    ).value.trim();

                fetch(
                    "http://localhost:3000/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type":
                                "application/json"
                        },
                        body: JSON.stringify({
                            username:
                                username,
                            password:
                                password
                        })
                    }
                )
                    .then(response => {
                        if (
                            !response.ok
                        ) {
                            throw new Error(
                                "Invalid username or password."
                            );
                        }

                        return response.json();
                    })
                    .then(data => {
                        sessionStorage.setItem(
                            "userId",
                            data.userId
                        );

                        sessionStorage.setItem(
                            "loggedInUser",
                            username
                        );

                        alert(
                            "Login successful! User ID: " +
                                data.userId
                        );

                        window.location.href =
                            "index.html";
                    })
                    .catch(error => {
                        console.error(
                            error
                        );
                        alert(
                            error.message
                        );
                    });
            }
        );
    }
});