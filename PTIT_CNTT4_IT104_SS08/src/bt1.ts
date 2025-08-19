enum WeekDays {
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật"
}

function printEnumValues<T extends object>(enumObj: T): void {
    (Object.values(enumObj) as string[]).forEach(value => {
        console.log(value);
    });
}

printEnumValues(WeekDays);
