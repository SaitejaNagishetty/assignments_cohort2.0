function updateClock() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const formatHour = String(hour).padStart(2, "0");
  const formatMin = String(minute).padStart(2, "0");
  const formatSecond = String(second).padStart(2, "0");

  const ampm = hour >= 12 ? "pm" : "am";

  console.clear();
  console.log(`${formatHour}:${formatMin}:${formatSecond}`);
  console.log(
    `${Math.abs(formatHour - 12)}:${formatMin}:${formatSecond} ${ampm}`
  );
}

setInterval(updateClock, 1000);
