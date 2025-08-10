function grettingWithWeather(name, weather) {
    if (weather === "sunny") {
        return `Hello ${name},Hôm nay trời nắng tuyệt vời!`;
    }
    if (weather === "rainy") {
        return `Hello ${name},Hôm nay trời mưa, nhớ mang ô nhé!`;
    } else
        return `Hello ${name},Hôm nay thời tiết bình thường!`;
}
console.log(grettingWithWeather("Hà", "sunny"));
console.log(grettingWithWeather("Hà", "rainy"));
console.log(grettingWithWeather("Hà", "cloudy"));