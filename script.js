     const killers = [
        {
          name: "Trapper",
          image: "images/trapper.jpg",
          weight: 3
        },
        {
          name: "Wraith",
          image: "images/wraith.jpg",
          weight: 5
        },
        /*{
            name: "Hillbilly",
            image: "images/hillbilly.jpg",
            weight: 2
        },*/
        {
            name: "Nurse",
            image: "images/nurse.jpg",
            weight: 3
        },
        {
            name: "Shape",
            image: "images/shape.jpg",
            weight: 3
        },
       /* {
            name: "Hag",
            image: "images/hag.jpg",
            weight: 1
        },*/
        {
            name: "Doctor",
            image: "images/doctor.jpg",
            weight: 3
        },
        {
            name: "Huntress",
            image: "images/huntress.jpg",
            weight: 6
        },
        {
            name: "Clown",
            image: "images/clown.jpg",
            weight: 5
        },
        {
            name: "Legion",
            image: "images/legion.jpg",
            weight: 3
        },
        {
            name: "Plague",
            image: "images/plague.jpg",
            weight: 2
        },
        {
            name: "Ghost Face",
            image: "images/ghostface.jpg",
            weight: 5
        },
        {
            name: "Demogorgon",
            image: "images/demogorgon.jpg",
            weight: 2
        },
        {
            name: "Oni",
            image: "images/oni.jpg",
            weight: 3
        },
        {
            name: "Deathslinger",
            image: "images/deathslinger.jpg",
            weight: 2
        },
        {
            name: "Blight",
            image: "images/blight.jpg",
            weight: 2
        },
        {
            name: "Twins",
            image: "images/twins.jpg",
            weight: 3
        },
        {
            name: "Nemesis",
            image: "images/nemesis.jpg",
            weight: 2
        },
        {
            name: "Cenobite",
            image: "images/cenobite.jpg",
            weight: 4
        },
        {
            name: "Singularity",
            image: "images/singularity.jpg",
            weight: 1
        },
        {
            name: "Knight",
            image: "images/knight.jpg",
            weight: 3
        },
        {
            name: "Mastermind",
            image: "images/mastermind.jpg",
            weight: 1
        },
        {
            name: "Dredge",
            image: "images/dredge.jpg",
            weight: 4
        },
        {
            name: "Onryo",
            image: "images/onryo.jpg",
            weight: 3
        },
        {
            name: "Xenomorph",
            image: "images/xenomorph.jpg",
            weight: 5
        },
        {
            name: "Trickster",
            image: "images/trickster.jpg",
            weight: 4
        }
      ];
      
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
      
      function displayRandomKiller() {
        const outputElement = document.getElementById("output");
        const killer = getRandomKiller();
      
        const killerImageElement = document.getElementById("killerImage");
        killerImageElement.src = killer.image;
        killerImageElement.alt = killer.name + " Image";
      
        const killerNameElement = document.getElementById("killerName");
        killerNameElement.textContent = killer.name;
      }
      
      document.getElementById("randomButton").addEventListener("click", displayRandomKiller);

      function playMusic(){
        var music = new Audio('spinthatwheel.mp3');
        music.play();
        }