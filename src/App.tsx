/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Calendar, 
  Compass, 
  BookOpen, 
  ShieldCheck, 
  Heart, 
  Zap, 
  Clock, 
  MessageCircle, 
  ArrowRight,
  ChevronDown,
  Star,
  Brain,
  Target,
  Check,
  AlertTriangle
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  },
  viewport: { once: true }
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30">
      {/* Floating Zalo Button */}
      <a 
        href="https://zalo.me/0965414632" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#0068ff] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        title="Chat Zalo"
      >
        <MessageCircle size={28} />
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-accent/10 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Huyền Sĩ Logo" className="h-10 w-auto opacity-90" referrerPolicy="no-referrer" />
            <div className="serif text-2xl font-semibold tracking-wider text-accent">
              HUYỀN SĨ
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#philosophy" className="hover:text-accent transition-colors">Triết lý</a>
            <a href="#pricing" className="hover:text-accent transition-colors">Dịch vụ</a>
            <a href="#training" className="hover:text-accent transition-colors">Đào tạo</a>
            <a href="#workflow" className="hover:text-accent transition-colors">Nguyên tắc</a>
            <a href="#about" className="hover:text-accent transition-colors">Về tôi</a>
          </div>
          <a href="#workflow" className="bg-accent text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-accent/90 transition-all shadow-lg shadow-accent/20">
            Đặt lịch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-radial-gradient from-accent/5 to-transparent opacity-50" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-12 relative inline-block">
              <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
              <img 
                src="/logo.png" 
                alt="Huyền Sĩ Logo" 
                className="relative z-10 max-w-full md:max-w-3xl mx-auto rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.3)] border border-white/10" 
                referrerPolicy="no-referrer"
              />
            </div>
            
            <span className="inline-block px-4 py-1 border border-accent/30 rounded-full text-accent text-xs tracking-[0.3em] uppercase mb-6 font-semibold">
              Luận Bát Tự | Phong Thủy
            </span>
            <h1 className="serif text-5xl md:text-8xl font-light mb-8 leading-tight tracking-tight">
              Huyền Sĩ <br />
              <span className="italic text-accent">Huỳnh Đức Sơn</span>
            </h1>
            <p className="serif text-xl md:text-2xl italic text-ink/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              “Không nói điều bạn thích nghe – <br className="md:hidden" /> chỉ nói điều bạn cần biết.”
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <a href="#workflow" className="w-full md:w-auto bg-accent text-white px-10 py-4 rounded-full text-lg font-medium hover:scale-105 transition-transform shadow-xl shadow-accent/30 flex items-center justify-center gap-2">
                Đặt lịch xem Bát Tự <ArrowRight size={20} />
              </a>
              <a 
                href="https://www.youtube.com/playlist?list=PLwwNdFoFbaL4Jyt4n4QGD6dEFK_-0bmii" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full md:w-auto border border-accent/30 px-10 py-4 rounded-full text-lg font-medium hover:bg-accent/5 transition-colors flex items-center justify-center"
              >
                Xem luận giải thật
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-accent/50"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Cuộn xuống</span>
          <ChevronDown className="animate-bounce" size={20} />
        </motion.div>
      </section>

      {/* Core Values */}
      <section id="philosophy" className="py-24 bg-white border-y border-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            {...staggerContainer}
            className="grid md:grid-cols-3 gap-12"
          >
            <motion.div variants={fadeIn} className="text-center p-8 rounded-3xl hover:bg-paper transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                <Compass size={32} />
              </div>
              <h3 className="serif text-2xl font-semibold mb-4">Luận quá khứ để chứng minh</h3>
              <p className="text-ink/60 leading-relaxed">Mọi sự kiện đã qua đều để lại dấu vết. Tôi bắt đầu từ việc nghiệm lý quá khứ để xác thực độ chính xác của lá số.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center p-8 rounded-3xl hover:bg-paper transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                <Zap size={32} />
              </div>
              <h3 className="serif text-2xl font-semibold mb-4">Phân tích rõ ràng, logic</h3>
              <p className="text-ink/60 leading-relaxed">Vận mệnh không phải là sự ngẫu nhiên. Tôi giải mã các mối liên hệ ngũ hành một cách khoa học và có hệ thống.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center p-8 rounded-3xl hover:bg-paper transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                <ShieldCheck size={32} />
              </div>
              <h3 className="serif text-2xl font-semibold mb-4">Không mê tín, chung chung</h3>
              <p className="text-ink/60 leading-relaxed">Tôi từ chối những lời phán vô căn cứ. Mỗi lời luận giải đều đi kèm với giải pháp thực tế cho cuộc sống của bạn.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The "Why 1M" Section */}
      <section id="pricing" className="py-32 bg-paper relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="serif text-4xl md:text-6xl font-light mb-6">Vì sao mức giá là <span className="text-accent italic">1.000.000 VNĐ?</span></h2>
            <p className="text-ink/60 max-w-2xl mx-auto leading-relaxed">
              Tôi biết, bạn sẽ thấy rất nhiều mức giá khác nhau. Từ vài trăm nghìn đến hàng triệu đồng. 
              Vậy tại sao tôi chọn con đường ở giữa?
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Point 1 */}
            <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h3 className="serif text-3xl font-semibold mb-6 flex items-center gap-4">
                  <span className="text-accent/30 text-5xl italic">01.</span>
                  Không làm "xem cho có"
                </h3>
                <div className="space-y-4 text-ink/70 leading-relaxed">
                  <p>Ở mức giá thấp, phần lớn là người mới học hoặc luận giải phụ thuộc quá nhiều vào tài liệu và AI.</p>
                  <p className="font-medium text-ink">Bát Tự không phải “bói hên xui” hay “lên đồng phán bừa”.</p>
                  <p>Đây là một hệ thống cần kiến thức nền tảng sâu và khả năng bóc tách như cách một bác sĩ đọc bệnh án: có logic – có đối chiếu – có kiểm chứng.</p>
                  <p className="italic border-l-2 border-accent/20 pl-4 py-2">
                    "Phải luận đúng quá khứ – thì mới có cơ sở nói về tương lai. Nếu quá khứ còn sai, thì mọi dự đoán phía sau đều không có giá trị."
                  </p>
                  <p>Tôi không cho phép mình phán nhanh, nói đại hay “tùy duyên trúng sai”. Và điều đó không thể nằm trong một mức giá “xem cho có”.</p>
                </div>
              </div>
              <div className="order-1 md:order-2 rounded-3xl overflow-hidden aspect-video bg-accent/5 flex items-center justify-center border border-accent/10">
                 <BookOpen size={80} className="text-accent/20" />
              </div>
            </motion.div>

            {/* Point 2 */}
            <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-3xl overflow-hidden aspect-video bg-accent/5 flex items-center justify-center border border-accent/10">
                 <Star size={80} className="text-accent/20" />
              </div>
              <div>
                <h3 className="serif text-3xl font-semibold mb-6 flex items-center gap-4">
                  <span className="text-accent/30 text-5xl italic">02.</span>
                  Không xây dựng hào quang
                </h3>
                <div className="space-y-4 text-ink/70 leading-relaxed">
                  <p>Tôi không chọn con đường xây dựng hình ảnh hào nhoáng, không chạy quảng cáo, không seeding.</p>
                  <p>Vì vậy, tôi không cần tính thêm chi phí "hào quang" vào giá dịch vụ. Mức giá này phản ánh giá trị thật, không bị thổi phồng.</p>
                </div>
              </div>
            </motion.div>

            {/* Point 3 & 4 */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div {...fadeIn} className="bg-white p-10 rounded-[2rem] border border-accent/5 shadow-sm">
                <h3 className="serif text-2xl font-semibold mb-6 flex items-center gap-4">
                  <span className="text-accent/30 text-4xl italic">03.</span>
                  Chọn người phù hợp
                </h3>
                <p className="text-ink/60 leading-relaxed">
                  Tôi không làm việc với những người xem cho vui hay tò mò nhất thời. Sự nghiêm túc cần bắt đầu từ chính quyết định đầu tư cho bản thân của bạn.
                </p>
              </motion.div>
              <motion.div {...fadeIn} className="bg-white p-10 rounded-[2rem] border border-accent/5 shadow-sm">
                <h3 className="serif text-2xl font-semibold mb-6 flex items-center gap-4">
                  <span className="text-accent/30 text-4xl italic">04.</span>
                  Quá trình đồng hành
                </h3>
                <ul className="text-ink/60 space-y-3">
                  <li className="flex items-center gap-2"><Clock size={16} className="text-accent" /> 60–90 phút (không giới hạn nếu cần)</li>
                  <li className="flex items-center gap-2"><MessageCircle size={16} className="text-accent" /> Tương tác sâu, không phán nhanh</li>
                  <li className="flex items-center gap-2"><Heart size={16} className="text-accent" /> Tiếp tục hỗ trợ giải đáp dài hạn</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-world Difference Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <h2 className="serif text-4xl md:text-6xl font-light mb-6 italic text-accent">Sự khác biệt thực tế</h2>
            <p className="text-ink/60 max-w-2xl mx-auto leading-relaxed">
              Bạn tìm đến tôi không chỉ để biết "mình là ai", mà để biết "mình cần làm gì".
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div {...fadeIn} className="p-10 rounded-[3rem] bg-paper border border-accent/5">
              <h3 className="serif text-2xl font-semibold mb-6">Kinh nghiệm đời thực</h3>
              <div className="space-y-4 text-ink/70 leading-relaxed">
                <p>Ngoài hơn 5 năm học thuật, tôi còn có <span className="font-bold text-accent">10 năm kinh nghiệm</span> trong kinh doanh và quản lý nhân sự.</p>
                <p>Điều này giúp tôi nhìn ra nguyên nhân gốc rễ và đưa ra hướng giải quyết thực tế, đặc biệt ở các khía cạnh: <span className="italic">Tài chính, Kinh doanh, Sự nghiệp.</span></p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-10 rounded-[3rem] bg-paper border border-accent/5">
              <h3 className="serif text-2xl font-semibold mb-6">Xem đúng chưa đủ – Phải có giải pháp</h3>
              <div className="space-y-4 text-ink/70 leading-relaxed">
                <p>Xem xong mà để đó thì không có giá trị. Tôi không làm kiểu "nói cho hay" rồi để bạn tự xoay sở.</p>
                <p>Tôi làm để bạn <span className="font-bold text-accent">Hiểu – và Làm được</span>. Giúp bạn tìm ra nội lực và giải pháp thực sự để thay đổi cuộc đời mình.</p>
              </div>
            </motion.div>
          </div>

          <motion.div {...fadeIn} className="text-center">
            <a 
              href="https://zalo.me/g/dcaxno589" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-4 transition-all"
            >
              Tham gia nhóm chat cộng đồng <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Training & Services Section */}
      <section id="training" className="py-32 bg-paper">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-bold mb-4 block">Chương trình đào tạo</span>
            <h2 className="serif text-4xl md:text-6xl font-light mb-6">🎓 ĐÀO TẠO HỌC VIÊN <br /><span className="text-accent italic">BÁT TỰ MANH PHÁI</span></h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Course Details Card */}
            <motion.div {...fadeIn} className="lg:col-span-2 space-y-12">
              <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-accent/5 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-accent text-white px-8 py-2 rounded-bl-3xl font-bold text-sm tracking-widest uppercase">
                  Khóa học thực chiến
                </div>
                
                <h3 className="serif text-3xl font-semibold mb-8">🔥 Khóa học Bát Tự Manh Phái <br /><span className="text-xl text-ink/50 font-normal">(Sơ cấp → Trung cấp)</span></h3>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-ink/70">
                      <Clock className="text-accent" size={20} />
                      <span>Thời lượng: <span className="font-bold text-ink">12 tháng</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/70">
                      <Calendar className="text-accent" size={20} />
                      <span>Lịch học: <span className="font-bold text-ink">Tối Thứ 6 hàng tuần</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/70">
                      <BookOpen className="text-accent" size={20} />
                      <span>Tổng: <span className="font-bold text-ink">50 modules</span> (Nền tảng → Thực chiến)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-ink/70">
                      <Zap className="text-accent" size={20} />
                      <span>Hình thức: <span className="font-bold text-ink">Online & Offline (Linh hoạt)</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/70">
                      <Star className="text-accent" size={20} />
                      <span>Học xong: <span className="font-bold text-ink">Tự luận – Kiểm chứng – Hành nghề</span></span>
                    </div>
                  </div>
                </div>

                <div className="bg-paper p-8 rounded-3xl border border-accent/10 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-accent font-bold mb-1">Học phí trọn gói</p>
                    <p className="text-4xl font-bold text-ink">10.000.000 <span className="text-xl font-normal text-ink/40">VNĐ</span></p>
                  </div>
                  <div className="flex flex-col gap-3 w-full md:w-auto">
                    <a href="https://zalo.me/0965414632" target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-8 py-4 rounded-full font-medium text-center hover:scale-105 transition-transform shadow-lg shadow-accent/20">
                      Đăng ký học ngay
                    </a>
                  </div>
                </div>
              </div>

              {/* Why 10M Section */}
              <div className="space-y-8">
                <h3 className="serif text-3xl font-light flex items-center gap-4">
                  <span className="w-12 h-px bg-accent/30" />
                  ⚡ Tại sao chỉ 10 triệu?
                </h3>
                <p className="italic text-ink/50">“Tôi biết rõ ngoài kia một khóa bài bản không dưới 30 triệu.”</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Không bán giấc mơ",
                      desc: "Tôi muốn người học áp dụng được. Học xong phải tự luận được, không phải học cho vui."
                    },
                    {
                      title: "Mở rộng người học đúng",
                      desc: "Không phải lọc bằng tiền. Người có tư duy vẫn nên có cơ hội tiếp cận học thuật chuẩn."
                    },
                    {
                      title: "Lan truyền cái đúng",
                      desc: "Thị trường loạn vì người không hiểu bản chất vẫn đi dạy. Tôi dạy để giảm cái sai đó."
                    }
                  ].map((item, i) => (
                    <div key={i} className="p-6 bg-white rounded-2xl border border-accent/5">
                      <h4 className="font-bold mb-3 text-accent">{i + 1}. {item.title}</h4>
                      <p className="text-sm text-ink/60 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-center font-medium text-ink/80 italic">👉 Nói thẳng: Giá thấp không phải vì giá trị thấp – mà vì tôi chọn cách chơi khác.</p>
              </div>
            </motion.div>

            {/* Sidebar Details */}
            <motion.div {...fadeIn} className="space-y-12">
              {/* Who is it for */}
              <div className="bg-ink text-paper p-10 rounded-[3rem] shadow-2xl">
                <h4 className="serif text-2xl mb-8 flex items-center gap-3">
                  <Brain size={24} className="text-accent" />
                  Dành cho ai?
                </h4>
                <div className="space-y-6">
                  {[
                    { t: "Người tìm định hướng", d: "Muốn hiểu rõ bản thân, biết mình hợp gì – nên đi đường nào. Không còn quyết định mù mờ." },
                    { t: "Người muốn hành nghề", d: "Trở thành người luận mệnh có năng lực thật. Phân tích và chịu trách nhiệm với lời nói." },
                    { t: "Nhà quản lý & lãnh đạo", d: "Ứng dụng để nhìn người, dùng người, chọn đối tác và tránh sai lầm chiến lược." },
                    { t: "Người yêu huyền học", d: "Không muốn phụ thuộc thầy, nghe luận mơ hồ. Muốn tự xem – tự hiểu – tự kiểm chứng." }
                  ].map((item, i) => (
                    <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                      <p className="font-bold text-accent mb-1">{item.t}</p>
                      <p className="text-xs text-paper/50 leading-relaxed">{item.d}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you get */}
              <div className="p-10 rounded-[3rem] border border-accent/10 bg-white">
                <h4 className="serif text-2xl mb-8 flex items-center gap-3">
                  <Target size={24} className="text-accent" />
                  Bạn nhận được gì?
                </h4>
                <ul className="space-y-4">
                  {[
                    "Hiểu bản chất Bát Tự Manh Phái",
                    "Tự luận được lá số từ cơ bản → nâng cao",
                    "Biết cách kiểm chứng bằng quá khứ",
                    "Có tư duy logic, không bị “dẫn dắt tâm linh”",
                    "Có thể bắt đầu hành nghề (nếu nghiêm túc)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-ink/70">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 mt-0.5">
                        <Check size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Warning */}
              <div className="p-8 rounded-3xl bg-red-50 border border-red-100">
                <h4 className="font-bold text-red-600 mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} />
                  Lưu ý quan trọng
                </h4>
                <p className="text-xs text-red-800/70 mb-4">Đây không phải khóa học cho người muốn nghe cho vui, học nhanh - ăn liền, hoặc không chịu tư duy.</p>
                <div className="space-y-2">
                  <p className="text-xs font-bold text-red-900">👉 Nếu bạn cần “niềm tin”, khóa này không dành cho bạn</p>
                  <p className="text-xs font-bold text-red-900">👉 Nếu bạn cần “sự thật”, bạn nên học</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Training CTA Footer */}
          <motion.div {...fadeIn} className="mt-20 flex flex-wrap justify-center gap-6">
            <a href="https://zalo.me/0965414632" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
              Xem nội dung học thử <ArrowRight size={20} />
            </a>
            <span className="text-accent/20 hidden md:block">|</span>
            <a href="https://zalo.me/0965414632" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-accent font-bold hover:gap-4 transition-all">
              Inbox để được tư vấn lộ trình <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* The "Dao" Section */}
      <section className="py-32 bg-ink text-paper relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px]" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div {...fadeIn} className="text-center mb-16">
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-bold mb-4 block">Nguyên tắc cốt lõi</span>
            <h2 className="serif text-4xl md:text-6xl font-light mb-8 italic">Về “Đạo” – Lý do thực sự</h2>
          </motion.div>

          <motion.div {...fadeIn} className="space-y-8 text-lg md:text-xl font-light leading-relaxed text-paper/80">
            <p>
              Làm huyền học mà không giữ đạo, thì sớm muộn cũng sai đường. 
              Tôi có 10 phần, tôi chỉ giữ lại 5 phần cho bản thân để duy trì cuộc sống và đam mê.
            </p>
            <div className="bg-white/5 border-l-4 border-accent p-8 rounded-r-2xl">
              <p className="italic mb-4 text-paper">"5 phần còn lại dùng để làm thiện – tích phước."</p>
              <p className="text-sm text-paper/60">
                Bởi dù tự tin đến đâu, huyền học vẫn tồn tại sai số bất khả kháng. 
                Tôi chọn cách tích phước để tạo ứng kỳ tốt cho chính tôi khi luận giải và cho bạn khi tiếp nhận.
              </p>
            </div>
            <p className="text-center pt-8 serif text-2xl text-accent">“Phước chủ – May thầy”</p>
          </motion.div>
        </div>
      </section>

      {/* Energy & Experience */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeIn}>
              <h2 className="serif text-4xl font-light mb-8">Giới hạn năng lượng</h2>
              <div className="p-8 bg-paper rounded-3xl border border-accent/10 relative">
                <div className="absolute -top-4 -right-4 bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                  2
                </div>
                <p className="text-xl serif italic mb-4">Tối đa 1 ngày tôi chỉ nhận 2 lá số</p>
                <p className="text-ink/60 leading-relaxed">
                  Mỗi lá số cần tập trung cao độ, suy luận, nghiệm lý và giữ trạng thái tinh thần ổn định. 
                  Tôi không "làm giá", tôi chỉ hiểu rõ giới hạn để làm đúng và có trách nhiệm.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <h2 className="serif text-4xl font-light mb-8">Giá trị từ trải nghiệm</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="text-accent font-bold text-3xl serif">5+</div>
                  <div>
                    <h4 className="font-semibold mb-1">Năm nghiên cứu</h4>
                    <p className="text-sm text-ink/60">Học và nghiên cứu liên tục về Bát Tự và Phong Thủy.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-accent font-bold text-3xl serif">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Năm luận giải miễn phí</h4>
                    <p className="text-sm text-ink/60">Tích lũy thực tế từ hàng trăm trường hợp khác nhau.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-accent font-bold text-3xl serif">∞</div>
                  <div>
                    <h4 className="font-semibold mb-1">Đồng hành trọn đời</h4>
                    <p className="text-sm text-ink/60">Không chỉ là một buổi xem, mà là một hành trình hỗ trợ.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Working Principles & Bank Account */}
      <section id="workflow" className="py-32 bg-paper relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Principles */}
            <motion.div {...fadeIn}>
              <h2 className="serif text-4xl md:text-5xl font-light mb-10 italic text-accent">Nguyên tắc làm việc</h2>
              <div className="space-y-6">
                {[
                  "Anh/chị /em/ cô / chú muốn đặt lịch hãy tìm hiểu thật kỹ tôi trước khi quyết định.",
                  "Luận giải trực tiếp hoặc qua Zoom. Chuyển khoản trước để xác nhận lịch hẹn.",
                  "Nếu muốn đặt lịch, vui lòng cho tôi biết ngày giờ phù hợp trước ít nhất 2 ngày.",
                  "Kết bạn <a href='https://zalo.me/0965414632' target='_blank' rel='noopener noreferrer' class='text-accent font-bold underline underline-offset-4'>Zalo</a>/<a href='https://www.facebook.com/ucson.52637' target='_blank' rel='noopener noreferrer' class='text-accent font-bold underline underline-offset-4'>Facebook</a> để gửi thông tin chuyển khoản và lịch mong muốn để tôi sắp xếp và chốt hẹn."
                ].map((text, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white p-6 rounded-2xl border border-accent/5 shadow-sm">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 font-serif italic">
                      {i + 1}
                    </div>
                    <p className="text-ink/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: text }} />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Bank Account */}
            <motion.div {...fadeIn} className="relative">
              <div className="absolute inset-0 bg-orange-500 rounded-[3rem] rotate-3 opacity-10" />
              <div className="relative bg-white p-8 md:p-12 rounded-[3rem] border border-orange-100 shadow-xl text-center">
                <div className="flex justify-between items-center mb-8 px-4">
                  <div className="text-orange-600 font-bold text-xl flex items-center gap-1">
                    <span className="text-red-600">Viet</span>QR
                  </div>
                  <div className="text-blue-800 font-black text-2xl italic">VIB</div>
                </div>

                <div className="space-y-1 mb-8">
                  <h3 className="text-xl font-bold text-gray-800 uppercase tracking-tight">HUỲNH TRỌNG SƠN</h3>
                  <p className="text-2xl font-bold text-gray-700 tracking-widest">039070393</p>
                </div>

                <div className="bg-white p-6 rounded-3xl border-2 border-gray-50 inline-block mb-8 shadow-inner">
                  <img 
                    src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=00020101021138580010A0000007270128000697044101140390703930208QRIBFTTA5303704540810000005802VN620063048E6A" 
                    alt="QR Thanh toán VIB" 
                    className="w-64 h-64 md:w-72 md:h-72 object-contain"
                  />
                </div>

                <div className="flex justify-center gap-4 items-center">
                  <div className="flex items-center gap-1">
                    <span className="text-red-600 font-bold text-xs italic">Viet</span>
                    <span className="bg-red-600 text-white text-[8px] px-1 rounded">Pay</span>
                  </div>
                  <div className="text-blue-900 font-bold text-xs italic">napas <span className="text-orange-500">247</span></div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-24 bg-paper">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <h2 className="serif text-3xl md:text-4xl font-light mb-8">Cơ sở để bạn tin tưởng tôi?</h2>
            <p className="text-ink/60 mb-12 leading-relaxed italic">
              Thẳng thắn: Không có bảo chứng tuyệt đối. <br />
              Cách duy nhất là tự tìm hiểu, xem cách tôi chia sẻ và cảm nhận xem có phù hợp hay không. 
              Mọi thứ đều là hữu duyên.
            </p>
            <div className="h-px w-24 bg-accent/30 mx-auto mb-12" />
          </motion.div>
        </div>
      </section>

      {/* Footer / Final CTA */}
      <footer className="py-32 bg-white border-t border-accent/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeIn}>
            <div className="mb-12">
              <img src="/logo.png" alt="Huyền Sĩ Logo" className="h-20 w-auto mx-auto opacity-80 grayscale hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
            </div>
            
            <h2 className="serif text-4xl md:text-6xl font-light mb-12 leading-tight">
              Nếu bạn cần một người đi cùng bạn trên hành trình <br />
              <span className="text-accent italic">hiểu và thay đổi cuộc đời...</span>
            </h2>
            <p className="text-xl serif italic text-ink/70 mb-12">Tôi ở đây.</p>
            
            <a href="#workflow" className="bg-accent text-white px-12 py-5 rounded-full text-xl font-medium hover:scale-105 transition-transform shadow-2xl shadow-accent/40 mb-16 inline-block">
              Đặt lịch ngay
            </a>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pt-16 border-t border-accent/5">
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Zalo</p>
                <a href="https://zalo.me/0965414632" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">0965 414 632</a>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Facebook</p>
                <a href="https://www.facebook.com/ucson.52637" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">Huyền Sĩ</a>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">TikTok</p>
                <a href="https://www.tiktok.com/@huynhducson.bazi" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">@huynhducson.bazi</a>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">YouTube</p>
                <a href="https://www.youtube.com/@ducsonmanhphai" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">Đức Sơn Manh Phái</a>
              </div>
              <div className="text-center">
                <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Nhóm Chat</p>
                <a href="https://zalo.me/g/dcaxno589" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent transition-colors">Tham gia ngay</a>
              </div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-accent/5">
              <p className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2">Địa chỉ</p>
              <p className="text-sm text-ink/60">Đường số 16, Phường Bình Hưng Hòa, TPHCM</p>
            </div>
            
            <p className="mt-20 text-[10px] uppercase tracking-[0.3em] text-ink/30">
              © 2026 HUYỀN SĨ – HUỲNH ĐỨC SƠN. ALL RIGHTS RESERVED.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}
