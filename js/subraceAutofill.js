/**
 * SubraceAutofill Class
 * 
 * Responsibilities:
 * - Manage race to subrace mappings
 * - Dynamically populate subrace dropdown
 * - Handle race selection events
 * 
 * Interaction Flow:
 * 1. User selects a race
 * 2. Event listener triggers subrace population
 * 3. Subrace dropdown updates based on race
 */
class SubraceAutofill {
    constructor() {
        // Comprehensive race-to-subrace mapping with exact matching
        this.subraceMap = {
            dwarf: [
                { value: 'hill dwarf', label: 'Hill Dwarf' },
                { value: 'mountain dwarf', label: 'Mountain Dwarf' }
            ],
            elf: [
                { value: 'high elf', label: 'High Elf' },
                { value: 'wood elf', label: 'Wood Elf' }
            ],
            halfling: [
                { value: 'lightfoot halfling', label: 'Lightfoot Halfling' },
                { value: 'stout halfling', label: 'Stout Halfling' }
            ],
            human: [
                { value: 'human variant', label: 'Variant Human' },
                { value: 'human regular', label: 'Regular Human' }
            ]
        };
    }

    initializeSubraceAutofill() {
        const raceSelect = document.getElementById('race');
        const subraceSelect = document.getElementById('subrace');

        // Debugging: Log initial state
        console.log('Race Select:', raceSelect);
        console.log('Subrace Select:', subraceSelect);

        raceSelect.addEventListener('change', (event) => {
            const selectedRace = event.target.value;
            console.log('Selected Race:', selectedRace); // Debugging log
            this.populateSubraces(selectedRace);
        });
    }

    populateSubraces(selectedRace) {
        const subraceSelect = document.getElementById('subrace');
        const subraces = this.subraceMap[selectedRace] || [];

        console.log('Available Subraces:', subraces); // Debugging log

        // Reset subrace dropdown
        subraceSelect.innerHTML = '<option selected disabled>Subrace</option>';

        // Populate subraces for selected race
        subraces.forEach(subrace => {
            const option = document.createElement('option');
            option.value = subrace.value;
            option.textContent = subrace.label;
            subraceSelect.appendChild(option);
        });

        // Enable subrace dropdown and select first option if available
        subraceSelect.disabled = subraces.length === 0;
        if (subraces.length > 0) {
            subraceSelect.selectedIndex = 1; // Select first subrace option
        }
    }
}

// Initialize SubraceAutofill when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const subraceAutofill = new SubraceAutofill();
    subraceAutofill.initializeSubraceAutofill();
});
