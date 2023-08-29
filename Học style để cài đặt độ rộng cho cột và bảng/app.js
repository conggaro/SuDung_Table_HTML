// lấy phần tử tbody
let phanTu_tbody = document.querySelector("#noi-dung");

// lấy phần tử tfoot
let phanTu_tfoot = document.querySelector("#diem-tong-ket");

// cho 1 mảng
// chứa nhiều đối tượng
let mang = [
    {
        ho_ten: "Nguyễn Văn An",
        ngay_sinh: "01/01/1999",
        gioi_tinh: "Nam",
        diemToan: 9.5,
        diemVan: 8
    },
    {
        ho_ten: "Nguyễn Văn Bình",
        ngay_sinh: "24/02/2000",
        gioi_tinh: "Nam",
        diemToan: 9,
        diemVan: 8.8
    },
    {
        ho_ten: "Phạm Lan Chi",
        ngay_sinh: "31/12/1991",
        gioi_tinh: "Nữ",
        diemToan: 9.9,
        diemVan: 8.6
    },
    {
        ho_ten: "Trần Đại Dương",
        ngay_sinh: "23/04/2003",
        gioi_tinh: "Nam",
        diemToan: 8,
        diemVan: 8
    },
    {
        ho_ten: "Vũ Tiến Giang",
        ngay_sinh: "11/06/2002",
        gioi_tinh: "Nam",
        diemToan: 7,
        diemVan: 8.5
    },
    {
        ho_ten: "Nguyễn Văn Huy",
        ngay_sinh: "28/10/1998",
        gioi_tinh: "Nam",
        diemToan: 9,
        diemVan: 8.9
    }
];

// tạo biến khởi tạo
// để chuẩn bị cho công việc
// kết xuất (render) dữ liệu thành nội dung trong bảng
let khoi_tao = "";

// sử dụng vòng lặp forEach trong JavaScript
mang.forEach(function(item){
    let data =  `
                    <tr>
                        <td>${item.ho_ten}</td>
                        <td>${item.ngay_sinh}</td>
                        <td>${item.gioi_tinh}</td>
                        <td>${item.diemToan}</td>
                        <td>${item.diemVan}</td>
                        <td>${(item.diemToan + item.diemVan) / 2}</td>
                    </tr>
                `;

    khoi_tao = khoi_tao + data;
});

// bây giờ
// tôi sẽ đưa tất cả dữ liệu vào thẻ tbody
phanTu_tbody.innerHTML = khoi_tao;

// tính điểm trung bình của cả lớp
let diem_TB_CaLop = 0;

mang.forEach(function(item){
    let diem = (item.diemToan + item.diemVan) / 2;

    diem_TB_CaLop = diem_TB_CaLop + diem;
});

diem_TB_CaLop = diem_TB_CaLop / mang.length;

// tạo biến ketQua
// dùng để kết xuất ra code HTML
let ketQua =    `
                    <tr>
                        <td colspan="5">Điểm trung bình của cả lớp</td>
                        <td>${diem_TB_CaLop}</td>
                    </tr>
                `;

phanTu_tfoot.innerHTML = ketQua;