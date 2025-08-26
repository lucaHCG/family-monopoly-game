// Family Monopoly Go! Game Logic

// Character Data
const CHARACTERS = [
    { id: 'luca', name: 'Luca', role: 'Father', color: '#000080', emoji: '👨‍👦' },
    { id: 'sylwia', name: 'Sylwia', role: 'Mother', color: '#FFA500', emoji: '👩‍👧' },
    { id: 'oli', name: 'Oli', role: 'Son', color: '#FF0000', emoji: '👦' },
    { id: 'vicky', name: 'Vicky', role: 'Daughter', color: '#FFC0CB', emoji: '👧' },
    { id: 'ciocia-kasia', name: 'Ciocia Kasia', role: 'Aunt', color: '#FFFF00', emoji: '👩‍🦰' },
    { id: 'wujek-bartek', name: 'Wujek Bartek', role: 'Uncle', color: '#008000', emoji: '👨‍🦱' },
    { id: 'zio-diego', name: 'Zio Diego', role: 'Uncle', color: '#1560BD', emoji: '👨‍🦳' },
    { id: 'nonna-patrizia', name: 'Nonna Patrizia', role: 'Grandma', color: '#FF00FF', emoji: '👵' },
    { id: 'nonno-mauro', name: 'Nonno Mauro', role: 'Grandpa', color: '#87CEEB', emoji: '👴' },
    { id: 'dziadek-tosiek', name: 'Dziadek Tosiek', role: 'Grandpa', color: '#800020', emoji: '👴' },
    { id: 'babcia-urszula', name: 'Babcia Urszula', role: 'Grandma', color: '#50C878', emoji: '👵' },
    { id: 'leon', name: 'Leon', role: 'Oli\'s Best Friend', color: '#808080', emoji: '👦' },
    { id: 'nela', name: 'Nela', role: 'Leon\'s Sister', color: '#DC143C', emoji: '👧' },
    { id: 'pani-ania', name: 'Pani Ania', role: 'Oli\'s Teacher', color: '#000000', emoji: '👩‍🏫' },
    { id: 'pani-isza', name: 'Pani Isza', role: 'Vicky\'s Teacher', color: '#F4A460', emoji: '👩‍🏫' }
];

// Game Board Configuration
const BOARD_SPACES = [
    { position: 0, name: 'GO', type: 'go', color: '#27ae60' },
    { position: 1, name: 'Luca\'s House', type: 'property', color: '#000080', price: 60, rent: 2 },
    { position: 2, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 3, name: 'Sylwia\'s Garden', type: 'property', color: '#FFA500', price: 60, rent: 4 },
    { position: 4, name: 'Tax', type: 'tax', color: '#e74c3c', amount: 200 },
    { position: 5, name: 'Oli\'s Room', type: 'property', color: '#FF0000', price: 200, rent: 16 },
    { position: 6, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 7, name: 'Vicky\'s Room', type: 'property', color: '#FFC0CB', price: 100, rent: 6 },
    { position: 8, name: 'Ciocia Kasia\'s Kitchen', type: 'property', color: '#FFFF00', price: 100, rent: 6 },
    { position: 9, name: 'Jail', type: 'jail', color: '#8e44ad' },
    { position: 10, name: 'Wujek Bartek\'s Workshop', type: 'property', color: '#008000', price: 120, rent: 8 },
    { position: 11, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 12, name: 'Zio Diego\'s Office', type: 'property', color: '#1560BD', price: 140, rent: 10 },
    { position: 13, name: 'Nonna Patrizia\'s Garden', type: 'property', color: '#FF00FF', price: 140, rent: 10 },
    { position: 14, name: 'Nonno Mauro\'s Garage', type: 'property', color: '#87CEEB', price: 160, rent: 12 },
    { position: 15, name: 'Free Parking', type: 'free-parking', color: '#3498db' },
    { position: 16, name: 'Dziadek Tosiek\'s Library', type: 'property', color: '#800020', price: 180, rent: 14 },
    { position: 17, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 18, name: 'Babcia Urszula\'s Kitchen', type: 'property', color: '#50C878', price: 180, rent: 14 },
    { position: 19, name: 'Leon\'s Playground', type: 'property', color: '#808080', price: 200, rent: 16 },
    { position: 20, name: 'Nela\'s Art Room', type: 'property', color: '#DC143C', price: 220, rent: 18 },
    { position: 21, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 22, name: 'Pani Ania\'s Classroom', type: 'property', color: '#000000', price: 220, rent: 18 },
    { position: 23, name: 'Pani Isza\'s Classroom', type: 'property', color: '#F4A460', price: 240, rent: 20 },
    { position: 24, name: 'Go to Jail', type: 'go-to-jail', color: '#8e44ad' },
    { position: 25, name: 'Luca\'s Office', type: 'property', color: '#000080', price: 260, rent: 22 },
    { position: 26, name: 'Sylwia\'s Studio', type: 'property', color: '#FFA500', price: 260, rent: 22 },
    { position: 27, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 28, name: 'Oli\'s Playroom', type: 'property', color: '#FF0000', price: 280, rent: 24 },
    { position: 29, name: 'Vicky\'s Study', type: 'property', color: '#FFC0CB', price: 300, rent: 26 },
    { position: 30, name: 'Ciocia Kasia\'s Living Room', type: 'property', color: '#FFFF00', price: 300, rent: 26 },
    { position: 31, name: 'Wujek Bartek\'s Shed', type: 'property', color: '#008000', price: 320, rent: 28 },
    { position: 32, name: 'Free Parking', type: 'free-parking', color: '#3498db' },
    { position: 33, name: 'Zio Diego\'s Study', type: 'property', color: '#1560BD', price: 350, rent: 35 },
    { position: 34, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 35, name: 'Nonna Patrizia\'s Living Room', type: 'property', color: '#FF00FF', price: 350, rent: 35 },
    { position: 36, name: 'Tax', type: 'tax', color: '#e74c3c', amount: 100 },
    { position: 37, name: 'Nonno Mauro\'s Study', type: 'property', color: '#87CEEB', price: 400, rent: 50 },
    { position: 38, name: 'Dziadek Tosiek\'s Workshop', type: 'property', color: '#800020', price: 450, rent: 55 },
    { position: 39, name: 'Babcia Urszula\'s Living Room', type: 'property', color: '#50C878', price: 500, rent: 60 },
    { position: 40, name: 'Leon\'s Bedroom', type: 'property', color: '#808080', price: 500, rent: 60 },
    { position: 41, name: 'Nela\'s Bedroom', type: 'property', color: '#DC143C', price: 550, rent: 65 },
    { position: 42, name: 'Chance', type: 'chance', color: '#f39c12' },
    { position: 43, name: 'Pani Ania\'s Office', type: 'property', color: '#000000', price: 600, rent: 70 },
    { position: 44, name: 'Pani Isza\'s Office', type: 'property', color: '#F4A460', price: 650, rent: 75 }
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
    
    CHARACTERS.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.onclick = () => toggleCharacterSelection(character);
        
        const isSelected = gameState.selectedCharacters.some(c => c.id === character.id);
        if (isSelected) {
            card.classList.add('selected');
        }
        
        card.innerHTML = `
            <div class="character-avatar" style="background-color: ${character.color}">
                ${character.emoji}
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
    renderBoard();
    updateCurrentPlayerDisplay();
    renderGameLog();
}

function renderBoard() {
    const boardGrid = document.getElementById('board-grid');
    boardGrid.innerHTML = '';
    
    // Create 11x11 grid layout
    for (let row = 0; row < 11; row++) {
        for (let col = 0; col < 11; col++) {
            const spaceIndex = getSpaceIndex(row, col);
            if (spaceIndex !== -1) {
                const space = gameState.board[spaceIndex];
                const spaceElement = createBoardSpace(space, spaceIndex);
                boardGrid.appendChild(spaceElement);
            } else {
                // Empty space
                const emptySpace = document.createElement('div');
                emptySpace.className = 'board-space empty';
                boardGrid.appendChild(emptySpace);
            }
        }
    }
}

function getSpaceIndex(row, col) {
    // Convert grid position to board space index
    // This creates a path around the grid
    if (row === 0) return col; // Top row
    if (col === 10) return 10 + row; // Right column
    if (row === 10) return 32 - col; // Bottom row
    if (col === 0) return 44 - row; // Left column
    return -1; // Empty space
}

function createBoardSpace(space, index) {
    const spaceElement = document.createElement('div');
    spaceElement.className = `board-space ${space.type}`;
    spaceElement.style.borderColor = space.color;
    
    let content = `<div class="space-name">${space.name}</div>`;
    
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
    
    spaceElement.innerHTML = content;
    
    // Add player tokens
    space.players.forEach(playerId => {
        const player = gameState.players.find(p => p.id === playerId);
        if (player) {
            const token = document.createElement('div');
            token.className = 'player-token';
            token.style.backgroundColor = player.color;
            token.textContent = player.token;
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
    
    avatar.style.backgroundColor = currentPlayer.color;
    avatar.textContent = currentPlayer.emoji;
    name.textContent = currentPlayer.name;
    money.textContent = `$${currentPlayer.money}`;
}

function rollDice() {
    if (!gameState.gameStarted) return;
    
    const currentPlayer = gameState.players[gameState.currentPlayerIndex];
    if (currentPlayer.inJail) {
        alert(`${currentPlayer.name} is in jail!`);
        return;
    }
    
    const diceBtn = document.getElementById('dice-btn');
    const endTurnBtn = document.getElementById('end-turn-btn');
    
    diceBtn.disabled = true;
    endTurnBtn.disabled = false;
    
    // Animate dice
    const diceDisplay = document.getElementById('dice-display');
    diceDisplay.classList.add('rolling');
    
    // Play dice sound using audio manager
    if (audioManager) {
        audioManager.playDiceRoll();
    }
    
    setTimeout(() => {
        const roll = Math.floor(Math.random() * 6) + 1;
        diceDisplay.textContent = `🎲 ${roll}`;
        diceDisplay.classList.remove('rolling');
        
        movePlayer(currentPlayer, roll);
        addGameLog(`${currentPlayer.name} rolled a ${roll}`, 'dice');
        
        // Check if player can buy property
        const currentSpace = gameState.board[currentPlayer.position];
        if (currentSpace.type === 'property' && !currentSpace.owner) {
            setTimeout(() => {
                if (confirm(`${currentPlayer.name}, would you like to buy ${currentSpace.name} for $${currentSpace.price}?`)) {
                    buyProperty(currentPlayer, currentSpace);
                }
            }, 500);
        }
    }, 500);
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
    
    player.position = newPosition;
    
    // Add player to new position
    const newSpace = gameState.board[newPosition];
    newSpace.players.push(player.id);
    
    // Handle special spaces
    handleSpecialSpace(player, newSpace);
    
    // Re-render board
    renderBoard();
    updateCurrentPlayerDisplay();
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
