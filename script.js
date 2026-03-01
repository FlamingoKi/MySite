document.addEventListener('DOMContentLoaded', () => {
    const texts = document.querySelectorAll('.anim-text');

    // Split text into wrapped characters for animation
    texts.forEach(text => {
        const content = text.textContent.trim();
        text.innerHTML = ''; // Clear original text
        
        content.split('').forEach((char, index) => {
            const charWrap = document.createElement('span');
            charWrap.classList.add('char-wrap');
            
            const charSpan = document.createElement('span');
            charSpan.classList.add('char');
            // Preserve space if needed, otherwise just set text
            charSpan.textContent = char;
            
            // Stagger animation delays for each letter
            charSpan.style.animationDelay = `${index * 0.05}s`;
            
            charWrap.appendChild(charSpan);
            text.appendChild(charWrap);
        });
    });

    // Start entrance animations
    setTimeout(() => {
        document.querySelector('.hero').classList.add('loaded');
    }, 100);

    // Mouse parallax effect for depth
    const hero = document.querySelector('.hero');
    const backLayer = document.querySelector('.text-back');
    const photoLayer = document.querySelector('.photo-layer');
    const frontLayer = document.querySelector('.text-front');

    hero.addEventListener('mousemove', (e) => {
        // Calculate mouse position relative to center of screen (-1 to 1)
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;

        // Apply distinct translation to each layer to create 3D depth
        // The further back the layer, the less it moves (or it moves in the opposite direction)
        
        // Back text moves slightly away from mouse
        backLayer.style.transform = `translate(${x * -20}px, ${y * -20}px)`;
        
        // Photo moves slightly towards mouse
        photoLayer.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
        
        // Front text moves more aggressively towards mouse (closest to viewer)
        frontLayer.style.transform = `translate(${x * 35}px, ${y * 35}px)`;
    });

    // Reset parallax on mouse leave
    hero.addEventListener('mouseleave', () => {
        backLayer.style.transform = `translate(0px, 0px)`;
        photoLayer.style.transform = `translate(0px, 0px)`;
        frontLayer.style.transform = `translate(0px, 0px)`;
        
        // Add smooth transition for resetting
        [backLayer, photoLayer, frontLayer].forEach(layer => {
            layer.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
        });
        
        // Remove transition so it tracks mouse instantly again
        setTimeout(() => {
            [backLayer, photoLayer, frontLayer].forEach(layer => {
                layer.style.transition = 'none';
            });
        }, 500);
    });
});