document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const topBar = document.querySelector('.top-bar');
    
    function updateTopBar() {
        if (window.scrollY > 50) {
            topBar.classList.add('scrolled');
        } else {
            topBar.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', updateTopBar);
    updateTopBar(); // Apply on init

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Carousel Implementation
    const track = document.querySelector('.carousel-track') || document.querySelector('.carousel');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.next-btn');
        const prevButton = document.querySelector('.prev-btn');
        
        let currentIndex = 0;

        const updateCarousel = (index) => {
            slides.forEach(slide => slide.classList.remove('current-slide'));
            if(slides[index]) slides[index].classList.add('current-slide');
            
            // In RTL, translating positive percentages moves items to the right relative to their normal flow
            const slideWidth = slides[0].getBoundingClientRect().width;
            track.style.transform = `translateX(${index * 100}%)`;
        };

        if (nextButton) {
            nextButton.addEventListener('click', () => {
                if (currentIndex < slides.length - 1) {
                    currentIndex++;
                    updateCarousel(currentIndex);
                } else {
                    currentIndex = 0;
                    updateCarousel(currentIndex);
                }
            });
        }

        if (prevButton) {
            prevButton.addEventListener('click', () => {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel(currentIndex);
                } else {
                    currentIndex = slides.length - 1;
                    updateCarousel(currentIndex);
                }
            });
        }
    }

    // SOS Slider Logic
    const sliderInput = document.getElementById('sos-slider-input');
    const sliderFill = document.querySelector('.slider-fill');
    
    if (sliderInput && sliderFill) {
        sliderInput.addEventListener('input', (e) => {
            const val = e.target.value;
            sliderFill.style.width = val + '%';
            
            if (val > 90) {
                sliderInput.disabled = true;
                e.target.parentElement.innerHTML = `<div style="font-weight:bold; color:var(--danger); padding:16px;">تم تفعيل بروتوكول الطوارئ</div>`;
                // Trigger SOS sequence
            }
        });
    }

    // ─── LANGUAGE SWITCH LOGIC ───
    const translations = {
        ar: {
            nav_download: "تحميل",
            hero_title: "ملاذك الآمن للثبات الانفعالي",
            hero_subtitle: "استفد من قوة الذكاء الاصطناعي لرصد نوبات الهلع وإدارتها فوراً. نظام متكامل للثبات الانفعالي بخصوصية تامة.",
            features_title: "لماذا ثبات؟",
            features_subtitle: "تقنيات تم اختبارها لتعيد لك سيطرتك.",
            f1_title: "تتبع ذكي للمزاج",
            f1_desc: "تحليل مستمر لنبرة الصوت والمؤشرات الحيوية لتوقع نوبات القلق قبل حدوثها.",
            f2_title: "بروتوكولات نوم سائلة",
            f2_desc: "مولد ضوضاء بيضاء يتكيف مع تقلبات نومك بشكل لحظي.",
            f3_title: "تدخل طارئ (SOS)",
            f3_desc: "بضغطة واحدة، يتم تفعيل بروتوكول التوجيه التنفسي لإيقاف نوبات الهلع.",
            f4_title: "مكتبة التعافي",
            f4_desc: "أكثر من 100 جلسة تفاعلية للتعامل مع الإرهاق الذهني.",
            carousel_title: "أدوات التعافي السريع",
            carousel_subtitle: "تقنيات بصرية وصوتية لتهدئة نظامك العصبي في ثوانٍ.",
            c1_title: "تنفس رقمي",
            c1_desc: "محاكاة بصرية لموجات التنفس لتهدئة معدل ضربات القلب فوراً عبر واجهة مهدئة للعين.",
            c2_title: "كبسولة التفريغ",
            c2_desc: "تحدث بكل ما يزعجك وشاهد صوتك يتبخر ويختفي من النظام تماماً.",
            c3_title: "إيقاع ثنائي (Binaural)",
            c3_desc: "ترددات صوتية مدروسة لموازنة فصي الدماغ واستعادة التركيز المفقود.",
            sleep_title: "بروتوكول ما قبل النوم",
            sleep_subtitle: "انسحب من يومك بهدوء تام.",
            sleep_desc: "يهيئ التطبيق إضاءة الشاشة والترددات الصوتية لتناسب مرحلة الاسترخاء العميق.",
            sleep_alert_title: "تقنية تعتيم ذكية",
            sleep_alert_desc: "الشاشة تتحول للألوان الدافئة تدريجياً قبل موعد نومك بساعة.",
            test_title: "ماذا يقول مستخدمونا؟",
            test_subtitle: "تجارب حقيقية لأشخاص استعادوا توازنهم الانفعالي",
            t1_name: "أحمد ي.",
            t1_desc: '"التطبيق أنقذني حرفياً خلال نوبة هلع في العمل. خاصية كبسولة التفريغ والتنفس الرقمي أعادتني للهدوء في غضون دقائق معدودة."',
            t2_name: "سارة م.",
            t2_desc: '"كمية الخصوصية والأمان التي أشعر بها لا تقدر بثمن. أحب كيف يتكيف بروتوكول النوم مع حالتي المزاجية يومياً ويساعدني على الاسترخاء."',
            t3_name: "خالد ع.",
            t3_desc: '"التصميم الزجاجي السائل ليس فقط جميلاً، بل مريح للعين أثناء نوبات التوتر. زر الطوارئ SOS عبقري ويعمل بسلاسة مطلقة."',
            sos_title: "صمام الأمان دائماً معك",
            sos_subtitle: "طوارئ SOS",
            sos_desc: "في حالات الذروة، إزاحة واحدة كفيلة بإيقاف كل شيء وتفعيل بروتوكول التهدئة القسري.",
            slide_sos: "اسحب للتفعيل",
            footer_rights: "جميع الحقوق محفوظة. ثبات © 2026",
            lang_btn: "EN",
            nav_sos: "طوارئ",
            h_kicker: "الذكاء الحي",
            h_cta: "ابدأ رحلة التعافي",
            st_1: "مستخدم",
            st_2: "خصوصية",
            st_3: "أسرع",
            comp_title: "التكيف العصبي الذكي",
            comp_sub: "أدوات استشعار متقدمة بأسلوب الزجاج السائل للتفاعل اللحظي",
            c1_label: "تفاعل صوتي",
            c1_tt: "تحدث بثبات",
            c1_bb: "تحويل المشاعر السلبية عبر موجات التحدث الموجهة. تنفس، تحدث، ودع التوتر يتبخر تماماً كنظام حي للتخفيف الفوري.",
            c2_label: "مراقبة مستمرة",
            c2_tt: "حارس الحكمة",
            c2_bb: "يقوم بتحليل نبرة صوتك والنصوص المكتوبة أثناء الانفعال عبر قراءة فورية للنبض العصبي، ليمنعك من اتخاذ قرارات متسرعة.",
            c3_label: "مشتتات منعدمة",
            c3_tt: "درع التركيز",
            c3_bb: "تفعيل حائط صد فوري للعالم الخارجي. يعمل النظام على كتم الإشعارات وتحفيز الهدوء العميق لاستعادة التحكم بحياتك.",
            c4_label: "تخصيص ذاتي",
            c4_tt: "وكيل التكيف",
            c4_bb: "محرك ذكاء اصطناعي يتعلم من أنماط القلق الخاصة بك ليخصص بروتوكولات مخصصة للنوم والصحو تتكيف معك حصرياً.",
            sp_tt: "بروتوكولات النوم والصحو",
            sp_sub: "تصميم حي ينتقل من الأخضر الداكن إلى الأزرق الليلي ثم الفجر السائل",
            sp_d_t: "دورة تجديد كاملة",
            sp_d_b: "قم بالتبديل بين وضع 'الماء الساكن' لحجب الضوء الأزرق تماماً، وبين 'الفجر السائل' لإيقاظك تدريجياً عبر الإضاءة الذكية والموجات الصوتية.",
            sos_tt2: "بروتوكول الطوارئ (SOS)",
            sos_dd2: "تفاعل ثنائي الحركة (EMDR) لإيقاف نوبات الهلع فوراً. الشاشة تومض ببطء، وتوجيهات صوتية صارمة تعود بك لللحظة.",
            ui_tt: "التجربة الحسية الدقيقة",
            carousel_subtitle: "تفاعل بصري وصوتي سلس لاستعادة التوازن فوراً",
            t1_av: "أ",
            t2_av: "س",
            t3_av: "خ",
            sos_swipe: "اسحب للطوارئ",
            ft_cpr: "© 2026 ثبات. صُنع بنظام Liquid Glass.",
            ui_sub: "اهتمام استثنائي بتفاصيل تدرج الألوان والإحصائيات",
            badge_soon: "قريباً",
            ft_enc: "تشفير تام (End-to-End Encryption) معالجة محلية 100%",
            ft_p: "سياسة الخصوصية",
            ft_c: "تواصل معنا",
            be_med: "تأمل عميق",
            be_block: "حجب الضوء الأزرق",
            be_wake: "استيقاظ متدرج",
            be_stat: "تحليل دورة النوم",
            tag_smart: "تحليل ذكي",
            tag_dynamic: "ألوان ديناميكية",
            ui_inhale: "شهيق",
            tag_sync: "مزامنة حيوية",
            tag_vapor: "تبخير الصوت"
        },
        en: {
            nav_download: "Download",
            hero_title: "Your Safe Haven for Emotional Stability",
            hero_subtitle: "Leverage AI to instantly detect and manage panic attacks. An integrated emotional stability system with total privacy.",
            features_title: "Why Thabat?",
            features_subtitle: "Tested techniques to give you back control.",
            f1_title: "Smart Mood Tracking",
            f1_desc: "Continuous analysis of voice tone and vitals to predict anxiety attacks before they happen.",
            f2_title: "Liquid Sleep Protocols",
            f2_desc: "White noise generator that adapts to your sleep fluctuations in real-time.",
            f3_title: "Emergency SOS",
            f3_desc: "With one click, activate the guided breathing protocol to stop panic attacks.",
            f4_title: "Recovery Library",
            f4_desc: "Over 100 interactive sessions to deal with mental exhaustion.",
            carousel_title: "Quick Recovery Tools",
            carousel_subtitle: "Visual and audio techniques to calm your nervous system in seconds.",
            c1_title: "Digital Breathing",
            c1_desc: "Visual simulation of breathing waves to immediately calm your heart rate through a soothing interface.",
            c2_title: "Venting Capsule",
            c2_desc: "Speak out your frustrations and watch your voice vaporize and disappear from the system completely.",
            c3_title: "Binaural Beats",
            c3_desc: "Scientifically calibrated frequencies to balance brain hemispheres and restore lost focus.",
            sleep_title: "Pre-Sleep Protocol",
            sleep_subtitle: "Withdraw from your day in complete tranquility.",
            sleep_desc: "The app adjusts screen lighting and audio frequencies to match the deep relaxation stage.",
            sleep_alert_title: "Smart Dimming Tech",
            sleep_alert_desc: "The screen gradually turns to warm colors an hour before your bedtime.",
            test_title: "What Our Users Say?",
            test_subtitle: "Real experiences from people who regained their emotional balance",
            t1_name: "Ahmed Y.",
            t1_desc: '"The app literally saved me during a panic attack at work. The venting capsule and digital breathing properties brought me back to calm in minutes."',
            t2_name: "Sarah M.",
            t2_desc: '"The amount of privacy and security I feel is priceless. I love how the sleep protocol adapts to my daily moods and helps me relax."',
            t3_name: "Khalid A.",
            t3_desc: '"The liquid glass design is not only beautiful, but exceptionally soothing to the eyes during stress. The SOS button is pure genius and works smoothly."',
            sos_title: "Your Safety Valve, Always With You",
            sos_subtitle: "SOS Emergency",
            sos_desc: "At peak moments, one swipe is enough to stop everything and activate the forced calming protocol.",
            slide_sos: "Swipe to Activate",
            footer_rights: "All rights reserved. Thabat © 2026",
            lang_btn: "AR",
            nav_sos: "SOS",
            h_kicker: "Live Intelligence",
            h_cta: "Start Recovery",
            st_1: "Users",
            st_2: "Privacy",
            st_3: "Faster",
            comp_title: "Smart Neural Adaptation",
            comp_sub: "Advanced sensing tools with Glassmorphism for real-time interaction",
            c1_label: "Voice Interaction",
            c1_tt: "Speak Steadily",
            c1_bb: "Transform negative emotions through guided speech waves. Breathe, speak, and let stress completely vaporize.",
            c2_label: "Continuous Monitoring",
            c2_tt: "Wisdom Guardian",
            c2_bb: "Analyzes your voice tone and written texts during agitation via instant nerve pulse reading to prevent rushed decisions.",
            c3_label: "Zero Distractions",
            c3_tt: "Focus Shield",
            c3_bb: "Activate an instant firewall against the outside world. The system mutes notifications and stimulates deep calm.",
            c4_label: "Self Customization",
            c4_tt: "Adaptation Agent",
            c4_bb: "An AI engine that learns from your anxiety patterns to tailor customized sleep and wake protocols exclusively for you.",
            sp_tt: "Sleep & Wake Protocols",
            sp_sub: "Live design shifting from dark green to night blue then liquid dawn",
            sp_d_t: "Complete Renewal Cycle",
            sp_d_b: "Switch between 'Still Water' mode to block blue light entirely, and 'Liquid Dawn' to wake up gradually with smart lighting.",
            sos_tt2: "Emergency Protocol (SOS)",
            sos_dd2: "Bilateral stimulation (EMDR) to stop panic attacks instantly. The screen flashes slowly with strict voice guidance.",
            ui_tt: "Precise Sensory Experience",
            carousel_subtitle: "Seamless visual and audio interaction to restore balance instantly",
            t1_av: "A",
            t2_av: "S",
            t3_av: "K",
            sos_swipe: "SWIPE FOR SOS",
            ft_cpr: "© 2026 Thabat. Built with Liquid Glass.",
            ui_sub: "Exceptional attention to color gradients and statistics details",
            badge_soon: "Soon",
            ft_enc: "End-to-End Encryption, 100% Local Processing",
            ft_p: "Privacy Policy",
            ft_c: "Contact Us",
            be_med: "Deep Meditation",
            be_block: "Blue Light Blocking",
            be_wake: "Gradual Wakeup",
            be_stat: "Sleep Cycle Analysis",
            tag_smart: "Smart Analysis",
            tag_dynamic: "Dynamic Colors",
            ui_inhale: "Inhale",
            tag_sync: "Real-time Sync",
            tag_vapor: "Voice Vaporization"
        }
    };

    let currentLang = 'en';
    const langBtn = document.getElementById('lang-toggle');

    function updateLanguage() {
        document.documentElement.lang = currentLang;
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        
        // Update texts
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                const icon = el.querySelector('i');
                if (icon) {
                    el.innerHTML = icon.outerHTML + " " + translations[currentLang][key];
                } else {
                    el.textContent = translations[currentLang][key];
                }
            }
        });
        
        if (langBtn) {
            langBtn.textContent = currentLang === 'ar' ? 'EN' : 'AR';
        }
    }

    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'ar' ? 'en' : 'ar';
            updateLanguage();
        });
    }

    // Force language update on init
    updateLanguage();

    // Simple Drag logic for SOS Button
    const sosThumb = document.querySelector('.sos-thumb');
    const sosTrack = document.querySelector('.sos-track');
    
    if (sosThumb && sosTrack) {
        let isDragging = false;
        let startX;
        
        sosThumb.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX;
            sosThumb.style.transition = 'none';
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const trackRect = sosTrack.getBoundingClientRect();
            const maxWalk = trackRect.width - sosThumb.offsetWidth - 10; // 5px padding on each side
            
            // In RTL, dragging left means moving towards 'activation'
            let walk = startX - e.clientX;
            
            if (walk < 0) walk = 0;
            if (walk > maxWalk) {
                walk = maxWalk;
                // Activate SOS visually
                sosTrack.style.background = 'rgba(244, 63, 94, 0.5)';
                sosThumb.style.background = '#fff';
                sosThumb.style.color = '#f43f5e';
                setTimeout(() => {
                    alert("Initiating SOS protocol...");
                    resetSOS();
                }, 500);
                isDragging = false;
            }
            
            sosThumb.style.transform = `translateX(-${walk}px)`;
        });

        const resetSOS = () => {
            sosThumb.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1), background 0.3s';
            sosThumb.style.transform = `translateX(0px)`;
            sosTrack.style.background = 'rgba(244, 63, 94, 0.1)';
            sosThumb.style.background = 'var(--pink-glow)';
            sosThumb.style.color = 'white';
        };

        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            resetSOS();
        });
        
        // Touch support for SOS slider
        sosThumb.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].clientX;
            sosThumb.style.transition = 'none';
        });
        
        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            const trackRect = sosTrack.getBoundingClientRect();
            const maxWalk = trackRect.width - sosThumb.offsetWidth - 10;
            
            let walk = startX - e.touches[0].clientX;
            
            if (walk < 0) walk = 0;
            if (walk > maxWalk) {
                walk = maxWalk;
                sosTrack.style.background = 'rgba(244, 63, 94, 0.5)';
                isDragging = false;
                setTimeout(() => {
                    alert("Initiating SOS protocol...");
                    resetSOS();
                }, 500);
            }
            
            sosThumb.style.transform = `translateX(-${walk}px)`;
        });
        
        document.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            resetSOS();
        });
    }

    // --- Phone Screen Animation ---
    const phoneScreen = document.querySelector('.phone-screen');
    if (phoneScreen) {
        const animationFrames = [
            "assets/upscaled-2x-Capture d’écran 2026-04-05 à 12.39.57.png",
            "assets/upscaled-2x-Capture d’écran 2026-04-05 à 12.40.10.png",
            "assets/upscaled-2x-Capture d’écran 2026-04-05 à 12.40.24.png",
            "assets/upscaled-2x-Capture d’écran 2026-04-05 à 12.40.39.png",
            "assets/upscaled-2x-Capture d’écran 2026-04-05 à 12.41.00.png",
            "assets/upscaled-2x-Capture d’écran 2026-04-05 à 12.41.21.png",
            "assets/upscaled-2x-Capture d’écran 2026-04-05 à 12.42.02.png",
            "assets/upscaled-2x-Capture d’écran 2026-04-05 à 12.42.21.png"
        ];

        // Preload images for smooth animation
        animationFrames.forEach(src => {
            const img = new Image();
            img.src = src;
        });

        let currentFrame = 0;
        setInterval(() => {
            // Create a temporary overlay with the current image for smooth crossfade
            const fadeImg = phoneScreen.cloneNode();
            fadeImg.style.position = 'absolute';
            fadeImg.style.top = '0';
            fadeImg.style.left = '0';
            fadeImg.style.width = '100%';
            fadeImg.style.height = '100%';
            fadeImg.style.zIndex = '10';
            fadeImg.style.transition = 'opacity 1s ease-in-out';
            
            phoneScreen.parentElement.style.position = 'relative';
            phoneScreen.parentElement.appendChild(fadeImg);

            // Update original image to next frame
            currentFrame = (currentFrame + 1) % animationFrames.length;
            phoneScreen.src = animationFrames[currentFrame];

            // Trigger reflow
            void fadeImg.offsetWidth;

            // Fade out the old image
            fadeImg.style.opacity = '0';

            // Remove temporary image after transition finishes
            setTimeout(() => {
                fadeImg.remove();
            }, 1000); // matches transition time
            
        }, 5000); // Frame duration 5s
    }

});
