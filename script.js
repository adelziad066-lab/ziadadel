// تأثير الكتابة (Typewriter Effect) للوصف البرمجي
const bioText = "مطور ألعاب ومبرمج ويب";
const bioParagraph = document.getElementById('typewriter');
let bioIndex = 0;

function typeBio() {
    if (bioIndex < bioText.length) {
        bioParagraph.innerHTML += bioText.charAt(bioIndex);
        bioIndex++;
        setTimeout(typeBio, 100); // سرعة الكتابة بالمللي ثانية
    }
}

// بدء الكتابة عند تحميل الصفحة
window.onload = function() {
    typeBio();
};

// وظيفة نسخ اسم الديسكورد تفاعلياً
function copyDiscord() {
    const discordName = "ziadadel2";
    navigator.clipboard.writeText(discordName).then(function() {
        alert("تم نسخ اسم الديسكورد (ziadadel2) بنجاح!");
    }, function(err) {
        alert("حدث خطأ أثناء النسخ. يرجى المحاولة مرة أخرى.");
    });
}
function changeVideo(videoUrl) {
    const video = document.getElementById('bg-video');
    video.src = videoUrl;
    video.play();
}

function toggleVideo() {
    const video = document.getElementById('bg-video');
    const btn = document.getElementById('playPauseBtn');
    if (video.paused) {
        video.play();
        btn.innerHTML = "إيقاف ⏸️";
    } else {
        video.pause();
        btn.innerHTML = "تشغيل ▶️";
    }
}