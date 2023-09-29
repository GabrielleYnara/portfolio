const sendBtn = document.querySelector("#sendBtn");

sendBtn.addEventListener("click", (event) => {
    const identity = document.querySelector("#identity");
    const email = document.querySelector("#email");
    const message = document.querySelector("#message");
    if (identity.value != "" && email.value != "" && message.value != ""){
        console.log(identity.value);
        console.log(email.value);
        console.log(message.value);
        identity.value = "";
        email.value = "";
        message.value = "";
    } else {
        event.preventDefault(); //doesn't reload for now
        console.log("clicked")
    }
    
});
