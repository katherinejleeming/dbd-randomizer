    const killers = [
        {
            name: "Trapper",
            image: "images/trapper.jpg",
            weight: 1
        },
        {
            name: "Wraith",
            image: "images/wraith.jpg",
            weight: 1
        },
        {
            name: "Hillbilly",
            image: "images/hillbilly.jpg",
            weight: 1
        },
        {
            name: "Nurse",
            image: "images/nurse.jpg",
            weight: 1
        },
        {
            name: "Shape",
            image: "images/shape.jpg",
            weight: 1
        },
        {
            name: "Hag",
            image: "images/hag.jpg",
            weight: 1
        },
        {
            name: "Doctor",
            image: "images/doctor.jpg",
            weight: 1
        },
        {
            name: "Huntress",
            image: "images/huntress.jpg",
            weight: 1
        },
        {
            name: "Clown",
            image: "images/clown.jpg",
            weight: 1
        },
        {
            name: "Legion",
            image: "images/legion.jpg",
            weight: 1
        },
        {
            name: "Plague",
            image: "images/plague.jpg",
            weight: 1
        },
        {
            name: "Ghost Face",
            image: "images/ghostface.jpg",
            weight: 1
        },
        {
            name: "Demogorgon",
            image: "images/demogorgon.jpg",
            weight: 1
        },
        {
            name: "Oni",
            image: "images/oni.jpg",
            weight: 1
        },
        {
            name: "Deathslinger",
            image: "images/deathslinger.jpg",
            weight: 1
        },
        {
            name: "Blight",
            image: "images/blight.jpg",
            weight: 1
        },
        {
            name: "Twins",
            image: "images/twins.jpg",
            weight: 1
        },
        {
            name: "Nemesis",
            image: "images/nemesis.jpg",
            weight: 1
        },
        {
            name: "Cenobite",
            image: "images/cenobite.jpg",
            weight: 1
        },
        {
            name: "Singularity",
            image: "images/singularity.jpg",
            weight: 1
        },
        {
            name: "Knight",
            image: "images/knight.jpg",
            weight: 1
        },
        {
            name: "Mastermind",
            image: "images/mastermind.jpg",
            weight: 1
        },
        {
            name: "Dredge",
            image: "images/dredge.jpg",
            weight: 1
        },
        {
            name: "Onryo",
            image: "images/onryo.jpg",
            weight: 1
        },
        {
            name: "Xenomorph",
            image: "images/xenomorph.jpg",
            weight: 1
        },
        {
            name: "Trickster",
            image: "images/trickster.jpg",
            weight: 1
        },
        {
            name: "Unknown",
            image: "images/unknown.jpg",
            weight: 1
        },
        {
            name: "Dark Lord",
            image: "images/darklord.jpg",
            weight: 1
        },
        {
            name: "Litch",
            image: "images/litch.jpg",
            weight: 3
        },
        {
            name: "Good Guy",
            image: "images/goodguy.jpg",
            weight: 3
        },
        {
            name: "Ghoul",
            image: "images/ghoul.jpg",
            weight: 3
        },
        {
            name: "Houndmaster",
            image: "images/houndmaster.jpg",
            weight: 3
        },
        {
            name: "Artist",
            image: "images/artist.jpg",
            weight: 3
        },
        {
            name: "Spirit",
            image: "images/spirit.jpg",
            weight: 3
        },
        {
            name: "Animatronic",
            image: "images/animatronic.jpg",
            weight: 1
        },
        {
            name: "Nightmare",
            image: "images/nightmare.jpg",
            weight: 1
        }

      ];
      

      // function to randomize a character incorporating preference 
      function getRandomKiller() {
        const totalWeight = killers.reduce((sum, killer) => sum + killer.weight, 0);
      
        const randomWeight = Math.random() * totalWeight;
      
        let cumulativeWeight = 0;
        for (const killer of killers) {
          cumulativeWeight += killer.weight;
          if (randomWeight < cumulativeWeight) {
            return killer;
          }
        }
      
        return killers[killers.length - 1];
      }
      
      //display image including alt text in case image doesn't load
      function displayRandomKiller() {
        const outputElement = document.getElementById("output");
        const killer = getRandomKiller();
      
        const killerImageElement = document.getElementById("killerImage");
        killerImageElement.src = killer.image;
        killerImageElement.alt = killer.name + " Image";
      
        const killerNameElement = document.getElementById("killerName");
        killerNameElement.textContent = killer.name;
      }
      // action to utilise functions
      document.getElementById("randomButton").addEventListener("click", displayRandomKiller);

    let isPlaying = false;
    let music;

    function playMusic() {
        if (!isPlaying) {
            isPlaying = true;
            music = new Audio('spinthatwheel.mp3');
            music.volume = 0.2;
            music.play();
            
            music.addEventListener('ended', function () {
                isPlaying = false;
            });
    }
}
