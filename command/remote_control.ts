import { Command, NoCommand } from './command';

class RemoteControl {
    onCommands: Command[];
    offCommands: Command[];
    undoCommand: Command;

    public constructor() {
        this.onCommands = new Array();
        this.offCommands = new Array();
        const noCommand: Command = new NoCommand();
        for (let i = 0; i < 7; i++) {
            this.onCommands[i] = noCommand;
            this.offCommands[i] = noCommand;
        }

        this.undoCommand = noCommand;
    }

    public setCommand(slot: number, onCommand: Command, offCommand: Command): void {
        this.onCommands[slot] = onCommand;
        this.offCommands[slot] = offCommand;
    }

    public onButtonWasPushed(slot: number) {
        this.onCommands[slot].execute();
        this.undoCommand = this.onCommands[slot];
    }

    public offButtonWasPushed(slot: number) {
        this.offCommands[slot].execute();
        this.undoCommand = this.offCommands[slot];
    }

    public undoButtonWasPushed() {
        this.undoCommand.undo();
    }

    public toString(): String {
        let res = '';
        res += '\n------ Remote Control -------\n';
        for ( let i =0; i < this.onCommands.length; i++) {
            res += `[slot ${i}] ${this.onCommands[i]} \n`
        }
        return res;
    }
}

export { RemoteControl };