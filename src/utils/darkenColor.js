export function darkenHexColor(hex, factor) {
	// Удаляем символ #, если он присутствует
	hex = hex.replace(/^#/, '');

	// Преобразуем hex в RGB
	let r = parseInt(hex.substring(0, 2), 16);
	let g = parseInt(hex.substring(2, 4), 16);
	let b = parseInt(hex.substring(4, 6), 16);

	// Уменьшаем значения RGB на заданный фактор (0-1)
	r = Math.floor(r * factor);
	g = Math.floor(g * factor);
	b = Math.floor(b * factor);

	// Преобразуем обратно в hex
	const darkenedHex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

	return darkenedHex;
}

// // Пример использования:
// const originalColor = "#3498db";
// const darkenedColor = darkenHexColor(originalColor, 0.8); // Темнее на 20%
// console.log(darkenedColor); // Вывод: #2875af
