"use client"

export default function closeSidebar() {

    if (document.getElementById("sidebar").classList.contains("hidden")) return; 
    else document.getElementById("sidebar").classList.add("hidden")
}