const nameInput = document.querySelector(".name-input")
const emailInput = document.querySelector(".email-input")
const phoneInput = document.querySelector(".phone-input")
const messageInput = document.querySelector(".message-input")
const sendBtn = document.querySelector(".send-btn")

const sendMessageToEmail = () => {
    const formData = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value
    }

    fetch('https://formsubmit.co/ajax/ahmed0saber33@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    }).then(() => {
        nameInput.value = ""
        emailInput.value = ""
        phoneInput.value = ""
        messageInput.value = ""
        alert("successfully sent")
    }).catch(() => {
        alert("something wrong happened")
    })
}

sendBtn.addEventListener("click", sendMessageToEmail)