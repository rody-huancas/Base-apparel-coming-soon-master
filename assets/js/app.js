document.getElementById("btn").addEventListener("click", submitEmail);

function submitEmail() {
    const email = document.getElementById("email");
    const iconError = document.getElementById("icon-error");
    if (!email.checkValidity()) {
        document.getElementById("msg").innerHTML = "Please provide a valid email";
        if (!iconError.classList.contains("show")) {
            iconError.classList.add("show");

            setTimeout(() => {
                iconError.classList.remove("show");
                document.getElementById("msg").innerHTML = "";
            }, 3000);
        }
    }
}