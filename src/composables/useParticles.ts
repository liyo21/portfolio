import { ref } from 'vue';

export function useParticles() {

    const particlesColor = ref('#2f6b4f');
    const particlesOptions = ref({
        fullScreen: { enable: false },
        background: { color: { value: "transparent" } },
        particles: {
            number: { value: 160, density: { enable: true } },
            color: { value: particlesColor.value },
            links: {
                enable: true,
                color: particlesColor.value,
                opacity: 0.22,
                distance: 140
            },
            move: {
                direction: 'none',
                enable: true,
                outModes: 'bounce',
                speed: 0.8
            },
            opacity: { value: 0.35 },
            size: { value: { min: 1, max: 3 } }
            // ...otros ajustes...
        },
        interactivity: {
            events: {
                onHover: { enable: true, mode: "repulse" },
                onClick: { enable: true, mode: "push" }
            }
        }
    });
    return {
        particlesOptions,
        particlesColor
    }
}