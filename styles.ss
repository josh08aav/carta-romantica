body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(135deg, #ffdde1, #ee9ca7);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
}

.container {
  perspective: 1000px;
  z-index: 2;
}

.envelope {
  position: relative;
  width: 320px;
  height: 220px;
  background: #ff6f91;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.6s;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
}

.envelope.open {
  transform: translateY(-20px) scale(1.05);
  box-shadow: 0 0 40px rgba(255,255,255,0.8);
}

.flap {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50%;
  background: #ff3f6c;
  clip-path: polygon(0 0, 50% 100%, 100% 0);
  transform-origin: top;
  transition: transform 0.6s;
}

.envelope.open .flap {
  transform: rotateX(180deg);
}

.letter {
  position: absolute;
  top: 20px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease 0.3s;
}

.envelope.open .letter {
  opacity: 1;
  transform: translateY(0);
}

h2 {
  color: #ff3f6c;
}

p {
  color: #333;
  font-size: 16px;
}

/* Corazones flotando */
.hearts span {
  position: absolute;
  display: block;
  width: 20px;
  height: 20px;
  background: red;
  transform: rotate(45deg);
  animation: float 10s linear infinite;
  opacity: 0.6;
}

.hearts span::before,
.hearts span::after {
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
}

.hearts span::before {
  top: -10px;
  left: 0;
}

.hearts span::after {
  left: -10px;
  top: 0;
}

@keyframes float {
  0% {transform: translateY(100vh) rotate(45deg);}
  100% {transform: translateY(-10vh) rotate(45deg);}
}
