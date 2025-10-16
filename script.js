document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");
    const downloadLink = document.getElementById("downloadLink");
  
    const scheduleLinks = {
      "men-d1": {href: "https://calendar.google.com/calendar/ical/1661233b921ddceb27a519e4fa6cd3bed02f28ed3ed927d289138c1bb2589fc4%40group.calendar.google.com/public/basic.ics", label: "Download D1 Schedule"},
      "men-d2-d3": { href: "https://calendar.google.com/calendar/ical/444396be61916fa3d37f70c12ddc067979aa09d3c2fa92497b571cec2ecfe178%40group.calendar.google.com/public/basic.ics", label: "Download D2/D3 Schedule" },
      "men-highschool": { href: "https://calendar.google.com/calendar/ical/29e0e9268461fd6438f7618eb3851c3c1f778c4810c5cdd00cc78a25ee0b46b0%40group.calendar.google.com/public/basic.ics", label: "Download HS Schedule" },
      "women-d1": { href: "https://calendar.google.com/calendar/ical/381d0fada664fa6b607046c8e224d30f0ff26622e3a2917ec72f43738a862dfc%40group.calendar.google.com/public/basic.ics", label: "Download D1 Schedule" },
      "women-d2-d3": { href: "https://calendar.google.com/calendar/ical/ad9153c354af605dd00ed7493a939acde2892c49fd99e4cf7dd6dc51b9f6879a%40group.calendar.google.com/public/basic.ics" , label: "Download D2/D3 Schedule" },
      "women-highschool": { href: "https://calendar.google.com/calendar/ical/f745b72fc20a1bdb11bcf7473237e0982a633050abd28ace4fcfbf3b85cb77c1%40group.calendar.google.com/public/basic.ics", label: "Download HS Schedule" },
      "all games": { href: "https://calendar.google.com/calendar/ical/28af1f9aec3236f96b83ab5b5b31a495d21407afd04223fbb86872176e5f99c2%40group.calendar.google.com/public/basic.ics", label: "Download All Games" }

    };
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        const target = button.getAttribute("data-tab");
  
        // Switch active button
        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        // Switch visible content
        tabContents.forEach(content => {
          if (content.id === target) {
            content.classList.add("active");
            content.classList.add("highlight");
            setTimeout(() => content.classList.remove("highlight"), 800);
          } else {
            content.classList.remove("active");
          }
        });
  
        // Update download link and animate it
        if (downloadLink && scheduleLinks[target]) {
          downloadLink.href = scheduleLinks[target].href;
          downloadLink.textContent = scheduleLinks[target].label;
  
          downloadLink.classList.add("pulse");
          setTimeout(() => downloadLink.classList.remove("pulse"), 600);
        }
  
        // Scroll smoothly to top of tab section
        const tabsContainer = document.querySelector(".tabs");
        if (tabsContainer) {
          tabsContainer.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  
    // Initialize first tab's download link
    const firstActive = document.querySelector(".tab-button.active");
    if (firstActive) {
      const target = firstActive.getAttribute("data-tab");
      if (scheduleLinks[target]) {
        downloadLink.href = scheduleLinks[target].href;
        downloadLink.textContent = scheduleLinks[target].label;
      }
    }
  });
 
  // === NAVIGATION TOGGLE ===
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const header = document.querySelector('header');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  navToggle.classList.toggle('open');
});

// === STICKY HEADER EFFECT ===
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// === FADE-IN ELEMENTS ON LOAD ===
document.addEventListener('DOMContentLoaded', () => {
  const fadeElements = document.querySelectorAll('.fade-in, .fade-in-on-load');
  fadeElements.forEach(el => {
    setTimeout(() => el.classList.add('visible'), 100);
  });
});
