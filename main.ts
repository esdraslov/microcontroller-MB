let request: boolean = false
let id: number = 0
radio.onReceivedValue((name, value) => {
    if (name == "pair" && value == id) {
        request = true
    }
})

namespace microController {
    //% block="set id to %id%"
    export function setId(id: number) {
        id = id
    }
    
    //% block
    export function pairRequested() {
        return request
    }

    //% block="allow pair? %allow%"
    //% allow.min="0" allow.max="1"
    export function pairAllow(allow: number) {
        radio.sendValue("paired", allow)
    }
}
