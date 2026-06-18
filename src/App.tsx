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
  AlertTriangle,
  Facebook,
  Home,
  Building2,
  ShoppingBag,
  MapPin,
  Layers,
  Coins,
  HeartHandshake,
  Sparkles,
  TrendingUp,
  RefreshCw
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
      {/* Floating Chat Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        {/* Facebook Messenger Button */}
        <a 
          href="https://m.me/ucson.52637" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#0084FF] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          title="Chat Facebook"
        >
          <Facebook size={28} />
        </a>

        {/* Zalo Button */}
        <a 
          href="https://zalo.me/0965414632" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#0068ff] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          title="Chat Zalo"
        >
          <MessageCircle size={28} />
        </a>
      </div>

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
            <a href="#pricing" className="hover:text-accent transition-colors">Bát Tự</a>
            <a href="#fengshui" className="hover:text-accent transition-colors">Phong Thủy</a>
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
            </div>
            
            <span className="inline-block px-4 py-1 border border-accent/30 rounded-full text-accent text-xs tracking-[0.3em] uppercase mb-6 font-semibold">
              Luận Bát Tự | Phong Thủy
            </span>
            <h1 className="serif text-5xl md:text-8xl font-light mb-8 leading-tight tracking-tight">
              Huyền Sĩ <br />
              <span className="italic text-accent">Huỳnh Đức Sơn</span>
            </h1>
            <p className="serif text-xl md:text-2xl italic text-ink/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              “Thấu hiểu mệnh lý – <br className="md:hidden" /> Kiến tạo tương lai.”
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
              <h3 className="serif text-2xl font-semibold mb-4">Nghiệm lý quá khứ</h3>
              <p className="text-ink/60 leading-relaxed">Mọi sự kiện đã qua đều để lại dấu vết. Tôi bắt đầu từ việc đối soát quá khứ để xác thực độ chính xác trước khi luận bàn tương lai.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center p-8 rounded-3xl hover:bg-paper transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                <Zap size={32} />
              </div>
              <h3 className="serif text-2xl font-semibold mb-4">Phân tích đa chiều</h3>
              <p className="text-ink/60 leading-relaxed">Vận mệnh không phải là sự ngẫu nhiên. Tôi giải mã các tương tác Ngũ hành một cách khoa học, logic và có hệ thống.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center p-8 rounded-3xl hover:bg-paper transition-colors">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent">
                <ShieldCheck size={32} />
              </div>
              <h3 className="serif text-2xl font-semibold mb-4">Giải pháp thực tiễn</h3>
              <p className="text-ink/60 leading-relaxed">Nói không với những lời phán mơ hồ. Mỗi buổi luận giải đều đi kèm với những chỉ dẫn cụ thể để tối ưu hóa cuộc sống.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The "Luận Giải Bát Tự & Tư Vấn Vận Hạn" Section */}
      <section id="pricing" className="py-32 bg-ink text-paper relative overflow-hidden border-y border-accent/10">
        <div className="absolute inset-0 z-0 opacity-20 col-span-3">
          <div className="absolute inset-0 bg-radial-gradient from-accent/15 to-transparent opacity-40" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <motion.div {...fadeIn} className="text-center mb-20">
            <span className="inline-block px-4 py-1 border border-accent/30 rounded-full text-accent text-xs tracking-[0.3em] uppercase mb-6 font-semibold bg-accent/10">
              Dịch Vụ Luận Giải
            </span>
            <h2 className="serif text-4xl md:text-6xl font-light mb-8">
              Luận Giải Bát Tự & <br className="sm:hidden" /> <span className="text-accent italic">Tư Vấn Vận Hạn</span>
            </h2>
            <p className="text-paper/70 max-w-3xl mx-auto leading-relaxed text-lg font-light">
              Hiểu rõ vận trình, nhận diện cơ hội và xây dựng hướng đi phù hợp cho công việc, tài chính, tình cảm và cuộc sống.
            </p>
          </motion.div>

          {/* Detailed Single Premium Package Presentation */}
          <div className="max-w-5xl mx-auto mb-24">
            <motion.div 
              {...fadeIn} 
              className="bg-gradient-to-br from-accent/15 via-white/[0.03] to-white/[0.01] backdrop-blur-md rounded-[2.5rem] border-2 border-accent shadow-2xl relative overflow-hidden transition-all duration-300 shadow-accent/5 hover:border-accent/40"
            >
              {/* Gold Ribbon / Flare background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-12 translate-x-12 pointer-events-none" />
              
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 p-8 md:p-12 lg:p-14">
                
                {/* Left Column: Key Identity, Pricing, Philosophy & Core guarantees */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      <span className="inline-block px-3 py-1 bg-accent/20 border border-accent/20 rounded-full text-accent-light text-[11px] font-semibold uppercase tracking-wider">
                        💎 Dịch Vụ Đồng Hành Lâu Dài
                      </span>
                      <span className="inline-block px-3 py-1 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-[11px] font-semibold uppercase tracking-wider">
                        ⚠️ Không làm "xem cho có"
                      </span>
                    </div>

                    <h3 className="serif text-4xl font-light text-white leading-tight mb-4">
                      Gói Đồng Hành <br />
                      <span className="text-accent italic font-normal text-2xl md:text-3xl">Chuyên Sâu 2 Năm</span>
                    </h3>

                    <p className="text-sm text-paper/70 leading-relaxed mb-6 font-light">
                      Giải pháp luận mệnh tối ưu nhất: bóc tách logic khoa học, kết hợp kiểm chứng quá khứ để xác định độ chuẩn xác của mệnh bàn, định hình tương lai vững chắc và nhận tư vấn trợ giúp liên tục trong suốt 2 năm.
                    </p>

                    {/* Price Tag with unique visual elegance */}
                    <div className="mb-6 p-6 rounded-2xl bg-white/[0.03] border border-white/5 inline-block w-full">
                      <span className="text-xs text-accent uppercase tracking-widest block mb-1">Mức Phí Niêm Yết</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-semibold text-white tracking-tight">2.000.000</span>
                        <span className="text-xl text-accent font-medium">VNĐ</span>
                      </div>
                      <span className="text-[11px] text-paper/40 mt-2 block">Giá trọn gói hỗ trợ trọn vẹn trong 24 tháng</span>
                    </div>

                    {/* Interactive 1-on-1 Banner */}
                    <div className="mb-6 flex items-center gap-3 bg-accent/10 border border-accent/20 rounded-xl p-4">
                      <div className="w-2 h-2 rounded-full bg-accent animate-ping" />
                      <span className="text-sm text-paper/90 font-medium">Bản chất: Luận giải tương tác trực tiếp 1 VS 1</span>
                    </div>

                    {/* Tứ Trụ Insight Quote */}
                    <div className="mb-6 bg-white/[0.02] border border-white/5 rounded-2xl p-5 text-xs text-paper/85 leading-relaxed italic border-l-4 border-accent shadow-sm">
                      💡 "Xem lá số Tứ Trụ cũng tương tự như việc giải một bài toán khó, càng nhiều dữ kiện được đưa ra thì dự đoán có độ chính xác càng cao!!!"
                    </div>

                    {/* True Philosophy (Tinh thần trải nghiệm thực tiễn & luận đúng là chưa đủ) */}
                    <div className="space-y-4 border-l-2 border-accent/30 pl-4 py-1 mb-8">
                      <p className="text-xs text-paper/85 font-medium italic">
                        "Luận đúng quá khứ là nhiệm vụ bắt buộc của chuyên gia cốt để xem lá số có khớp đời thực hay không (trải nghiệm thực tiễn). Nhưng luận đúng là chưa đủ - điều cốt lõi là đưa ra giải pháp cải vận từ kinh nghiệm thực tiễn để kiến tạo kết quả tương lai tốt nhất cho bạn."
                      </p>
                    </div>
                  </div>

                  {/* Core guarantees */}
                  <div className="space-y-3 bg-white/[0.02] border border-white/5 rounded-2xl p-5">
                    <h4 className="text-xs uppercase tracking-wider text-accent font-bold mb-2 flex items-center gap-2">
                      <HeartHandshake size={14} /> Đặc quyền đồng hành đặc biệt:
                    </h4>
                    <ul className="space-y-2 text-xs text-paper/85">
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span><strong>Hỗ trợ liên tục trong 2 năm:</strong> Hỏi đáp tư duy phát sinh trực tiếp bất kỳ lúc nào qua Zalo chat sau buổi luận giải gốc.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent font-bold mt-0.5">•</span>
                        <span><strong>Tặng kèm 2 lần luận quẻ Lục Hào:</strong> Kinh Dịch chuẩn xác hỗ trợ ra quyết định thời điểm/vấn đề đại sự kinh doanh, gia đạo.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Right Column: Detailed Checklist of Services & Deliverables */}
                <div className="lg:col-span-7 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-accent font-bold mb-6 flex items-center gap-2">
                      <BookOpen size={14} /> Chi Tiết Nội Dung Luận Giải & Đồng Hành Chuyên Sâu
                    </h4>
                    
                    <div className="space-y-6">
                      {/* Section 1: Bản mệnh & Vận trình */}
                      <div>
                        <h5 className="text-xs text-accent font-bold tracking-wider uppercase mb-3 text-paper/40">1. Bản mệnh & Vận trình dòng đời</h5>
                        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-paper/80">
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Đối chiếu vận hạn quá khứ</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Giải thích các sự kiện đã và đang diễn ra</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Luận giải chuyên sâu toàn bộ lá số</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Phân tích đại vận toàn bộ cuộc đời</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Chi tiết vận hạn 5 năm gần thế</span>
                          </li>
                        </ul>
                      </div>

                      {/* Section 2: Định hướng thực tiễn */}
                      <div>
                        <h5 className="text-xs text-accent font-bold tracking-wider uppercase mb-3 text-paper/40">2. Định hướng & Phát triển bản thân</h5>
                        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-paper/80">
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Định hướng phát triển tài vận</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Định hướng nghề nghiệp phù hợp</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Hỗ trợ lựa chọn ngành nghề phù hợp</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Hỗ trợ góc nhìn đầu tư kinh doanh</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Hỗ trợ định hướng khởi nghiệp</span>
                          </li>
                        </ul>
                      </div>

                      {/* Section 3: Cải mệnh & Phong thủy */}
                      <div>
                        <h5 className="text-xs text-accent font-bold tracking-wider uppercase mb-3 text-paper/40">3. Hóa giải, Cải vận & Phong thủy</h5>
                        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-paper/80">
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Tư vấn cải vận thực tế</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Phong thủy cá nhân bản mệnh</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Phong thủy nhà ở tăng vượng khí</span>
                          </li>
                        </ul>
                      </div>

                      {/* Section 4: Chế độ tương tác */}
                      <div>
                        <h5 className="text-xs text-accent font-bold tracking-wider uppercase mb-3 text-paper/40">4. Quy chuẩn đối hại, tương tác</h5>
                        <ul className="grid sm:grid-cols-2 gap-3 text-sm text-paper/80">
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Không giới hạn số lượng câu hỏi</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check size={16} className="text-accent mt-0.5 shrink-0" />
                            <span>Tương tác trực tiếp đến khi hiểu rõ vấn đề</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Register Direct Button with high visual callout */}
                  <div className="mt-10 pt-6 border-t border-white/5">
                    <a 
                      href="https://zalo.me/0965414632" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-full bg-accent hover:bg-accent/90 text-white py-4.5 rounded-full font-semibold transition-all text-center block shadow-lg shadow-accent/20 hover:scale-[1.01] transform text-base tracking-wide"
                    >
                      Đăng Ký Gói Đồng Hành Chuyên Sâu
                    </a>
                    <span className="text-[11px] text-paper/40 text-center block mt-2">
                      💡 Bấm để mở hộp thoại trò chuyện Zalo đặt lịch nhanh chóng
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* SECTION CAM KẾT - Tặng Quẻ Kinh Dịch & Service Commitments */}
          <div className="border-t border-white/5 pt-24">
            <motion.div {...fadeIn} className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs uppercase tracking-widest font-semibold mb-4">
                Sự An Tâm Tuyệt Đối
              </span>
              <h3 className="serif text-3xl md:text-5xl font-light text-white">
                Cam Kết <span className="text-accent italic">Dịch Vụ</span>
              </h3>
            </motion.div>

            {/* 4 Cards with icons */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              
              {/* Card 1 */}
              <motion.div 
                variants={fadeIn} 
                className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <RefreshCw size={24} />
                </div>
                <h4 className="font-bold text-lg text-white mb-3">Hoàn Tiền 100%</h4>
                <p className="text-sm text-paper/60 leading-relaxed font-light">
                  Nếu khách hàng không hài lòng trong 15 phút đầu tiên của buổi tư vấn, có thể yêu cầu dừng và hoàn tiền.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div 
                variants={fadeIn} 
                className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <HeartHandshake size={24} />
                </div>
                <h4 className="font-bold text-lg text-white mb-3">Đồng Hành 2 Năm</h4>
                <p className="text-sm text-paper/60 leading-relaxed font-light">
                  Hỗ trợ giải đáp các vấn đề phát sinh sau buổi luận giải đảm bảo bạn luôn có định hướng vững vàng.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div 
                variants={fadeIn} 
                className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <Sparkles size={24} />
                </div>
                <h4 className="font-bold text-lg text-white mb-3">Hỗ Trợ Kinh Dịch</h4>
                <p className="text-sm text-paper/60 leading-relaxed font-light">
                  Tặng 2 lần luận quẻ Kinh Dịch Lục Hào cho các quyết định, thời điểm quan trọng cần lựa chọn.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div 
                variants={fadeIn} 
                className="bg-white/[0.03] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
                  <TrendingUp size={24} />
                </div>
                <h4 className="font-bold text-lg text-white mb-3">Tư Vấn Thực Tế</h4>
                <p className="text-sm text-paper/60 leading-relaxed font-light">
                  Đưa ra góc nhìn khách quan, khoa học, thực tiễn có tính ứng dụng cao, nói không với mê tín rườm rà.
                </p>
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
              <h3 className="serif text-2xl font-semibold mb-6">Trải nghiệm thực tiễn</h3>
              <div className="space-y-4 text-ink/70 leading-relaxed">
                <p>Bên cạnh 8 năm nghiên cứu học thuật và luận giải lá số, tôi sở hữu <span className="font-bold text-accent">10 năm kinh nghiệm</span> trong lĩnh vực kinh doanh và quản trị nhân sự.</p>
                <p>Điều này giúp tôi thấu hiểu gốc rễ vấn đề và đưa ra giải pháp thực tế, đặc biệt trong các khía cạnh: <span className="italic">Tài chính, Vận hành doanh nghiệp và Định hướng sự nghiệp.</span></p>
              </div>
            </motion.div>

            <motion.div {...fadeIn} className="p-10 rounded-[3rem] bg-paper border border-accent/5">
              <h3 className="serif text-2xl font-semibold mb-6">Luận đúng là chưa đủ</h3>
              <div className="space-y-4 text-ink/70 leading-relaxed">
                <p>Biết mệnh mà không biết cách ứng biến thì việc xem cũng vô ích. Tôi không làm kiểu "nói cho hay" rồi để bạn tự xoay sở.</p>
                <p>Mục tiêu của tôi là giúp bạn <span className="font-bold text-accent">Hiểu – Chấp nhận – Hành động</span>. Tìm ra nội lực thực sự để làm chủ vận mệnh chính mình.</p>
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

      {/* Deep Feng Shui Services Section */}
      <section id="fengshui" className="py-32 bg-white border-y border-accent/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-20">
            <span className="text-accent text-xs tracking-[0.4em] uppercase font-bold mb-4 block">Tư vấn chuyên sâu</span>
            <h2 className="serif text-4xl md:text-6xl font-light mb-8">
              🔮 PROFILE DỊCH VỤ <br />
              <span className="text-accent italic">PHONG THỦY CHUYÊN SÂU</span>
            </h2>
            <p className="serif text-xl italic text-ink/70 max-w-3xl mx-auto leading-relaxed">
              “Bạn không chỉ cần đặt đúng hướng... <br className="hidden md:block" />
              Bạn cần kích hoạt đúng vận – đúng thời – đúng người.”
            </p>
          </motion.div>

          {/* Methodologies */}
          <div className="mb-24">
            <h3 className="serif text-3xl font-semibold mb-12 text-center flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-accent/30" />
              ⚙️ Pháp môn áp dụng
              <span className="w-12 h-px bg-accent/30" />
            </h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { 
                  title: "Loan Đầu", 
                  icon: <MapPin size={24} />, 
                  desc: "Phân tích hình thế đất, đường xá, dòng chảy và môi trường xung quanh để nhận diện cát hung ngoại cảnh." 
                },
                { 
                  title: "Huyền Không", 
                  icon: <Layers size={24} />, 
                  desc: "Xác định vận khí theo thời gian (Vận 9), bố trí các cung chức năng để kích tài và hóa giải sát khí." 
                },
                { 
                  title: "Mai Hoa Dịch Số", 
                  icon: <Zap size={24} />, 
                  desc: "Đoán nhanh cát hung theo thời điểm, ứng dụng trong các quyết định mua bán, thuê mướn hoặc đầu tư." 
                },
                { 
                  title: "Kỳ Môn Độn Giáp", 
                  icon: <Clock size={24} />, 
                  desc: "Chọn thời điểm vàng để khai trương, ký hợp đồng, mở cửa hàng và định vị phương vị cát lợi theo giờ." 
                },
                { 
                  title: "Bát Tự Tứ Trụ", 
                  icon: <Brain size={24} />, 
                  desc: "Cá nhân hóa phong thủy dựa trên Dụng Thần của mệnh chủ, không áp dụng công thức chung máy móc." 
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="p-6 rounded-3xl bg-paper border border-accent/5 hover:border-accent/20 transition-all group">
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="font-bold mb-2 text-ink">{item.title}</h4>
                  <p className="text-xs text-ink/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Services Provided */}
          <div className="grid lg:grid-cols-4 gap-8 mb-24">
            {[
              {
                title: "Nhà ở",
                icon: <Home size={32} />,
                items: ["Xem hướng & bố trí phòng", "Đặt bếp, giường, bàn làm việc", "Kích hoạt tài khố giữ tiền"]
              },
              {
                title: "Công ty - Văn phòng",
                icon: <Building2 size={32} />,
                items: ["Bố trí phòng lãnh đạo, kế toán", "Định vị bàn làm việc theo mệnh", "Tăng hiệu suất & ổn định nhân sự"]
              },
              {
                title: "Mặt bằng kinh doanh",
                icon: <ShoppingBag size={32} />,
                items: ["Chọn mặt bằng hợp mệnh/vận", "Bố trí quầy thu ngân, lối đi", "Kích hoạt dòng tiền & chốt đơn"]
              },
              {
                title: "Chọn ngày giờ",
                icon: <Calendar size={32} />,
                items: ["Động thổ, xây dựng", "Khai trương, nhập trạch", "Ký hợp đồng, đầu tư"]
              }
            ].map((service, i) => (
              <motion.div key={i} variants={fadeIn} className="bg-white p-8 rounded-[2.5rem] border border-accent/10 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-accent mb-6">{service.icon}</div>
                <h4 className="serif text-2xl font-semibold mb-6">{service.title}</h4>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-ink/70">
                      <Check size={14} className="text-accent mt-1 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Unique Values */}
          <motion.div {...fadeIn} className="bg-ink text-paper p-10 md:p-16 rounded-[3rem] mb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="serif text-3xl md:text-4xl font-light mb-6">🎯 Giá trị khác biệt</h3>
                <p className="text-paper/60 leading-relaxed mb-8">
                  Tôi không xem phong thủy đại trà hay áp dụng máy móc theo sách vở. Giải pháp được đưa ra là sự kết hợp nhuần nhuyễn giữa Mệnh – Vận – Thời – Không gian.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {["Không đại trà", "Không máy móc", "Cá nhân hóa", "Thực tế & dễ dùng"].map((val, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-paper/80">
                      <Star size={14} className="text-accent" /> {val}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/5 p-8 rounded-3xl border border-white/10 italic text-accent text-lg leading-relaxed">
                “Không chỉ là ngày đẹp chung, <br /> mà là ngày đẹp riêng cho chính bạn.”
              </div>
            </div>
          </motion.div>

          {/* Consultation Process */}
          <div>
            <h3 className="serif text-3xl font-semibold mb-16 text-center">📩 Hình thức tư vấn</h3>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connector Line */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-accent/20 -z-0" />
              
              {[
                {
                  step: "01",
                  title: "Tiếp nhận thông tin",
                  desc: "Gửi sơ đồ mặt bằng, hình ảnh thực tế và yêu cầu cụ thể để tôi đánh giá sơ bộ."
                },
                {
                  step: "02",
                  title: "Khảo sát thực tế",
                  desc: "Đo đạc khí trường, kiểm tra Loan Đầu và môi trường xung quanh tại công trình."
                },
                {
                  step: "03",
                  title: "Tư vấn & Triển khai",
                  desc: "Đưa ra phương án bố trí chi tiết (cửa, bếp, giường...) và chọn ngày giờ phù hợp."
                },
                {
                  step: "04",
                  title: "Hỗ trợ sau tư vấn",
                  desc: "Đồng hành điều chỉnh khi triển khai thực tế và giải đáp các vấn đề phát sinh."
                }
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-paper border-4 border-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-accent text-2xl font-bold serif italic">
                    {item.step}
                  </div>
                  <h4 className="font-bold mb-3 text-ink">{item.title}</h4>
                  <p className="text-sm text-ink/60 leading-relaxed px-4">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-sm text-ink/50 italic mb-8">
                * Cam kết: Chi phí thực tế không vượt quá 20% so với báo giá dự kiến ban đầu.
              </p>
              <a href="#workflow" className="bg-accent text-white px-10 py-4 rounded-full font-medium hover:scale-105 transition-transform shadow-xl shadow-accent/30 inline-flex items-center gap-2">
                Nhận tư vấn Phong Thủy <ArrowRight size={20} />
              </a>
            </div>
          </div>
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
                  Đào tạo thực chiến
                </div>
                
                <h3 className="serif text-3xl font-semibold mb-8">🔥 Khóa học Bát Tự Manh Phái <br /><span className="text-xl text-ink/50 font-normal">(Từ cơ bản đến chuyên sâu)</span></h3>
                
                <div className="grid sm:grid-cols-2 gap-8 mb-12">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-ink/70">
                      <Clock className="text-accent" size={20} />
                      <span>Thời lượng: <span className="font-bold text-ink">12 tháng đồng hành</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/70">
                      <Calendar className="text-accent" size={20} />
                      <span>Lịch học: <span className="font-bold text-ink">Tối Thứ 6 hàng tuần</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/70">
                      <BookOpen className="text-accent" size={20} />
                      <span>Chương trình: <span className="font-bold text-ink">50 chuyên đề</span> (Lý thuyết & Thực hành)</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-ink/70">
                      <Zap className="text-accent" size={20} />
                      <span>Hình thức: <span className="font-bold text-ink">Online (Zoom) & Offline tại TPHCM</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-ink/70">
                      <Star className="text-accent" size={20} />
                      <span>Mục tiêu: <span className="font-bold text-ink">Tự luận – Kiểm chứng – Hành nghề chuẩn mực</span></span>
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
              Làm huyền học mà không giữ đạo, ắt sẽ lạc lối. 
              Tôi quan niệm rằng kiến thức và thu nhập từ nghề cần được chia sẻ để tạo sự cân bằng.
            </p>
            <div className="bg-white/5 border-l-4 border-accent p-8 rounded-r-2xl">
              <p className="italic mb-4 text-paper">"5 phần giữ lại cho đời – 5 phần dành để tích phước."</p>
              <p className="text-sm text-paper/60">
                Bởi dù tinh thông đến đâu, huyền học vẫn tồn tại những biến số vượt ngoài tầm kiểm soát. 
                Tôi chọn cách gieo nhân lành để tạo trợ lực tốt nhất cho chính mình và cho những người tin tưởng tìm đến tôi.
              </p>
            </div>
            <p className="text-center pt-8 serif text-2xl text-accent">“Phước chủ – Lộc thầy”</p>
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
                <p className="text-xl serif italic mb-4">Tối đa 02 lá số mỗi ngày</p>
                <p className="text-ink/60 leading-relaxed">
                  Mỗi lá số đều đòi hỏi sự tập trung tuyệt đối để suy luận và nghiệm lý. 
                  Tôi giới hạn số lượng để đảm bảo mỗi khách hàng đều nhận được sự luận giải thấu đáo và trách nhiệm nhất.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeIn}>
              <h2 className="serif text-4xl font-light mb-8">Giá trị từ sự tích lũy</h2>
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="text-accent font-bold text-3xl serif">8+</div>
                  <div>
                    <h4 className="font-semibold mb-1">Năm nghiên cứu & luận giải</h4>
                    <p className="text-sm text-ink/60">Học thuật bài bản về Bát Tự Manh Phái, Phong Thủy thực chiến và nghiệm lý hàng trăm lá số.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-accent font-bold text-3xl serif">10+</div>
                  <div>
                    <h4 className="font-semibold mb-1">Năm kinh nghiệm thực tế</h4>
                    <p className="text-sm text-ink/60">Trong kinh doanh, quản trị nhân sự và tư vấn ứng dụng cải vận thực tiễn.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="text-accent font-bold text-3xl serif">∞</div>
                  <div>
                    <h4 className="font-semibold mb-1">Đồng hành dài hạn</h4>
                    <p className="text-sm text-ink/60">Không chỉ dừng lại ở một buổi xem, mà là sự hỗ trợ xuyên suốt hành trình của bạn.</p>
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
              <h2 className="serif text-4xl font-light mb-10 italic text-accent">Nguyên tắc làm việc</h2>
              <div className="space-y-6">
                {[
                  "Quý anh chị vui lòng tìm hiểu kỹ về phong cách luận giải của tôi trước khi đặt lịch.",
                  "Hình thức luận giải: Trực tiếp (tại TPHCM) hoặc Online qua Zoom. Vui lòng hoàn tất chuyển khoản để xác nhận lịch hẹn.",
                  "Để đảm bảo chất lượng, vui lòng đặt lịch trước ít nhất 02 ngày làm việc.",
                  "Vui lòng kết nối qua <a href='https://zalo.me/0965414632' target='_blank' rel='noopener noreferrer' class='text-accent font-bold underline underline-offset-4'>Zalo</a> hoặc <a href='https://www.facebook.com/ucson.52637' target='_blank' rel='noopener noreferrer' class='text-accent font-bold underline underline-offset-4'>Facebook</a> để gửi thông tin và chốt thời gian luận giải."
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

                <div className="bg-white p-4 rounded-2xl border border-gray-100 inline-block mb-8">
                  <img 
                    src="https://img.vietqr.io/image/VIB-039070393-qr_only.png?accountName=HUYNH%20TRONG%20SON" 
                    alt="QR Thanh toán VIB" 
                    className="w-64 h-64 md:w-72 md:h-72"
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
            <h2 className="serif text-3xl md:text-4xl font-light mb-8">Cơ sở để bạn đặt niềm tin?</h2>
            <p className="text-ink/60 mb-12 leading-relaxed italic">
              Thẳng thắn mà nói: Không có sự bảo chứng nào tuyệt đối hơn trải nghiệm của chính bạn. <br />
              Hãy dành thời gian tìm hiểu cách tôi chia sẻ kiến thức và cảm nhận sự tương đồng trong tư duy. 
              Mọi sự kết nối đều bắt đầu từ chữ "Duyên".
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
              Nếu bạn đang tìm kiếm một người đồng hành <br />
              <span className="text-accent italic">để thấu hiểu và làm chủ vận mệnh...</span>
            </h2>
            <p className="text-xl serif italic text-ink/70 mb-12">Tôi luôn sẵn sàng lắng nghe.</p>
            
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
