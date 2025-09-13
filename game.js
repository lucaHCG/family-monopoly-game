// Family Monopoly Go! Game Logic

// Character Data
const CHARACTERS = [
    // Playable Characters
    { id: 'luca', name: 'Luca', role: 'Father', color: '#000080', emoji: '👨‍👦', type: 'playable', image: 'assets/characters/luca.png' },
    { id: 'sylwia', name: 'Sylwia', role: 'Mother', color: '#FFA500', emoji: '👩‍👧', type: 'playable', image: 'assets/characters/sylwia.png' },
    { id: 'oli', name: 'Oli', role: 'Son', color: '#FF0000', emoji: '👦', type: 'playable', image: 'assets/characters/oli.png' },
    { id: 'vicky', name: 'Vicky', role: 'Daughter', color: '#FFC0CB', emoji: '👧', type: 'playable', image: 'assets/characters/vicky.png' },
    { id: 'leon', name: 'Leon', role: 'Oli\'s Best Friend', color: '#808080', emoji: '👦', type: 'playable' },
    { id: 'nela', name: 'Nela', role: 'Leon\'s Sister', color: '#DC143C', emoji: '👧', type: 'playable' },
    { id: 'micky', name: 'Micky', role: 'Family Friend', color: '#32CD32', emoji: '👦', type: 'playable' },
    { id: 'jasiu', name: 'Jasiu', role: 'Neighbor', color: '#FFD700', emoji: '👦', type: 'playable' },
    
    // NPCs (Non-Playable Characters)
    { id: 'ciocia-kasia', name: 'Ciocia Kasia', role: 'Aunt', color: '#FFFF00', emoji: '👩‍🦰', type: 'npc', image: 'assets/characters/ciocia-kasia.png' },
    { id: 'wujek-bartek', name: 'Wujek Bartek', role: 'Uncle', color: '#008000', emoji: '👨‍🦱', type: 'npc' },
    { id: 'zio-diego', name: 'Zio Diego', role: 'Uncle', color: '#1560BD', emoji: '👨‍🦳', type: 'npc' },
    { id: 'nonna-patrizia', name: 'Nonna Patrizia', role: 'Grandma', color: '#FF00FF', emoji: '👵', type: 'npc' },
    { id: 'nonno-mauro', name: 'Nonno Mauro', role: 'Grandpa', color: '#87CEEB', emoji: '👴', type: 'npc' },
    { id: 'dziadek-tosiek', name: 'Dziadek Tosiek', role: 'Grandpa', color: '#800020', emoji: '👴', type: 'npc' },
    { id: 'babcia-urszula', name: 'Babcia Urszula', role: 'Grandma', color: '#50C878', emoji: '👵', type: 'npc' },
    { id: 'pani-ania', name: 'Pani Ania', role: 'Oli\'s Teacher', color: '#000000', emoji: '👩‍🏫', type: 'npc' },
    { id: 'pani-isza', name: 'Pani Isza', role: 'Vicky\'s Teacher', color: '#F4A460', emoji: '👩‍🏫', type: 'npc' },
    { id: 'bisnonna-mirella', name: 'Bisnonna Mirella', role: 'Great Grandma', color: '#DDA0DD', emoji: '👵', type: 'npc' },
    { id: 'prababcia-stasia', name: 'Prababcia Stasia', role: 'Great Great Grandma', color: '#F0E68C', emoji: '👵', type: 'npc' },
    { id: 'antos', name: 'Antos', role: 'Local Shopkeeper', color: '#8B4513', emoji: '👨', type: 'npc' },
    { id: 'julek', name: 'Julek', role: 'Park Ranger', color: '#228B22', emoji: '👨', type: 'npc' }
];

// Board Color Areas Configuration
const BOARD_AREAS = {
    cyclamen: { color: '#E91E63', name: 'Cyclamen Area' },
    lightBlue: { color: '#03A9F4', name: 'Light Blue Area' },
    orange: { color: '#FF9800', name: 'Orange Area' },
    brown: { color: '#8D6E63', name: 'Brown Area' },
    yellow: { color: '#FFEB3B', name: 'Yellow Area' },
    red: { color: '#F44336', name: 'Red Area' },
    green: { color: '#4CAF50', name: 'Green Area' },
    purple: { color: '#9C27B0', name: 'Purple Area' }
};

// Special Locations
const SPECIAL_LOCATIONS = {
    acquapark: { name: 'Acquapark Krakow', icon: '⭐', type: 'special' },
    legendia: { name: 'Legendia Katowice', icon: '⭐', type: 'special' },
    rabkoland: { name: 'Rabkoland', icon: '⭐', type: 'special' },
    energylandia: { name: 'Energylandia', icon: '⭐', type: 'special' }
};

// Game Board Configuration - 40 spaces total (9 per side + 4 corners) for 11x11 grid
const BOARD_SPACES = [
    // GO Corner
    { position: 0, name: 'GO', type: 'go', color: '#27ae60' },
    
    // Side 1 (right after start) - 9 spaces
    { position: 1, name: 'Plac Zabaw Kryspinow', type: 'property', area: 'cyclamen', price: 60, rent: 4 },
    { position: 2, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 3, name: 'Lotnik Kryspinow', type: 'property', area: 'cyclamen', price: 60, rent: 4 },
    { position: 4, name: 'Game Card', type: 'game-card', color: '#9c27b0' },
    { position: 5, name: 'Acquapark Krakow', type: 'special', icon: '⭐', color: '#ff6b35' },
    { position: 6, name: 'Antoś & Julek Home', type: 'property', area: 'lightBlue', price: 100, rent: 6 },
    { position: 7, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 8, name: 'Oli & Vicky Home', type: 'property', area: 'lightBlue', price: 100, rent: 6 },
    { position: 9, name: 'Micky & Jerzek Home', type: 'property', area: 'lightBlue', price: 120, rent: 8 },
    
    // Free Passage Corner
    { position: 10, name: 'Free Passage', type: 'free-parking', color: '#3498db' },
    
    // Side 2 (after free passage) - 9 spaces
    { position: 11, name: 'Mròwka', type: 'property', area: 'orange', price: 140, rent: 10 },
    { position: 12, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 13, name: 'Shape Siłownia & Fitness', type: 'property', area: 'orange', price: 140, rent: 10 },
    { position: 14, name: 'Mr Stone', type: 'property', area: 'orange', price: 160, rent: 12 },
    { position: 15, name: 'Legendia Katowice', type: 'special', icon: '⭐', color: '#ff6b35' },
    { position: 16, name: 'Poziomki Vis Plantis', type: 'property', area: 'brown', price: 180, rent: 14 },
    { position: 17, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 18, name: 'Sup Area', type: 'property', area: 'brown', price: 180, rent: 14 },
    { position: 19, name: 'Main Plaża Kryspinow', type: 'property', area: 'brown', price: 200, rent: 16 },
    
    // Jail Corner
    { position: 20, name: 'Jail', type: 'jail', color: '#8e44ad' },
    
    // Side 3 (after jail) - 9 spaces
    { position: 21, name: 'Gawra', type: 'property', area: 'yellow', price: 220, rent: 18 },
    { position: 22, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 23, name: 'MyDreamSky', type: 'property', area: 'yellow', price: 220, rent: 18 },
    { position: 24, name: 'GoJump!', type: 'property', area: 'yellow', price: 240, rent: 20 },
    { position: 25, name: 'Rabkoland', type: 'special', icon: '⭐', color: '#ff6b35' },
    { position: 26, name: 'Mała Akademia', type: 'property', area: 'red', price: 260, rent: 22 },
    { position: 27, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 28, name: 'Swimming Pool Piekary', type: 'property', area: 'red', price: 260, rent: 22 },
    { position: 29, name: 'Sport Center Piekary', type: 'property', area: 'red', price: 280, rent: 24 },
    
    // Free Parking Corner
    { position: 30, name: 'Free Parking', type: 'free-parking', color: '#3498db' },
    
    // Side 4 (after free parking) - 9 spaces
    { position: 31, name: 'Park Dębnicki', type: 'property', area: 'green', price: 300, rent: 26 },
    { position: 32, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 33, name: 'Park Jordana', type: 'property', area: 'green', price: 300, rent: 26 },
    { position: 34, name: 'Park Decjusza', type: 'property', area: 'green', price: 320, rent: 28 },
    { position: 35, name: 'Energylandia', type: 'special', icon: '⭐', color: '#ff6b35' },
    { position: 36, name: 'Hotel Forum', type: 'property', area: 'purple', price: 350, rent: 35 },
    { position: 37, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 38, name: 'Krakow Baloon', type: 'property', area: 'purple', price: 350, rent: 35 },
    { position: 39, name: 'Krakow\'s Eye', type: 'property', area: 'purple', price: 400, rent: 50 }
];

// Chance Cards
const CHANCE_CARDS = [
    { text: 'Advance to GO and collect $200', action: 'go-to-go' },
    { text: 'Bank error in your favor. Collect $200', action: 'collect', amount: 200 },
    { text: 'Doctor\'s fees. Pay $50', action: 'pay', amount: 50 },
    { text: 'From sale of stock you get $50', action: 'collect', amount: 50 },
    { text: 'Go to Jail. Go directly to Jail', action: 'go-to-jail' },
    { text: 'Holiday fund matures. Receive $100', action: 'collect', amount: 100 },
    { text: 'Income tax refund. Collect $20', action: 'collect', amount: 20 },
    { text: 'Life insurance matures. Collect $100', action: 'collect', amount: 100 },
    { text: 'Pay hospital fees of $100', action: 'pay', amount: 100 },
    { text: 'Pay school fees of $50', action: 'pay', amount: 50 },
    { text: 'Receive $25 consultancy fee', action: 'collect', amount: 25 },
    { text: 'You are assessed for street repairs. Pay $40 per house', action: 'street-repair' },
    { text: 'You have won second prize in a beauty contest. Collect $10', action: 'collect', amount: 10 },
    { text: 'You inherit $100', action: 'collect', amount: 100 }
];

// Game State
let gameState = {
    players: [],
    currentPlayerIndex: 0,
    gameStarted: false,
    selectedCharacters: [],
    board: [],
    gameLog: []
};

// DOM Elements
let elements = {};

// Initialize the game
// document.addEventListener('DOMContentLoaded', function() {
//     initializeGame();
//     setupEventListeners();
//     renderCharacterSelection();
// });

function initializeGame() {
    // Initialize board
    gameState.board = BOARD_SPACES.map(space => ({
        ...space,
        owner: null,
        houses: 0,
        players: []
    }));
}

function setupEventListeners() {
    // Main menu buttons
    document.getElementById('start-game-btn').addEventListener('click', () => {
        if (gameState.selectedCharacters.length >= 2) {
            startGame();
        } else {
            showScreen('character-select');
        }
    });
    
    document.getElementById('character-select-btn').addEventListener('click', () => {
        showScreen('character-select');
    });
    
    document.getElementById('rules-btn').addEventListener('click', () => {
        showScreen('rules-screen');
    });

    // Game controls
    document.getElementById('dice-btn').addEventListener('click', rollDice);
    document.getElementById('end-turn-btn').addEventListener('click', endTurn);

    // Game over buttons
    document.getElementById('play-again-btn').addEventListener('click', resetGame);
    document.getElementById('main-menu-btn').addEventListener('click', () => {
        showScreen('main-menu');
        resetGame();
    });
}

function showScreen(screenId) {
    console.log(`🔄 showScreen called with: ${screenId}`);
    
    // Hide all screens
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
        console.log(`❌ Removed active from: ${screen.id}`);
    });
    
    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        console.log(`✅ Added active to: ${screenId}`);
    } else {
        console.error(`❌ Target screen not found: ${screenId}`);
    }
    
    // Update button text based on character selection
    if (screenId === 'main-menu') {
        const startBtn = document.getElementById('start-game-btn');
        if (gameState.selectedCharacters.length >= 2) {
            startBtn.textContent = `Start Game (${gameState.selectedCharacters.length} players)`;
        } else {
            startBtn.textContent = 'Start New Game';
        }
    }
    
    // Debug: show current active screen
    const activeScreen = document.querySelector('.screen.active');
    console.log(`🎯 Current active screen: ${activeScreen ? activeScreen.id : 'none'}`);
}

function renderCharacterSelection() {
    const grid = document.getElementById('characters-grid');
    grid.innerHTML = '';
    
    // Only show playable characters for selection
    const playableCharacters = CHARACTERS.filter(char => char.type === 'playable');
    
    playableCharacters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.onclick = () => toggleCharacterSelection(character);
        
        const isSelected = gameState.selectedCharacters.some(c => c.id === character.id);
        if (isSelected) {
            card.classList.add('selected');
        }
        
        card.innerHTML = `
            <div class="character-avatar">
                <img src="${character.image}" alt="${character.name}" class="character-image" 
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="character-emoji-fallback" style="display: none; background-color: ${character.color};">
                    ${character.emoji}
                </div>
            </div>
            <div class="character-name">${character.name}</div>
            <div class="character-role">${character.role}</div>
        `;
        
        grid.appendChild(card);
    });
}

function toggleCharacterSelection(character) {
    const index = gameState.selectedCharacters.findIndex(c => c.id === character.id);
    
    if (index === -1) {
        if (gameState.selectedCharacters.length < 6) { // Max 6 players
            gameState.selectedCharacters.push(character);
        } else {
            alert('Maximum 6 players allowed!');
            return;
        }
    } else {
        gameState.selectedCharacters.splice(index, 1);
    }
    
    renderCharacterSelection();
    
    // Update main menu start button
    const startBtn = document.getElementById('start-game-btn');
    if (startBtn) {
        if (gameState.selectedCharacters.length >= 2) {
            startBtn.textContent = `Start Game (${gameState.selectedCharacters.length} players)`;
        } else {
            startBtn.textContent = 'Start New Game';
        }
    }
    
    // Update character selection screen start button
    const startGameFromCharacterBtn = document.getElementById('start-game-from-character-btn');
    if (startGameFromCharacterBtn) {
        if (gameState.selectedCharacters.length >= 2) {
            startGameFromCharacterBtn.textContent = `Start Game (${gameState.selectedCharacters.length} players)`;
            startGameFromCharacterBtn.disabled = false;
        } else {
            startGameFromCharacterBtn.textContent = 'Start Game (Select at least 2 players)';
            startGameFromCharacterBtn.disabled = true;
        }
    }
}

function startGame() {
    if (gameState.selectedCharacters.length < 2) {
        alert('Please select at least 2 players!');
        return;
    }
    
    // Initialize players
    gameState.players = gameState.selectedCharacters.map((character, index) => ({
        ...character,
        money: 1500,
        position: 0,
        properties: [],
        inJail: false,
        jailTurns: 0,
        token: String.fromCharCode(65 + index) // A, B, C, etc.
    }));
    
    gameState.currentPlayerIndex = 0;
    gameState.gameStarted = true;
    gameState.gameLog = [];
    
    // Reset board
    if (!gameState.board || gameState.board.length === 0) {
        console.error('❌ Board not initialized!');
        initializeGame();
    }
    
    gameState.board.forEach(space => {
        space.owner = null;
        space.houses = 0;
        space.players = [];
    });
    
    // Place players on GO
    gameState.players.forEach(player => {
        gameState.board[0].players.push(player.id);
    });
    
    renderGame();
    showScreen('game-screen');
    addGameLog('Game started!', 'system');
    updateCurrentPlayerDisplay();
}

function renderGame() {
    console.log('🎨 Rendering game...');
    try {
        renderBoard();
        updateCurrentPlayerDisplay();
        renderGameLog();
        console.log('✅ Game rendered successfully');
    } catch (error) {
        console.error('❌ Error rendering game:', error);
    }
}

function renderBoard() {
    console.log('🎯 Rendering board...');
    const boardGrid = document.getElementById('board-grid');
    if (!boardGrid) {
        console.error('❌ Board grid element not found!');
        return;
    }
    
    boardGrid.innerHTML = '';
    
    // Create 11x11 grid layout
    for (let row = 0; row < 11; row++) {
        for (let col = 0; col < 11; col++) {
            const spaceIndex = getSpaceIndex(row, col);
            if (spaceIndex !== -1) {
                const space = gameState.board[spaceIndex];
                if (space) {
                    const spaceElement = createBoardSpace(space, spaceIndex);
                    boardGrid.appendChild(spaceElement);
                } else {
                    console.error(`❌ Space at index ${spaceIndex} not found!`);
                }
            } else {
                // Empty space
                const emptySpace = document.createElement('div');
                emptySpace.className = 'board-space empty';
                boardGrid.appendChild(emptySpace);
            }
        }
    }
    console.log('✅ Board rendered');
}

function getSpaceIndex(row, col) {
    // Convert grid position to board space index
    // This creates a path around the grid for 40 spaces (11x11 grid)
    if (row === 0) return col; // Top row (0-10) -> positions 0-10
    if (col === 10) return 11 + row; // Right column (1-10) -> positions 11-20
    if (row === 10) return 31 - col; // Bottom row (9-0) -> positions 22-31
    if (col === 0) return 40 - row; // Left column (9-1) -> positions 32-39
    return -1; // Empty space
}

function createBoardSpace(space, index) {
    const spaceElement = document.createElement('div');
    spaceElement.className = `board-space ${space.type}`;
    
    // Set color based on area or direct color
    if (space.area && BOARD_AREAS[space.area]) {
        spaceElement.style.borderColor = BOARD_AREAS[space.area].color;
        spaceElement.style.backgroundColor = BOARD_AREAS[space.area].color + '20'; // 20% opacity
        spaceElement.classList.add(`area-${space.area}`);
    } else if (space.color) {
        spaceElement.style.borderColor = space.color;
        spaceElement.style.backgroundColor = space.color + '20'; // 20% opacity
    }
    
    let content = `<div class="space-name">${space.name}</div>`;
    
    // Add special icon for special locations
    if (space.type === 'special' && space.icon) {
        content += `<div class="special-icon">${space.icon}</div>`;
    }
    
    if (space.type === 'property') {
        content += `<div class="space-price">$${space.price}</div>`;
        if (space.owner) {
            const owner = gameState.players.find(p => p.id === space.owner);
            content += `<div style="font-size: 0.5rem; color: ${owner.color};">${owner.name}</div>`;
        }
        if (space.houses > 0) {
            content += `<div style="font-size: 0.5rem; color: #27ae60;">🏠 ${space.houses}</div>`;
        }
    }
    
    // Area indicator removed to reduce clutter
    
    spaceElement.innerHTML = content;
    
    // Add player tokens - only show current player's character image
    space.players.forEach(playerId => {
        const player = gameState.players.find(p => p.id === playerId);
        if (player) {
            const token = document.createElement('div');
            token.className = 'player-token';
            token.setAttribute('data-player', player.id);
            
            // Add current player class for highlighting
            if (playerId === gameState.players[gameState.currentPlayerIndex].id) {
                token.classList.add('current-player');
            }
            
            // Show character image for ALL players
            const character = CHARACTERS.find(c => c.id === player.id);
            if (character && character.image) {
                token.innerHTML = `<img src="${character.image}" alt="${player.name}" class="player-token-image">`;
            } else {
                // Fallback to colored token if no character image
                token.style.backgroundColor = player.color;
                token.textContent = player.token;
            }
            
            spaceElement.appendChild(token);
        }
    });
    
    return spaceElement;
}

function updateCurrentPlayerDisplay() {
    if (!gameState.gameStarted) return;
    
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    const avatar = document.getElementById('current-player-avatar');
    const name = document.getElementById('current-player-name');
    const money = document.getElementById('current-player-money');
    
    console.log('🔄 Updating current player display...');
    console.log('Current player:', currentPlayer);
    
    // Find the character data for the current player
    const character = CHARACTERS.find(c => c.id === currentPlayer.id);
    console.log('Found character:', character);
    
    if (avatar) {
        if (character && character.image) {
            // Use character image with proper sizing
            console.log('✅ Using character image:', character.image);
            avatar.innerHTML = `<img src="${character.image}" alt="${currentPlayer.name}" class="current-player-image">`;
            avatar.style.backgroundColor = 'transparent'; // Remove background color
        } else {
            // Fallback to emoji and color
            console.log('❌ Using fallback emoji and color');
            avatar.style.backgroundColor = currentPlayer.color;
            avatar.innerHTML = currentPlayer.emoji; // Clear any previous content
        }
    } else {
        console.error('❌ Current player avatar element not found');
    }
    
    if (name) {
        name.textContent = currentPlayer.name;
    }
    
    if (money) {
        money.textContent = `$${currentPlayer.money}`;
    }
    
    // Update properties summary
    updatePropertiesSummary();
}

function updatePropertiesSummary() {
    const propertiesList = document.getElementById('properties-list');
    if (!propertiesList) {
        console.error('❌ Properties list element not found');
        return;
    }
    
    // Group properties by owner
    const propertiesByOwner = {};
    gameState.board.forEach(space => {
        if ((space.type === 'property' || space.type === 'special') && space.owner) {
            if (!propertiesByOwner[space.owner]) {
                propertiesByOwner[space.owner] = [];
            }
            propertiesByOwner[space.owner].push(space);
        }
    });
    
    // Create HTML for each player's properties
    let html = '';
    
    if (Object.keys(propertiesByOwner).length === 0) {
        html = '<div class="no-properties">No properties owned yet</div>';
    } else {
        gameState.players.forEach(player => {
            const playerProperties = propertiesByOwner[player.id] || [];
            const character = CHARACTERS.find(c => c.id === player.id);
            const playerColor = character ? character.color : player.color;
            
            html += `<div class="player-properties" style="border-left-color: ${playerColor}">`;
            html += `<h4>${player.name}</h4>`;
            
            if (playerProperties.length === 0) {
                html += '<div class="property-item no-properties">No properties</div>';
            } else {
                playerProperties.forEach(property => {
                    html += `<div class="property-item">`;
                    html += `<span class="property-name">${property.name}</span> - `;
                    html += `<span class="property-price">$${property.price}</span>`;
                    if (property.houses > 0) {
                        html += ` (${property.houses} house${property.houses > 1 ? 's' : ''})`;
                    }
                    html += `</div>`;
                });
            }
            
            html += `</div>`;
        });
    }
    
    propertiesList.innerHTML = html;
}

function rollDice() {
    console.log('🎲 rollDice function called');
    console.log('Game state:', gameState);
    
    if (!gameState.gameStarted) {
        console.log('❌ Game not started');
        return;
    }
    
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    console.log('Current player:', currentPlayer);
    
    if (currentPlayer.inJail) {
        alert(`${currentPlayer.name} is in jail!`);
        return;
    }
    
    const diceBtn = document.getElementById('dice-btn');
    const endTurnBtn = document.getElementById('end-turn-btn');
    
    console.log('Dice button:', diceBtn);
    console.log('End turn button:', endTurnBtn);
    
    diceBtn.disabled = true;
    endTurnBtn.disabled = false;
    
    // Animate dice
    const diceDisplay = document.getElementById('dice-display');
    console.log('Dice display:', diceDisplay);
    
    if (diceDisplay) {
        diceDisplay.classList.add('rolling');
        
        // Play dice sound using audio manager
        if (window.audioManager) {
            window.audioManager.playDiceRoll();
        }
        
        setTimeout(() => {
            const roll = Math.floor(Math.random() * 6) + 1;
            console.log('🎲 Rolled:', roll);
            diceDisplay.textContent = `🎲 ${roll}`;
            diceDisplay.classList.remove('rolling');
            
            addGameLog(`${currentPlayer.name} rolled a ${roll}`, 'dice');
            
            // Start movement animation after a brief pause
            setTimeout(() => {
                movePlayer(currentPlayer, roll);
            }, 300);
            
            // Check if player can buy property (after movement completes)
            setTimeout(() => {
                const currentSpace = gameState.board[currentPlayer.position];
                if ((currentSpace.type === 'property' || currentSpace.type === 'special') && !currentSpace.owner) {
                    // Show property image animation first
                    showPropertyImage(currentSpace, () => {
                        // After animation, show custom buy confirmation
                        showBuyConfirmation(currentPlayer, currentSpace, () => {
                            // Hide the property image after choice is made
                            hidePropertyImage();
                        });
                    });
                }
            }, (roll * 200) + 1000); // Wait for movement animation to complete
        }, 500);
    } else {
        console.error('❌ Dice display element not found');
    }
}

function movePlayer(player, spaces) {
    // Remove player from current position
    const currentSpace = gameState.board[player.position];
    const playerIndex = currentSpace.players.indexOf(player.id);
    if (playerIndex !== -1) {
        currentSpace.players.splice(playerIndex, 1);
    }
    
    // Calculate new position
    let newPosition = player.position + spaces;
    
    // Check if passing GO
    if (newPosition >= gameState.board.length) {
        newPosition = newPosition % gameState.board.length;
        player.money += 200;
        addGameLog(`${player.name} passed GO and collected $200!`, 'money');
        if (audioManager) {
            audioManager.playMoneySound();
        }
    }
    
    // Animate movement step by step
    animatePlayerMovement(player, player.position, newPosition, spaces);
}

function animatePlayerMovement(player, startPosition, endPosition, totalSpaces) {
    let currentStep = 0;
    const stepDelay = 200; // 200ms between each step
    
    function moveStep() {
        if (currentStep < totalSpaces) {
            // Move one space at a time
            const nextPosition = (startPosition + currentStep + 1) % gameState.board.length;
            
            // Remove from current position
            const currentSpace = gameState.board[player.position];
            const playerIndex = currentSpace.players.indexOf(player.id);
            if (playerIndex !== -1) {
                currentSpace.players.splice(playerIndex, 1);
            }
            
            // Add to next position
            player.position = nextPosition;
            const nextSpace = gameState.board[nextPosition];
            nextSpace.players.push(player.id);
            
            // Re-render board with animation
            renderBoard();
            
            // Add moving class to current player's token
            setTimeout(() => {
                const currentPlayerToken = document.querySelector(`.player-token[data-player="${player.id}"]`);
                if (currentPlayerToken) {
                    currentPlayerToken.classList.add('moving');
                    setTimeout(() => {
                        currentPlayerToken.classList.remove('moving');
                    }, 500);
                }
            }, 50);
            
            currentStep++;
            setTimeout(moveStep, stepDelay);
        } else {
            // Movement complete
            handleSpecialSpace(player, gameState.board[player.position]);
            updateCurrentPlayerDisplay();
        }
    }
    
    moveStep();
}

function handleSpecialSpace(player, space) {
    switch (space.type) {
        case 'go':
            addGameLog(`${player.name} landed on GO!`, 'info');
            break;
        case 'chance':
            drawChanceCard(player);
            if (audioManager) {
                audioManager.playChanceSound();
            }
            break;
        case 'tax':
            const taxAmount = space.amount;
            player.money -= taxAmount;
            addGameLog(`${player.name} paid $${taxAmount} in tax`, 'tax');
            break;
        case 'jail':
            addGameLog(`${player.name} is just visiting jail`, 'info');
            break;
        case 'go-to-jail':
            player.position = 9; // Jail position
            player.inJail = true;
            player.jailTurns = 0;
            addGameLog(`${player.name} went to jail!`, 'jail');
            if (audioManager) {
                audioManager.playJailSound();
            }
            break;
        case 'free-parking':
            addGameLog(`${player.name} landed on Free Parking`, 'info');
            break;
        case 'property':
            if (space.owner && space.owner !== player.id) {
                payRent(player, space);
            }
            break;
    }
}

function drawChanceCard(player) {
    const card = CHANCE_CARDS[Math.floor(Math.random() * CHANCE_CARDS.length)];
    addGameLog(`${player.name} drew: ${card.text}`, 'chance');
    
    switch (card.action) {
        case 'go-to-go':
            player.position = 0;
            player.money += 200;
            addGameLog(`${player.name} advanced to GO and collected $200!`, 'money');
            if (audioManager) {
                audioManager.playMoneySound();
            }
            break;
        case 'collect':
            player.money += card.amount;
            addGameLog(`${player.name} collected $${card.amount}`, 'money');
            if (audioManager) {
                audioManager.playMoneySound();
            }
            break;
        case 'pay':
            player.money -= card.amount;
            addGameLog(`${player.name} paid $${card.amount}`, 'tax');
            break;
        case 'go-to-jail':
            player.position = 9;
            player.inJail = true;
            player.jailTurns = 0;
            addGameLog(`${player.name} went to jail!`, 'jail');
            if (audioManager) {
                audioManager.playJailSound();
            }
            break;
        case 'street-repair':
            const repairCost = player.properties.length * 40;
            player.money -= repairCost;
            addGameLog(`${player.name} paid $${repairCost} for street repairs`, 'tax');
            break;
    }
    
    // Update display
    updateCurrentPlayerDisplay();
}

function payRent(player, space) {
    const owner = gameState.players.find(p => p.id === space.owner);
    if (!owner) return;
    
    let rent = space.rent;
    
    // Increase rent for multiple properties of same color
    const colorProperties = gameState.board.filter(s => 
        s.type === 'property' && s.owner === owner.id && s.color === space.color
    );
    
    if (colorProperties.length >= 2) {
        rent *= 2; // Double rent for monopoly
    }
    
    // Add house bonus
    rent += space.houses * 10;
    
    player.money -= rent;
    owner.money += rent;
    
    addGameLog(`${player.name} paid $${rent} rent to ${owner.name}`, 'rent');
    if (audioManager) {
        audioManager.playRentSound();
    }
    
    // Check for bankruptcy
    if (player.money <= 0) {
        handleBankruptcy(player);
    }
    
    updateCurrentPlayerDisplay();
}

function buyProperty(player, space) {
    if (player.money < space.price) {
        alert(`${player.name} doesn't have enough money!`);
        return;
    }
    
    player.money -= space.price;
    space.owner = player.id;
    player.properties.push(space.position);
    
    addGameLog(`${player.name} bought ${space.name} for $${space.price}`, 'purchase');
    if (audioManager) {
        audioManager.playPurchaseSound();
    }
    updateCurrentPlayerDisplay();
    renderBoard();
}

function handleBankruptcy(player) {
    // Return properties to bank
    player.properties.forEach(propIndex => {
        const prop = gameState.board[propIndex];
        prop.owner = null;
        prop.houses = 0;
    });
    
    // Remove player from game
    const playerIndex = gameState.players.indexOf(player);
    gameState.players.splice(playerIndex, 1);
    
    addGameLog(`${player.name} went bankrupt and is out of the game!`, 'bankruptcy');
    if (audioManager) {
        audioManager.playBankruptcySound();
    }
    
    // Check if game is over
    if (gameState.players.length === 1) {
        endGame();
        return;
    }
    
    // Adjust current player index
    if (playerIndex <= gameState.currentPlayerIndex) {
        gameState.currentPlayerIndex = Math.max(0, gameState.currentPlayerIndex - 1);
    }
    
    updateCurrentPlayerDisplay();
}

function endTurn() {
    if (!gameState.gameStarted) return;
    
    const diceBtn = document.getElementById('dice-btn');
    const endTurnBtn = document.getElementById('end-turn-btn');
    
    diceBtn.disabled = false;
    endTurnBtn.disabled = true;
    
    // Move to next player
    gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    
    // Skip players in jail
    while (gameState.players[gameState.currentPlayerIndex].inJail) {
        const player = gameState.players[gameState.currentPlayerIndex];
        player.jailTurns++;
        
        if (player.jailTurns >= 3) {
            player.inJail = false;
            player.jailTurns = 0;
            addGameLog(`${player.name} is out of jail!`, 'info');
        } else {
            addGameLog(`${player.name} is in jail (turn ${player.jailTurns}/3)`, 'jail');
        }
        
        gameState.currentPlayerIndex = (gameState.currentPlayerIndex + 1) % gameState.players.length;
    }
    
    updateCurrentPlayerDisplay();
    renderBoard(); // Re-render board to update player tokens and current player highlighting
    addGameLog(`It's ${gameState.players[gameState.currentPlayerIndex].name}'s turn`, 'turn');
}

function endGame() {
    const winner = gameState.players[0];
    addGameLog(`🎉 ${winner.name} wins the game!`, 'winner');
    if (audioManager) {
        audioManager.playVictorySound();
    }
    
    setTimeout(() => {
        showGameOver(winner);
    }, 1000);
}

function showGameOver(winner) {
    const winnerDisplay = document.getElementById('winner-display');
    const finalScores = document.getElementById('final-scores');
    
    winnerDisplay.innerHTML = `🏆 ${winner.name} is the winner! 🏆`;
    
    // Show final scores
    let scoresHTML = '<h3>Final Scores:</h3>';
    gameState.players.forEach(player => {
        scoresHTML += `<p><strong>${player.name}:</strong> $${player.money}</p>`;
    });
    
    finalScores.innerHTML = scoresHTML;
    
    showScreen('game-over');
}

function resetGame() {
    gameState = {
        players: [],
        currentPlayerIndex: 0,
        gameStarted: false,
        selectedCharacters: [],
        board: [],
        gameLog: []
    };
    
    initializeGame();
    renderCharacterSelection();
    showScreen('main-menu');
}

function addGameLog(message, type = 'info') {
    const timestamp = new Date().toLocaleTimeString();
    gameState.gameLog.push({ message, type, timestamp });
    
    if (gameState.gameLog.length > 50) {
        gameState.gameLog.shift();
    }
    
    renderGameLog();
}

function renderGameLog() {
    const logEntries = document.getElementById('log-entries');
    if (!logEntries) return;
    
    logEntries.innerHTML = '';
    
    gameState.gameLog.slice(-10).forEach(entry => {
        const logEntry = document.createElement('div');
        logEntry.className = `log-entry log-${entry.type}`;
        logEntry.innerHTML = `<strong>${entry.timestamp}</strong>: ${entry.message}`;
        logEntries.appendChild(logEntry);
    });
    
    logEntries.scrollTop = logEntries.scrollHeight;
}

// Audio controls are handled by the AudioManager class

// Audio manager handles all audio functionality

// Utility functions
function formatMoney(amount) {
    return `$${amount.toLocaleString()}`;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Property Image Animation Functions
function showPropertyImage(property, callback) {
    const overlay = document.getElementById('property-image-overlay');
    const image = document.getElementById('property-image');
    const title = document.getElementById('property-image-title');
    const price = document.getElementById('property-image-price');
    
    if (!overlay || !image || !title || !price) {
        console.error('❌ Property image overlay elements not found');
        if (callback) callback();
        return;
    }
    
    // Set property information
    title.textContent = property.name;
    price.textContent = `$${property.price}`;
    
    // Use placeholder image for now
    image.src = `https://via.placeholder.com/400x300/4CAF50/FFFFFF?text=${encodeURIComponent(property.name)}`;
    image.alt = property.name;
    
    // Show overlay with animation
    overlay.classList.add('show');
    
    // Call callback after 2 seconds (but don't hide image yet)
    setTimeout(() => {
        if (callback) callback();
    }, 2000);
}

function hidePropertyImage(callback) {
    const overlay = document.getElementById('property-image-overlay');
    
    if (!overlay) {
        console.error('❌ Property image overlay not found');
        if (callback) callback();
        return;
    }
    
    // Hide overlay with animation
    overlay.classList.remove('show');
    
    // Call callback after animation completes
    setTimeout(() => {
        if (callback) callback();
    }, 300);
}

// Buy Confirmation Functions
function showBuyConfirmation(player, property, callback) {
    const overlay = document.getElementById('buy-confirmation-overlay');
    const title = document.getElementById('buy-confirmation-title');
    const message = document.getElementById('buy-confirmation-message');
    const confirmBtn = document.getElementById('buy-confirm-btn');
    const cancelBtn = document.getElementById('buy-cancel-btn');
    
    if (!overlay || !title || !message || !confirmBtn || !cancelBtn) {
        console.error('❌ Buy confirmation elements not found');
        if (callback) callback();
        return;
    }
    
    // Set confirmation message
    title.textContent = 'Buy Property?';
    message.textContent = `${player.name}, would you like to buy ${property.name} for $${property.price}?`;
    
    // Show overlay
    overlay.classList.add('show');
    
    // Set up button handlers
    const handleConfirm = () => {
        buyProperty(player, property);
        hideBuyConfirmation();
        if (callback) callback();
    };
    
    const handleCancel = () => {
        hideBuyConfirmation();
        if (callback) callback();
    };
    
    // Remove any existing listeners
    confirmBtn.replaceWith(confirmBtn.cloneNode(true));
    cancelBtn.replaceWith(cancelBtn.cloneNode(true));
    
    // Add new listeners
    document.getElementById('buy-confirm-btn').addEventListener('click', handleConfirm);
    document.getElementById('buy-cancel-btn').addEventListener('click', handleCancel);
}

function hideBuyConfirmation() {
    const overlay = document.getElementById('buy-confirmation-overlay');
    if (overlay) {
        overlay.classList.remove('show');
    }
}

// Add click handler to close overlay when clicked
document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.getElementById('property-image-overlay');
    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                hidePropertyImage();
            }
        });
    }
});
