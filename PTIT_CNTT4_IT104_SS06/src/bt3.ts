/**
 * ================================
 * 1. Khái niệm tính trừu tượng (Abstraction) trong OOP
 * ================================
 * - Tính trừu tượng là khả năng ẩn đi chi tiết triển khai bên trong,
 *   chỉ cung cấp cho bên ngoài những gì cần thiết.
 * - Trong TypeScript, abstraction được thể hiện qua abstract class và interface.
 * - Lợi ích: Giúp code dễ mở rộng, bảo trì, tập trung vào "cái gì" (what) hơn là "như thế nào" (how).
 * 
 * ================================
 * 2. Phân biệt Abstract Method và Method thông thường
 * ================================
 * Abstract Method:
 *  - Chỉ khai báo tên, kiểu trả về, tham số.
 *  - Không có phần thân (body).
 *  - Chỉ tồn tại trong abstract class hoặc interface.
 *  - Bắt buộc class con phải override (ghi đè) để cung cấp logic.
 * 
 * Method thông thường:
 *  - Có đầy đủ khai báo và phần thân (logic).
 *  - Có thể tồn tại trong bất kỳ class nào.
 *  - Class con có thể dùng ngay hoặc override nếu muốn.
 * 
 * ================================
 * 3. Khi nào sử dụng?
 * ================================
 * - Abstract method: Khi muốn ép buộc mọi class con phải định nghĩa cách thực hiện riêng.
 * - Method thông thường: Khi đã có logic mặc định, muốn chia sẻ cho nhiều class con.
 */

// Lớp trừu tượng (abstract class)
abstract class Job1 {
    protected type: string;

    constructor(type: string) {
        this.type = type;
    }

    // Method thông thường (có sẵn logic)
    printType(): void {
        console.log(`Loại công việc: ${this.type}`);
    }

    // Abstract method (chưa có logic, bắt buộc class con phải viết)
    abstract calculateSalary(): number;
}

// Class con 1: Việc làm bán thời gian
class ParttimeJob1 extends Job {
    private workingHour: number;

    constructor(workingHour: number) {
        super("Part-time");
        this.workingHour = workingHour;
    }

    // Ghi đè abstract method
    calculateSalary(): number {
        return 30000 * this.workingHour;
    }
}

// Class con 2: Việc làm toàn thời gian
class FulltimeJob1 extends Job {
    constructor() {
        super("Full-time");
    }

    // Ghi đè abstract method
    calculateSalary(): number {
        return 1000000;
    }
}

// ===== Demo =====
const jobs: Job[] = [
    new ParttimeJob(20), // 20 giờ làm
    new FulltimeJob()
];

jobs.forEach(job => {
    job.printType(); // Gọi method thường (logic của lớp cha)
    console.log(`Lương: ${job.calculateSalary()}`); // Gọi method abstract (logic riêng từng lớp con)
});
