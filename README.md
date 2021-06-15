# Игра «Жизнь»

Реализация известного [клеточного автомата](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

[Версия на React](https://zronev.github.io/game-of-life/react/)
[Версия на чистом JS](https://zronev.github.io/game-of-life/vanilla/)

Я отделил доменный, прикладной слои от UI и слоя адаптеров, что позволило переиспользовать логику для обеих версий приложений.

**Основные технологии**: TypeScript, Canvas API, React, Parcel, Jest, SCSS

---

## Установка

```
git clone https://github.com/zronev/game-of-life.git
cd game-of-life
npm install
```

## Запуск

```
# Версия на React
npm run dev-react

# Версия на чистом JS
npm run dev-vanilla
```
