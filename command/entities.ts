class Light {
    on(): void {
        console.log('Light is on');
    }

    off(): void {
        console.log('Light is off');
    }
}

class GarageDoor {
    up(): void {
        console.log('Garage Door is Open')
    }

    down(): void {
        console.log('Garage Door is Close')
    }
}

export { Light, GarageDoor };