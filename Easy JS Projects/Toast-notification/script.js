const btn = document.getElementById("btn");
const notification = document.getElementById("notification");
const animate = document.getElementsByClassName("animate");

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = "Notification";

  notification.appendChild(notif);

  setInterval(() => {
    notif.classList.add("animate");
  }, 2000);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
