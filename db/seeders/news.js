"use strict";

let categories = [];

for (var i = 0; i < 100; i++) {
 
  categories.push({
    id: i,
    idCategory: Math.floor(Math.random() * 5 + 1),
    title: "Trung Quốc và Hong Kong xem xét nới lỏng quy định nhập cảnh " + i,
    param: "trung-quoc-va-hong-kong-xem-xet-noi-long-quy-dinh-nhap-canh-" + i,
    description: `Trung Quốc và Hong Kong là những điểm đến vẫn chưa mở du lịch do thực hiện chiến lược "Zero Covid-19". Mới đây, Chính phủ Trung Quốc và Hong Kong đã xem xét nới lỏng quy định nhập cảnh dành cho khách quốc tế.`,
    image: "resize_WRmhc8.PNG",
    content: `<h2><strong>Trung Quốc nới lỏng quy định nhập cảnh.</strong></h2><p>&nbsp;</p><p>Ngày 19/9, Bộ Văn hóa và Du lịch Trung Quốc cho biết Chính phủ nước này sẽ nới lỏng một số quy định nhập cảnh.</p><p>Theo dự thảo được công bố, các đoàn du lịch của các công ty lữ hành trong nước có thể tổ chức các tour tham quan dọc biên giới và chọn cảng để xuất, nhập cảnh "một cách linh hoạt". Tuy nhiên, địa điểm cũng như thời gian chính xác du khách có thể ghé thăm chưa được công bố.</p><p>&nbsp;</p><p>Hiện, Bộ Văn hóa và Du lịch Trung Quốc cũng không nêu rõ việc người nhập cảnh có phải thực hiện các yêu cầu kiểm dịch của Trung Quốc đối với khách du lịch như một tuần tự cách ly tại khách sạn và 3 ngày giám sát.</p><p>Theo <i>Reuters</i>, sự thay đổi này có thể sẽ được ưu tiên cho việc đi lại với các nước có chung biên giới, bao gồm Nga, Mông Cổ, Myanmar, Lào và Việt Nam.</p><p>&nbsp;</p><figure class="image"><img src="http://localhost:3000/EJs8BD.PNG"></figure><p>&nbsp;</p><p>Sau hơn 2 năm đóng cửa biên giới với khách du lịch nước ngoài vì dịch Covid-19, đến nay, Trung Quốc chỉ cho phép một số người nước ngoài được phép nhập cảnh, chủ yếu là chuyên gia, du học sinh, người có thị thực lao động,...</p><p>&nbsp;</p><h3><strong>Hong Kong cân nhắc cho tự cách ly tại nhà.</strong></h3><p>&nbsp;</p><p>Ngày 20/9, Trưởng khu hành chính đặc biệt Hong Kong, Lý Gia Siêu cho biết mục tiêu điều chỉnh là cho phép Hong Kong kết nối với thế giới nhiều nhất có thể trong khi kiểm soát xu hướng của dịch bệnh và giảm bớt sự bất tiện của việc phải cách ly.</p><p>Theo các quy định hiện nay, người nhập cảnh phải xét nghiệm acid nucleic và xét nghiệm nhanh kháng nguyên tại sân bay sau khi đến Hong Kong. Nếu kết quả xét nghiệm nhanh âm tính, họ sẽ được đưa đến khách sạn cách ly chỉ định và chờ kết quả xét nghiệm axit nucleic.</p><p>Chính phủ Hong Kong đang cân nhắc thay đổi quy định bắt buộc cách ly tại khách sạn thành cách ly tại nhà dành cho du khách.</p><p>&nbsp;</p><figure class="image"><img src="http://localhost:3000/bS6jZS.PNG"></figure><p>&nbsp;</p><p>Hãng hàng không Cathay Pacific cho biết họ sẽ mở thêm chuyến bay phục vụ du khách khi quyết định này có hiệu lực. "Những thay đổi này cho phép chúng tôi tăng thêm nhiều chuyến bay, tạo động lực phát triển và tiếp tục phục hồi", Giám đốc điều hành hãng hàng không, Augustus Tang, cho biết.</p><p>Tờ <i>South China Morning Post </i>đã đưa tin du khách nước ngoài có thể lựa chọn tự theo dõi sức khỏe tại nhà trong 7 ngày khi đến Hong Kong. Tuy nhiên, đây chưa phải thông tin chính thức.</p><p>&nbsp;</p>`,
    updatedAt: new Date(new Date() + i * 10000),
    createdAt: new Date(new Date() + i * 10000),
    views: Math.floor(Math.random() * (1000000 - 10000 + 1) + 10000),
  });
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("News", categories, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("News", null, {});
  },
};
