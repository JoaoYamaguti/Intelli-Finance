<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps(['value', 'maxLabel'])
console.log(props.value)

const speedometer = ref()

onMounted(() => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  const CONFIG = {
    speedometerValue: props.value,
    maxValue: props.maxLabel.toFixed(0),
    animationDuration: 1500, // ms
    tickRate: 10, // ms
    angleStep: 0.0155,
    maxAngle: 1.159,
    arcColor: "oklch(54.6% 0.245 262.881)",
    pointerColor: isDarkTheme ? "white" : "black"
  };

  const canvas = speedometer.value

  const ctx = canvas.getContext("2d");

  const CENTER = {
    x: canvas.width / 2,
    y: canvas.height - 40
  };

  const RADIUS = canvas.height / 1.85;

  let angle = 0;
  let backPointer = false;

  if (ctx == null) return

  ctx.translate(CENTER.x, CENTER.y);

  // Utilities
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  // Drawing functions
  function clearCanvas() {
    if (ctx == null) return

    ctx.clearRect(-CENTER.x, -CENTER.y, canvas.width, canvas.height);
  }

  function drawArc() {
    if (ctx == null) return
    ctx.beginPath();
    ctx.arc(0, 0, RADIUS, Math.PI * 0.9, Math.PI * 0.1);
    ctx.lineWidth = 12;
    ctx.strokeStyle = CONFIG.arcColor;
    ctx.stroke();
  }

  function drawLabels() {
    if (ctx == null) return

    ctx.font = `${RADIUS * 0.18}px Arial`;
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    ctx.fillStyle = CONFIG.pointerColor

    ctx.fillText("R$     0", -RADIUS * 1.45, 30);
    ctx.fillText(`R$ ${CONFIG.maxValue}`, RADIUS * 1.45, 30);
  }

  function drawPointer() {
    if (ctx == null) return

    ctx.save();

    ctx.rotate(Math.PI * angle);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-RADIUS, RADIUS / 4);
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.strokeStyle = CONFIG.pointerColor;
    ctx.stroke();

    ctx.restore();
  }

  function drawSpeedometer() {
    clearCanvas();
    drawArc();
    drawLabels();
    drawPointer();
  }

  // Animation functions
  async function animateInitial() {
    return new Promise(async (resolve) => {
      const interval = setInterval(() => {
        if (angle > CONFIG.maxAngle) backPointer = true;
        if (angle < 0) backPointer = false;

        angle += backPointer ? -CONFIG.angleStep : CONFIG.angleStep;

        drawSpeedometer();
      }, CONFIG.tickRate);

      await sleep(CONFIG.animationDuration);
      clearInterval(interval);
      resolve(null);
    });
  }

  async function animateToValue() {
    return new Promise(async (resolve) => {
      const targetAngle = CONFIG.maxAngle * (CONFIG.speedometerValue / CONFIG.maxValue);

      const interval = setInterval(() => {
        if (angle < targetAngle) {
          angle += CONFIG.angleStep;
          drawSpeedometer();
        }
      }, CONFIG.tickRate);

      await sleep(CONFIG.animationDuration);
      clearInterval(interval);
      resolve(null);
    });
  }

  async function runSpeedometer() {
    await animateInitial();
    await animateToValue();
  }

  runSpeedometer();
})
</script>

<template>
  <canvas ref="speedometer" id="speedometer" width="288" height="150"></canvas>
</template>

<style>
canvas {
  width: 288px;
  height: 150px;
}
</style>
