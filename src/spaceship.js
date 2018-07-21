class Spaceship {
  constructor(name, crewMembers, phasers, shields){
    this.name = name
    this.crew = crewMembers
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.docked = crewMembers.length > 0 ? false : true
    this.warpDrive = "disengaged"
    this.phasersCharge = "uncharged"
    this.addShipToCrew(crewMembers)
  }

  addShipToCrew(crewMembers){
    crewMembers.forEach(crew => crew.currentShip = this)
  }

}
