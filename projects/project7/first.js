const zodiacsigns = [
   "Aries",
   "Taurus",
   "Gemini",
   "Cancer",
   "Leo",
   "Virgo",
   "Libra",
   "Scorpio",
   "Sagittarius",
   "Capricorn",
   "Aquarius",
   "Pisces" 
];

const compliments= [
    "Your hard work will definitely pay off someday",
    "You have the potential to achieve great success in your future",
    "You are building a bright and successful future for yourself",
    "Your creativity will open amazing opportunities ahead",
    "You have the strength to overcome any challenge in life",
    "Your determination will lead you to your goals",
    "You are capable of doing incredible things in the future",
    "Your positive mindset will shape a great life",
    "You will inspire many people with your journey",
    "Your intelligence will help you make wise decisions",
    "You are growing into a strong and confident person",
    "Your efforts today are creating a better tomorrow",
    "You have a bright path waiting for you",
    "Your kindness will bring good things back to you",
    "You are destined to achieve something meaningful",
    "Your courage will help you face any situation",
    "You have the ability to turn dreams into reality",
    "Your dedication will take you far in life",
    "You are becoming better with every step you take",
    "Your future is full of possibilities and success",
    "You have the power to create your own destiny",
    "Your passion will guide you toward success",
    "You are capable of making a positive impact",
    "Your consistency will lead to big achievements",
    "You will shine in whatever you choose to do",
    "Your confidence will grow stronger over time",
    "You are on the path to something amazing",
    "Your skills will bring you great opportunities",
    "You are preparing yourself for a successful future",
    "Your mindset will help you reach new heights",
    "You have everything it takes to succeed in life."
];

const victimcardcompliment=[
    "I always try my best even if no one notices",
    "I keep helping others even when I’m struggling myself",
    "I don’t get much appreciation but I still stay kind",
    "I go through a lot but I never stop caring for people",
    "Even when I feel ignored I continue to support everyone", 
    "I stay strong even when things are really hard for me",
    "I give my all even if I don’t get anything back", 
    "I always put others first even if it hurts me",
    "I keep smiling even when I’m not okay",
    "I try to make others happy even when I’m sad", 
    "I handle everything alone but I never complain much",
    "I stay loyal even when people don’t treat me right",
    "I forgive easily even when I get hurt deeply",
    "I keep going even when no one believes in me",
    "I don’t show my pain but I still stay positive", 
    "I sacrifice a lot just to keep others happy",
    "I stay patient even when life feels unfair",
    "I keep caring even when I feel unappreciated",
    "I try to stay strong even when I feel broken",
    "I give love even when I don’t receive the same back"
];

const recomendation= [
    "Read books daily to improve knowledge",
    "Exercise regularly to stay healthy",
    "Practice coding to build strong programming skills",
    "Save money consistently for financial stability",
    "Communicate clearly to build better relationships",
    "Learn time management to increase productivity",
    "Eat balanced food for better physical health",
    "Stay updated with current affairs for awareness",
    "Practice mindfulness to improve mental health",
    "Work on teamwork skills for career growth",
    "Learn new languages to expand opportunities",
    "Use technology wisely to enhance efficiency",
    "Develop problem-solving skills for real-life challenges",
    "Maintain discipline to achieve long-term goals",
    "Build a strong network for professional success",
    "Focus on consistency rather than perfection",
    "Take breaks to avoid burnout",
    "Practice writing to improve communication skills",
    "Learn basic financial literacy for better decisions",
    "Stay curious and keep learning new things",
    "Respect others to build strong social connections",
    "Set clear goals to stay focused in life",
    "Take responsibility for your actions",
    "Practice creativity to think differently",
    "Stay organized to manage tasks efficiently",
    "Learn from failures instead of fearing them",
    "Keep a positive attitude in difficult situations",
    "Balance work and personal life effectively",
    "Stay physically active for long-term wellness",
    "Invest time in self-improvement regularly"
];

const predctions =[
    "You will achieve your goals with consistent effort",
    "Your hard work will bring success in the future",
    "You will overcome current challenges soon",
    "A great opportunity will come your way",
    "Your skills will improve with time and practice",
    "You will meet supportive people in your journey",
    "Your confidence will grow stronger day by day",
    "You will find success in your chosen field",
    "Your dedication will lead to big achievements",
    "You will learn valuable lessons from your experiences",
    "Your future will be filled with positive growth",
    "You will achieve something you once thought was impossible",
    "Your patience will be rewarded soon",
    "You will build a stable and successful life",
    "Your efforts will create new opportunities",
    "You will become stronger after every challenge",
    "Your dreams will slowly turn into reality",
    "You will gain respect for your hard work",
    "Your journey will inspire others",
    "You will create a bright future for yourself"
];

const form = document.getElementById('astroform');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);

    const text =  `Hi ${name} ${surname} Your zodiac sign is ${zodiacsigns[month-1]} 
    , ${compliments[day-1]} , ${victimcardcompliment[year%20]},
    ${recomendation[(day*month)%30]}, ${predctions[(month*year)%20]}`;
    
    document.getElementById('result').textContent = text;
})