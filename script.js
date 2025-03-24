let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
        let pointsPerClick = localStorage.getItem("pointsPerClick") ? parseInt(localStorage.getItem("pointsPerClick")) : 1;
        let autoClickers = localStorage.getItem("autoClickers") ? parseInt(localStorage.getItem("autoClickers")) : 0;
        let superAutoClickers = localStorage.getItem("superAutoClickers") ? parseInt(localStorage.getItem("superAutoClickers")) : 0;
        const scoreDisplay = document.getElementById("score");
        const button = document.getElementById("click-button");
        const upgradeButton = document.getElementById("upgrade-button");
        const autoClickerButton = document.getElementById("auto-clicker");
        const superAutoClickerButton = document.getElementById("auto-clicker-10");
        const resetButton = document.getElementById("reset");

        function updateUI() {
            scoreDisplay.textContent = score;
            upgradeButton.textContent = `GOLS (+${pointsPerClick} por clique, Custa: ${10 * pointsPerClick})`;
            autoClickerButton.textContent = `IDOLOS (+1 seg, Custa: ${50 * (autoClickers + 1)})`;
            superAutoClickerButton.textContent = `TITULOS (+10 seg, Custa: ${500 * (superAutoClickers + 1)})`;
        }

        button.addEventListener("click", function() {
            score += pointsPerClick;
            updateUI();
        });

        upgradeButton.addEventListener("click", function() {
            let cost = 10 * pointsPerClick;
            if (score >= cost) {
                score -= cost;
                pointsPerClick++;
                updateUI();
            }
        });

        autoClickerButton.addEventListener("click", function() {
            let cost = 50 * (autoClickers + 1);
            if (score >= cost) {
                score -= cost;
                autoClickers++;
                setInterval(() => {
                    score += autoClickers;
                    updateUI();
                }, 1000);
                updateUI();
            }
        });

        superAutoClickerButton.addEventListener("click", function() {
            let cost = 500 * (superAutoClickers + 1);
            if (score >= cost) {
                score -= cost;
                superAutoClickers++;
                setInterval(() => {
                    score += superAutoClickers * 10;
                    updateUI();
                }, 1000);
                updateUI();
            }
        });

        resetButton.addEventListener("click", function() {
            localStorage.clear();
            location.reload();
        });

        setInterval(() => {
            localStorage.setItem("score", score);
            localStorage.setItem("pointsPerClick", pointsPerClick);
            localStorage.setItem("autoClickers", autoClickers);
            localStorage.setItem("superAutoClickers", superAutoClickers);
        }, 1000);

        updateUI();