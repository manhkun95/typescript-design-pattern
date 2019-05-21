import { Light, GarageDoor } from './entities';

interface Command {
    execute(): void;
    undo(): void;
}

class LightOnCommand implements Command {
    light: Light;

    public constructor(light: Light) {
        this.light = light;
    }
    public execute(): void {
        this.light.on();
    }
    public undo(): void {
        this.light.off();
    }
}

class LightOffCommand implements Command {
    light: Light;

    public constructor(light: Light) {
        this.light = light;
    }
    public execute(): void {
        this.light.off();
    }

    public undo(): void {
        this.light.on();
    }
}


class GarageDoorOpenCommand implements Command {
    garageDoor: GarageDoor;

    public constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }
    public execute(): void {
        this.garageDoor.up();
    }

    public undo(): void {
        this.garageDoor.down();
    }
}

class GarageDoorCloseCommand implements Command {
    garageDoor: GarageDoor;

    public constructor(garageDoor: GarageDoor) {
        this.garageDoor = garageDoor;
    }

    public execute(): void {
        this.garageDoor.down();
    }

    public undo(): void {
        this.garageDoor.up();
    }
}

class NoCommand implements Command {
    public execute(): void {
    }
    public undo(): void {
    }
}

class MacroCommand implements Command {
    commands: Command[];
    public constructor(commands: Command[]) {
        this.commands = commands;
    }

    public execute(): void {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].execute();
        }
    }

    public undo(): void {
        for (let i = 0; i < this.commands.length; i++) {
            this.commands[i].undo();
        }
    }
}


export { Command, NoCommand, LightOnCommand, LightOffCommand, GarageDoorOpenCommand, GarageDoorCloseCommand, MacroCommand };