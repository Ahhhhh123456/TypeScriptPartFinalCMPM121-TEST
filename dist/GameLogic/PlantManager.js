// Create a record (internal DSL) for plant types and their growth conditions
const PlantTypes = {
    Flower: {
        name: "Flower",
        growthRate: 1.5,
        maxGrowth: 100,
        waterRequirement: 10,
        size: 0, // Initial size
        grow() {
            console.log("The flower is growing!");
            this.size += this.growthRate;
            if (this.size > this.maxGrowth)
                this.size = this.maxGrowth;
        }
    },
    Tree: {
        name: "Tree",
        growthRate: 0.5,
        maxGrowth: 200,
        waterRequirement: 20,
        size: 0, // Initial size
        grow() {
            console.log("The tree is growing!");
            this.size += this.growthRate;
            if (this.size > this.maxGrowth)
                this.size = this.maxGrowth;
        }
    },
    Cactus: {
        name: "Cactus",
        growthRate: 0.2,
        maxGrowth: 50,
        waterRequirement: 5,
        size: 0, // Initial size
        grow() {
            console.log("The cactus is growing!");
            this.size += this.growthRate;
            if (this.size > this.maxGrowth)
                this.size = this.maxGrowth;
        }
    }
};
// Define the growth manager class for handling plant growth over time
class PlantGrowthManager {
    constructor() {
        this.plants = [];
    }
    // Method to add a new plant to the manager
    addPlant(plantType) {
        if (!PlantTypes[plantType]) {
            throw new Error(`Invalid plant type: ${plantType}`);
        }
        const plant = Object.create(PlantTypes[plantType]); // Create a new plant object
        plant.size = 0; // Initialize size to 0
        this.plants.push(plant);
    }
    // Method to water a plant at a specific index
    waterPlant(plantIndex) {
        if (plantIndex < 0 || plantIndex >= this.plants.length) {
            throw new Error(`Invalid plant index: ${plantIndex}`);
        }
        const plant = this.plants[plantIndex];
        console.log(`${plant.name} is being watered.`);
        plant.size += plant.waterRequirement; // Increase size based on water requirement
        if (plant.size > plant.maxGrowth)
            plant.size = plant.maxGrowth; // Cap size at maxGrowth
    }
    // Method to update the growth of all plants
    updateGrowth() {
        this.plants.forEach((plant) => {
            plant.grow();
            console.log(`${plant.name} size: ${plant.size}`);
        });
    }
}
// Export the PlantGrowthManager for use in other modules
export { PlantGrowthManager };