// testes vão aqui; isto não será compilado quando este pacote for usado como uma extensão.
let paired = false
radio.setGroup(50)
basic.forever(() => {
    if (microController.pairRequested()) {
        microController.pairAllow(1)
        paired = true
    }
    if (paired) {
        if (input.buttonIsPressed(Button.A)) {
            microController.send(microController.Button.A)
        } else if (input.buttonIsPressed(Button.B)) {
            microController.send(microController.Button.B)
        } else if (input.logoIsPressed()) {
            microController.send(microController.Button.Head)
        } else {
            microController.send(microController.Button.None)
        }
    }
})