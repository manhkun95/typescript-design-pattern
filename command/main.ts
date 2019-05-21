import { RemoteControl } from './remote_control';
import { Light, GarageDoor } from './entities';
import { LightOnCommand, GarageDoorOpenCommand, LightOffCommand, GarageDoorCloseCommand, Command, MacroCommand } from './command';

const remote: RemoteControl = new RemoteControl();

const light: Light = new Light();

const lightOn: LightOnCommand = new LightOnCommand(light);

const lightOff: LightOffCommand = new LightOffCommand(light);

const garageDoor: GarageDoor = new GarageDoor();

const garageDoorOpen: GarageDoorOpenCommand = new GarageDoorOpenCommand(garageDoor);

const garageDoorClose: GarageDoorCloseCommand = new GarageDoorCloseCommand(garageDoor);

remote.setCommand(0, lightOn, lightOff);
remote.setCommand(1, garageDoorOpen, garageDoorClose);

// remote.onButtonWasPushed(0);
// remote.offButtonWasPushed(0);
// console.log(remote);
// remote.undoButtonWasPushed();
// remote.offButtonWasPushed(0);
// remote.onButtonWasPushed(0);
// console.log(remote);
// remote.undoButtonWasPushed();
// remote.undoButtonWasPushed();

// remote.offButtonWasPushed(1);
// remote.onButtonWasPushed(1);
let partyOn: Command[] = [ lightOn, garageDoorOpen ];
let partyOff: Command[] = [ lightOff, garageDoorClose ];

let partyOnMacro: MacroCommand = new MacroCommand(partyOn);
let partyOffMacro: MacroCommand = new MacroCommand(partyOff);

remote.setCommand(0, partyOnMacro, partyOffMacro);

remote.onButtonWasPushed(0);
remote.offButtonWasPushed(0);
remote.undoButtonWasPushed();