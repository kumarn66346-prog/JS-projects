const quotes = [
    "Creativity is intelligence having fun.",
    "You can't use up creativity. The more you use, the more you have.",
    "Think outside the box, then redesign the box.",
    "Creativity takes courage.",
    "Every artist was first an amateur.",
    "The best ideas come as jokes. Make your thinking as funny as possible.",
    "Imagination is more important than knowledge.",
    "Do one thing every day that scares you creatively.",
    "Creativity is seeing what others see and thinking what no one else ever thought.",
    "An idea that is not dangerous is unworthy of being called an idea at all.",
    "Create with the heart; build with the mind.",
    "The creative adult is the child who survived.",
    "Innovation distinguishes between a leader and a follower.",
    "Don't wait for inspiration. It comes while working.",
    "Originality is nothing but judicious imitation.",
    "If you hear a voice within you say 'you cannot paint,' then paint.",
    "Creativity is allowing yourself to make mistakes. Art is knowing which ones to keep.",
    "The worst enemy to creativity is self-doubt.",
    "Dream big. Start small. Act now.",
    "Everything you can imagine is real."
]

  const button = document.querySelector('button');
  const quote  = document.querySelector('h1');
  button.addEventListener('click',()=>{
      const index = Math.floor(Math.random()*20);
      quote.textContent = quotes[index];
  })