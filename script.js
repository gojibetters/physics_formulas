function calculate() {
    const space = parseInt(document.getElementById("space").value)
    const time = parseInt(document.getElementById("time").value)

    let velocity = (space / time)

    const messageVelocity = "The velocity is: " + velocity + " m/s"

    const elementvelocity = document.getElementById("velocity")
    elementvelocity.innerHTML = messageVelocity

    document.getElementById("space").value = ""
    document.getElementById("time").value = ""
}