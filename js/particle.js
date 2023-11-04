    particlesJS("particles-js", {
        particles: {
            number: {
                value: 50, // Number of particles
                density: {
                    enable: true,
                    value_area: 900
                }
            },
            color: {
                value: "#0f0f0f" // Color of the particles
            },
            shape: {
                type: "circle" // Shape of the particles
            },
            size: {
                value: 3, // Size of the particles
                random: true
            },
            move: {
                enable: true,
                speed: 2, // Speed of particles
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "repulse"
                },
                onclick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            }
        },
        retina_detect: true
    });