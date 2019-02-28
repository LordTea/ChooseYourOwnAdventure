// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "town.jpg",
    levels: {

        start: {
            message: "You over hear conversations and whispers. The people tell of endless wealth to those who can find the hidden treasure. But you were unable to decipher if the treasure was located in the cave or the cove.",
            choices: [
                {
                    text: "Travel to the Cave",
                    nextLevel: "cave",
                },

                {
                    text: "Travel to the Cove",
                    nextLevel: "field",
                },
            ]
        },

        cave: {
            background_image: "cave.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You stand before the mouth of the cavern. Light is consumed by the shadow of the depths. You enter slowly.",
            choices: [
                {
                    text: "Explore",
                    nextLevel: "explore",
                },
                
                {
                    text: "Encounter",
                    nextLevel: "encounter",
                }
            ]
        },

        field: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },

    }
};
