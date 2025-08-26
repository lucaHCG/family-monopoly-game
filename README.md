# 🏠 Family Monopoly Go! Game

A custom mini game similar to Monopoly Go! featuring your family members and friends. This is a web-based game that can be played on both iPhone and laptop devices.

## 🎮 Game Features

- **Character Selection**: Choose from 15 family members and friends
- **Custom Board**: Properties themed around family members' spaces
- **Multiplayer**: Support for 2-6 players
- **Responsive Design**: Works on both mobile and desktop
- **Background Music**: Soft background music (can be toggled)
- **Sound Effects**: Dice rolling and money sounds
- **Modern UI**: Beautiful, family-friendly interface

## 👥 Characters Included

| Name | Role | Favorite Color |
|------|------|----------------|
| Luca | Father | Navy Blue |
| Sylwia | Mother | Orange |
| Oli | Son | Red |
| Vicky | Daughter | Pink |
| Ciocia Kasia | Aunt | Yellow |
| Wujek Bartek | Uncle | Green |
| Zio Diego | Uncle | Denim |
| Nonna Patrizia | Grandma | Magenta |
| Nonno Mauro | Grandpa | Light Blue |
| Dziadek Tosiek | Grandpa | Bordeaux |
| Babcia Urszula | Grandma | Emerald |
| Leon | Oli's Best Friend | Grey |
| Nela | Leon's Sister | Crimson |
| Pani Ania | Oli's Teacher | Black |
| Pani Isza | Vicky's Teacher | Sand |

## 🚀 How to Play

### Getting Started
1. Open `index.html` in a web browser
2. Click "Character Select" to choose your players (2-6 players)
3. Click "Start New Game" to begin
4. Each player starts with $1500

### Gameplay
1. **Roll the Dice**: Click the dice button to move around the board
2. **Buy Properties**: When you land on an unowned property, you can buy it
3. **Collect Rent**: Other players pay rent when they land on your properties
4. **Special Spaces**: 
   - **GO**: Collect $200 when you pass or land on it
   - **Chance**: Draw a chance card for various effects
   - **Tax**: Pay money to the bank
   - **Jail**: Visit or go to jail
   - **Free Parking**: Safe space, no action needed

### Winning
- Be the last player with money!
- Players go bankrupt when they can't pay rent or fees
- Properties return to the bank when a player goes bankrupt

## 🎨 Customization Options

### Adding Photos
- Place family photos in the `assets/` folder
- Update the character data in `game.js` to reference your photos
- Photos will be automatically cartoonized to Playmobil style

### Adding Audio Names
- Record pronunciation of names with your voice
- Place audio files in the `assets/` folder
- Update the character data to include audio file references

### Modifying Properties
- Edit the `BOARD_SPACES` array in `game.js`
- Change property names, prices, and rent values
- Add new special spaces or modify existing ones

## 📱 Device Compatibility

- **iPhone**: Touch-friendly interface, responsive design
- **Laptop**: Full keyboard and mouse support
- **Cross-platform**: Works on any modern web browser

## 🎵 Audio Settings

- **Background Music**: Soft, family-friendly music (20% volume)
- **Sound Effects**: Dice rolling, money collection, etc.
- **Toggle Control**: Music can be turned on/off from the main menu

## 🛠️ Technical Details

### Files Structure
```
family-monopoly-game/
├── index.html          # Main game interface
├── styles.css          # Game styling and layout
├── game.js            # Game logic and mechanics
├── assets/            # Images, audio, and other assets
└── README.md          # This file
```

### Technologies Used
- **HTML5**: Game structure and interface
- **CSS3**: Styling, animations, and responsive design
- **JavaScript**: Game logic, state management, and interactions
- **Web Audio API**: Sound effects and background music

### Browser Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Audio support (for sound effects and music)

## 🎯 Future Enhancements

- **Photo Integration**: Add real family photos with cartoonization
- **Voice Names**: Record and integrate pronunciation of character names
- **Save Games**: Save and resume games in progress
- **More Properties**: Expand the board with additional family-themed spaces
- **House Building**: Allow players to build houses on properties
- **Trading**: Enable property trading between players

## 🚀 Quick Start

1. **Download**: Save all files to a folder on your computer
2. **Open**: Double-click `index.html` or open it in your web browser
3. **Play**: Select characters and start playing immediately!

## 🎉 Have Fun!

This game is designed to bring your family together for fun, strategic gameplay. Enjoy building your family empire and collecting rent from your loved ones!

---

*Created with ❤️ for family fun and entertainment*

