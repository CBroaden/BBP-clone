"use client"

export default function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("hidden");
    document.getElementById("hamburger").classList.toggle("scale-90");
}