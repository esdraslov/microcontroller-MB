# MicroController

## importation

* click "extensions" at the left
* search by **https://github.com/esdraslov/microcontroller-mb**
* import the first extension

## blocks usage

### set id to (ID) - (microcontroller.setId)

set the id of THIS micro:bit for pair

### allow pair? <ALLOW> - (microcontroller.pairAllow)

allow pair if requested and parameter ALLOW is true

### pair requested - (microcontroller.pairRequested)

return true when a pair is requested, otherwise, return false

### send [BUTTON] - (microcontroller.send)

send a button to the paired device
