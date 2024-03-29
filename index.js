const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;


class Player {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}

class Enemy {
    constructor(x, y, radius, color, velocity) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = velocity;
    }
    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    }
    update() {
        this.draw();
        this.x = this.x + this.velocity.x;
        this.y = this.y + this.velocity.y;
    }
}

function spawnEnemies() {
    setInterval(function() {
        const radius = Math.random() * (30 - 10) + 10;
        let x;
        let y;
        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
            y = Math.random() * canvas.height;
        } else {
            x = Math.random() * canvas.width;
            y = Math.random() < 0.5 ? 0 - radius : canvas.height + radius;
        }

        const color = 'green'
        var angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x);
        var velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        };

        enemies.push(new Enemy(x, y, radius, color, velocity))
    }, 1000);

}


const playerX = canvas.width / 2;
const playerY = canvas.height / 2;
const player = new Player(playerX, playerY, 30, 'blue');

const projectiles = [];
const enemies = [];


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    player.draw();
    projectiles.forEach(function(projectile) {
        projectile.update()
    });
    enemies.forEach(function(enemy) {
        enemy.update()

        projectiles.forEach(function(projectile) {
            const dist = Math.hypot(projectiles.x - enemy.x, projectiles.y - enemy.y)
        });
        53: 22
    });

}


addEventListener('click', function(e) {
    var angle = Math.atan2(e.clientY - canvas.height / 2, e.clientX - canvas.width / 2);
    var velocity = {
        x: Math.cos(angle),
        y: Math.sin(angle)
    };
    projectiles.push(new Projectile(playerX, playerY, 5, 'red', {
        x: velocity.x,
        y: velocity.y
    }));
});


spawnEnemies();
animate();