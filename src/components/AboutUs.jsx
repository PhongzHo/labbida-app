import { labAboutus, nhanVien } from "../assets";

const AboutUs = () => {
  return (
    <div class="bg-black relative flex min-h-screen flex-col overflow-hidden py-4 sm:py-12">
      <div className="border rounded-lg border-white mx-8">
        <div className="justify-center relative flex p-2 cursor-default text-white text-3xl font-semibold ">
          Về Chúng Tôi
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 px-6 py-4">
        <div>
          <img src={labAboutus} className="h-[390px]" alt="lab-billiards" />
        </div>
        <div className="text-white text-2xl py-4 font-semibold cursor-default">
          Sứ Mệnh
          <div className="text-base py-4 cursor-default">
            <span className="font-semibold">LAB Billiards</span> không chỉ là
            một câu lạc bộ bida thông thường, mà là điểm đến độc đáo mang đến
            trải nghiệm dịch vụ vượt trội. Chúng tôi tận tâm xây dựng không gian
            thân thiện, nơi mọi người không chỉ đến để chơi bida mà còn để tận
            hưởng những khoảnh khắc giải trí đầy sáng tạo. Tại LAB, chúng tôi
            tạo ra không khí thoải mái, sôi động và thân thiện, nơi mà khách
            hàng cảm thấy như ở nhà. Đội ngũ nhân viên chuyên nghiệp và nhiệt
            tình sẵn sàng phục vụ để đảm bảo mọi trải nghiệm của khách hàng là
            đáng nhớ. LAB không chỉ là nơi để thể hiện kỹ năng chơi bida, mà còn
            là không gian gặp gỡ, kết nối và chia sẻ niềm đam mê bida cùng bạn
            bè. Hãy đến LAB và trải nghiệm sự khác biệt.{" "}
          </div>
          <div className="font-semibold cursor-default">Giá Trị</div>
          <div className="text-base py-4 cursor-default">
            <span className="font-semibold">LAB Billiards</span> cam kết không
            ngừng cải tiến, nâng cấp dựa trên nhu cầu của khách hàng. Đặc biệt,
            LAB Billiards hướng đến mục tiêu củng cố thương hiệu LAB từ đó mở
            rộng.{" "}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 px-6 py-2 cursor-default">
        <div className="text-white text-2xl font-semibold">
          Đội Ngũ Nhân Sự
          <div className="text-base py-4">
            Đội ngũ nhân sự của LAB được xây dựng dựa trên <span className="font-bold underline"> tiêu
            chí 4T: Trẻ trung, Tận tâm, Tử tế và Trung thực</span>. Mỗi thành viên
            trong đội ngũ đều được lựa chọn kỹ lưỡng để đảm bảo sự chuyên nghiệp
            và chất lượng dịch vụ tốt nhất cho khách hàng.
            Với sự nhiệt huyết và chuyên nghiệp của mình, họ sẽ luôn là người bạn đồng hành đáng tin cậy trong mỗi trận đấu billiards tại LAB.
          </div>
        </div>
        <div>
          <img src={nhanVien} alt="doi-ngu-lab"/>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
