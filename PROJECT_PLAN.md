# Quotify: AI-Assisted Development Plan

This document outlines the full project plan for "Quotify," a mobile quote application. It is intended to be used as a reference for AI-assisted coding.

---

## 1. Project Overview & Vision

**Quotify** is a sleek, minimalist mobile application for iOS and Android designed to deliver daily inspiration through a curated collection of quotes. The user can view random quotes, save their favorites, and share them with friends. The entire development process will leverage AI-assisted coding, focusing on clear, modular components and a streamlined workflow.

---

## 2. Core Features (Requirements)

### Phase 1: Minimum Viable Product (MVP)

1.  **Home Screen (`app/(tabs)/index.js`):**
    * Display a single, random quote and its author.
    * A button/icon to fetch a new random quote.
    * A button/icon to "favorite" the current quote.
    * A button/icon to "share" the quote via the native share sheet.

2.  **Favorites Screen (`app/(tabs)/favorites.js`):**
    * Display a list of all quotes the user has favorited.
    * Ability to remove a quote from the favorites list.
    * Favorites data must persist after the app is closed.

3.  **Navigation:**
    * A bottom tab navigator to switch between the "Home" and "Favorites" screens, implemented using **Expo Router**.

### Phase 2: Future Scope

* **Categories/Tags:** Browse quotes by categories.
* **Search:** Find quotes by author or keyword.
* **Daily Notifications:** "Quote of the Day" push notification.
* **Themes:** Light and Dark mode.
* **Widgets:** iOS/Android home screen widgets.
* **Offline Mode:** Cache quotes for offline viewing.

---

## 3. Technology Stack

* **Core Framework:** **React Native** (To build for iOS & Android with one codebase).
* **Development Environment:** **Expo** (For a simplified managed workflow and easy testing).
* **Routing:** **Expo Router** (For file-system-based navigation, which you are using).
* **Programming Language:** **JavaScript (ES6+)**.
* **Styling:** **Tailwind CSS via `nativewind`** (For rapid, utility-first UI development).
* **State Management:** **Zustand** (A simple, modern, and lightweight state manager).
* **Data Persistence:** **AsyncStorage** (For saving favorites locally on the device).
* **API Calls:** **Axios** (For making HTTP requests to the quote API).

---

## 4. Recommended Quote API

* **Service:** `https://quotable.io`
* **Why:** Free, no API key required, and has all necessary endpoints.
* **Endpoint for a random quote:** `https://api.quotable.io/random`

---

## 5. Project Setup & Configuration

### A. Initial Commands

```bash
# 1. Create a new Expo project (it will likely include expo-router by default)
npx create-expo-app Quotify
cd Quotify

# 2. Install all necessary dependencies
npm install nativewind zustand axios
npm install --dev tailwindcss

# 3. Initialize Tailwind CSS
npx tailwindcss init