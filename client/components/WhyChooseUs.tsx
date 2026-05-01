diff --git a/client/components/WhyChooseUs.tsx b/client/components/WhyChooseUs.tsx
index 263db97c537fc34c00ad97fa7196223170262abd..050ee46f6aaa78199a1a2d41b8704d822d5808f9 100644
--- a/client/components/WhyChooseUs.tsx
+++ b/client/components/WhyChooseUs.tsx
@@ -1,91 +1,114 @@
-const features = [
-  [
-    { title: "Global presence", desc: "20+ locations around the world (Dubai, London, Paris, Miami, etc.)" },
-    { title: "Large financial transactions", desc: "exchange from $10,000 with no upper limit" },
-    { title: "Maximum speed", desc: "transaction processing up to 5 minutes, withdrawal in 10-15 minutes" },
-    { title: "Low fees", desc: "from 0.1% on all transactions" },
-    { title: "Confidentiality", desc: "guaranteed anonymity and protection of customer data" },
-  ],
-  [
-    { title: "Safety", desc: "high-level asset and transaction protection" },
-    { title: "High liquidity", desc: "exchange of more than 50 cryptocurrencies with large volumes" },
-    { title: "Premium service", desc: "24/7 support in 10 languages" },
-    { title: "Flexible conditions", desc: "Individual offers for VIP clients" },
-    { title: "Reliability", desc: "98% positive feedback from users" },
-  ],
-];
+import { useLang } from "@/context/LangContext";
+
+type FeatureItem = { title: string; desc: string };
+
+type WhyChooseUsTranslations = {
+  heading: string;
+  subheading: string;
+  features: [FeatureItem[], FeatureItem[]];
+};
+
+const translations: Record<"EN" | "RU", WhyChooseUsTranslations> = {
+  EN: {
+    heading: "Why choose us",
+    subheading:
+      "By choosing us, you get a reliable partner in the world of cryptocurrencies. Join us and start exchanging cryptocurrency with confidence",
+    features: [
+      [
+        { title: "Global presence", desc: "20+ locations around the world (Dubai, London, Paris, Miami, etc.)" },
+        { title: "Large financial transactions", desc: "Exchange from $10,000 with no upper limit" },
+        { title: "Maximum speed", desc: "Transaction processing up to 5 minutes, withdrawal in 10-15 minutes" },
+        { title: "Low fees", desc: "From 0.1% on all transactions" },
+        { title: "Confidentiality", desc: "Guaranteed anonymity and protection of customer data" },
+      ],
+      [
+        { title: "Safety", desc: "High-level asset and transaction protection" },
+        { title: "High liquidity", desc: "Exchange of more than 50 cryptocurrencies with large volumes" },
+        { title: "Premium service", desc: "24/7 support in 10 languages" },
+        { title: "Flexible conditions", desc: "Individual offers for VIP clients" },
+        { title: "Reliability", desc: "98% positive feedback from users" },
+      ],
+    ],
+  },
+  RU: {
+    heading: "Почему выбирают нас",
+    subheading:
+      "Выбирая нас, вы получаете надежного партнера в мире криптовалют. Присоединяйтесь и обменивайте криптовалюту с уверенностью",
+    features: [
+      [
+        { title: "Глобальное присутствие", desc: "20+ локаций по всему миру (Дубай, Лондон, Париж, Майами и др.)" },
+        { title: "Крупные финансовые операции", desc: "Обмен от $10,000 без верхнего лимита" },
+        { title: "Максимальная скорость", desc: "Обработка сделки до 5 минут, вывод 10-15 минут" },
+        { title: "Низкие комиссии", desc: "От 0.1% на все операции" },
+        { title: "Конфиденциальность", desc: "Гарантированная анонимность и защита данных клиентов" },
+      ],
+      [
+        { title: "Безопасность", desc: "Высокий уровень защиты активов и транзакций" },
+        { title: "Высокая ликвидность", desc: "Обмен более 50 криптовалют с крупными объемами" },
+        { title: "Премиальный сервис", desc: "Поддержка 24/7 на 10 языках" },
+        { title: "Гибкие условия", desc: "Индивидуальные предложения для VIP-клиентов" },
+        { title: "Надежность", desc: "98% положительных отзывов пользователей" },
+      ],
+    ],
+  },
+};
 
 export default function WhyChooseUs() {
+  const { lang } = useLang();
+  const t = translations[lang];
+
   return (
     <section className="w-full py-16 md:py-24 relative overflow-hidden">
-      {/* Bottom-right green glow */}
       <div
         className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full pointer-events-none"
         style={{
           background: "radial-gradient(circle, rgba(20,160,73,0.35) 0%, transparent 70%)",
           filter: "blur(120px)",
           transform: "translate(30%, 30%)",
         }}
       />
 
       <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
-        {/* Header */}
         <div className="text-center mb-12 md:mb-16">
           <h2 className="font-gilroy font-semibold text-white text-3xl md:text-5xl lg:text-[56px] leading-tight mb-4">
-            Why choose us
+            {t.heading}
           </h2>
           <p className="font-montserrat text-[#E5E5E5] text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
-            By choosing us, you get a reliable partner in the world of cryptocurrencies. Join us and start
-            exchanging cryptocurrency with confidence
+            {t.subheading}
           </p>
         </div>
 
-        {/* Features Grid */}
-        <FeaturesGrid />
+        <FeaturesGrid features={t.features} />
       </div>
     </section>
   );
 }
 
-function FeaturesGrid() {
+function FeaturesGrid({ features }: { features: [FeatureItem[], FeatureItem[]] }) {
   return (
     <div className="relative border-r" style={{ borderColor: "rgba(20,160,73,0.3)" }}>
-      {/* Row 1 */}
-      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l"
-        style={{ borderColor: "rgba(20,160,73,0.3)" }}>
+      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l" style={{ borderColor: "rgba(20,160,73,0.3)" }}>
         {features[0].map((f, i) => (
           <FeatureCell key={i} title={f.title} desc={f.desc} />
         ))}
       </div>
 
-      {/* Gradient divider */}
-      <div className="w-full h-px"
-        style={{ background: "linear-gradient(135deg, #14A049 0%, #23372A 44.76%, #536A5C 100%)" }}
-      />
+      <div className="w-full h-px" style={{ background: "linear-gradient(135deg, #14A049 0%, #23372A 44.76%, #536A5C 100%)" }} />
 
-      {/* Row 2 */}
-      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-l"
-        style={{ borderColor: "rgba(20,160,73,0.3)" }}>
+      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-b border-l" style={{ borderColor: "rgba(20,160,73,0.3)" }}>
         {features[1].map((f, i) => (
           <FeatureCell key={i} title={f.title} desc={f.desc} />
         ))}
       </div>
     </div>
   );
 }
 
 function FeatureCell({ title, desc }: { title: string; desc: string }) {
   return (
-    <div
-      className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-10 border-r"
-      style={{ borderColor: "rgba(20,160,73,0.3)" }}
-    >
-      <h3 className="font-gilroy font-bold text-white text-base md:text-lg mb-2 leading-snug">
-        {title}
-      </h3>
-      <p className="font-montserrat text-[#E5E5E5] text-xs md:text-sm leading-relaxed">
-        {desc}
-      </p>
+    <div className="flex flex-col items-center justify-center text-center px-4 py-8 md:py-10 border-r" style={{ borderColor: "rgba(20,160,73,0.3)" }}>
+      <h3 className="font-gilroy font-bold text-white text-base md:text-lg mb-2 leading-snug">{title}</h3>
+      <p className="font-montserrat text-[#E5E5E5] text-xs md:text-sm leading-relaxed">{desc}</p>
     </div>
   );
 }
