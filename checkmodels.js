const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAGbH2hdeNX0CIPvtAX6idSY8wm6Vgn--A");

async function run() {
  try {
    const req = await fetch("https://generativelanguage.googleapis.com/v1beta/models?key=AIzaSyAGbH2hdeNX0CIPvtAX6idSY8wm6Vgn--A");
    const data = await req.json();
    console.log(data.models.map(m => m.name).filter(name => name.includes('gemini')));
  } catch (e) {
    console.error(e);
  }
}
run();
