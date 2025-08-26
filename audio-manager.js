// Audio Manager for Family Monopoly Go! Game

class AudioManager {
    constructor() {
        this.backgroundMusic = null;
        this.soundEffects = {};
        this.isMuted = false;
        this.backgroundVolume = 0.2; // 20% volume as requested
        this.effectsVolume = 0.5; // 50% volume for sound effects
        
        this.initializeAudio();
    }
    
    initializeAudio() {
        // Background music
        this.backgroundMusic = document.getElementById('background-music');
        if (this.backgroundMusic) {
            this.backgroundMusic.volume = this.backgroundVolume;
            this.backgroundMusic.loop = true;
        }
        
        // Sound effects
        this.soundEffects = {
            dice: document.getElementById('dice-sound'),
            money: document.getElementById('money-sound'),
            purchase: this.createAudio('assets/purchase.mp3'),
            rent: this.createAudio('assets/rent.mp3'),
            jail: this.createAudio('assets/jail.mp3'),
            chance: this.createAudio('assets/chance.mp3'),
            bankruptcy: this.createAudio('assets/bankruptcy.mp3'),
            victory: this.createAudio('assets/victory.mp3')
        };
        
        // Set volumes for sound effects
        Object.values(this.soundEffects).forEach(audio => {
            if (audio) {
                audio.volume = this.effectsVolume;
            }
        });
    }
    
    createAudio(src) {
        const audio = new Audio();
        audio.src = src;
        audio.preload = 'auto';
        return audio;
    }
    
    playBackgroundMusic() {
        if (this.backgroundMusic && !this.isMuted) {
            this.backgroundMusic.play().catch(e => {
                console.log('Background music play failed:', e);
            });
        }
    }
    
    pauseBackgroundMusic() {
        if (this.backgroundMusic) {
            this.backgroundMusic.pause();
        }
    }
    
    toggleBackgroundMusic() {
        if (this.backgroundMusic) {
            if (this.backgroundMusic.paused) {
                this.playBackgroundMusic();
            } else {
                this.pauseBackgroundMusic();
            }
        }
    }
    
    playSoundEffect(effectName) {
        if (this.isMuted) return;
        
        const audio = this.soundEffects[effectName];
        if (audio) {
            // Clone the audio to allow multiple simultaneous plays
            const clone = audio.cloneNode();
            clone.volume = this.effectsVolume;
            clone.play().catch(e => {
                console.log(`Sound effect ${effectName} play failed:`, e);
            });
        }
    }
    
    playDiceRoll() {
        this.playSoundEffect('dice');
    }
    
    playMoneySound() {
        this.playSoundEffect('money');
    }
    
    playPurchaseSound() {
        this.playSoundEffect('purchase');
    }
    
    playRentSound() {
        this.playSoundEffect('rent');
    }
    
    playJailSound() {
        this.playSoundEffect('jail');
    }
    
    playChanceSound() {
        this.playSoundEffect('chance');
    }
    
    playBankruptcySound() {
        this.playSoundEffect('bankruptcy');
    }
    
    playVictorySound() {
        this.playSoundEffect('victory');
    }
    
    setBackgroundVolume(volume) {
        this.backgroundVolume = Math.max(0, Math.min(1, volume));
        if (this.backgroundMusic) {
            this.backgroundMusic.volume = this.backgroundVolume;
        }
    }
    
    setEffectsVolume(volume) {
        this.effectsVolume = Math.max(0, Math.min(1, volume));
        Object.values(this.soundEffects).forEach(audio => {
            if (audio) {
                audio.volume = this.effectsVolume;
            }
        });
    }
    
    mute() {
        this.isMuted = true;
        this.pauseBackgroundMusic();
    }
    
    unmute() {
        this.isMuted = false;
        this.playBackgroundMusic();
    }
    
    toggleMute() {
        if (this.isMuted) {
            this.unmute();
        } else {
            this.mute();
        }
    }
    
    // Create placeholder audio files for testing
    createPlaceholderAudio() {
        console.log('Creating placeholder audio files...');
        
        // This function can be used to generate simple audio tones for testing
        // In a real implementation, you would replace these with actual audio files
        
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create a simple beep sound
            function createBeep(frequency = 440, duration = 0.1) {
                const oscillator = audioContext.createOscillator();
                const gainNode = audioContext.createGain();
                
                oscillator.connect(gainNode);
                gainNode.connect(audioContext.destination);
                
                oscillator.frequency.value = frequency;
                oscillator.type = 'sine';
                
                gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
                
                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + duration);
            }
            
            // Create different sounds for different effects
            this.createPlaceholderSound = (effectName) => {
                try {
                    switch (effectName) {
                        case 'dice':
                            createBeep(800, 0.1);
                            break;
                        case 'money':
                            createBeep(600, 0.2);
                            break;
                        case 'purchase':
                            createBeep(400, 0.3);
                            break;
                        case 'rent':
                            createBeep(300, 0.2);
                            break;
                        case 'jail':
                            createBeep(200, 0.5);
                            break;
                        case 'chance':
                            createBeep(500, 0.2);
                            break;
                        case 'bankruptcy':
                            createBeep(150, 0.8);
                            break;
                        case 'victory':
                            createBeep(1000, 0.5);
                            break;
                        default:
                            createBeep(440, 0.1);
                    }
                } catch (error) {
                    console.log('Audio not available, skipping sound effect:', effectName);
                }
            };
        } catch (error) {
            console.log('Audio context not available, using silent mode');
            this.createPlaceholderSound = () => {}; // Silent function
        }
    }
}

// Initialize audio manager when DOM is loaded
let audioManager;

document.addEventListener('DOMContentLoaded', function() {
    audioManager = new AudioManager();
    
    // Create placeholder sounds for testing
    audioManager.createPlaceholderAudio();
    
    // Audio controls are already in the HTML, just set up event listeners
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    const muteBtn = document.getElementById('mute-btn');
    
    if (musicToggleBtn) {
        musicToggleBtn.addEventListener('click', () => audioManager.toggleBackgroundMusic());
    }
    
    if (muteBtn) {
        muteBtn.addEventListener('click', () => audioManager.toggleMute());
    }
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AudioManager;
}
