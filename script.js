// Form auto-response automation
document.getElementById("supportForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    const messageBox = document.getElementById("responseMessage");
    messageBox.classList.remove("hidden");
    messageBox.innerText =
        "Thank you, " + name + 
        ". Your request has been received. Our healthcare team will contact you shortly.";

    document.getElementById("supportForm").reset();
});

// Simple AI FAQ Bot (Concept-Level)
function askBot(question) {
    let reply = "";

    if (question === "help") {
        reply = "You can fill the support form, and our team will reach out to you.";
    } else if (question === "free") {
        reply = "Yes, this healthcare support service is completely free for patients.";
    } else if (question === "volunteer") {
        reply = "You can register as a volunteer by contacting the NGO through this portal.";
    }

    document.getElementById("botReply").innerHTML =
        "<strong>Bot:</strong> " + reply;
}
