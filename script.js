const container = document.getElementById("sections");

// 🔤 Section titles + texts
const captions = [
  { title: "Our Gem", text: " We are the Luckiest to have this Precious Gem as our Friend.", flicker: "We are the Luckiest" },
  { title: "A Fact", text: "Coolest Friend.. Anyone Could Dream to Have!", flicker:"Coolest" }
  { title: "Smart", text: "Hail The Prem. Smartest Among the Gang" , flicker:"Hail the Prem"},
  { title: "Words cant Explain our Bonds", text: "We Love You Alot." },
  { title: "Epic Trips", text: "Him beside with us makes our moments blissfull.." flicker:"Him"},
  { title: "Gamer Hours", text: "Loud Wins, Late Nights.", flicker:"Loud Wins" },
  { title: "Photogenic You", text: "Caught being awesome!", flicker:"Caught" },
  { title: "Memories", text: "Golden memories we will carry with us rest of ur life..", flicker:"Golden" },
  { title: "Leveling Up", text: "We Wish You Life With Joy, Happy , Lots of Love and all your ambitions to come true in upcoming days.." }
];

// 📸 35 photos, placed in groups of 4
let photoIndex = 1;
captions.forEach((caption, i) => {
  const section = document.createElement("div");
  section.classList.add("section");
  if (i % 2 !== 0) section.classList.add("reverse");

  const textHTML = `
    <div class="text " data-aos="fade-${i % 2 === 0 ? "right" : "left"}">
      <h2>${caption.title}</h2>
      <p class="text-flicker-out-glow">${caption.flicker}</p>
      <p class="poojit">${caption.text}</p>
    </div>
  `;

  let mediaHTML = `<div class="media">`;
  for (let j = 0; j < 4 && photoIndex <= 35; j++, photoIndex++) {
    mediaHTML += `<img src="assets/images/photo${photoIndex}.jpg" data-aos="zoom-in" data-aos-delay="${j * 100}" class="animate__animated animate__zoomin image"/>`;
  }
  mediaHTML += `</div>`;

  section.innerHTML = textHTML + mediaHTML;
  container.appendChild(section);
});
// Animate hero text scale + fade on scroll
gsap.to(".video-text-mask h1", {
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true,
    pin: true, // Keeps hero in place during scroll
  },
  scale: 4,
  opacity: 0,
  ease: "power2.out",
});

var sound = document.getElementById("sound");
var audio = document.getElementById("audio");
sound.addEventListener("click", function () {
  audio.play();
})